import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <Header />
      <main className="p-4 flex justify-between items-start">
        <div>
          {/* Zmenšení písma a změna barvy odkazů na černou s podtržením */}
          <p className="text-base">
            Vědecký pracovník na{' '}
            <Link href="https://portal.fsv.cvut.cz/katedry/K102" className="text-black underline hover:no-underline">
              Katedře fyziky
            </Link>{' '}
            na{' '}
            <Link href="https://www.fsv.cvut.cz" className="text-black underline hover:no-underline">
              Stavební fakultě ČVUT
            </Link>
          </p>
          <p className="text-base mt-2">
            Organizátor{' '}
            <Link href="https://www.facebook.com/tabor.mladych.matematiku"
                  className="text-black underline hover:no-underline">
              Tábora mladých matematiků
            </Link>
          </p>

          <p className="mt-2">
            <strong>E-mail:</strong> zbiratom@cvut.cz
          </p>
          <p className="mt-2">
            <strong>Místnost:</strong> A-624a
          </p>
          <p className="mt-2">
            <strong>Konzultační hodiny:</strong> Pátek 10:00 - 11:30
          </p>

          {/* Sekce Výuka */}
          <section id="vyuka" className="mt-10">
            <h2 className="text-2xl font-bold">Výuka</h2>
            <h3 className="text-lg mt-4">
              <Link href="http://departments.fsv.cvut.cz/k102/bakalarske-studium/fyzika"
                    className="text-black underline hover:no-underline">
                102FYI - Fyzika
              </Link>
            </h3>
          </section>

          {/* Sekce Publikace */}
          <section id="publikace" className="mt-10">
            <h2 className="text-2xl font-bold">Publikace</h2>

            {/* Rok 2025 */}
            <h3 className="text-xl font-semibold mt-6">2025</h3>
            <ul className="list-disc ml-5">
              <li className="mt-2">
                S. Vítek, T. Zbíral, V. Nežerka: {' '}
                <Link href="https://www.researchgate.net/publication/387767790_Using_hyperspectral_imaging_to_identify
                _optimal_narrowband_filter_parameters_for_construction_and_demolition_waste_classification"
                      className="font-semibold text-black underline hover:no-underline">
                  Using hyperspectral imaging to identify optimal narrowband filter parameters for construction and
                  demolition waste classification
                </Link>
              </li>
            </ul>

            {/* Rok 2024 */}
            <h3 className="text-xl font-semibold mt-6">2024</h3>
            <ul className="list-disc ml-5">
              <li className="mt-2">
                T. Zbíral: {' '}
                <Link href="/pdfs/Bc-TomasZbiral.pdf" className="font-semibold text-black underline hover:no-underline">
                  Classification of construction and demolition waste using computer vision
                </Link>{' '} (bakalářská práce)
              </li>
            </ul>

            {/* Rok 2023 */}
            <h3 className="text-xl font-semibold mt-6">2023</h3>
            <ul className="list-disc ml-5">
              <li className="mt-2">
                T. Zbíral, V. Nežerka: {' '}
                <Link href="https://www.researchgate.net/publication/374855694_Computer_Vision-Based_Algorithms_for_
                Recognition_of_Construction_and_Demolition_Waste_Materials"
                      className="font-semibold text-black underline hover:no-underline">
                  Computer Vision-Based Algorithms for Recognition of Construction and Demolition Waste Materials
                </Link>
              </li>
              <li className="mt-2">
                V. Nežerka, T. Zbíral, J. Trejbal: {' '}
                <Link href="https://www.researchgate.net/publication/374200994_Machine-learning-assisted_classification
                _of_construction_and_demolition_waste_fragments_using_computer_vision_Convolution_versus_extraction_of_
                selected_features" className="font-semibold text-black underline hover:no-underline">
                  Machine-leaning-assisted classification of construction and demolition waste fragments using computer
                  vision: Convolution versus extraction of selected features
                </Link>
              </li>
            </ul>
          </section>
        </div>

        {/* Přidání portrétu na pravou stranu */}
        <div className="ml-8">
          <Image
            src="/images/portret.png"
            alt="Portrét"
            width={300}  // můžeš upravit podle potřeby
            height={300}  // můžeš upravit podle potřeby
          />
        </div>
      </main>
    </div>
  );
}
