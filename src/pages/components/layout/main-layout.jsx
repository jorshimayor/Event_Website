import React from 'react';
import App from '@/pages/_app';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export default function MainLayout({ children }) {
	return (
		<>
			<Header />
			<main> {children} </main>
			<Footer />
		</>
	);
}
