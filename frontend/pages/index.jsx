import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Products from "@/components/products";
import Partners from "@/components/partners";
import Projects from "@/components/projects";
import OurCustomers from "@/components/ourCustomers";
import Midia from "@/components/midia";
import Testimonial from "@/components/testimonial";
import CallHome from "@/components/callHome";

const partners = [
  { name: "Twitch", logo: "/Twitch.svg", description: "Twitch is a live streaming platform for gamers and other lifestyle casters. The platform is owned by Amazon and has more than 15 million daily active users.", link: "https://www.twitch.tv/" },
  { name: "Facebook", logo: "/Facebook-vector.svg", description: "Facebook is a social media platform that allows users to connect with friends and family, share photos and videos, and send messages.", link: "https://www.facebook.com/" },
  { name: "Grand-Plaza", logo: "/Grand-Plaza.svg", description: "Grand Plaza is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti in saepe quod quaerat eum laudantium excepturi ut quidem aliquid! Ad, corporis obcaecati illo recusandae necessitatibus facilis tenetur veritatis magni reprehenderit.", link: "https://www.facebook.com/" },
  { name: "YouTube", logo: "/YouTube.svg", description: "YouTube is a video sharing platform that allows users to watch, like, share, comment, and upload their own videos. The platform is owned by Google and has more than 2 billion monthly active users.", link: "https://www.youtube.com/" },
  { name: "Suzano", logo: "/Suzano.svg", description: "Suzano is a global company focused on developing sustainable solutions from renewable sources. The company is the world's largest producer of eucalyptus pulp and one of the largest paper producers in Latin America.", link: "https://www.suzano.com.br/"},
];

export default function Home() {

const partners = [
    { name: "Huawei Brasil", logo: "/huawei.png", description: "A Huawei é líder global em soluções de Tecnologia da Informação e Comunicação (TIC), com produtos e soluções implantados em mais de 170 países, atendendo a mais de um terço da população mundial.", link: "https://www.huawei.com/br/" },
    { name: "Biosmart Nano", logo: "/biosmartnano.png", description: "Empresa de Pesquisa e Desenvolvimento em soluções nanotecnológicas com múltiplas funcionalidades, sempre buscando soluções inovadoras e sustentáveis para os segmentos médico, farmacêutico, cosmético, químico e alimentício.", link: "https://www.biosmartnano.com/" },
    { name: "Grand Plaza Shopping", logo: "/Grand-Plaza.svg", description: "Grand Plaza Shopping, antigo ABC Plaza Shopping, é o maior shopping center do ABC Paulista.", link: "https://www.grandplazashopping.com.br/" },
    { name: "Royal Academy of Engineering", logo: "/royalacademy.png", description: "A Royal Academy of Engineering aproveita o poder da engenharia para construir uma sociedade sustentável e uma economia inclusiva que funcione para todos.", link: "https://raeng.org.uk/" },
    { name: "Upperbag", logo: "/upperbag.png", description: "Delivery de roupas líder no mercado nacional com atuação desde 2015 para clientes femininos, masculinos, kids e plus size.", link: "https://www.upperbag.com.br/"},
    { name: "Cabot", logo: "/cabot.png", description: "Como uma empresa líder global em produtos químicos especiais e materiais de desempenho, estamos empenhados em promover os negócios dos nossos clientes nos setores de transporte, infraestrutura, meio ambiente e bens de consumo.", link: "https://www.cabotcorp.com.br/"},
    { name: "Pragas.com", logo: "/pragascom.png", description: "A Pragas.com é uma provedora de soluções inovadoras e aplicadas para viabilizar pesquisas agrícolas, reduzir custos e acelerar o crescimento e o desenvolvimento de tecnologias para o controle de pragas.", link: "https://pragas.com.vc/"},
    { name: "Prefeitura de Santo André", logo: "/prefeitura.png", description: "Santo André é um município brasileiro da Região do Grande ABC, localizado na Zona Sudeste da Grande São Paulo, com população de cerca de 721.368 habitantes.", link: "https://web.santoandre.sp.gov.br/"},
    { name: "Suzano Shopping", logo: "/Suzano.svg", description: "Localizado a 40 km da cidade de São Paulo, com acesso fácil pelas principais rodovias, o Suzano Shopping atende toda a região do Alto Tietê.", link: "https://www.suzanoshopping.com.br/"},
    { name: "Syn", logo: "/syn.png", description: "A SYN, anteriormente denominada Cyrela Commercial Properties, é uma empresa de incorporação de empreendimentos imobiliários e administração de shopping centers e edifícios corporativos.", link: "https://www.syn.com.br/"},
    ];

    return (
        <div>
            <Navbar />
            <Hero />
            <Services />
            <Products />
            <Partners />
            <Projects />
            <OurCustomers partners={partners} />
            <Midia />
            <Testimonial />
            <CallHome />
            <Footer />
        </div>
    );
}
