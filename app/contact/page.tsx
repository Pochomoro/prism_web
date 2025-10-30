'use client';

import { useState } from 'react';
import NavBar from "@/components/NavBar";
import {Heart, Phone, Shield} from "lucide-react";

export default function FAQContact() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState('all');
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        sujet: '',
        message: ''
    });

    const categories = [
        { id: 'all', name: 'Toutes', icon: '📋' },
        { id: 'compte', name: 'Compte', icon: '👤' },
        { id: 'securite', name: 'Sécurité', icon: '🔒' },
        { id: 'technique', name: 'Technique', icon: '⚙️' },
        { id: 'matching', name: 'Matching', icon: '💕' },
        { id: 'paiement', name: 'Paiement', icon: '💳' }
    ];

    const faqData = [
        {
            category: 'compte',
            question: "Comment créer un compte sur la plateforme ?",
            answer: "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut de la page. Remplissez le formulaire avec vos informations personnelles, choisissez un mot de passe sécurisé et validez votre adresse email. C'est simple, rapide et gratuit !"
        },
        {
            category: 'compte',
            question: "Comment puis-je supprimer mon compte ?",
            answer: "Vous pouvez supprimer votre compte à tout moment depuis les paramètres de votre profil. Allez dans 'Paramètres' > 'Compte' > 'Supprimer mon compte'. Attention, cette action est irréversible et toutes vos données seront définitivement supprimées."
        },
        {
            category: 'compte',
            question: "Comment modifier mes informations personnelles ?",
            answer: "Accédez à votre profil, cliquez sur 'Modifier le profil' et changez les informations souhaitées. N'oubliez pas de sauvegarder vos modifications. Certaines informations comme l'email peuvent nécessiter une vérification supplémentaire."
        },
        {
            category: 'securite',
            question: "Comment fonctionne la vérification des profils ?",
            answer: "Nous utilisons une intelligence artificielle avancée pour vérifier l'authenticité de chaque profil. Les photos sont analysées automatiquement, et certains profils nécessitent une vérification manuelle par notre équipe. Les profils vérifiés reçoivent un badge bleu."
        },
        {
            category: 'securite',
            question: "Est-ce que mes données personnelles sont protégées ?",
            answer: "Absolument ! Nous prenons la sécurité de vos données très au sérieux. Toutes vos informations sont chiffrées et stockées de manière sécurisée. Nous ne vendons jamais vos données à des tiers et respectons scrupuleusement le RGPD."
        },
        {
            category: 'securite',
            question: "Comment puis-je signaler un comportement inapproprié ?",
            answer: "Vous pouvez signaler tout comportement suspect ou inapproprié en cliquant sur les trois points dans le profil ou la conversation concernée, puis en sélectionnant 'Signaler'. Notre équipe de modération examine chaque signalement dans les plus brefs délais."
        },
        {
            category: 'securite',
            question: "Comment utiliser le bouton d'urgence ?",
            answer: "Le bouton d'urgence est accessible depuis n'importe quelle conversation. En cas de danger, appuyez longuement sur le bouton rouge pour alerter immédiatement notre équipe de sécurité et vos contacts de confiance. Votre localisation sera partagée automatiquement."
        },
        {
            category: 'technique',
            question: "Que faire si je rencontre un problème technique ?",
            answer: "Si vous rencontrez un problème technique, consultez d'abord notre centre d'aide. Si le problème persiste, utilisez le formulaire de contact ci-dessous ou envoyez-nous un email à support@votresite.com. Notre équipe vous répondra dans les 24 heures."
        },
        {
            category: 'technique',
            question: "L'application est-elle disponible sur mobile ?",
            answer: "Oui ! Notre application est disponible sur iOS et Android. Téléchargez-la gratuitement depuis l'App Store ou Google Play Store pour profiter de toutes les fonctionnalités où que vous soyez."
        },
        {
            category: 'technique',
            question: "Pourquoi mes notifications ne fonctionnent pas ?",
            answer: "Vérifiez d'abord que les notifications sont activées dans les paramètres de l'application et dans les paramètres de votre téléphone. Assurez-vous également d'avoir la dernière version de l'application. Si le problème persiste, essayez de vous déconnecter puis reconnecter."
        },
        {
            category: 'matching',
            question: "Comment fonctionne le système de matching ?",
            answer: "Notre algorithme intelligent analyse vos préférences, vos centres d'intérêt et votre comportement pour vous proposer des profils compatibles. Plus vous utilisez l'application, plus les suggestions deviennent pertinentes et personnalisées."
        },
        {
            category: 'matching',
            question: "Comment augmenter mes chances de match ?",
            answer: "Complétez au maximum votre profil avec des photos de qualité et une bio intéressante. Soyez actif sur la plateforme, engagez des conversations authentiques et soyez vous-même. La patience et la régularité sont clés !"
        },
        {
            category: 'matching',
            question: "Puis-je annuler un match par erreur ?",
            answer: "Malheureusement, une fois qu'un match est refusé, il ne peut pas être annulé. Cependant, avec un abonnement premium, vous pouvez utiliser la fonction 'Retour en arrière' pour récupérer votre dernier swipe."
        },
        {
            category: 'paiement',
            question: "Quels sont les moyens de paiement acceptés ?",
            answer: "Nous acceptons les cartes de crédit/débit (Visa, Mastercard, American Express), PayPal, Apple Pay et Google Pay. Tous les paiements sont sécurisés et chiffrés."
        },
        {
            category: 'paiement',
            question: "Comment annuler mon abonnement ?",
            answer: "Pour annuler votre abonnement, allez dans 'Paramètres' > 'Abonnement' > 'Gérer l'abonnement'. Suivez les instructions pour annuler. Vous conserverez l'accès premium jusqu'à la fin de votre période de facturation en cours."
        },
        {
            category: 'paiement',
            question: "Puis-je obtenir un remboursement ?",
            answer: "Les remboursements sont étudiés au cas par cas. Si vous rencontrez un problème avec votre abonnement, contactez notre support dans les 48 heures suivant votre achat avec les détails de votre situation."
        }
    ];

    const filteredFAQs = activeCategory === 'all'
        ? faqData
        : faqData.filter(faq => faq.category === activeCategory);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logique d'envoi du formulaire ici
        console.log('Formulaire soumis:', formData);
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        setFormData({ nom: '', email: '', sujet: '', message: '' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-purple-50">
            <NavBar />
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
                    <div className="text-center text-white">
                        <div className="flex items-center justify-center mb-6">
                            <div
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <Phone className="w-8 h-8 text-white" fill="white"/>
                            </div>
                        </div>
                        <h1 className="font-title text-4xl md:text-5xl font-bold mb-6">
                            Comment pouvons-nous vous aider
                        </h1>
                        <p className="text-xl md:text-xl text-purple-100 max-w-3xl mx-auto">
                            Trouvez rapidement des réponses ou contactez-nous directement
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
                <div className="text-center mb-12">
                    <h2 className="font-title text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
                        Questions Fréquentes
                    </h2>
                    <p className="text-lg text-slate-600">
                        Découvrez les réponses aux questions les plus courantes
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="mb-8 overflow-x-auto">
                    <div className="flex gap-3 min-w-max md:justify-center pb-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setOpenFAQ(null);
                                }}
                                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                                    activeCategory === category.id
                                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
                                }`}
                            >
                                <span className="text-xl">{category.icon}</span>
                                <span>{category.name}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    activeCategory === category.id
                                        ? 'bg-white/20'
                                        : 'bg-slate-100'
                                }`}>
                                    {category.id === 'all'
                                        ? faqData.length
                                        : faqData.filter(faq => faq.category === category.id).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {filteredFAQs.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-xl shadow-md">
                            <p className="text-slate-500 text-lg">Aucune question trouvée dans cette catégorie.</p>
                        </div>
                    ) : (
                        filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
                            >
                                <button
                                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-semibold font-title text-lg text-slate-900 pr-8">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>
                                        <svg
                                            className="w-5 h-5 text-purple-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openFAQ === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                                >
                                    <div className="px-6 pb-5 text-slate-600 leading-relaxed bg-slate-50">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Divider */}
                <div className="flex items-center my-16">
                    <div className="flex-1 border-t border-slate-300"></div>
                    <span className="px-6 text-slate-500 font-medium">ou</span>
                    <div className="flex-1 border-t border-slate-300"></div>
                </div>

                {/* Contact Form Section */}
                <div className="text-center mb-12">
                    <h2 className="font-title text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
                        Contactez-nous
                    </h2>
                    <p className="text-lg text-slate-600">
                        Vous n'avez pas trouvé de réponse ? Envoyez-nous un message
                    </p>
                </div>

                <div id="contactForm" className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Nom */}
                        <div>
                            <label htmlFor="nom" className="block text-sm font-semibold text-slate-900 mb-2">
                                Nom complet <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                placeholder="Votre nom"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                                Adresse email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all"
                                placeholder="votre@email.com"
                            />
                        </div>

                        {/* Sujet */}
                        <div>
                            <label htmlFor="sujet" className="block text-sm font-semibold text-slate-900 mb-2">
                                Sujet <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="sujet"
                                name="sujet"
                                value={formData.sujet}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all bg-white"
                            >
                                <option value="">Sélectionnez un sujet</option>
                                <option value="compte">Problème de compte</option>
                                <option value="technique">Problème technique</option>
                                <option value="securite">Question de sécurité</option>
                                <option value="paiement">Question de paiement</option>
                                <option value="signalement">Signalement</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Décrivez votre problème ou votre question en détail..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white font-semibold py-4 rounded-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
                        >
                            Envoyer le message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-8 pt-8 border-t border-slate-200">
                        <p className="text-center text-slate-600 mb-4">Autres moyens de nous contacter :</p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                <span className="text-slate-700">support@votresite.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                <span className="text-slate-700">+33 1 23 45 67 89</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Response Time Info */}
                <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span className="font-semibold text-purple-900">Temps de réponse moyen</span>
                    </div>
                    <p className="text-purple-700">
                        Notre équipe vous répondra dans les <span className="font-bold">24 heures</span>
                    </p>
                </div>

            </div>
        </div>
    );
}