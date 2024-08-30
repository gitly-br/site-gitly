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
