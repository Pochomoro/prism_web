import NavBar from "@/components/NavBar";
import {Heart, Shield} from "lucide-react";
import Link from "next/link";

export default function Securite() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-slate-50 to-purple-50">
            {/* Uncomment to use your navbar */}
            <NavBar />

            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-purple-800">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
                    <div className="text-center text-white">
                        <div className="flex items-center justify-center mb-6">
                            <div
                                className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                <Shield className="w-8 h-8 text-white" fill="white"/>
                            </div>
                        </div>
                        <h1 className="font-title text-4xl md:text-5xl font-bold mb-6">
                            Votre Sécurité, Notre Priorité
                        </h1>
                        <p className="text-xl md:text-xl text-purple-100 max-w-3xl mx-auto">
                            Rencontrez en toute confiance grâce à nos technologies de pointe et nos mesures de protection complètes
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">

                    {/* IA Intelligente */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-600 hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-title font-semibold text-2xl text-slate-900 mb-3">
                                    IA Intelligente de Validation
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Notre système d'intelligence artificielle avancé analyse chaque profil en temps réel pour garantir l'authenticité et la sécurité de notre communauté.
                                </p>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">✓</span>
                                        <span>Vérification automatique des photos de profil</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">✓</span>
                                        <span>Détection des comportements suspects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">✓</span>
                                        <span>Identification des faux profils</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-purple-600 mr-2">✓</span>
                                        <span>Analyse du contenu inapproprié</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Panic Button */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-title font-semibold text-slate-900 mb-3">
                                    Bouton d'Urgence
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    En cas de situation dangereuse, activez immédiatement notre bouton d'urgence pour recevoir une assistance rapide et efficace.
                                </p>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✓</span>
                                        <span>Activation discrète en un seul clic</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✓</span>
                                        <span>Alerte immédiate à notre équipe de sécurité</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✓</span>
                                        <span>Partage de localisation aux services d'urgence</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-red-500 mr-2">✓</span>
                                        <span>Notification automatique de vos contacts de confiance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Système de Signalement */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-title font-semibold text-slate-900 mb-3">
                                    Signalement & Blocage
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Signalez facilement tout comportement inapproprié et bloquez instantanément les utilisateurs indésirables pour protéger votre expérience.
                                </p>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start">
                                        <span className="text-orange-500 mr-2">✓</span>
                                        <span>Signalement rapide et confidentiel</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-500 mr-2">✓</span>
                                        <span>Blocage immédiat d'utilisateurs</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-500 mr-2">✓</span>
                                        <span>Équipe de modération 24/7</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-500 mr-2">✓</span>
                                        <span>Actions rapides sur les signalements</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Safety Center */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-title font-semibold text-slate-900 mb-3">
                                    Centre de Sécurité & Conseils
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Accédez à une bibliothèque complète de ressources, guides et conseils pour naviguer en toute sécurité sur notre plateforme.
                                </p>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">✓</span>
                                        <span>Guides de sécurité détaillés</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">✓</span>
                                        <span>Conseils pour des rencontres sécurisées</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">✓</span>
                                        <span>Formation sur la protection des données</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 mr-2">✓</span>
                                        <span>FAQ et support disponible</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Safety Tips Section */}
                <div className="bg-gradient-to-br from-white via-purple-200/80 to-pink-300/80 overflow-hidden rounded-3xl p-8 md:p-12 text-black mb-20">
                    <h2 className="text-3xl md:text-4xl font-title font-semibold mb-8 text-center">
                        Conseils de Sécurité Essentiels
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-black font-title">Protégez vos Informations</h3>
                            <p className="text-slate-600">
                                Ne partagez jamais vos informations personnelles sensibles comme votre adresse, numéro de compte bancaire ou mots de passe.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">👥</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-black font-title">Rencontres Publiques</h3>
                            <p className="text-slate-600">
                                Pour vos premières rencontres, choisissez toujours un lieu public et informez un proche de vos plans.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🚨</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-black font-title">Faites Confiance à votre Instinct</h3>
                            <p className="text-slate-600">
                                Si quelque chose vous semble suspect ou vous met mal à l'aise, n'hésitez pas à utiliser nos outils de signalement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Security Measures */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black font-title mb-8 text-center">
                        Mesures de Protection Supplémentaires
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Vérification en Deux Étapes</h3>
                                <p className="text-slate-600">
                                    Sécurisez votre compte avec une authentification à deux facteurs pour une protection maximale.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Chiffrement de Bout en Bout</h3>
                                <p className="text-slate-600">
                                    Toutes vos conversations sont protégées par un chiffrement de niveau militaire.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Contrôle de Visibilité</h3>
                                <p className="text-slate-600">
                                    Gérez précisément qui peut voir votre profil et vos informations personnelles.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">4</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Mode Incognito</h3>
                                <p className="text-slate-600">
                                    Naviguez anonymement et contrôlez votre présence en ligne selon vos préférences.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">5</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Surveillance 24/7</h3>
                                <p className="text-slate-600">
                                    Notre équipe de sécurité surveille activement la plateforme pour détecter toute activité suspecte.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <span className="text-purple-600 font-bold">6</span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-black font-title mb-2">Éducation Continue</h3>
                                <p className="text-slate-600">
                                    Recevez régulièrement des conseils et mises à jour sur les meilleures pratiques de sécurité.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center bg-gradient-to-r from-slate-50 to-purple-50 rounded-3xl p-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black font-title mb-4">
                        Besoin d'Aide ?
                    </h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Notre équipe de support est disponible 24/7 pour répondre à toutes vos questions de sécurité
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 transition-colors shadow-lg inline-flex items-center gap-2 group">
                        Contacter le Support
                        <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    );
}