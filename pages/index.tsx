import { GetStaticProps } from 'next';

type HomeProps = {
    countries: Array<Object>;
}

const Home = ({countries}: HomeProps ) => {
    console.log(countries)

    return (
        <h1>Hello World</h1>
    );
}

export const getStaticProps: GetStaticProps = async () => {

    // Fetch the data
    const response = await fetch('https://api.covid19api.com/summary');
    const data     = await response.json();

    return {
        props: {
            countries: data.Countries
        }
    }
}

export default Home;
