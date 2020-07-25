import { ICountries } from "../interfaces";
import tw from "twin.macro";

// Styled Component
const Card = tw.div`bg-gray-800 h-auto px-6 py-4 rounded`;
const Subtitle = tw.h2`text-xl text-white`;
const Paragraph = tw.p`mt-2 mb-0 text-4xl font-bold text-gray-600`;

type CountriesProps = {
    countries: Array<ICountries>;
}

const CountriesSummary = ({countries}: CountriesProps) => {
    return (
        <main tw="grid grid-cols-1 md:grid-cols-3 gap-4">
            {countries.map(country => (
                <Card key={country.Slug}>
                    <Subtitle>{country.Country}</Subtitle>
                    <Paragraph>{country.TotalConfirmed} <span tw="text-sm">Cases confirmed</span></Paragraph>
                </Card>
            ))}
        </main>
    );
}

export default CountriesSummary;