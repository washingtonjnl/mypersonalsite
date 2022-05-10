import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Main,
  Header,
  Contact,
  InvoicePresentation,
  ProjectInfo,
  Separator,
  Services,
  ServicesTable,
  Details,
  Obs,
  Pricing,
  Footer,
  WarningPage,
  Logo
} from '../../styles/pages/Invoices';

type InvoiceData = {
  _id: string;
  project: string;
  description: string;
  recipient: string;
  startDate: string;
  dueDate: string;
  note?: string;

  services: Array<{
    _id: string;
    description: string;
    price: number;
  }>;

  price: number;
  priceAdjusts: number;

  paymentInfo: {
    allowedMethods: Array<'full' | 'half' | 'installment'>;
    interestFree: boolean;
  };
  createdAt: string;
  updatedAt: string;
};

type Params = {
  invoice: InvoiceData | null;
};

export default function Invoice({ invoice }: Params) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <WarningPage>
        <h1>Carregando Seu Orçamento</h1>
        <p>Por favor, aguarde alguns instantes...</p>
      </WarningPage>
    );
  }

  if (!invoice) {
    return (
      <WarningPage>
        <h1>Orçamento não encontrado</h1>
        <p>Por favor, entre em contato comigo. Vou resolver isso pra você 😉</p>
      </WarningPage>
    );
  }

  function parseDate(date: string) {
    return format(parseISO(date), 'dd/MM/yyyy');
  }

  function parsePrice(price: number) {
    const parsedPrice = price.toLocaleString(['pt'], {
      style: 'currency',
      currency: 'BRL'
    });
    return parsedPrice;
  }

  // function downloadInvoice() {}

  return (
    <>
      <Head>
        <title>Orçamento: {invoice.project}</title>
        <meta
          name="description"
          content={`Veja seu orçamento para ${invoice.description}`}
        />
      </Head>
      <Container>
        <Main>
          <Header>
            <Contact>
              <h1>Washington Junior</h1>
              <p>
                <span>
                  <FiMail /> washingtonjrt@gmail.com
                </span>
                <span>
                  <FiPhoneCall /> (21) 99010 - 6262
                </span>
                <span>
                  <FiMapPin /> Rio de Janeiro, RJ - Brasil
                </span>
              </p>
            </Contact>
            <Logo src="/signature.svg" alt="Assinatura do Washington Junior" />
          </Header>

          <InvoicePresentation>
            <h1>
              Orçamento para {invoice.project}
              {/* <button onClick={downloadInvoice}>
                <FiDownload size={24} />
              </button> */}
            </h1>
            <h2>{invoice.description}</h2>
          </InvoicePresentation>
          <ProjectInfo>
            <div>
              <strong>Endereçado a</strong>
              <p>{invoice.recipient}</p>
            </div>
            <div>
              <strong>Projeto</strong>
              <p>{invoice.project}</p>
            </div>
            <div>
              <strong>Início</strong>
              <p>{parseDate(invoice.startDate)}</p>
            </div>
            <div>
              <strong>Prazo</strong>
              <p>{parseDate(invoice.dueDate)}</p>
            </div>
          </ProjectInfo>

          <Separator />

          <Services>
            <h3>Descrição dos Serviços</h3>
            <ServicesTable>
              <tbody>
                {invoice.services.map(service => (
                  <tr key={service._id}>
                    <td>{service.description}</td>
                  </tr>
                ))}
              </tbody>
            </ServicesTable>
          </Services>

          <Separator />

          <Details>
            {invoice.note && (
              <Obs>
                <strong>Observações:</strong>
                <br />
                {invoice.note}
              </Obs>
            )}
            <Pricing>
              <div>
                <strong>Subtotal:</strong>
                <p>{parsePrice(invoice.price)}</p>
              </div>
              <div>
                <strong>Ajustes:</strong>
                <p>{parsePrice(invoice.priceAdjusts)}</p>
              </div>
              <div>
                <strong>Total:</strong>
                <p>{parsePrice(invoice.price + invoice.priceAdjusts)}</p>
              </div>
            </Pricing>
          </Details>

          <Footer>
            <Logo src="/signature.svg" alt="Assinatura do Washington Junior" />
            <p>CRO: {invoice._id}</p>
          </Footer>
        </Main>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    'https://my-invoice-generator.herokuapp.com/invoices'
  );
  const data: InvoiceData[] = await response.json();

  const invoices = data.map(invoice => {
    return { params: { cro: invoice._id } };
  });

  return {
    paths: invoices,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { cro } = context.params!;
  const response = await fetch(
    `https://my-invoice-generator.herokuapp.com/invoices?cro=${cro}`
  );
  const data: InvoiceData = await response.json();

  return {
    props: {
      invoice: data || null
    },
    revalidate: 60
  };
};
