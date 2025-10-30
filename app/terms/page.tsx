import React from "react";
import Link from "next/link";

export default function ConditionsGenerales() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">
                        Conditions Générales d'Utilisation
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

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                1
              </span>
                            Introduction
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Bienvenue sur notre site web. En accédant et en utilisant ce site, vous acceptez d'être
                            lié par les présentes conditions générales d'utilisation. Si vous n'acceptez pas ces
                            conditions, veuillez ne pas utiliser notre site.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                2
              </span>
                            Utilisation du Site
                        </h2>
                        <div className="text-slate-700 leading-relaxed space-y-3">
                            <p>
                                Vous vous engagez à utiliser ce site uniquement à des fins légales et d'une manière
                                qui ne porte pas atteinte aux droits d'autrui.
                            </p>
                            <p className="font-medium text-slate-900">Vous acceptez de ne pas :</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Violer les lois ou réglementations applicables</li>
                                <li>Transmettre du contenu nuisible ou offensant</li>
                                <li>Tenter d'accéder de manière non autorisée à nos systèmes</li>
                                <li>Perturber le fonctionnement normal du site</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                3
              </span>
                            Propriété Intellectuelle
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Tous les contenus présents sur ce site, incluant mais non limités aux textes, graphiques,
                            logos, images, et logiciels, sont la propriété exclusive de notre entreprise ou de ses
                            concédants de licence et sont protégés par les lois sur la propriété intellectuelle.
                            Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                4
              </span>
                            Protection des Données
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Nous nous engageons à protéger vos données personnelles conformément au Règlement Général
                            sur la Protection des Données (RGPD). Pour plus d'informations sur la collecte et
                            l'utilisation de vos données, veuillez consulter notre Politique de Confidentialité.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                5
              </span>
                            Limitation de Responsabilité
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Ce site est fourni "tel quel" sans garantie d'aucune sorte. Nous ne pouvons garantir
                            que le site sera exempt d'erreurs ou disponible de manière ininterrompue. Nous déclinons
                            toute responsabilité pour les dommages directs, indirects, accessoires ou consécutifs
                            résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                6
              </span>
                            Liens Externes
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas
                            responsables du contenu ou des pratiques de confidentialité de ces sites externes.
                            L'accès à ces sites se fait à vos propres risques.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                7
              </span>
                            Modifications
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Nous nous réservons le droit de modifier ces conditions générales à tout moment. Les
                            modifications entreront en vigueur dès leur publication sur cette page. Nous vous
                            encourageons à consulter régulièrement cette page pour rester informé des éventuelles
                            modifications.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                8
              </span>
                            Droit Applicable
                        </h2>
                        <p className="text-slate-700 leading-relaxed">
                            Les présentes conditions générales sont régies par le droit français. Tout litige
                            relatif à l'interprétation ou à l'exécution des présentes sera soumis aux tribunaux
                            compétents français.
                        </p>
                    </section>

                    {/* Contact Section */}
                    <section className="bg-gradient-to-r from-purple-50 to-slate-50 rounded-xl p-6 border border-purple-200">
                        <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                            Nous Contacter
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Si vous avez des questions concernant ces conditions générales, n'hésitez pas à nous contacter :
                        </p>
                        <div className="space-y-2 text-slate-700">
                            <p><span className="font-medium">Email :</span> contact@votresite.com</p>
                            <p><span className="font-medium">Téléphone :</span> +33 1 23 45 67 89</p>
                            <p><span className="font-medium">Adresse :</span> 123 Rue Example, 75001 Paris, France</p>
                        </div>
                    </section>

                </div>

                {/* Footer note */}
                <div className="text-center mt-8">
                    <p className="text-slate-500 text-sm">
                        En continuant à utiliser ce site, vous reconnaissez avoir lu et accepté ces conditions.
                    </p>
                </div>
            </div>
        </div>
    );
}