import Link from "next/link";
import React from "react";

export default function PolitiqueConfidentialite() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">
                        Politique de Confidentialité
                    </h1>
                    <p className="text-slate-600 text-lg mb-3">
                        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                    </p>
                    <Link
                        prefetch={false}
                        href="/"
                        className="font-title text-lg rounded-2xl bg-purple-600 px-6 py-2 text-white hover:bg-purple-700 transition-all cursor-pointer">
                        Revenir à l'accueil
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 space-y-10">

                    {/* Introduction */}
                    <section>
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                            <p className="text-slate-700 leading-relaxed">
                                Nous accordons une grande importance à la protection de vos données personnelles.
                                Cette politique de confidentialité explique comment nous collectons, utilisons,
                                partageons et protégeons vos informations conformément au Règlement Général sur
                                la Protection des Données (RGPD).
                            </p>
                        </div>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                1
              </span>
                            Responsable du Traitement
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>
                                Le responsable du traitement de vos données personnelles est :
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                                <p><span className="font-medium">Nom de l'entreprise :</span> Votre Entreprise</p>
                                <p><span className="font-medium">Adresse :</span> 123 Rue Example, 75001 Paris, France</p>
                                <p><span className="font-medium">Email :</span> dpo@votresite.com</p>
                                <p><span className="font-medium">Téléphone :</span> +33 1 23 45 67 89</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                2
              </span>
                            Données Collectées
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-4">
                            <p>Nous pouvons collecter les types de données suivants :</p>

                            <div className="space-y-3">
                                <div className="border-l-3 border-purple-300 pl-4">
                                    <p className="font-medium text-slate-900">Données d'identification</p>
                                    <p className="text-sm">Nom, prénom, adresse email, numéro de téléphone</p>
                                </div>

                                <div className="border-l-3 border-purple-300 pl-4">
                                    <p className="font-medium text-slate-900">Données de connexion</p>
                                    <p className="text-sm">Adresse IP, type de navigateur, pages visitées, durée de visite</p>
                                </div>

                                <div className="border-l-3 border-purple-300 pl-4">
                                    <p className="font-medium text-slate-900">Données de navigation</p>
                                    <p className="text-sm">Cookies, historique de navigation, préférences utilisateur</p>
                                </div>

                                <div className="border-l-3 border-purple-300 pl-4">
                                    <p className="font-medium text-slate-900">Données transactionnelles</p>
                                    <p className="text-sm">Historique des commandes, informations de paiement</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                3
              </span>
                            Finalités du Traitement
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>Vos données sont collectées et traitées pour les finalités suivantes :</p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Gestion de votre compte utilisateur et authentification</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Traitement et suivi de vos commandes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Amélioration de nos services et personnalisation de votre expérience</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Communication de nos offres et actualités (avec votre consentement)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Respect de nos obligations légales et réglementaires</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Prévention de la fraude et sécurisation de notre plateforme</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                4
              </span>
                            Base Légale du Traitement
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>Le traitement de vos données repose sur les bases légales suivantes :</p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="bg-slate-50 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-2">Consentement</p>
                                    <p className="text-sm">Pour les newsletters et communications marketing</p>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-2">Exécution du contrat</p>
                                    <p className="text-sm">Pour la gestion de vos commandes et services</p>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-2">Intérêt légitime</p>
                                    <p className="text-sm">Pour l'amélioration de nos services</p>
                                </div>
                                <div className="bg-slate-50 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-2">Obligation légale</p>
                                    <p className="text-sm">Pour la conformité comptable et fiscale</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                5
              </span>
                            Partage des Données
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>
                                Nous ne vendons ni ne louons vos données personnelles. Nous pouvons partager vos
                                données avec :
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Nos prestataires de services (hébergement, paiement, livraison)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Les autorités compétentes en cas d'obligation légale</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Nos partenaires commerciaux (avec votre consentement explicite)</span>
                                </li>
                            </ul>
                            <p className="text-sm bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                                <span className="font-medium">Note :</span> Tous nos prestataires sont contractuellement
                                tenus de respecter la confidentialité et la sécurité de vos données.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                6
              </span>
                            Durée de Conservation
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>Nous conservons vos données personnelles pendant les durées suivantes :</p>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                                    <span>Données de compte actif</span>
                                    <span className="font-medium text-purple-600">Durée de la relation</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                                    <span>Données de compte inactif</span>
                                    <span className="font-medium text-purple-600">3 ans</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                                    <span>Données de facturation</span>
                                    <span className="font-medium text-purple-600">10 ans</span>
                                </div>
                                <div className="flex justify-between items-center bg-slate-50 rounded-lg p-3">
                                    <span>Cookies et traceurs</span>
                                    <span className="font-medium text-purple-600">13 mois maximum</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                7
              </span>
                            Vos Droits
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-4">
                            <p>Conformément au RGPD, vous disposez des droits suivants :</p>

                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="border border-slate-200 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-1">✓ Droit d'accès</p>
                                    <p className="text-sm">Accéder à vos données personnelles</p>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-1">✓ Droit de rectification</p>
                                    <p className="text-sm">Corriger vos données inexactes</p>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-1">✓ Droit à l'effacement</p>
                                    <p className="text-sm">Supprimer vos données</p>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-1">✓ Droit à la limitation</p>
                                    <p className="text-sm">Limiter le traitement</p>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-1">✓ Droit à la portabilité</p>
                                    <p className="text-sm">Récupérer vos données</p>
                                </div>
                                <div className="border border-slate-200 rounded-lg p-4">
                                    <p className="font-medium text-slate-900 mb-1">✓ Droit d'opposition</p>
                                    <p className="text-sm">S'opposer au traitement</p>
                                </div>
                            </div>

                            <p className="text-sm">
                                Pour exercer ces droits, contactez-nous à <span className="font-medium text-purple-600">dpo@votresite.com</span>
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                8
              </span>
                            Sécurité des Données
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>
                                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour
                                protéger vos données contre tout accès non autorisé, perte, destruction ou altération :
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Chiffrement des données sensibles (SSL/TLS)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Contrôle d'accès strict et authentification forte</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Sauvegardes régulières et sécurisées</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-purple-600 mr-2 mt-1">▪</span>
                                    <span>Audits de sécurité réguliers</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                9
              </span>
                            Cookies et Traceurs
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>
                                Notre site utilise des cookies pour améliorer votre expérience de navigation.
                                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de
                                votre navigateur.
                            </p>
                            <div className="bg-slate-50 rounded-lg p-4 space-y-2 text-sm">
                                <p><span className="font-medium">Cookies essentiels :</span> Nécessaires au fonctionnement du site</p>
                                <p><span className="font-medium">Cookies analytiques :</span> Pour comprendre l'utilisation du site</p>
                                <p><span className="font-medium">Cookies marketing :</span> Pour personnaliser les publicités</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                10
              </span>
                            Transferts Internationaux
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Vos données peuvent être transférées et traitées dans des pays situés en dehors de
                            l'Espace Économique Européen. Dans ce cas, nous nous assurons que des garanties
                            appropriées sont mises en place conformément au RGPD (clauses contractuelles types,
                            décisions d'adéquation).
                        </p>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                11
              </span>
                            Modifications
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                            Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous
                            encourageons à consulter régulièrement cette page.
                        </p>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                12
              </span>
                            Réclamations
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire
                            une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) :
                        </p>
                        <div className="bg-slate-50 rounded-lg p-4 mt-3 text-slate-900 space-y-2 text-sm">
                            <p><span className="font-medium">CNIL</span></p>
                            <p>3 Place de Fontenoy - TSA 80715</p>
                            <p>75334 PARIS CEDEX 07</p>
                            <p>Tél : 01 53 73 22 22</p>
                            <p>Site web : <a href="https://www.cnil.fr" className="text-purple-600 hover:underline">www.cnil.fr</a></p>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-xl p-6 border border-purple-200">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                            Nous Contacter
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Pour toute question relative à cette politique de confidentialité ou pour exercer vos droits :
                        </p>
                        <div className="space-y-2 text-slate-700">
                            <p><span className="font-medium">Délégué à la Protection des Données (DPO) :</span></p>
                            <p><span className="font-medium">Email :</span> dpo@votresite.com</p>
                            <p><span className="font-medium">Courrier :</span> 123 Rue Example, 75001 Paris, France</p>
                            <p><span className="font-medium">Téléphone :</span> +33 1 23 45 67 89</p>
                        </div>
                    </section>

                </div>

                {/* Footer note */}
                <div className="text-center mt-8">
                    <p className="text-slate-500 text-sm">
                        Votre vie privée est notre priorité. Nous nous engageons à protéger vos données personnelles.
                    </p>
                </div>
            </div>
        </div>
    );
}