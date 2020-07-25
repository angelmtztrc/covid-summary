import tw from 'twin.macro';
import { IGlobal } from "../interfaces";

// Styled Components
const Card = tw.div`bg-gray-800 border-l-4 border-blue-500 px-6 py-4 rounded shadow-md`
const Subtitle = tw.h2`text-xl text-white`;
const Paragraph = tw.p`mt-2 mb-0 text-4xl font-bold text-gray-600`;

type GlobalSummaryProps = {
    global: IGlobal;
}

const GlobalSummary = ({global}: GlobalSummaryProps) => {
    
    // Extract data
    const { TotalConfirmed, TotalDeaths, TotalRecovered } = global;

    return (
        <header tw="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
                <Subtitle>Total Confirmed</Subtitle>
                <Paragraph>{TotalConfirmed}</Paragraph>
            </Card>
            <Card>
                <Subtitle>Total Deaths</Subtitle>
                <Paragraph>{TotalDeaths}</Paragraph>
            </Card>
            <Card>
                <Subtitle>Total Recovered</Subtitle>
                <Paragraph>{TotalRecovered}</Paragraph>
            </Card>
        </header>
    );
}

export default GlobalSummary;