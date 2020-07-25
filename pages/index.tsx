import { GetStaticProps } from 'next';
import tw from 'twin.macro';

// Styled Components
const Heading = tw.h2`text-2xl font-bold mb-6 text-white`;

type HomeProps = {
    data: object;
}

const Home = ({data}: HomeProps ) => (
    <div tw="bg-gray-900 min-h-screen relative">
        <div tw="p-8">
            <section>
                <Heading>COVID - Countries</Heading>
            </section>
        </div>
    </div>        
);

export const getStaticProps: GetStaticProps = async () => {

    // Fetch the data
    const response = await fetch('https://api.covid19api.com/summary');
    const data     = await response.json();

    return {
        props: {
            data
        }
    }
}

export default Home;
