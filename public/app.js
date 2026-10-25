/* =========================================================
   METALCORE TIMELINE — app.js
   Entidade principal: BANDAS
   Entidade secundária: ÁLBUNS  (Banda → Álbuns)

   Estrutura de cada banda:
   - id, nome, descricao (curta p/ cards e slider)
   - biografia        → bloco "Biografia / História"
   - estiloMusical    → bloco "Estilo e Características Sonoras"
   - pais, anoFormacao, genero, vocalista, integrantes
   - destaque, imagemPrincipal
   ========================================================= */

const dados = {
  bandas: [
    /* ---------------------------------------------------- 1 */
    {
      id: 1,
      nome: "Bring Me The Horizon",
      descricao: "Pioneiros do metalcore britânico moderno, com evolução sonora constante.",
      biografia: "Formada em 2004 em Sheffield, Inglaterra, a Bring Me The Horizon surgiu como parte da cena deathcore britânica com o EP 'This Is What the Edge of Your Seat Was Made For' (2004) e o álbum de estreia 'Count Your Blessings' (2006). Liderada pelo vocalista Oliver Sykes, a banda logo chamou atenção pela intensidade brutal dos shows e pela estética visualmente marcante. Com 'Suicide Season' (2008), o grupo já sinalizava uma transição para o metalcore, aprofundada em 'There Is a Hell, Believe Me I've Seen It. There Is a Heaven, Let's Keep It a Secret' (2010). O divisor de águas veio com 'Sempiternal' (2013), que consolidou a maturidade sonora da banda e trouxe influências de post-rock, eletrônico e ambient. A partir daí, o grupo abandonou progressivamente as raízes mais extremas: 'That's the Spirit' (2015) flertou com o rock alternativo, enquanto 'Amo' (2019) mergulhou de vez no pop e na eletrônica. Com os projetos 'Post Human: Survival Horror' (2020) e 'Post Human: NeX GEn' (2024), a banda se reposicionou como um projeto multimídia que mistura gêneros, colaborações e uma estética digital. Hoje é headliner de festivais como Reading & Leeds e Download, e referência absoluta para toda uma geração de bandas.",
      estiloMusical: "A sonoridade da BMTH é marcada por uma constante reinvenção. Nos primeiros trabalhos, predominavam breakdowns deathcore, blast beats e vocais guturais. A partir de 'Sempiternal', a banda passou a incorporar sintetizadores atmosféricos, camadas orquestrais e batidas eletrônicas, criando um metalcore mais melódico e cinematográfico. Nos discos recentes, a influência de pop, electronica, ambient e até hip-hop é evidente — guitarras afinadas em drop, refrãos cantados, uso de autotune e texturas digitais. Oliver Sykes transita com naturalidade entre screams rasgados, sussurros, vocais limpos e até rap. As letras abordam temas como saúde mental, religião, existencialismo e crítica social. Entre as principais influências declaradas estão Linkin Park, Deftones, Nine Inch Nails, Radiohead e Slipknot.",
      pais: "Reino Unido",
      anoFormacao: 2004,
      genero: "Metalcore / Alternative Metal / Electronic Rock",
      vocalista: "Oliver Sykes",
      integrantes: "Oliver Sykes, Lee Malia, Matt Kean, Matt Nicholls",
      destaque: true,
      imagemPrincipal: "bmth-pose.jpeg"
    },

    /* ---------------------------------------------------- 2 */
    {
      id: 2,
      nome: "Architects",
      descricao: "Metalcore técnico com letras politicamente engajadas e riffs marcantes.",
      biografia: "Nascida em Brighton, Inglaterra, em 2004, a Architects começou tocando um metalcore técnico com forte influência de mathcore e hardcore melódico. Os primeiros álbuns — 'Nightmares' (2006) e 'Ruin' (2007) — já mostravam apegada técnica e rítmica pouco comum na cena. Com 'Hollow Crown' (2009) e 'The Here and Now' (2011), o grupo experimentou com estruturas mais acessíveis, mas foi em 'Lost Forever // Lost Together' (2014) e 'All Our Gods Have Abandoned Us' (2016) que atingiu sua maturidade criativa. A morte precoce do guitarrista e principal compositor Tom Searle em 2016 marcou profundamente a banda; o álbum 'Holy Hell' (2018) foi escrito como uma catarse coletiva e é considerado um dos mais emocionantes do gênero. Em 2021, 'For Those That Wish to Exist' levou a banda ao topo das paradas britânicas, e 'The Classic Symptoms of a Broken Spirit' (2022) aprofundou a veia industrial. Em 2025, o grupo lançou 'The Sky, The Earth & All Between', reafirmando sua relevância.",
      estiloMusical: "A Architects é conhecida por uma abordagem técnica e atmosférica do metalcore. As guitarras trabalham riffs angulares, palhetadas alternadas precisas e harmonias em terças, enquanto a bateria (assinada por Dan Searle) abusa de blast beats, polirritmias e viradas complexas. O vocalista Sam Carter alterna com naturalidade entre screams rasgados, guturais e vocais limpos carregados de emoção. As letras são fortemente engajadas politicamente — falam de mudanças climáticas, corrupção, desigualdade, luto e resistência. Entre as influências declaradas estão Meshuggah, Botch, Deftones, Thrice e Refused. A banda também incorpora sintetizadores, camadas orquestrais e texturas ambientais em trabalhos mais recentes.",
      pais: "Reino Unido",
      anoFormacao: 2004,
      genero: "Metalcore / Mathcore / Atmospheric Metalcore",
      vocalista: "Sam Carter",
      integrantes: "Sam Carter, Adam Christianson, Alex Dean, Dan Searle, Josh Middleton",
      destaque: true,
      imagemPrincipal: "architects-pose.jpeg"
    },

    /* ---------------------------------------------------- 3 */
    {
      id: 3,
      nome: "Killswitch Engage",
      descricao: "Uma das bandas que definiu a primeira onda do metalcore americano.",
      biografia: "Formada em Westfield, Massachusetts, em 1999, a Killswitch Engage é um dos pilares da chamada 'New Wave of American Heavy Metal'. O álbum de estreia autointitulado (2000) chamou atenção pela fusão de breakdowns pesados com refrãos melódicos, mas foi 'Alive or Just Breathing' (2002) — já com o vocalista Howard Jones — que a colocou definitivamente no mapa. 'The End of Heartache' (2004) atingiu disco de ouro nos Estados Unidos, impulsionado pelo single homônimo e por 'Rose of Sharyn'. 'As Daylight Dies' (2006) consolidou a fase mais popular, e a banda seguiu lançando discos elogiados como 'Killswitch Engage' (2009), 'Disarm the Descent' (2013) — com o retorno de Jesse Leach —, 'Incarnate' (2016), 'Atonement' (2019) e 'This Consequence' (2025). A formação atual reúne membros originais e veteranas da cena de Massachusetts, e a banda é frequentemente citada como uma das mais influentes do metalcore moderno, tendo ajudado a popularizar o gênero no mainstream.",
      estiloMusical: "O som da Killswitch Engage é definido por um equilíbrio raro entre peso e melodia. As guitarras trabalham riffs harmonizados no estilo NWOBHM, com influências claras de Iron Maiden, At the Gates e In Flames, além de breakdowns secos e precisos. O baixo e a bateria seguem uma pegada thrash/groove que dá coesão ao conjunto. A grande marca da banda está na alternância entre vocais guturais agressivos e refrãos limpos extremamente melódicos — característica que se tornou padrão no metalcore americano dos anos 2000. As letras transitam entre temas introspectivos, espirituais e políticos, sempre com tom reflexivo. Adam Dutkiewicz é um dos produtores mais requisitados do gênero e imprime à banda uma assinatura sonora inconfundível.",
      pais: "Estados Unidos",
      anoFormacao: 1999,
      genero: "Metalcore / Melodic Metalcore",
      vocalista: "Jesse Leach",
      integrantes: "Jesse Leach, Adam Dutkiewicz, Joel Stroetzel, Mike D'Antonio, Justin Foley",
      destaque: true,
      imagemPrincipal: "killswitch-pose.jpeg"
    },

    /* ---------------------------------------------------- 4 */
    {
      id: 4,
      nome: "Spiritbox",
      descricao: "Dupla canadense que mistura metalcore, djent e elementos eletrônicos.",
      biografia: "Fundada em 2017 na Ilha de Vancouver, no Canadá, a Spiritbox nasceu do casamento entre o guitarrista Mike Stringer (ex-Iwrestledabearonce) e a vocalista Courtney LaPlante. Os primeiros EPs autointitulados e a compilação 'Singles Collection' (2019) já chamaram atenção pela produção moderna e pela versatilidade vocal de Courtney. O álbum de estreia 'Eternal Blue' (2021) foi aclamado pela crítica, entrou em listas de melhores do ano e transformou a dupla em uma das bandas mais comentadas da nova geração. Vieram depois o EP 'Rotoscope' (2022) e o EP 'The Fear of Fear' (2023), que ampliaram ainda mais o alcance sonoro do grupo. Em 2025, lançaram 'Tsunami Sea', consolidando a maturidade composicional da banda. Com uma base de fãs extremamente engajada e turnês esgotadas na Europa e América do Norte, a Spiritbox se tornou símbolo de uma nova fase do metalcore: mais experimental, atmosférica e aberta a influências externas ao gênero.",
      estiloMusical: "A Spiritbox combina metalcore moderno, djent, prog metal e elementos eletrônicos em uma sonoridade densa e etérea. As guitarras de Mike Stringer usam afinações graves, riffs sincopados e texturas ambientes criadas por pedais e sintetizadores. A bateria programada e as camadas eletrônicas remetem a nomes como TesseracT e Northlane. O grande diferencial está na voz de Courtney LaPlante, capaz de alternar entre guturais profundos, screams rasgados, sussurros e vocais limpos de rara doçura — tudo dentro da mesma música. As letras exploram temas como ansiedade, relacionamentos tóxicos, luto e autoconhecimento. Entre as influências da banda estão Deftones, Karnivool, Architects, Gojira e Linkin Park.",
      pais: "Canadá",
      anoFormacao: 2017,
      genero: "Metalcore / Djent / Metal Alternativo",
      vocalista: "Courtney LaPlante",
      integrantes: "Courtney LaPlante, Mike Stringer, Josh Gilbert, Zev Rose",
      destaque: true,
      imagemPrincipal: "spiritbox-pose.jpeg"
    },

    /* ---------------------------------------------------- 5 */
    {
      id: 5,
      nome: "Bad Omens",
      descricao: "Funde metalcore com industrial, synth-pop e uma estética sombria.",
      biografia: "Formada em Richmond, Virgínia, em 2015, a Bad Omens surgiu como um projeto ambicioso capitaneado pelo vocalista Noah Sebastian e pelo guitarrista Nicholas Ruffilo. O álbum de estreia autointitulado (2016) chamou atenção pela fusão de metalcore com industrial e elementos eletrônicos, e 'Finding God Before God Finds Me' (2019) aprofundou essa busca sonora. O grande salto veio com 'The Death of Peace of Mind' (2022), um dos discos mais virais da década — impulsionado pela faixa-título e por 'Just Pretend', que estouraram nas redes sociais e levaram a banda a palcos de festivais como o Download e o Aftershock. Em 2024, lançaram o EP 'Concrete Jungle', flertando com synthwave e R&B, e seguem expandindo os limites do que se entende por metalcore moderno. A Bad Omens é hoje um fenômeno geracional, com forte presença digital e uma base de fãs que transcende o público tradicional da música pesada.",
      estiloMusical: "A sonoridade da Bad Omens é híbrida por definição: metalcore, metal industrial, synth-pop, trip-hop e até R&B coexistem em um mesmo disco. As guitarras afiadas e os breakdowns típicos do gênero convivem com sintetizadores atmosféricos, batidas eletrônicas e camadas de voz processada. Noah Sebastian explora desde sussurros e falsetes até guturais devastadores, sempre guiado por uma produção impecável. As letras mergulham em temas como saúde mental, relacionamentos disfuncionais, ansiedade e autossabotagem. A estética visual — máscaras, cores escuras, referências digitais — reforça a identidade da banda, que se aproxima mais de um projeto multimídia do que de uma banda tradicional. Influências: Bring Me The Horizon, Nine Inch Nails, Sleep Token, Deftones e Linkin Park.",
      pais: "Estados Unidos",
      anoFormacao: 2015,
      genero: "Metalcore / Industrial Metal / Alternative Metal",
      vocalista: "Noah Sebastian",
      integrantes: "Noah Sebastian, Nicholas Ruffilo, Joakim Karlsson, Nick Folio",
      destaque: false,
      imagemPrincipal: "bad-omens-pose.jpeg"
    },

    /* ---------------------------------------------------- 6 */
    {
      id: 6,
      nome: "Underoath",
      descricao: "Pioneiros do metalcore cristão com sonoridade intensa e emocional.",
      biografia: "Formada em Tampa, Flórida, em 1997, a Underoath é uma das bandas mais influentes do metalcore e do post-hardcore dos anos 2000. Depois de discos iniciais com o vocalista Dallas Taylor, a banda encontrou sua formação clássica com a entrada de Spencer Chamberlain em 'They're Only Chasing Safety' (2004), um marco absoluto da cena. 'Define the Great Line' (2006) estreou em segundo lugar na Billboard 200 e mostrou um lado mais atmosférico e experimental. Seguiram-se 'Lost in the Sound of Separation' (2008), 'Ø (Disambiguation)' (2010) e um hiato em 2013. O retorno veio com 'Erase Me' (2018), 'Voyeurist' (2022) e 'The Place After This One' (2025), reafirmando a relevância da banda. A Underoath sempre foi associada à cena cristã do metalcore, mas suas letras, marcadas por dúvidas e crises existenciais, transcendem qualquer rótulo religioso.",
      estiloMusical: "O som da Underoath é definido por dinâmicas extremas: passagens caóticas com screams rasgados e blast beats alternam com refrãos limpos, teclados atmosféricos e momentos quase ambientais. Aaron Gillespie toca bateria e canta ao mesmo tempo, criando uma dualidade vocal única com Spencer Chamberlain. As guitarras trabalham riffs dissonantes e texturas melódicas em igual medida, com influências de post-hardcore (At the Drive-In, Refused) e metalcore (Poison the Well, Zao). A banda também incorpora elementos eletrônicos e experimentais em discos mais recentes, aproximando-se de nomes como Bring Me The Horizon e The Devil Wears Prada. A coesão entre peso e melancolia é o principal diferencial do grupo.",
      pais: "Estados Unidos",
      anoFormacao: 1997,
      genero: "Metalcore / Post-Hardcore / Screamo",
      vocalista: "Spencer Chamberlain",
      integrantes: "Spencer Chamberlain, Aaron Gillespie, Timothy McTague, Grant Brandell, Christopher Dudley",
      destaque: false,
      imagemPrincipal: "under-pose.jpeg"
    },

    /* ---------------------------------------------------- 7 */
    {
      id: 7,
      nome: "Converge",
      descricao: "Lendários do metalcore experimental e caótico de Massachusetts.",
      biografia: "Formada em Salem, Massachusetts, em 1990, a Converge é considerada uma das bandas mais importantes e influentes da história do metalcore e do mathcore. Depois de discos iniciais ainda bastante ancorados no hardcore — 'Halo in a Haystack' (1994), 'Petitioning the Empty Sky' (1997) e 'When Forever Comes Crashing' (1998) — a banda lançou em 2001 o icônico 'Jane Doe', frequentemente citado como um dos melhores álbuns de metal extremo de todos os tempos. Vieram 'You Fail Me' (2004), 'No Heroes' (2006), 'Axe to Fall' (2009), 'All We Love We Leave Behind' (2012) e 'The Dusk in Us' (2017), todos aclamados pela crítica. Em 2021, a banda surpreendeu com o projeto colaborativo 'Bloodmoon' ao lado da cantora Chelsea Wolfe. A Converge é referência absoluta para bandas como Knocked Loose, Code Orange e Vein.fm, e segue na ativa com a mesma intensidade devastadora dos primeiros anos.",
      estiloMusical: "A Converge é a definição sonora do caos controlado. As composições misturam mathcore, noise rock, hardcore punk e metal extremo, com mudanças abruptas de andamento, riffs angulares e dissonâncias propositais. A bateria de Ben Koller — influenciada por jazz e free improvisation — sustenta uma base rítmica imprevisível. Os vocais de Jacob Bannon são viscerais, mais próximos de um grito de desespero do que de uma performance tradicional. As letras, densas e poéticas, abordam temas existenciais, luto, perda e alienação. Kurt Ballou, além de guitarrista, é um dos produtores mais respeitados do metal moderno, imprimindo às gravações um som cru, seco e brutal. Influências: Black Flag, Slayer, Neurosis, Botch, Rorschach.",
      pais: "Estados Unidos",
      anoFormacao: 1990,
      genero: "Metalcore / Mathcore / Noise Rock",
      vocalista: "Jacob Bannon",
      integrantes: "Jacob Bannon, Kurt Ballou, Nate Newton, Ben Koller",
      destaque: false,
      imagemPrincipal: "converge-pose.jpeg"
    },

    /* ---------------------------------------------------- 8 */
    {
      id: 8,
      nome: "LANDMVRKS",
      descricao: "Metalcore moderno francês com influências de rap e eletrônico.",
      biografia: "Formada em Marselha, na França, em 2014, a LANDMVRKS rapidamente se destacou na cena europeia por misturar metalcore moderno com rap, nu-metal e elementos eletrônicos. Depois do EP de estreia e do álbum 'Hollow' (2016), a banda consolidou seu nome com 'Fantasy' (2018), que chamou atenção pela pegada grooveada e pelos refrãos cantáveis. 'Lost in the Waves' (2021) marcou a consagração internacional, com turnês pela Europa, América do Norte e Ásia. Em 2025, lançaram 'The Darkest Place I've Ever Been', ampliando ainda mais o alcance sonoro do grupo, com produção moderna e colaborações. O vocalista Florent Salfati canta em inglês e francês, trazendo uma identidade linguística rara no gênero. A LANDMVRKS é hoje um dos nomes mais interessantes da nova geração do metalcore europeu, ao lado de bandas como Novelists, ten56. e Resolve.",
      estiloMusical: "A LANDMVRKS combina metalcore moderno com nu-metal, rap e música eletrônica. As guitarras trabalham grooves pesados, riffs sincopados e afinações graves, com breakdowns que remetem à cena francesa contemporânea. A base rítmica aposta em batidas eletrônicas, sintetizadores e samples, criando uma atmosfera urbana e noturna. Florent Salfati transita entre screams rasgados, guturais, rap, spoken word e vocais limpos, alternando idiomas de forma natural. As letras abordam temas como identidade, pertencimento, ansiedade e vida nas grandes cidades. Influências: Linkin Park, Of Mice & Men, Crystal Lake, Northlane, Enter Shikari.",
      pais: "França",
      anoFormacao: 2014,
      genero: "Metalcore / Nu-Metalcore",
      vocalista: "Florent Salfati",
      integrantes: "Florent Salfati, Nicolas Exposito, Rudy Purkart, Thomas Lebreton, Paul Cordebard",
      destaque: false,
      imagemPrincipal: "landmarks-pose.jpeg"
    },

    /* ---------------------------------------------------- 9 */
    {
      id: 9,
      nome: "156/Silence",
      descricao: "Metalcore moderno cru, dissonante e teatral de Pittsburgh.",
      biografia: "Formada em Pittsburgh, Pensilvânia, em 2015, a 156/Silence construiu sua reputação no underground americano com uma sequência de discos cada vez mais ousados: 'Undercover Scumbag' (2015), 'Uprising' (2017), 'Irrational Pull' (2020) e 'Narrative' (2022). O grande salto veio com 'People Watching' (2024), lançado pela SharpTone Records, que colocou a banda definitivamente no radar do metalcore moderno. O disco foi aclamado pela crítica por sua abordagem crua, dissonante e teatral, misturando peso extremo com passagens quase cinematográficas. A formação inclui o vocalista Jack Murray, cujo estilo mistura spoken word, sussurros, sussurros guturais e gritos desesperados. A banda é frequentemente citada ao lado de nomes como Knocked Loose, Vein.fm e Chamber, representando a nova vanguarda do metalcore americano — mais sombria, imprevisível e disposta a quebrar as regras do gênero.",
      estiloMusical: "A 156/Silence pratica um metalcore moderno e dissonante, com forte influência de mathcore, noise rock e post-metal. As músicas são construídas sobre estruturas imprevisíveis, com viradas abruptas de andamento, riffs angulares e texturas de guitarra sujas. A bateria alterna entre blast beats, grooves pesados e passagens quase jazzy. Jack Murray é o centro das atenções: seus vocais vão de sussurros desconfortáveis a gritos guturais, criando uma sensação constante de tensão. As letras exploram temas como violência urbana, alienação, decadência e o lado mais sombrio da natureza humana. Influências: The Dillinger Escape Plan, Code Orange, Knocked Loose, Daughters, Chat Pile.",
      pais: "Estados Unidos",
      anoFormacao: 2015,
      genero: "Metalcore / Mathcore / Metal Alternativo",
      vocalista: "Jack Murray",
      integrantes: "Jack Murray, Ryan Wilkinson, Evan Shuster, Lucas Dunavan, Josh Catanese",
      destaque: false,
      imagemPrincipal: "156-silence-pose.jpeg"
    }
  ],

  /* Álbuns — campos: id, bandaId, nome, ano, descricao, imagem */
  albuns: [
    { id: 1, bandaId: 1, nome: "Sempiternal",                       ano: 2013, descricao: "O divisor de águas da banda: mistura de metalcore, post-rock e eletrônica.", imagem: "sempiternal.png" },
    { id: 2, bandaId: 1, nome: "That's the Spirit",                 ano: 2015, descricao: "Virada para o rock alternativo, com hits como 'Throne' e 'Happy Song'.",  imagem: "spirit.jpeg" },
    { id: 3, bandaId: 1, nome: "Count your Blessings",              ano: 2006, descricao: "Primeiro album da banda, tem um som muito mais agressivo e pesado (Deathcore).", imagem: "count-your-blessings.jpeg" },

    { id: 4, bandaId: 2, nome: "Lost Forever // Lost Together",     ano: 2014, descricao: "Marco do metalcore britânico moderno, denso e politicamente engajado.",   imagem: "lost-forever-lost-together.png" },
    { id: 5, bandaId: 2, nome: "All Our Gods Have Abandoned Us",    ano: 2016, descricao: "Último álbum com Tom Searle; letras sobre clima, política e morte.",       imagem: "gods.jpeg" },
    { id: 6, bandaId: 2, nome: "Holy Hell",                         ano: 2018, descricao: "Catarse coletiva após a perda de Tom Searle.",                            imagem: "holy-hell.jpeg" },

    { id: 7, bandaId: 3, nome: "Alive or Just Breathing",           ano: 2002, descricao: "Álbum que definiu o metalcore melódico americano.",                       imagem: "alive.jpeg" },
    { id: 8, bandaId: 3, nome: "The End of Heartache",              ano: 2004, descricao: "Disco de ouro, com a faixa-título e 'Rose of Sharyn'.",                    imagem: "the-end.jpeg" },
    { id: 9, bandaId: 3, nome: "As Daylight Dies",                  ano: 2007, descricao: "Clássico do gênero, com hits como 'My Curse'.",                           imagem: "as-daylight-dies.png" },

    { id: 10, bandaId: 4, nome: "Eternal Blue",                     ano: 2021, descricao: "Estreia aclamada, etérea e pesada ao mesmo tempo.",                        imagem: "blue.png" },
    { id: 11, bandaId: 4, nome: "The Fear of Fear",                 ano: 2023, descricao: "EP que amplia o alcance sonoro do grupo.",                                imagem: "fear.jpeg" },
    { id: 12, bandaId: 4, nome: "Tsunami Sea",                      ano: 2025, descricao: "Consolidação da maturidade composicional da banda.",                      imagem: "tsunami.jpeg" },

    { id: 13, bandaId: 5, nome: "Bad Omens",                        ano: 2016, descricao: "Estreia que apresentou a banda ao mundo do metalcore.",                   imagem: "bad-omens.png" },
    { id: 14, bandaId: 5, nome: "Finding God Before God Finds Me",  ano: 2019, descricao: "Aprofundamento da veia industrial e melódica.",                          imagem: "finding-god.jpeg" },
    { id: 15, bandaId: 5, nome: "The Death of Peace of Mind",       ano: 2022, descricao: "Álbum viral, com 'Just Pretend' e a faixa-título.",                       imagem: "peace-mind.jpeg" },

    { id: 16, bandaId: 6, nome: "They're Only Chasing Safety",      ano: 2004, descricao: "Marco do post-hardcore/metalcore dos anos 2000.",                          imagem: "under.png" },
    { id: 17, bandaId: 6, nome: "Define the Great Line",            ano: 2006, descricao: "Estreou em #2 na Billboard 200; lado mais atmosférico.",                   imagem: "line.jpeg" },
    { id: 18, bandaId: 6, nome: "Voyeurist",                        ano: 2022, descricao: "Retorno à veia experimental e pesada.",                                    imagem: "voyer.jpeg" },

    { id: 19, bandaId: 7, nome: "Jane Doe",                         ano: 2001, descricao: "Obra-prima caótica do metalcore experimental.",                          imagem: "Jane.png" },
    { id: 20, bandaId: 7, nome: "Axe to Fall",                      ano: 2009, descricao: "Um dos discos mais densos e completos da banda.",                        imagem: "axe.jpeg" },
    { id: 21, bandaId: 7, nome: "The Dusk in Us",                   ano: 2017, descricao: "Retorno mais atmosférico e introspectivo.",                               imagem: "dusk.jpeg" },

    { id: 22, bandaId: 8, nome: "Fantasy",                          ano: 2018, descricao: "Consolidação do groove e dos refrãos cantáveis.",                         imagem: "fantasy.jpeg" },
    { id: 23, bandaId: 8, nome: "Lost in the Waves",                ano: 2021, descricao: "Consagração internacional do metalcore francês.",                         imagem: "waves.jpeg" },
    { id: 24, bandaId: 8, nome: "The Darkest Place I've Ever Been", ano: 2025, descricao: "Disco mais recente, com produção moderna e colaborações.",                imagem: "place.png" },

    { id: 25, bandaId: 9, nome: "Irrational Pull",                  ano: 2020, descricao: "Consolidação da identidade dissonante e teatral.",                        imagem: "pull.jpeg" },
    { id: 26, bandaId: 9, nome: "Narrative",                        ano: 2022, descricao: "Disco mais ambicioso e atmosférico.",                                     imagem: "narrative.jpeg" },
    { id: 27, bandaId: 9, nome: "People Watching",                  ano: 2024, descricao: "Aclamado álbum de metalcore dissonante e teatral.",                        imagem: "vendo.png" }
  ]
};

/* ---------- Helpers ---------- */
function getBandasDestaque()      { return dados.bandas.filter(b => b.destaque === true); }
function getTodasBandas()         { return dados.bandas; }
function getBandaPorId(id)        { return dados.bandas.find(b => b.id === Number(id)); }
function getAlbunsPorBanda(bid)   { return dados.albuns.filter(a => a.bandaId === Number(bid)); }

/* ---------- Slider ---------- */
function montarSlider() {
  const carousel = document.getElementById('sliderDestaques');
  if (!carousel) return;

  const inner = carousel.querySelector('.carousel-inner');
  const indicators = carousel.querySelector('.carousel-indicators');
  const destaques = getBandasDestaque();

  if (!destaques.length) {
    inner.innerHTML = '<div class="carousel-item active"><p class="p-5 text-center">Nenhuma banda em destaque.</p></div>';
    return;
  }

  destaques.forEach((banda, i) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-item' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="slide-conteudo">
        <img src="${banda.imagemPrincipal}" alt="Imagem da banda ${banda.nome}" class="slide-imagem">
        <div class="slide-texto">
          <h3 class="slide-nome">${banda.nome}</h3>
          <p class="slide-descricao">${banda.descricao}</p>
          <a href="detalhes.html?id=${banda.id}" class="btn botao-destaque">Ver detalhes</a>
        </div>
      </div>`;
    inner.appendChild(slide);

    const ind = document.createElement('button');
    ind.type = 'button';
    ind.setAttribute('data-bs-target', '#sliderDestaques');
    ind.setAttribute('data-bs-slide-to', String(i));
    ind.setAttribute('aria-label', `Slide ${i + 1}`);
    if (i === 0) { ind.classList.add('active'); ind.setAttribute('aria-current', 'true'); }
    indicators.appendChild(ind);
  });
}

/* ---------- Cards ---------- */
function montarCards() {
  const container = document.getElementById('listaBandas');
  if (!container) return;

  getTodasBandas().forEach(banda => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4 col-xl-3';
    col.innerHTML = `
      <article class="card banda-card border-0 h-100">
        <img src="${banda.imagemPrincipal}" class="card-img-top" alt="Imagem da banda ${banda.nome}">
        <div class="card-body d-flex flex-column">
          <h3 class="card-title h5">${banda.nome}</h3>
          <p class="card-text flex-grow-1">${banda.descricao}</p>
          <a href="detalhes.html?id=${banda.id}" class="btn botao-era mt-auto">Ver detalhes</a>
        </div>
      </article>`;
    container.appendChild(col);
  });
}

/* ---------- Detalhes ---------- */
function montarDetalhes() {
  const container = document.getElementById('detalhesBanda');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const idParam = params.get('id');

  if (!idParam) {
    container.innerHTML = `
      <div class="erro-container">
        <h1>Página não encontrada</h1>
        <p>Nenhum ID de banda foi informado na URL.</p>
        <a href="index.html" class="btn botao-era">Voltar ao início</a>
      </div>`;
    return;
  }

  const id = parseInt(idParam, 10);
  if (Number.isNaN(id)) {
    container.innerHTML = `
      <div class="erro-container">
        <h1>Página não encontrada</h1>
        <p>O ID informado não é válido.</p>
        <a href="index.html" class="btn botao-era">Voltar ao início</a>
      </div>`;
    return;
  }

  const banda = getBandaPorId(id);
  if (!banda) {
    container.innerHTML = `
      <div class="erro-container">
        <h1>Página não encontrada</h1>
        <p>Nenhuma banda corresponde ao ID <strong>${id}</strong>.</p>
        <a href="index.html" class="btn botao-era">Voltar ao início</a>
      </div>`;
    return;
  }

  document.title = `${banda.nome} — Metalcore Timeline`;

  /* ============== Estrutura conceitual da página ==============
     DETALHES DA BANDA
     ├── Identificação (nome, imagem, informações principais)
     ├── Biografia / História          → bloco destacado
     ├── Estilo e Características      → bloco destacado
     └── Principais Álbuns             → grid dinâmico
     ============================================================ */
  container.innerHTML = `
    <section class="banda-hero row g-4 align-items-center mb-5">
      <div class="col-12 col-md-5">
        <img src="${banda.imagemPrincipal}" alt="Imagem da banda ${banda.nome}" class="banda-imagem img-fluid">
      </div>
      <div class="col-12 col-md-7">
        <span class="banda-tag">${banda.genero}</span>
        <h1 class="banda-nome">${banda.nome}</h1>
        <p class="banda-descricao">${banda.descricao}</p>

        <div class="banda-info-grid">
          <div class="info-item">
            <span class="info-label">País</span>
            <span class="info-valor">${banda.pais}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Ano de formação</span>
            <span class="info-valor">${banda.anoFormacao}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Gênero</span>
            <span class="info-valor">${banda.genero}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Vocalista</span>
            <span class="info-valor">${banda.vocalista}</span>
          </div>
          <div class="info-item info-item-full">
            <span class="info-label">Integrantes</span>
            <span class="info-valor">${banda.integrantes}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="banda-biografia mb-5">
      <header class="bloco-header">
        <h2>Biografia / História</h2>
      </header>
      <p>${banda.biografia}</p>
    </section>

    <section class="banda-estilo mb-5">
      <header class="bloco-header">
        <h2>Estilo e Características Sonoras</h2>
      </header>
      <p>${banda.estiloMusical}</p>
    </section>

    <section class="banda-albuns">
      <header class="bloco-header">
        <h2>Principais Álbuns</h2>
      </header>
      <div class="row g-4 mt-1" id="listaAlbuns"></div>
    </section>
  `;

  const albuns = getAlbunsPorBanda(banda.id);
  const albumContainer = document.getElementById('listaAlbuns');

  if (!albuns.length) {
    albumContainer.innerHTML = `
      <div class="col-12">
        <p class="sem-albuns">Nenhum álbum cadastrado para esta banda.</p>
      </div>`;
    return;
  }

  albuns.forEach(album => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-lg-4';
    col.innerHTML = `
      <article class="card album-detalhe-card border-0 h-100">
        <img src="${album.imagem}" class="card-img-top" alt="Capa do álbum ${album.nome}">
        <div class="card-body">
          <span class="album-ano">${album.ano}</span>
          <h3 class="card-title h5">${album.nome}</h3>
          <p class="card-text">${album.descricao}</p>
        </div>
      </article>`;
    albumContainer.appendChild(col);
  });
}

/* ---------- Init ---------- */
function initApp() {
  montarSlider();
  montarCards();
  montarDetalhes();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
