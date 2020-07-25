import { GetStaticProps } from 'next';
import tw from 'twin.macro';

// Components
import GlobalSummary from '../components/GlobalSummary';
import { IGlobal, ICountries } from '../interfaces';
import CountriesSummary from '../components/CountriesSummary';

// Styled Components
const Heading = tw.h1`text-2xl font-bold mb-6 text-white`;

type HomeProps = {
    global: IGlobal;
    countries: Array<ICountries>;
}

const Home = ({global, countries}: HomeProps ) => {
    return (
    <div tw="bg-gray-900 min-h-screen relative">
        <div tw="p-8">
            <section>
                <Heading>COVID - Global</Heading>
                <GlobalSummary global={global} />
            </section>
            <section tw="mt-8">
                <Heading>COVID - Countries</Heading>
                <CountriesSummary countries={countries} />
            </section>
        </div>
    </div>        
)};

export const getStaticProps: GetStaticProps = async () => {

    // Fetch the data
    const response = await fetch('https://api.covid19api.com/summary');
    const data     = await response.json();

    return {
        props: {
            global: data.Global,
            countries: data.Countries
        }
    }
}

export default Home;
