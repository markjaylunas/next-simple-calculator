import type { NextPage } from 'next';
import Head from 'next/head';
import Calculator from '../components/Calculator';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Simple Calculator</title>
                <meta
                    name="description"
                    content="Create a simple calculator that can only add 2 numbers."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col justify-center items-center gap-5 min-h-screen w-screen bg-slate-800">
                <Calculator />
            </main>
        </div>
    );
};

export default Home;
