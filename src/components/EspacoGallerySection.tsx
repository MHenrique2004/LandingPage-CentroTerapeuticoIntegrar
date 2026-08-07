import React from 'react';
import { DIRECT_IMAGE_ASSETS } from '../data/content';
import { MapPin, Copy, Check } from 'lucide-react';

export const EspacoGallerySection: React.FC = () => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const handleCopyUrl = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="espaco" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#8edcfd]/30 text-[#006782] text-xs font-bold uppercase tracking-widest rounded-full">
            <MapPin className="w-4 h-4" />
            <span>Infraestrutura Clínica Preparada</span>
          </div>
          <h2 className="font-display text-5xl sm:text-7xl text-[#000061] tracking-wider uppercase">
            NOSSO ESPAÇO
          </h2>
          <p className="text-base text-[#464653] max-w-2xl font-medium">
            Salas planejadas para estímulo sensorial seguro, conforto das famílias e salas individuais de intervenção ABA.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIRECT_IMAGE_ASSETS.map((asset) => (
          <div
            key={asset.id}
            className="group bg-white rounded-3xl border border-[#e4e1eb] overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="relative h-56 overflow-hidden bg-[#efecf6]">
              <img
                src={asset.url}
                alt={asset.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-extrabold text-[#000061]">{asset.title}</h3>
                <p className="text-xs text-[#464653] mt-1 font-medium leading-relaxed">{asset.description}</p>
              </div>

              <div className="pt-2 border-t border-[#e4e1eb] flex items-center justify-between gap-2">
                <span className="text-[11px] text-[#006782] font-semibold truncate max-w-[180px]">
                {/*   {asset.url} */}
                </span>

                {/* <button
                  onClick={() => handleCopyUrl(asset.url, asset.id)}
                  className="p-2 rounded-xl bg-[#f5f2fc] hover:bg-[#8edcfd]/30 text-[#000061] transition-colors cursor-pointer shrink-0 flex items-center gap-1 text-[10px] font-bold"
                  title="Copiar URL Direta"
                >
                  {copiedId === asset.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Link</span>
                    </>
                  )}
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
