import React from 'react';
import App from '@/pages/_app';
import { Header } from '../../../../libs/header';
import { Footer } from '../../../../libs/footer';

export default function MainLayout({ children }) {
	return (
		<>
			<Header />
			<main> {children} </main>
			<Footer />
		</>
	);
}
