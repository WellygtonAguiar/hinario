// Harpa Cristã — 640 hinos
// Fonte oficial: harpacrista.org | Atualizado: 2026

const HARPA_DATA = [
{id:"h001",num:1,title:"Chuvas de Graça",category:"harpa",author:"José Rodrigues",lyrics:`Deus prometeu com certeza
Chuvas de graça mandar;
Ele nos dá fortaleza,
E ricas bênçãos sem par

Coro:
Chuvas de graça,
Chuvas pedimos, Senhor;
Manda-nos chuvas constantes,
Chuvas do Consolador.

Cristo nos tem concedido
O santo Consolador,
De plena paz nos enchido,
Para o reinado do amor.

Dá-nos, Senhor, amplamente,
Teu grande gozo e poder;
Fonte de amor permanente,
Põe dentro de nosso ser.

Faze os teus servos piedosos,
Dá-lhes virtude e valor,
Dando os teus dons preciosos,
Do santo Preceptor.`},
{id:"h002",num:2,title:"Saudosa Lembrança",category:"harpa",author:"Adriano Nobbre",lyrics:`Oh! que saudosa lembrança
Tenho de ti, ó Sião,
Terra que eu tanto amo,
Pois és do meu coração.
Eu para ti voarei,
Quando o Senhor meu voltar;
Pois Ele foi para o céu,
E breve vem me buscar.

Coro:
Sim, eu porfiarei por essa terra de além;
E lá terminarei as muitas lutas de aquém;
Lá está meu bom Senhor, ao qual eu desejo ver;
Ele é tudo p’ra mim, e sem Ele não posso viver.

Bela, mui bela, é a esperança,
Dos que vigiam por ti,
Pois eles recebem força,
Que só se encontra ali;
Os que procuram chegar
Ao teu regaço, ó Sião,
Livres serão de pecar
E de toda a tentação.

Diz a Sagrada Escritura,
Que são formosos os pés
Daqueles que boas novas
Levam para os infiéis;
E, se tão belo é falar
Dessas grandezas, aqui,
Que não será o gozar
A graça que existe ali!`},
{id:"h003",num:3,title:"Plena Paz",category:"harpa",author:"Adriano Nobbre",lyrics:`Plena paz e santo gozo,
Tenho em ti, ó meu Jesus!
Pois eu cri em Tua morte sobre a cruz;
No Senhor só confiando
Neste mundo viverei,
Entoando aleluias ao meu Rei!

Coro:
Oh! glória ao meu Jesus!
Pois é digno de louvor;
É meu Rei, meu bom Pastor,
E meu Senhor.
Como os anjos, que O louvam,
Eu também O louvarei,
Entoando aleluias ao meu Rei!

O amor de Jesus Cristo
É mui grande para mim,
Pois Sua graça me encheu de amor sem fim.
Meu Jesus foi para a glória,
Mas um dia eu O verei,
Entoando aleluias ao meu Rei!

Este mundo não deseja
Tão bondoso Salvador,
Não sabendo agradecer Seu grande amor.
Eu, porém, estou gozando
Do favor da Sua lei,
Entoando aleluias ao meu Rei!

Quando o povo israelita
Com Jesus se concertar,
Dando glória ao Seu nome, sem cessar.
Nesse tempo, céu e terra
Hão de ser a mesma grei,
Entoando aleluias ao meu Rei!`},
{id:"h004",num:4,title:"Deus Velará Por Ti",category:"harpa",author:"Anônimo",lyrics:`Não desanimes, Deus proverá;
Deus velará por ti;
Sob Suas asas te acolherá;
Deus velará por ti.

Coro:
Deus cuidará de ti
No teu viver, no teu sofrer;
Seu olhar te acompanhará;
Deus velará por ti.

Se o coração palpitar de dor,
Deus velará por ti;
Tu já provaste Seu terno amor.
Deus velará por ti.

Nos desalentos, nas provações,
Deus velará por ti;
Lembra-te dEle nas tentações;
Deus velará por ti.

Tudo o que pedes, Ele fará;
Deus velará por ti;
E o que precisas, não negará.
Deus velará por ti.

Como estiveres, não temas, vem!
Deus velará por ti;
Ele te entende e te ama bem!
Deus velará por ti.`},
{id:"h005",num:5,title:"Ó Desce Fogo Santo",category:"harpa",author:"José Rodrigues",lyrics:`Espírito, alma e corpo,
Oferto a Ti, Senhor,
Como hóstia verdadeira,
Em oblação de amor.

Coro:
Eu tudo a Deus consagro
Em Cristo, o vivo altar;
Ó desce, fogo santo,
Do céu vem tu selar!

Sou teu, ó Jesus Cristo!
Teu sangue me comprou;
Eu quero a Tua graça,
Pois de Ti sempre sou.

Espírito divino,
Do Pai a promissão;
Sedenta a alma pede,
A Ti, a santa unção.`},
{id:"h006",num:6,title:"Na Maldição Da Cruz",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Tu. na maldição da cruz,
Elevaste o Teu amor,
Em rogar, Senhor Jesus:
“Pai, perdoa ao transgressor".

Coro:
Queres, queres, com vigor,
Muitas almas despertar;
Queres, queres, ó Senhor!
Transformar, remir, curar;
Oh! Sim! Oh! Sim!
Queres todos renovar.

O Maligno tentador E o autor da perdição,
Do pecado, mal e dor, Da doença e da aflição.

Tu levaste, ó bom Jesus,
O pecado, o mal e a dor,
E a doença sobre a cruz;
És o grande Salvador!

Deus é bom, quer sempre o bem Do oprimido pecador;
Mal nenhum, em Si, Deus tem;
“Deus é luz, Deus é amor!”`},
{id:"h007",num:7,title:"Cristo Cura Sim!",category:"harpa",author:"Anônimo",lyrics:`Contra os males deste mundo,
Deus nos vale só;
Não há mal que Deus não cure,
Pois de nós tem dó.

Coro:
Cristo cura, sim,
Cristo cura, sim.
Seu amor por nós é Imenso;
Ele cura, sim!

Derramou Seu sangue puro
P'ra remir a mim;
Quando ungido sou de azeite,
Sou curado, enfim!

Só noss’alma é bem segura,
Oculta em Jesus;
Ele o bálsamo da vida,
Derramou na cruz.

Glória a Deus! Eterna glória,
Demos-Lhe louvor;
Glória, cânticos e hosanas
Dai ao Redentor!`},
{id:"h008",num:8,title:"Cristo, O Fiel Amigo",category:"harpa",author:"José Rodrigues",lyrics:`Cristo Jesus é fiel amigo,
Ele só, Ele só.
E nas fraquezas está comigo,
Ele só, Ele só.

Coro:
E nas lutas de cada dia,
Cristo nunca me deixa só;
Pois Ele é meu seguro guia,
Ele só, Ele só.

Não há amigo mais nobre e digno,
Não, não há; não, não há.
Nem mais humilde e mais benigno,
Não, não há; não, não há.

Ao pecador perdoar anela,
Ele só, Ele só;
E pelos Seus santos sempre vela,
Ele só, Ele só.

Deus, em Seu Filho, se há comprazido,
NEle só, nEle só;
Mas Sua glória me há repartido,
DEle só, dEle só.

NEle nós temos um firme guia,
NEle só, nEle só;
A noite enche de alegria,
Ele só, Ele só`},
{id:"h009",num:9,title:"Marchai Soldados De Cristo",category:"harpa",author:"Anônimo",lyrics:`Marchai, soldados de Cristo Jesus,
Marchai, marchai e enfrentai
O inimigo do bem e da luz;
Soldados, avançai!

Coro:
Sim, avançar, não recuar;
Sem temor, com valor,
Marchai, lutai, pois Cristo vai
Na vanguarda - Avançai!

Marchai, soldados, bem alto erguei
O pavilhão da salvação;
A Belial, firmes, ousados, vencei;
Vencei a corrupção.

Vossa armadura de guerra tomai,
O elmo, sim, da salvação:
E a espada: a Bíblia levai,
E vencereis, então.

Avante, avante, confiando em Jesus,
Fortes sereis por Seu amor,
Marchai invictos, soldados da luz,
Jesus é o vencedor.`},
{id:"h010",num:10,title:"Eu Te Louvo",category:"harpa",author:"Adriano Nobbre",lyrics:`Glória a Deus, o Pai Eterno,
Cujo trono é os céus;
O universo Lhe pertence.
Glória, sim, ao nosso Deus.

Coro:
Eu te louvo! Eu te louvo!
Oh! Jesus, meu Salvador!
Dai-Lhe glórias, ó remidos!
Pois Seu sangue limpa o pecador.

Glória ao Filho, mui amado,
Que merece o louvor.
Demos glória ao Seu nome,
Ao Cordeiro, ao Redentor.

Demos nós, ao Santo Espírito,
Mil louvores por Seu dom;
Por Sua graça tão imensa,
Glórias Ele, Ele é bom!

Glória, glória ao Pai bendito,
Glória, glória a Jesus;
Glória dai ao Santo Espírito.
Ao Deus trino, nossa luz.`},
{id:"h011",num:11,title:"Ó Cristão, Eia Avante",category:"harpa",author:"A.T.S A.Teixeira da Silva",lyrics:`Ó Cristãos, eia avante, eia avante!
Por Jesus e Sua Igreja a lutar;
Co'a Palavra, essa espada flamante,
Vamos, vamos, irmãos, pelejar.

Coro:
Ó Cristão, sempre avante na lida!
O Evangelho com fé a pregar;
Ao trabalho o Senhor nos convida,
Vamos, pois, com Jesus pelejar.

Ó cristãos, eia avante, eia avante!
Boa nova aos perdidos levar;
Por cidades e vilas adiante,
Salvação vamos nós proclamar.

Ó Cristãos, eia avante, eia avante!
Pois a aurora já vemos raiar,
Desse dia em que Cristo, triunfante.
Neste mundo há de sempre reinar.

Ó cristãos, eia avante, eia avante!
Vexilários da fé vamos ser;
E a vanguarda do exército brilhante
Que gloriosa vitória há de ter!

Ó cristãos, eia avante, eia avante!
Com coragem, sem nada temer;
Com Jesus, divinal comandante,
Nós havemos, irmãos, de vencer.`},
{id:"h012",num:12,title:"Vem Já, Pecador",category:"harpa",author:"Almeida Sobrinho",lyrics:`Pecador, vê a luz, brilha para ti,
Lá da cruz do Salvador,
Onde a vida deu;
e do lado Seu Corre sangue redentor.

Coro:
Ó vem Já, como estás!
Vem agora, ao Salvador;
Sua vida deu, tudo padeceu;
Não demores! Vem Já, pecador!

Na escuridão do Jardim orou Tão aflito meu Senhor;
Quando pranteou, sangue Seu suou,
No Getsêmane em dor!

Vê o Salvador co'as feridas mãos
Te chamando, ó pecador!
Vida eterna têm os que nEle crêem
E aceitam o Seu amor.

Vem a Cristo, vem confessando,
já, Teus pecados, e te ouvirá,
E no coração sentirás o perdão,
Pois Jesus te perdoará.`},
{id:"h013",num:13,title:"Jesus Comprou-me",category:"harpa",author:"Samuel Nyström",lyrics:`Jesus comprou-me do mundo aqui,
Palavras doces são para mim;
Jesus comprou-me e vai me dar
Eterno gozo, celeste lar.
Jesus comprou-me e vai me dar
Eterno gozo, celeste lar.

Jesus comprou-me da escravidão,
A paz eu gozo por Seu perdão;
Sou desprezado um pouco aqui,
Mas eu espero gozar ali.
Sou desprezado um pouco aqui,
Mas eu espero gozar ali.

Jesus comprou-me, e eu fiquei
P'ra sempre livre da dura lei!
Agora espero até Ele vir,
P'ra que me leve ao Seu porvir.
Agora espero até Ele vir,
P'ra que me leve ao Seu porvir.

Ó vinde, amigos, e junto a nós,
Ouvi depressa do céu a voz;
- O que demora não chegará,
Porque se perde e morrerá.
- O que demora não chegará,
Porque se perde e morrerá.

Jesus comprou-me e me dará
Lugar às mesas, que esperam lá.
Ouve o convite, ó pecador,
Pois Jesus Cristo é o Salvador.
Ouve o convite, ó pecador,
Pois Jesus Cristo é o Salvador.`},
{id:"h014",num:14,title:"Gozo Em Jesus",category:"harpa",author:"J.J.S J.J.S",lyrics:`Oh! que gozo sinto em Jesus,
Que por mim expirou na cruz;
A minh’alma deu divina luz,
Glória a meu Jesus!

Coro:
Quanta glória vejo em Jesus,
Gozo santo e bendita luz,
Cujos raios brilham lá na cruz,
Na qual ,morreu Jesus.
Sempre avante quero eu andar,
Té no céu chegar.

Livre do pecado já estou,
Do abismo me retirou,
Sobre a rocha eterna me firmou;
Glória a meu Jesus!

Divinal louvor Jesus me deu;
Harmonia que vem do céu;
Cantarei, alegre, Cristo é meu,
Glória a meu Jesus!

Esta nova hei de proclamar;
Muitos hão de assim chegar,
E a graça receber, sem par,
Glória a meu Jesus!`},
{id:"h015",num:15,title:"Conversão",category:"harpa",author:"D.I.W Dr Isaac Watts",lyrics:`Oh! quão cego andei e perdido vaguei,
Longe, longe do meu Salvador!
Mas do céu Ele desceu, e Seu sangue verteu
Pra salvar um tão pobre pecador.

Coro:
Foi na cruz, foi na cruz,
onde um dia eu vi
Meu pecado castigado em Jesus;
Foi ali, pela fé, que os olhos abri,
E agora me alegro em Sua luz

Eu ouvia falar dessa graça sem par,
Que do céu trouxe nosso Jesus;
Mas eu surdo me fiz, converter-me não quis
Ao Senhor, que por mim morreu na cruz.

Mas um dia senti meu pecado, e vi
Sobre mim a espada da lei;
Apressado fugi, em Jesus me escondi,
E abrigo seguro nEle achei.

Quão ditoso, então, este meu coração,
Conhecendo o excelso amor
Que levou meu Jesus a sofrer lá na cruz;
P'ra salvar a um tão pobre pecador.`},
{id:"h016",num:16,title:"Despertar Para o Trabalho",category:"harpa",author:"Simon Lundgren",lyrics:`Posso tendo as mãos vazias,
Com Jesus eu me encontrar?
Nada fiz, e vão-se os dias,
Que Lhe posso apresentar?

Coro:
Posso tendo as mãos vazias,
Com Jesus, eu me encontrar?
Quantas almas poderia
Ao Senhor apresentar?

Não mais temerei a morte;
Vencerei por salvo estar;
Qual será a minha sorte,
Se no céu vazio entrar?

No celeste lar entrando,
Como irei ao Salvador?
Quantas almas irei levando,
Para meu fiel Senhor?

Do pecado, preso em elos,
Passei anos em vão labor;
Quem me dera reavê-los,
P’ra servir ao meu Senhor.

Despertemos, Já é dia;
Trabalhemos, com fervor;
E levemos, com alegria,
Muitas almas ao Senhor.`},
{id:"h017",num:17,title:"Pensando Em Jesus",category:"harpa",author:"Anônimo",lyrics:`Nas horas que passo pensando em Jesus
As trevas desfaço, buscando a luz;
Que horas de vida, tão doces p'ra mim,
Jesus me convida, que eu suba p'ra Si!

Da vida voando, sem nenhum temor;
Acima buscando do véu o amor;
Que doce ventura, que aspecto feliz,
Que nova natura minh'alma bendiz.

Do mar o bramido, da brisa o langor
Da ave o carpido de doce amor,
Me falam sentidos acordes dos céus,
Me trazem aos ouvidos os hinos de Deus!

Minh’alma ansiosa já quer percorrer
A senda gloriosa que eu hei de ver;
Que coisa tão bela; oh! que luz sem véu!
Jesus me revela mistérios do céu.`},
{id:"h018",num:18,title:"Grata Nova",category:"harpa",author:"Almeida Sobrinho",lyrics:`Grata nova Deus proclama
Hoje, ao mundo pecador!
Doce nova revelada,
Lá na cruz do Salvador;
Cego e desviado, o homem,
Dos caminhos do Senhor,
Desconhece e desconfia
Deste Deus, o Deus de amor.

Coro:
Grata nova, doce nova,
Vem dos lábios do Senhor;
Escutai com alegria:
“Deus é luz, Deus é amor”.

Com ofertas e obras mortas,
Sacrifícios sem valor,
Enganado, pensa o homem,
Propiciar Seu Criador,
Meios de salvar-se inventa;
Clama, roga em seu favor,
A supostos mediadores,
Desprezando o Deus de amor.

Luz divina, resplandece!
Mostra ao triste pecador,
Que na cruz estão unidos
A justiça e o amor.
Fala aos corações feridos,
Mostra-te, Deus Salvador;
E sem fim, proclamaremos:
“Deus é luz! Deus é amor!”`},
{id:"h019",num:19,title:"O Convite De Cristo",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Eis, a voz de Cristo clama,
Sobre o revoltoso mar
Desta vida perigosa:
"Vinde em Mim vos abrigar".

Quando outrora em Galiléia,
Essa doce voz soou,
Logo, o coração ouvinte,
Tudo, pronto, abandonou.

Sobre as vozes sedutoras,
De mundanas atrações,
Clama a meiga voz de Cristo:
"Dai-me vossos corações!”

Quer no meio dos prazeres,
Quer no dia da aflição,
Inda clama, paciente:
“Amas-Me tu, ó cristão?”

Na vereda estreita e santa,
Já pisada por Jesus,
A segui-Lo, Ele te chama:
“Vem, cristão, andar na luz!”

Dessa cruz angustiosa,
Onde brilha Seu amor,
Ouve a voz que te convida,
Ouve e segue, pecador!`},
{id:"h020",num:20,title:"Olhai o Cordeiro De Deus",category:"harpa",author:"H.E.N Hedwig Elisabeth Nordlund",lyrics:`Livres de pecado vós quereis ficar?
Olhai p'ra o Cordeiro de Deus!
Ele morto foi na cruz, p'ra vos salvar;
Olhai p'ra o Cordeiro de Deus!

Coro:
Olhai p’ra o Cordeiro de Deus,
Olhai p’ra o cordeiro de Deus,
Porque só Ele vos pode salvar.
Olhai p’ra o Cordeiro de Deus!

Se estais tentados, em hesitação,
Olhai p'ra o Cordeiro de Deus!
Ele encherá o vosso coração.
Olhai p'ra o Cordeiro de Deus!

Se estais cansados e sem mais vigor,
Olhai pra o Cordeiro de Deus!
Ele vos quer dar Seu divina! amor,
Olhai p’ra o Cordeiro de Deus!

Se na vossa senda sombras vêm cair,
Olhai pra o Cordeiro de Deus!
Ele, com Sua graça, tudo quer suprir.
Olhai p’ra o Cordeiro de Deus!`},
{id:"h021",num:21,title:"Gloriosa Aurora",category:"harpa",author:"Otto Nelson",lyrics:`A gloriosa aurora vem,
Do dia em que lá em Belém
Nasceu de Deus, o Filho;
Que belo dia e de luz,
No qual p'ra nós desceu Jesus,
Do céu mostrando o trilho.
Quantos santos hoje lembram,
E relembram a história
De Jesus, o Rei da Glória!

Nasceu Jesus lá em Belém,
Trazendo-nos o sumo bem
Do céu - a liberdade;
Nos concedeu perfeita paz,
Consolação que satisfaz
Por toda a eternidade!
Como fomos desgarrados,
Desviados e perdidos!
Hoje somos redimidos!

Conosco Cristo habitará
Com Seu poder nos velará,
Nos dando livramento;
E sempre há de nos guiar
Pois Sua graça vai nos dar
Em todo o sofrimento,
Scuta: Luta sempre forte.
Té a morte, pois ajuda
Tens em Cristo, que não muda!

Jesus desceu p'ra nos salvar,
O sol da graça vem brilhar,
Alegres jubilemos;
Jesus, ó nosso bom Pastor,
Vem nos guiar com Teu amor;
Ali nós pertencemos;
Almas salvas, perdoadas,
Libertadas hoje oram,
Reverentes Te adoram!`},
{id:"h022",num:22,title:"Ceia Do Senhor",category:"harpa",author:"J.B.C José B. Cavalcante",lyrics:`Em nossa alma nós tomamos.
O Teu corpo, ó Jesus!
Como oferta voluntária,
Que nos deste lá na cruz.

Coro:
Como pão do céu desceste,
Vamos a Ti receber;
Pois unidos ao Teu corpo,
Nós queremos, sim, viver.

Em figura, o Teu sangue
Nós bebemos, ó Senhor,
Pois só nEle há virtude
P'ra salvar o pecador.

Vem, concede à Tua Igreja
O perdão do Teu amor,
Para que nos dois emblemas,
Contemplemos-Te, Senhor.

Ó Senhor, por Teu Espírito
Em nós vem já residir,
Pra Teu corpo e Teu sangue
Nós podermos discernir.`},
{id:"h023",num:23,title:"Glória a Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cantam os santos com fervor,
A quem por mim foi imolado,
Na cruz, sofrendo o meu pecado.

Coro:
Glória a Jesus!
Glória a Jesus!
Glória a Jesus, o Salvador!

Deus é o Justificador
De quem crer no Seu Enviado
Sim, no Seu Filho mui amado.

Do Seu Pai recebeu louvor,
E com poder foi exaltado,
Por isso é glorificado.

Do "sangue purificador",
Eu quero sempre ter lembrança,
E nEle ter mais confiança.

Por nós, na cruz, sofreu a dor,
Com sangue fomos nós comprados,
E do pecado resgatados.`},
{id:"h024",num:24,title:"Poder Pentecostal",category:"harpa",author:"Almeida Sobrinho",lyrics:`No Pentecostes sucedeu
O que Jesus falou,
Pois de repente lá do céu
Um vento assoprou,
Que veio a casa toda encher
E os corações com mui poder.

Coro:
Poder, poder, poder pentecostal.
Ó vem nos Inflamar,
Também nos renovar;
Ó vem, sim, vem, ó chama divinal,
Teus servos batizar.

Em cada um veio repousar
A preciosa luz,
O Preceptor que veio ficar
Co'os servos de Jesus;
Foi o fogo santo do Senhor.
Que os encheu com Seu vigor.

E começaram a falar, Repletos de poder,
Em outras línguas exaltar
Ao que mandou trazer
Os ricos dons do Seu amor
E o poder consolador.

E quem deseja receber
Esta água salutar.
Que é prometida ao que crer
E humilde esperar,
Perseverando em oração,
Terá poder seu coração.`},
{id:"h025",num:25,title:"Jesus Tu és Bom",category:"harpa",author:"J.Car Joel Carlson",lyrics:`Meu Jesus, Tu és bom;
Tu és tudo pra mim!
Foste morto, mas vives em mim;
Tu mereces louvor,
Ó Cordeiro de Deus!
Tu és tudo, sim, tudo p'ra mim!

Quero a Ti dar louvor,
Pois és Rei sobre reis;
Tu és tudo, mas nada eu sou;
Enche meu coração
De ternura e paz;
Honra eterna e glória Te dou.

O Teu nome é amor,
Pois Tu amas a mim,
E eu quero andar neste amor;
Triunfante estou,
Confiando em Ti,
Meu Jesus, grande Consolador.

Ó Ungido de Deus,
Trazes paz e perdão;
Salvação, vida, tens para os Teus;
Que mensagem do céu
E de transformação,
Enviada do trono de Deus!`},
{id:"h026",num:26,title:"A Formosa Jerusalém",category:"harpa",author:"Emílio Conde",lyrics:`Música

Mid

Quão glorioso, cristão, é pensares
Na cidade que não tem igual,
Onde os muros são de puro jaspe.
E as ruas de ouro e cristal;
Pensa como será glorioso
Ver-se a triunfal multidão.
Que cantando, aguarda a chegada
Dos que vencem a tribulação.

Pensa como será glorioso
Ver o rio da vida e luz,
Cujas margens juncadas de lírios,
São a glória de nosso Jesus;
Haverá lá perpétua aurora,
Pois Deus mesmo a alumiará;
E o Cordeiro, com Sua esposa,
Noite e dia resplandecerá.

Pensa na celestial melodia
Que a terra encherá, de Beulá;
E das harpas a doce harmonia
Ao passar o Jordão se ouvirá.
Mesmo em dores que levam à morte,
Sê constante, não voltes atrás,
Tua herança, tua eterna sorte,
É Jesus, o Fiel, o Veraz.

Se é glorioso pensar nas grandezas,
Nos prazeres que acodem aqui,
Qual será desfrutar as riquezas
Que esperam os salvos, ali?
Os encantos do mundo não podem
Ofuscar essa glória dalém;
Não almejas viver, ó amigo,
Nessa formosa Jerusalém?`},
{id:"h027",num:27,title:"Amor Que Vence",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Amor, que por amor desceste!
Amor, que por amor morreste!
Ah! quanta dor não padeceste,
Meu coração p'ra conquistar,
E meu amor ganhar!

Amor, que com amor seguias!
A mim, que sem amor Tu vias!
Oh! quanto amor por mim sentias,
Meu Salvador, meu bom Jesus,
Sofrendo sobre a cruz!

Amor, que tudo me perdoas!
Amor, que até mesmo abençoas!
Um réu de quem Te afeiçoas!
Por Ti vencido, ó Salvador,
Eis-me aos Teus pés, Senhor!

Amor, que nunca, nunca mudas,
Que nos Teus braços me seguras,
Cercando-me de mil venturas!
Aceita agora, Salvador.
O meu humilde amor!`},
{id:"h028",num:28,title:"Deus Vai Te Guiar",category:"harpa",author:"Frida Vingren",lyrics:`Andas carregado de tristeza e dor,
Sem nenhum auxílio, nem um Salvador?
Ouve a mensagem de teu bom Jesus,
E tem mais coragem, leva a tua cruz.

Coro:
Deus vai te guiar com Sua forte mão;
Podes descansar na tribulação;
Seja tua vida livre de pesar;
Em tristeza e lida Deus vai te guiar.

Toda carga por ti, Ele quer levar; Alma dolorida, ouve o Seu falar;
Senda espinhosa Ele já andou,
Morte afrontosa por ti suportou.

Se estás tentado, Deus te ajudará, Sempre confiando, te libertará;
As pisadas segue do teu Salvador, Crendo em Deus, prossegue, seja como for.`},
{id:"h029",num:29,title:"O Precioso Sangue",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Oh! que precioso sangue,
Meu Senhor verteu,
Quando, para resgatar-nos,
Padeceu!

Oh! que precioso sangue,
Sangue de Jesus,
Que por nós, foi derramado
Sobre a cruz!

Oh! que precioso sangue,
Sangue remidor!
Sim, com este nos remiste,
Redentor!

Oh! que precioso sangue,
Sangue expiador!
Eis o que da pena !ivra
O malfeitor!

Oh! que precioso sangue,
Purificador!
Que de toda a mancha lava
O pecador!

Oh! que precioso sangue,
Fala-nos de paz;
Tudo quanto a lei exige,
Satisfaz!

Oh! que precioso sangue.
Por Ele entrarei
Sem receio, na presença
Do meu Rei!

Oh! que precioso sangue,
Do bom Salvador!
Hoje, a todos manifesta
Seu amor!`},
{id:"h030",num:30,title:"Não Sou Meu",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Não sou meu! Por Cristo salvo,
Que por mim morreu na cruz,
Eu confesso alegremente,
Que pertenço ao bom Jesus.

Coro:
Não sou meu! Oh! Não sou meu!
Bom Jesus, sou todo Teu!
Hoje mesmo e para sempre,
Bom Jesus, sou todo Teu!

Não sou meu! Por Ele remido,
Quando o sangue derramou;
Na Sua graça confiando,
Que minh’alma resgatou.

Jamais meu! A Ti confio
Tudo quanto chamo meu;
Tudo nas Tuas mãos entrego;
Meu Senhor, sou todo Teu!

Jamais meu! Ó santifica
Tudo quanto sou, Senhor!
Da vaidade e da soberba,
Vem livrar-me, Salvador.`},
{id:"h031",num:31,title:"Glória ao Meu Jesus",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Por mim sofreu o Salvador,
Glória! Glória ao meu Jesus!
Louvai, comigo, ao Redentor!
Glória! Glória ao meu Jesus!

Coro:
Jesus! Jesus! Ó Salvador;
É doce o nome do Senhor;
Abrasa -me com santo amor;
Glória! Glória ao meu Senhor.

C'oa meus pecados carregou,
Glória! Glória ao meu Jesus!
E sobre a cruz me resgatou.
Glória! Glória ao meu Jesus!

Eu sei que perdoado estou,
Glória! Glória ao meu Jesus!
E, com certeza, ao céu eu vou!
Glória! Glória ao meu Jesus!

E, quando a guerra aqui findar,
Glória! Glória ao meu Jesus!
No céu, melhor, eu vou cantar,
Glória! Glória ao meu Jesus!`},
{id:"h032",num:32,title:"Meu Cristo! Meu Cristo!",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Quem do céu por mim desceu,
Tudo em meu lugar sofreu,
E por mim na cruz morreu?
Foi Cristo! Foi Cristo!

Coro:
Os meus pecados expiou:
De toda a pena me livrou!
Da maldição me resgatou,
Meu Cristo! Meu Cristo!

Quem me trouxe, qual pastor,
Seu cordeiro com amor?
Quem quis ser meu Salvador?
Foi Cristo! Foi Cristo!

Quem com branda compaixão,
Derreteu meu coração?
Deu-me plena salvação?
Foi Cristo! Foi Cristo!

Quem diz: “Não te deixarei,
Nem te desampararei,
Sempre te socorrerei?”
É Cristo! E Cristo!

Quem é digno de louvor?
Quem merece o meu amor?
É Jesus, meu Salvador,
Meu Cristo! Meu Cristo!

Coro:
As minhas trevas dissipou!
Minha alma enferma Ele sarou!
Meu coração Ele alegrou!
Meu Cristo! Meu Cristo!`},
{id:"h033",num:33,title:"Com Tua Mão Segura",category:"harpa",author:"Fanny Crosby",lyrics:`Com Tua mão, segura bem a minha,
Pois eu tão fraco sou, ó Salvador!
Que não me atrevo a dar nem um só passo
Sem Teu amparo, meu Jesus Senhor!

Com Tua mão, segura bem a minha,
E mais e mais unido a Ti, Jesus.
Ó traze-me, que nunca me desvie
De Ti, Senhor, a minha vida e luz!

Com Tua mão, segura bem a minha,
E, pelo mundo, alegre seguirei:
Mesmo onde as sombras caem mais escuras
Teu rosto vendo, nada temerei.

E, se chegar à beira desse rio,
Que Tu por mim quiseste atravessar,
Com Tua mão segura bem a minha,
E sobre a morte eu hei de triunfar.

Quando voltares esses céus rompendo,
segura bem a minha mão, Senhor,
E, meu Jesus, ó leva-me contigo,
Para onde eu goze Teu eterno amor.`},
{id:"h034",num:34,title:"Milícia De Jesus",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Milhares de milhares em refulgente luz!
Eis os guerreiros santos, milícia de Jesus!
Completa, sim, completa sua longa luta aqui,
Com Cristo, seu Senhora Rei, vão descansar ali;

Que doces sinfonias encham a terra e o céu!
Que coros d’aleluias rompem além do véu!
E que chegou o dia, o dia triunfal,
E Cristo reinará, enfim, em glória divina!.

Então, não há mais choro, nem há mais tentação;
As dores, as tristezas p’ra sempre fugirão,
E os remidos todos verão seu Salvador;
E transformados, todos, serão como o Senhor.`},
{id:"h035",num:35,title:"O Grande Amor",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`O grande amor de meu Jesus
Por mim morrendo sobre a cruz,
Da perdição, pra me salvar;
Quem poderá contar?

Coro:
Quem pode o Seu amor contar?
Quem pode o Seu amor contar?
O grande amor do Salvador,
Quem poderá contar?

O cálice que Jesus bebeu,
A maldição que padeceu,
Tudo por mim, p'ra me salvar,
Quem poderá contar?

A zombaria tão cruel,
A cruz sangrenta, o amargo fel,
Que Ele sofreu pra me salvar;
Quem poderá contar?

Incomparável Salvador!
Quão inefável Teu amor!
Quão impossível de sondar!
Imenso e sem par!`},
{id:"h036",num:36,title:"O Exilado",category:"harpa",author:"J.H.N Justus H. Nelson",lyrics:`Música

Playback

Da linda pátria estou bem longe;
Cansado estou;
Eu tenho de Jesus saudada,
Oh, quando é que eu vou?
Passarinhos, belas flores,
Querem m'encantar;
São vãos terrestres esplendores,
Mas contemplo o meu lar.

Jesus me deu a Sua promessa;
Me vem buscar;
Meu coração está com pressa,
Eu quero já voar.
Meus pecados foram muitos,
Mui culpado sou;
Porém, Seu sangue põe-me limpo;
Eu para pátria vou.

Qual filho de seu lar saudoso,
Eu quero ir;
Qual passarinho para o ninho,
Pra os braços Seus fugir;
É fiel - Sua vinda é certa,
Quando... Eu não sei.
Mas Ele manda estar alerta;
Do exílio voltarei.

Sua vinda aguardo eu cantando;
Meu lar no céu;
Seus passos hei de ouvir soando
Além do escuro véu.
Passarinhos, belas flores,
Querem m'encantar;
São vãos terrestres esplendores,
Mas contemplo o meu lar.`},
{id:"h037",num:37,title:"Cristo Pra Mim",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Oh! que descanso em Jesus encontrei!
Cristo p'ra mim! Cristo p'ra mim!
Oh! que tesouros infindos achei!
Cristo p'ra mim! Cristo p'ra mim!
'Scolham os outros o mundo pra si.
Busquem riquezas, delicias aqui;
Eu acolherei, ó Jesus, sempre a Ti!
Cristo p'ra mim! Cristo p'ra mim!

Quer na aflição, na doença ou na dor:
Cristo p’ra mim! Cristo p'ra mim!
Quer na saúde, na força ou vigor;
Cristo p’ra mim! Cristo p'ra mim!
Sempre ao meu lado pra me socorrer,
Com Seu amor, sim, e com Seu poder;
Em cada transe pronto a me valer;
Cristo p'ra mim! Cristo p'ra mim!

No dia amargo da perseguição:
Cristo p’ra mim! Cristo p’ra mim!
Nas duras provas e na tentação:
Cristo p’ra mim! Cristo p’ra mim!
Ele, o pecado e o mundo venceu
Quando, por mim, no Calvário morreu;
E da vitória a certeza me deu;
Cristo p'ra mim! Cristo p'ra mim!

Quando no vale da morte eu entrar,
Cristo p'ra mim! Cristo p'ra mim!
Quando perante meu Deus m’encontrar:
Cristo p'ra mim! Cristo p’ra mim!
Só no Teu sangue confio, Senhor,
Só no Teu sempre imutável amor!
Inda outra vez cantarei, Salvador:
Cristo p'ra mim! Cristo p'ra mim!`},
{id:"h038",num:38,title:"O Senhor é Rei",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Proclamei a todo o mundo que o Senhor é Rei!
Proclamai! Proclamai!
Proclamei que suave e doce é Sua santa lei!
Proclamai! Proclamai!
Proclamai como Ele se chama Salvador Jesus,
Como Ele por nós morreu na ensangüentada cruz,
Como Ele - o Cordeiro - sobre o trono está
O Deus de toda graça, que de graça tudo dá.

Coro:
Proclama! a todo o mundo
que o Senhor é Rei!
Proclamai! Proclamai!
Proclama! que suave e doce
é Sua santa lei!
Proclamai! Proclamai!

Proclamei que reina em graça nosso Salvador!
Proclamei! Proclamei!
Que por cetro de Seu reino ele tem o amor!
Proclamei! Proclamei!
Anunciei aos tristes que Ele vive lá;
E e todos os cansados que descanso Ele dá;
Contei aos pecadores que Ele veio salvar,
E a todos os cativos que Ele os pode libertar.

Proclamei que Ele, do céu em breve descerá!
Proclamei! Proclamei!
E com todos os Seus santos aparecerá!
Proclamei! Proclamei!
Que, sem demora, venham todos se render
E, com amor, em tudo e Cristo obedecer
Que estejam todos prontos quando Ele voltar,
E alegres, naquele dia, “Rei dos reis”, o aclamar`},
{id:"h039",num:39,title:"Alvo Mais Que a Neve",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Bendito seja o Cordeiro,
Que na cruz por nós padeceu!
Bendito seja o Seu sangue,
Que por nós, ali Ele verteu!
Eis nesse sangue lavados,
Com roupas que tão alvas são,
Os pecadores remidos,
Que perante seu Deus já estão!

Coro:
Alvo mais que a neve!
Alvo mais que a neve!
Sim, nesse sangue lavado,
Mais alvo que a neve serei.

Quão espinhosa a coroa
Que Jesus por nós suportou!
Oh! Quão profundas as chagas,
Que nos provam quanto Ele amou!
Eis nessas chagas pureza
Para o maior pecador!
Pois que mais alvo que a neve,
O Teu sangue nos torna, Senhor!

Se nós a Ti confessarmos,
E seguirmos na Tua luz,
Tu não somente perdoas,
Purificas também, ó Jesus;
Sim, e de todo o pecado!
Que maravilha de amor!
Pois que mais alvo que a neve.
O Teu sangue nos torna, Senhor.`},
{id:"h040",num:40,title:"A Cidade Do Bom Jesus",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Que se diz dos teus encantos,
Ó cidade do bom Deus!
Que soberba te levantas
Entre as glórias desses céus,
Desde o mundo preparada
Para Cristo e para os Seus.

São de jaspe adamantino
Os teus muros, ó Sião!
São douradas essas ruas,
Que os remidos pisarão!
De celeste luz banhadas,
Refulgentes sempre estão!

Pelo próprio Deus fundada
Sobre a rocha secular
Quão seguras tuas portas!
Quem as pode ameaçar?
Igualmente, quão seguro
Quem por ela lá entrar!

Quão felizes são teus filhos,
Vendo a face do Senhor!
Nunca mais a fome sentem,
Nunca sentem mais a dor,
Com os anjos desfrutando
Pleno gozo, paz e amor!

O trono do Cordeiro,
Noite e dia, sem cessar
Corre o rio de água viva,
Para todos saciar!
Lá com Cristo, vão teus filhos,
Satisfeitos descansar!

Se, por Teu amor infindo,
De Sião eu filho for,
Zombe o mundo e escarneça,
Nada importa, Salvador,
Pois que do Teu gozo eterno
Mesmo aqui tenho o penhor!`},
{id:"h041",num:41,title:"A Cristo Coroai",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`A Cristo coroai! Que por nós encarnou,
E Deus, o Santo Deus e Pai, aos homens revelou.
Eis Sua compaixão! Eis Sua mansidão!
Quem vê a Cristo, vê ao Pai; sim, vê Seu coração.

A Cristo coroai! De tudo o Criador,
O Filho do eterno Deus, do mundo, o Salvador, Jesus Emanuel,
o grande Redentor!
Em busca dos perdidos, vem o nosso bom Pastor.

A Cristo coroai! Que sobre a cruz, ganhou
Por nós eterna redenção e para o céu voltou!
Ele é o Rei dos reis! O Príncipe da paz!
Jesus, da morte, o vencedor, que a Salvação nos traz.

A Cristo coroai! De todos o Senhor,
A quem a multidão dos céus aclama com fervor!
Eis o Cordeiro ali, que sobre o trono está!
Que vive e reina lá por nós, e cedo voltará.`},
{id:"h042",num:42,title:"Saudai Jesus",category:"harpa",author:"J.H.N Justus H. Nelson",lyrics:`Saudai o nome de Jesus!
Arcanjos, vos prostrai;
Arcanjos, vos prostrai;
Ao Filho do eterno Deus,
Com glória, glória,
Glória, glória,
Com glória, coroai!

Ó escolhida geração
Do bom eterno Pai,
Do bom eterno Pai;
Ao grande autor da salvação,
Com glória, glória,
Glória, glória,
Com glória, coroai!

Ó perdoados, cujo amor
Bem triunfante vai,
Bem triunfante vai,
Ao Deus Varão, Conquistador,
Com glória, glória,
Glória, glória,
Com glória, coroai!

Ó raças, tribos e nações,
Ao Rei dos reis honrai!
Ao Rei dos reis honrai!
A quem quebrou vossos grilhões,
Com glória, glória,
Glória, glória,
Com glória, coroai!`},
{id:"h043",num:43,title:"Doce Lar",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Na pátria celeste, de Deus o doce lar,
Prepara Jesus, para os Seus, um lugar,
Pois longe do mal, do pecado e da dor,
Consigo p'ra sempre os quer ter seu Senhor.

Coro:
Oh! Doce, doce lar!
Ali, com Jesus, vou para sempre descansar

Oh! lar sacrossanto de paz e de amor!
Ali sobre o trono, verei meu Senhor,
O meigo Cordeiro, reinando em luz,
Por todos louvado, bendito Jesus!

Que puras delícias se encontram em ti!
Que gozos supremos esperam ali,
Aqueles a quem juntos Si Deus quer ter,
E perpetuamente os satisfazer!

Não são seus prazeres que anseio gozar,
Mas, sim, com Jesus para sempre morar!
Jamais desonrá-Lo, jamais ofender
A quem, p'ra ganhar-me, por mim quis morrer.`},
{id:"h044",num:44,title:"Oh! Que Glória!",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Meu Senhor, que me salvaste,
Teu, e Teu somente, eu sou;
Com Teu sangue me saraste;
Glória, glória a Ti Te dou.

Coro:
Oh! Que glória! Oh! Que glória!
Gozo em meu coração!
Eu confio em Jesus,
E, crendo, tenho salvação.
Oh! Que glória! Oh! Que glória!
Gozo em meu coração!
Eu confio em Jesus,
E em Seu sangue achei perdão.

Para obter tão grande gozo,
Muito e muito trabalhei;
Mas debalde todo esforço,
Crendo só é que o achei.

Confiando, confiando,
Sempre e só, Jesus, em Ti,
Teu poder e Tua graça
Podem bem guardar-me a mim.

Consagrado ao Teu serviço,
Quero eu pra Ti viver;
Dando sempre o testemunho
De Tua graça e Teu poder.`},
{id:"h045",num:45,title:"Redentor Onipotente",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Redentor onipotente,
Poderoso Salvador,
Advogado onisciente
É Jesus, meu bom Senhor.

Coro:
Ó Amante da minh’alma,
Tu és tudo para mim!
Tudo quanto eu careço
Acho, Jesus, só em Ti.

Um abrigo sempre perto,
Para todo o pecador;
Um refúgio sempre aberto,
É Jesus. meu Salvador.

Água viva! pão da vida!
Doce sombra no calor,
Que ao descanso nos convida.
É Jesus, meu Salvador!

Ó Cordeiro imaculado,
Que Seu sangue derramou,
Meus pecados expiando,
A minh'alma resgatou.

Fundamento inabalável!
Rocha firme e secular!
Infalível! Imutável!
Quem mo poderá tirar?

O caminho que, seguro,
Sempre para o céu conduz,
Quem a Cristo pronto segue,
Quem tomar a sua cruz.`},
{id:"h046",num:46,title:"Um Pendão Real",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Um pendão real vos entregou o Rei
A vós, soldados Seus;
Corajosos, pois, em tudo o defendei,
Marchando para os céus. 

Coro:
Com valor! Sem temor!
Por Cristo prontos a sofrer!
Bem alto erguei o Seu pendão,
Firmes sempre, até morrer!

Eis formados já os densos batalhões
Do grande usurpador!
Declarei-vos, hoje, bravos campeões;
Avante sem temor. 

Quem receio sente no seu coração,
E fraco se mostrar,
Não receberá o eterno galardão,
Que Cristo tem pra dar. 

Pois sejamos, todos, a Jesus leais,
E a Seu real pendão;
Os que na batalha sempre são fiéis,
Com Ele reinarão.`},
{id:"h047",num:47,title:"Rocha Eterna",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Rocha eterna, meu Jesus, 
Que, por mim, na amarga cruz, 
Foste morto eu meu lugar, 
Morto para me salvar; 
Em Ti quero me esconder, 
Só Tu podes me valer. 

Minhas obras, eu bem sei, 
Nada valem ante a lei; 
Se eu chorasse sem cessar. 
Trabalhasse sem cansar, 
Tudo inútil, tudo em vão! 
Só em Ti há salvação. 

Nada trago a Ti, Senhor! 
'Spero só em Teu amor! 
Todo indigno e imundo sou, 
Eis, sem Ti, perdido estou! 
No Teu sangue, ó Salvador, 
Lava um pobre pecador. 

Quando a morte me chamar, 
E ante Ti me apresentar, 
Rocha eterna, meu Jesus, 
Que por mim, na amarga cruz, 
Foste morto em meu lugar, 
Quero em Ti só me abrigar.`},
{id:"h048",num:48,title:"O Dia do Triunfo",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Quando lá do céu descendo,
para os Seus, Jesus voltar,
E o clarim de Deus a todos proclamar,
Que chegou o grande dia do triunfar do meu Rei,
Eu, por Sua imensa graça, lá estarei.

Coro:
Quando enfim, chegar o dia
Do triunfar do meu Rei,
Quando enfim, chegar o dia,
Pela graça de Jesus eu lá estarei!

Nesse dia, quando os mortos
hão de a voz de Cristo ouvir,
E dos seus sepulcros hão de ressurgir,
Os remidos reunidos, logo aclamarão seu Rei,
E, por Sua imensa graça, lá estarei.

Pelo mundo, rejeitado foi,
Jesus, meu Salvador.
Desprezaram, insultaram meu Senhor,
Mas, faustoso, vem o dia
do triunfar do meu Rei,
E, por Sua imensa graça, lá estarei.

Em mim mesmo, nada tenho em que possa confiar,
Mas Jesus morreu na cruz p'ra me salvar;
Tão somente nEle espero, sim, e sempre esperarei.
Pois, por Sua imensa graça, lá estarei.`},
{id:"h049",num:49,title:"Aleluia! Já Creio",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Deus tem prometido a salvação dar. 
A quem em Seu Filho Jesus confiar. 

Coro:
Aleluia! Já creio em Cr!sto Jesus. 
E salvo já estou, pelo sangue da cruz!

Foi tal Seu amor, que me substituiu, 
E sobre o Calvário, minh’alma remiu! 

Não posso jamais desse amor duvidar; 
Não posso senão aos Seus pés me prostrar. 

E, quando, na glória, eu vir meu bom Rei, 
Com todos os santos ali cantarei.`},
{id:"h050",num:50,title:"Sempre Fiéis",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Sempre fiéis, sim, a Ti, nós seremos, 
Por Tua graça, ó Cristo, Senhor! 
Sempre fiéis, sim, por Ti lutaremos. 
Sob Teu pendão, ó Jesus, Salvador! 

Coro:
Sempre fiéis, irmãos! Irmãos sejamos. 
Sempre fiéis a Cristo Jesus. 
Que até à morte, por nós prosseguiu, 
E libertou-nos, morrendo na cruz!

Por Ti viver, ó bendito Cordeiro, 
Quem não deseja - se Te conhecer? 
Quem, que se diga cristão verdadeiro, 
Pronto não 'steja, por Ti a sofrer? 

Mas, Salvador, quão fraquinhos nós somos, 
Como podemos deixar de cair, 
Se por Ti mesmo guardados não formos? 
Quem, té à morte, Te pode seguir? 

Coro:
Sempre fiéis, sim, mesmo até à morte! 
Sempre fiéis - Tomemos a cruz! 
Eis a divisa que a nós nos pertence, 
Aos libertados por Cristo Jesus!`},
{id:"h051",num:51,title:"Adoração Reconhecida",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Ó minh'alma, sem demora, 
Ergue-te para entoar, 
Os louvores do teu Cristo, 
E Seu nome celebrar! 
P'ra remir-te, p'ra remir-te, 
Sua vida Ele quis dar! 

Minha condição tão triste
Conheceu meu Salvador; 
Que dos céus desceu à terra,
Para ser meu Redentor! 
Oh! Quão grande! Oh! Quão grande!
E o amor de meu Senhor! 

Condenado, justamente, 
Que podia eu fazer, 
Dessa pena p'ra livrar-me, 
O perdão p’ra merecer?
O Seu sangue, o Seu sangue, 
Quis Jesus por mim verter! 

Com meus crimes carregado, 
Lá na cruz, em meu lugar,
Foi Jesus crucificado, 
A minh'alma pra salvar; 
Vinde todos! Vinde todos, 
Já comigo, O adorar!`},
{id:"h052",num:52,title:"Tudo Está Bem",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Pelo amor de Deus bendito,
Vai tudo bem!
Seu amor é infinito:
Tudo está bem!
Esse amor nos tem provado.
Em Seu Filho muito amado,
Que, por nós, foi imolado.
Sim, sim, ‘stá bem!

Cristo, agora, o cetro empunha:
Vai tudo bem!
Quem morreu é quem governa:
Tudo está bem!
Seu amor é imutável,
Seu poder inabalável,
Seu cuidado é incansável,
Sim, sim, ‘stá bem!

A fé canta na tristeza:
Vai tudo bem!
Canta, sim, e com firmeza:
Tudo está bem!
Pois se Deus é quem nos guia,
Ternamente nos vigia,
Com bondade, noite e dia.
Sim, sim, ‘stá bem!

Por caminhos escabrosos,
Vai tudo bem!
Ou por mares tormentosos,
Tudo está bem!
A Jesus tudo obedece;
Sempre o mesmo permanece!
Nem um só dos Seus esquece!
Sim, sim, ‘stá bem!

Quer na vida, quer na morte,
Vai tudo bem!
Quão feliz é nossa sorte!
Tudo está bem!
Pelo sangue resgatados,
E do mundo separados.
Sempre por Jesus guardados.
Sim, sim, ‘stá bem!`},
{id:"h053",num:53,title:"A Esperança da Igreja",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Até que volte o Salvador,
Cercando a mesa do Senhor,
A Ceia vimos celebrar,
De Cristo, a morte anunciar,
E com humilde devoção,
Render a Deus adoração.

Até que volte o Salvador,
Aqui mostremos Seu amor;
Com viva fá e gratidão,
Participemos deste pão,
Obedientes a Jesus,
Lembrando assim a Sua cruz!

Até que volte o Salvador,
Bebendo o cálice do Senhor,
Seu nome queremos bendizer,
E mais e mais engrandecer,
O sangue que Ele derramou,
O sangue que nos resgatou!

Se duras são as provações,
Se fortes as perseguições,
Se as lutas fazem-se sentir,
E custa-nos as resistir,
Não nos deixemos perturbar:
São só até Jesus voltar!

Bem prontos para O receber,
Devemos sempre aqui viver;
O tempo foge, o dia vem,
A glória esperamos além,
Pois trabalhemos, com fervor,
Até que volte o Salvador.`},
{id:"h054",num:54,title:"Louvemos ao Redentor",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Minh’alma, louva ao Redentor
Jesus, teu Rei, teu Salvador,
Que sobre a cruz, em teu lugar,
Seu sangue deu p'ra te salvar!

Coro:
Sim, sobre a cruz, em meu lugar,
Jesus morreu p’ra me salvar!
Salvo e seguro nEle estou,
Pois com Seu sangue me livrou.

Oh! quão perdido e longe andei,
Longe de Deus e Sua lei!
Com terno e paciente amor
Seguiu-me sempre, o Salvador!

Bendito dia, quando, enfim,
Vi Cristo sobre a cruz, por mim!
Vencido pelo Seu amor,
Rendi-me logo ao Salvador.

Vem, alma aflita, descansar;
Eis Cristo pronto a perdoar!
Confia nEle, de coração,
E teu será o gran perdão.`},
{id:"h055",num:55,title:"Mais Perto da Tua Cruz",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Meu Senhor, sou Teu - Tua voz ouvi
A chamar-me, com amor;
Mais, de Ti, mais perto eu quero estar,
Ó bendito Salvador!

Coro:
Mais perto, perto da Tua cruz
Quero estar, ó Salvador!
Mais perto, perto, perto da Tua cruz
Leva-me, ó meu Senhor!

A seguir-Te só, me consagro eu,
Constrangido pelo amor,
E, alegre, já me declaro Teu,
P’ra servir-Te a Ti, Senhor.

Oh! Que pura e santa delicie é,
Aos Teus santos pés me achar,
E com viva e reverente fé,
Com meu Salvador falar.`},
{id:"h056",num:56,title:"Tudo em Cristo",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Dantes, trabalhava sempre com temor,
Mas descanso, agora em meu Salvador;
Dantes "esperava"; hoje, “bem o sei”
Que estou salvo em Cristo, meu bendito Rei.

Coro:
Tudo! Tudo em Cristo’
Que por mim morreu.
Tudo! Tudo em Cristo!
Cristo é todo meu.

Dantes, desejava bênção do Senhor;
Hoje, mais de Cristo, mais de Seu amor!
Não somente a bênção, que tão pronto dá,
Mas Ele mesmo a fonte em quem tudo está.

Dantes, duvidava, era sempre "o eu”:
Hoje, bem conheço Cristo, além do véu,
Sacerdote eterno, lá por mim entrou;
NEle estou completo, nEle aceito sou.

Dantes queria o mundo; hoje, é só Jesus!
Dantes, eram trevas: hoje, é plena luz;
Dantes, o receio, hoje, a doce paz,
Tudo a Cristo deixo, Ele me satisfaz.`},
{id:"h057",num:57,title:"Vivifica-nos Senhor",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Deus presente está conosco.
Pronto todos a salvar;
Sobre as almas sequiosas,
Quer Sua bênção derramar.

Coro:
Manda, ó manda as ricas chuvas 
Da Tua bênção, Salvador!
Imploramos! Esperamos! 
Viviflca-nos, Senhor!

Eis a Ti, Senhor, erguemos 
Nossos pobres corações;
Na Tua grande e rica graça,
Ouve as nossas petições!

Torna a nossa fé mais viva,
Mais ardente o nosso amor;
Enche-nos de santo zelo,
De coragem e fervor.`},
{id:"h058",num:58,title:"Não Temas",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`“Não temas! Contigo, Eu sempre estarei!
Oh! rica promessa do bondoso Rei;
Qual estrela que brilha, lá na escuridão,
Esta linda promessa brilha no meu coração.

Coro:
Comigo estar! Comigo estar!
Sim, Jesus me promete,
Sempre comigo estar.
Comigo estar! Comigo estar!
Sim, Jesus me promete,
Sempre comigo estar.

Os lírios mais alvos, ei-los murchos estão!
Os dias mais belos, quão depressa vão!
Cristo, o lírio dos vales, nunca mudará:
Cristo, a luz celeste, sempre comigo estará!

E, se pelas águas tiver de passar,
Seus braços eternos hão de me guardar;
Sim, mesmo no fogo. que vem me provar,
Meu Senhor me promete sempre comigo estar!`},
{id:"h059",num:59,title:"Eu creio, Sim",category:"harpa",author:"Frida Vingren",lyrics:`Te conhecer o amor sem fim,
Um pecador fui eu;
Em o meu pensar não houve lugar
Para Cristo e o céu.

Coro:
Eu creio, sim, Já creio, sim,
Jesus morreu por mim;
Pelo sangue Seu, que Ele verteu,
Libertado fui por fim.

Pois, quando vi Jesus por mim,
Sofrendo sobre a cruz,
O meu coração, sem hesitação,
Recebeu o amor e a luz.

Com lágrimas, pedi perdão,
E dor, também senti;
Veio, então, Jesus, e a mim falou:
“Foi por ti que Eu morri”. 

Eu sei que Deus, no Filho Seu,
Me vê perfeito e são;
Não há mais temor, só bendito amor,
Gozo no meu coração.`},
{id:"h060",num:60,title:"Exultação do Crente",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Vinde, cantai e entoei
Louvores a Jesus,
Que, para nossa salvação, 
Morreu na amarga cruz,
Seu sangue derramou, de tudo me lavou,
Mais alvo do que a neve me tornou.

Coro:
O sangue de Jesus me lavou, me lavou!
O sangue de Jesus me lavou, me lavou!
Alegre cantarei louvores ao meu Rei,
A meu Senhor Jesus, que me salvou.

Vinde conosco vos unir
Na guerra contra o mal;
E com nosso Salvador,
Em marcha triunfal,
A todos proclamar, Sua graça e Seu poder. 
Seu sangue derramou p’ra nos salvar!

O Capitão da salvação
É Cristo, o Salvador;
O Rei dos reis, o Redentor.
Jesus, nosso Senhor;
Ele tudo vencerá, vitória nos dará;
A glória salvos, nos conduzirá.`},
{id:"h061",num:61,title:"Deus Tomará Conta de Ti",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em todo o tempo, irmão, o Senhor
Tomará conta de ti.
Cristo, que fala de vida e amor,
Tomará conta de ti.

Coro:
Deus tomará conta de ti,
Deus tomará conta de ti,
NEle descansa, sempre aqui,
Pois tem cuidado Deus, de ti.

Em toda prova, irmão, o Senhor
Tomará conta de ti
Cristo, que é teu amado Pastor,
Tomará conta de ti.

Em toda parte, irmão, o Senhor
Tomará conta de ti.
Cristo, que nos dá poder e valor,
Tomará conta de ti.

Chegando a morte, irmão, o Senhor
Tomará conta de ti.
Cristo será teu fiel condutor:
Tomará conta de ti.`},
{id:"h062",num:62,title:"Achei Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Achei Jesus, achei Jesus, 
Oh! gozo incomparável! 
Pois salvo estou, já tenho luz 
E paz inexplicável! 
Os meus pecados expiou 
O sangue do Cordeiro; 
As minhas trevas dissipou; 
De Deus eu sou herdeiro! 

Jesus mui longe me buscou, 
Perdido me encontrava! 
E do pecado me salvou, 
O qual me atormentava, 
Pertenço ao meu bom Redentor, 
Ao meu melhor amigo, 
Que me livrou de toda a dor, 
E sempre está comigo. 

Oh! Que prazer, oh! Que prazer! 
Jesus é meu amado! 
Do Salvador eu quero ser 
Um servo consagrado; 
Pois já me deu a salvação, 
Que nos foi prometida, 
Ao meu cansado coração 
Encheu de nova vida. 

Desejo a meu Jesus louvar, 
Em doce harmonia; 
Em Cristo, tudo fui achar, 
Pois tudo carecia; 
E sem cessar, o Salvador, 
Me ama ternamente; 
O que direi a tal amor? 
"Te amo eternamente!"`},
{id:"h063",num:63,title:"Acordai, Acordai",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Eis marchamos para aquele bom país, 
Onde o crente (sim, é Cristo quem o diz), 
Com seu Salvador pra sempre ali feliz, 
Vai com Ele descansar. 
Trabalhemos, pois, com zelo e com vigor, 
Constrangidos pelo Seu imenso amor; 
Trabalhemos pelo nosso Salvador: 
Eis que a vida vai findar! 

Coro:
Acordai! Acordai! Despertai! Despertai! 
E cantai! Sim, cantai! O Senhor não tardará. 
Eis marchamos para aquele bom país, 
Onde o crente (sim, é Cristo quem o diz), 
Com seu Salvador, p’ra sempre ali feliz, 
Vai com Ele descansar.

Eis conosco nosso insigne Capitão, 
Que nos assegura eterna salvação! 
Eis da santa fé, o invicto pavilhão! 
Vamos, vamos trabalhar! 
Eis avante! Nada temos que temer; 
Por Jesus, havemos sempre de vencer, 
Trabalhemos, pois até o amanhecer, 
E o trabalho aqui findar! 

Revestidos da couraça de Jesus, 
Como servos Seus e filhos, sim, da luz, 
Gloriando-nos em Cristo e Sua cruz! 
Vamos, vamos, trabalhar! 
Os perdidos, vamos com amor buscar, 
Aos desesperados, vamos declarar 
Que Jesus ‘stá pronto todos a salvar! 
Ó sim, vamos trabalhar!`},
{id:"h064",num:64,title:"De Todo o Mundo: Aleluia!",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`De todo o mundo, eis-nos aqui 
Em Ti só confiando, 
Permanecendo em Teu amor, 
Teu reino só buscando, 
As nossas vidas, nosso amor, 
A Ti trazemos, Salvador, 
Cantando: “Aleluia!" 

Viver por Ti, em Ti morrer, 
Os nossos pais miravam; 
A Tua vontade só fazer, 
Eis o que desejavam. 
E nós, que somos Teus, também 
Dizemos, firmes: Sim, Amém’ 
E: "Glória! Aleluia!” 

Ao Evangelho salvador, 
Tão puro e glorioso, 
As leis santíssimas que Tu 
Nos dás, Senhor bondoso, 
“Amém! Dizemos com fervor, 
E, pelo Teu imenso amor, 
Clamamos: "Aleluia!” 

Sim, constrangidos pelo amor, 
Perdidos procuramos 
Salvar, - ganhar p'ra Ti, Senhor: 
Eis o que ambicionamos, 
Seguindo sempre a Tua lei, 
A Ti, leais, bendito Rei, 
Cantamos: “Aleluia!” 

Nem o labor será em vão, 
Pois eis, que glorioso, 
O dia vem, em que Jesus 
Virá vitorioso; 
E todo mundo cantará, 
E jubiloso O exaltará, 
Com: “Amém", “Aleluia!”`},
{id:"h065",num:65,title:"Quem Irá?",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Eis os milhões, que em trevas tão medonhas 
Jazem perdidos, sem o Salvador! 
Quem, quem irá as novas proclamando, 
Que Deus, em Cristo, salva o pecador? 

Coro:
“Todo o poder o Pai me deu, 
Na terra, como lá no céu! 
Ide, pois, anunciar o Evangelho, 
E eis-me convosco Sempre!”

2 Portas abertas, eis por todo o mundo! 
Cristãos, erguei-vos! Já avante anda!! 
Crentes em Cristo! Uni as vossas forças. 
Da escravidão os povos liberta!. 

"Ó vinde a mim! A voz divina clama, 
"Vinde!" Clama! em nome de Jesus: 
Pra nos salvar da maldição eterna, 
Seu sangue derramou por nós na cruz. 

Ó Deus apressa o dia glorioso, 
Em que os remidos todos se unirão, 
E, em coro excelso, santo, jubiloso, 
P'ra todo o sempre, glória a Ti darão.`},
{id:"h066",num:66,title:"Pronto a Salvar",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Todo o que crê no Filho de Deus,
Que, p'ra nos remir, desceu dos céus;
Todo o que, contrito, a Deus se chegar,
Jesus está pronto, agora, a salvar.

Coro:
Sim, Jesus te chama, ó meu Irmão!
A ti Ele oferece pleno perdão;
Seu sangue verteu para te resgatar,
E Ele é quem quer e pode salvar.

Quem, arrependido, busca perdão,
Abrindo a Jesus o seu coração,
A paz hoje mesmo pode gozar,
Pois Ele está pronto, agora, a salvar.`},
{id:"h067",num:67,title:"Quem Quer ir Com Cristo?",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quem quer hoje mesmo a Jesus seguir? 
Seu pendão alçando, ao combate ir? 
Quem quer, humilhado, sempre O servir, 
E obedecê-Lo. Seu querer cumprir? 

Coro:
Quem quer ir com Cristo, quem responderá, 
Presto, sem demora, “eu, Senhor, irei”? 
Onde for o Mestre, tu também irás? 
Quem dirá agora: “eu Te seguirei”?

Quem seguir a Cristo quer, com mui amor, 
Dando-Lhe tributo, dando-Lhe louvor; 
De Sua nobre causa, sendo defensor, 
E na santa vinha, ser trabalhador? 

Queres tu segui-Lo, sem vacilação, 
E fugir dos braços da vil tentação? 
Sempre confiando na Sua proteção, 
Por fé desfrutando Sua salvação.`},
{id:"h068",num:68,title:"Gozo de Ter Salvação",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Podes receber a doce paz de Deus, 
Crendo em Jesus, que já desceu dos céus: 
Toma, hoje, tua cruz, 
Vem das trevas para a luz, 
E, assim, mui gozo te dará Jesus! 

Coro:
Gozo de ter salvação, 
Gozo no teu coração. 
Alegria fruirás, 
Quando desfrutares paz, 
Que te trouxa Cristo, na cruenta cruz!

O amor de Cristo podes conhecer, 
Seu sustento santo podes receber: 
Não mais só combaterás, 
Cristo te defenderá, 
E, assim, mui gozo te dará Jesus. 

Queres tu, de Cristo, fiel soldado ser? 
Pelejar por Ele sempre sem temer? 
Vem, então, ao Salvador; 
Far-te-á mui vencedor, 
E, assim, mui gozo te dará Jesus. 

Poderás por Cristo ser aqui uma luz, 
Se obedeceres ao Senhor Jesus! 
Ó vem, hoje, sem temor, 
Aceitar o Salvador, 
E, assim, mui gozo te dará Jesus.`},
{id:"h069",num:69,title:"Jesus Quebrou os Meus Grilhões",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus quebrou os meus grilhões, 
Com sangue me comprou; 
A minha alma, de prisões, 
Eterna resgatou. 

Coro:
Aleluia! Cristo salva o perdido pecador! 
Aleluia! Cristo salva o perdido com amor!

É minha paz, e proteção, 
Meu bom Consolador; 
Auxílio certo na aflição, 
Remédio para a dor, 

Nenhum perigo temerei, 
Estando em Jesus; 
As dores não mais sofrerei; 
Jesus é minha luz. 

Jesus, Teu nome louvarei, 
Com todo o coração; 
Alegre ao mundo anunciarei 
Tão grande salvação.`},
{id:"h070",num:70,title:"Cristo Vai Voltar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Nós Aleluia daremos a Cristo, 
Quando O virmos nas nuvens voltar, 
De esplendor e de glória vestido, 
Seus escolhidos vai arrebatar. 

Coro:
Cristo Jesus logo vai voltar, 
Vai voltar, vai voltar, 
Seu povo vem, sim, arrebatar; 
Jesus breve regressará!

Eis que estou no Senhor confiando, 
Todo o meu ser a Jesus entreguei. 
Todos prazeres eu tenho deixado, 
Em Jesus Cristo meu gozo achei. 

Como há de ser para ti Sua vinda? 
Ela trará gozo ao teu coração? 
Ou te fará padecer mais ainda? 
Temes que só te trará maldição? 

Cristo a mim a promessa tem dado 
Que junto dEle, também reinarei; 
Breve será meu Jesus proclamado 
Sobre a terra, por todos: "O Rei".`},
{id:"h071",num:71,title:"Santo és Tu, Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Santo! Santo! Grande eterno Deus, 
Com alegria nós Te louvamos. 
Rei dos reis e Criador dos céus. 
Humilhados Te adoramos; 
Honra e glória em Ti miramos, 
Pois foi rasgado, na cruz, o véu. 

Coro:
Santo para sempre és Tu, Senhor 
Nas batalhas és vencedor!

Adorai-O terra, céu e mar; 
Toda a Igreja, seus mensageiros, 
Reunidos, vinde suplicar 
Dons celestes, pois sois herdeiros 
De Deus, e com Jesus coherdeiros 
Da glória que jamais vai findar. 

Rei doa séc'los, grande eterno Deus! 
Tu és veraz e incompreensível, 
Criador da terra e dos céus; 
És o Ancião invisível, 
Habitas na luz inacessível, 
Lá morarão os remidos Teus.`},
{id:"h072",num:72,title:"Rasgou-se o Véu",category:"harpa",author:"Anônimo",lyrics:`Rasgou-se o véu, franca ficou a entrada: 
Confiança temos, para ali entrar, 
Onde a divina glória revelada, 
Outrora, não podíamos mirar; 
Por Cristo, entrando, nada ali tememos; 
A glória brilha, sem nos ofuscar; 
Na luz estamos e permanecemos 
Firmes, tranqüilos, sem mais vacilar. 

Contigo ali, Senhor, nos encontramos, 
Pois nos levaste já ao santo Pai, 
Em cuja graça aceitos, sempre estamos, 
Em cujo amor tão grande nos atrai 
A Ti, ó Filho - em Ti, ó bem amado! 
E só em Ti temos aceitação; 
E quem, no sangue estando já lavado, 
Isento está da eterna perdição. 

Ó Deus, a Ti de coração louvamos, 
Pois de Ti nos quiseste aproximar, 
Quando separados de Ti ficamos, 
Por Tua lei divina, violar, 
Teus santos seguidores, consagrados, 
No sangue do bendito Salvador, 
O culto e adoração Te apresentamos, 
Porque nos chamaste, ó bom Senhor!`},
{id:"h073",num:73,title:"Vem, Vem a Mim",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Pecador escuta a voz do Senhor: 
"Se estás cansado, ó vem descansar; 
Vem, não te detenhas; sem nenhum temor, 
Deixa o teu fardo e vem repousar”. 

Coro:
Vem, vem a Mim e descansarás; 
Toma o Meu Jugo e Te guiarei; 
Sou humilde, manso, dou-Te minha paz; 
Ó vem, hoJe mesmo, e Te salvarei.

Vem a Deus, faminto, pobre mesmo assim; 
Há maná celeste, preparado já; 
Grátis é a festa, p'ra ti e p'ra mim, 
Cristo te convida, vem e cearás. 

Andas desviado, longe do redil? 
Deixa de vagar e vem ao bom Pastor; 
Pelos montes, vales, há perigos mil? 
Volta ao rebanho do teu Salvador. 

Crendo tu, em Cristo, salvação terás; 
Gozo, paz perfeita, tudo que é mister; 
Cristo não despreza, nem rejeitará 
Todo o que contrito a Ele vier.`},
{id:"h074",num:74,title:"Cristo Virá",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Talvez Cristo venha ao romper da aurora, 
Com santos arcanjos, e com voz sonora; 
Os mortos porá dos sepulcros p'ra fora; 
Jesus, breve, vem nos buscar. 

Coro:
Cristo, que há de vir, virá! 
Ele não tardara, sim, Jesus vem; 
Aleluia! Aleluia! Amém! Aleluia! Amém!

Talvez voltará quando o dia feneça, 
Ou em uma noite a luz resplandeça; 
Irmãos, esperai que Jesus apareça! 
Jesus, breve, vem nos buscar. 

O Seu esplendor e a glória veremos, 
Do mundo, então, nós por fim, sairemos, 
Assim, grande gozo no céu fruiremos; 
Jesus, breve, vem nos buscar.`},
{id:"h075",num:75,title:"Em Jesus Tens a Palma da Vitória",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tentado, não cedas, ceder é pecar, 
Melhor e mais nobre, será triunfar, 
Coragem, ó crente, domina o teu mal. 
Deus pode livrar-te de queda fatal. 

Coro:
Em Jesus tens a palma 
Da vitória, minh’alma; 
E também doce calma 
Pelo sangue da cruz!

Evita o pecado, procura agradar 
A Deus, a quem deves no corpo exaltar; 
Não manches teus lábios com impura voz; 
Defende tua alma do vicio atroz. 

Sê manso e benigno, qual morto até. 
Na rocha eterna, firma tua fé; 
Veraz é teu dito: de Deus é teu ser? 
T'espera a coroa, tu podes vencer.`},
{id:"h076",num:76,title:"Vem, ó Pródigo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem, ó pródigo, vem sem tardar, te chama Deus, 
Ouve-O chamando, sim, chamando a ti; 
Tu, que vagas errante escuta a voz dos céus, 
Ó escuta a voz de amor. 

Coro:
Deus espera por ti. perdido, pródigo, vem; 
Deus espera por ti, perdido, pródigo, vem

Com paciência e ternura te chama o Senhor, 
Ouve-O chamando, sim, chamando a ti; 
Vem enquanto te chama o meigo Salvador, 
Ó escuta a voz de amor! 

Lá na casa do Pai, abundância há de pão; 
Ouve-O chamando, sim, chamando a ti; 
Já está pronta a mesa com toda a provisão, 
Ó escuta a voz de amor!`},
{id:"h077",num:77,title:"Guarda o Contacto",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Música

Playback

Queres, neste mundo, ser um vencedor? 
Queres tu cantar nas lutas e na dor? 
Queres ser alegre, qual bom lutador? 
Guarda o contacto com teu Salvador! 

Coro:
Guarda o contacto com teu Salvador, 
E a nuvem do mal não te cobrirá; 
Pela senda alegre, tu caminharás 
Indo em contacto com teu Salvador.

Neste mundo, vivem muitos a penar, 
Cujos corações transbordam de pesar; 
Dá-lhes a mensagem de amor sem par; 
Com Deus o contacto deves tu guardar! 

Queres tu, com Deus, a comunhão obter? 
Sua glória em ti sempre permanecer? 
Que o mundo possa Cristo em ti ver! 
Guarda o contacto co'o supremo Ser. 

Deixa que o Espírito implante em teu ser, 
O amor de Cristo, divinal prazer; 
Queres, neste mundo, todo mal vencer? 
Guarda o contacto e terás poder!`},
{id:"h078",num:78,title:"Meu Forte Redentor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vagando eu em grande escuridão, 
O Salvador me encontrou, 
Perdido, mesmo, sem ter salvação; 
A minh’alma Seu sangue lavou. 

Coro:
Jesus é o meu forte Redentor; 
Ele é meu grande Salvador, 
Que me libertou na cruz, com mui amor, 
Cristo é meu Rei e meu Senhor.

Nos meus pecados e vil turbação, 
A luz mostrou-me, o Senhor; 
E fez-me ver que ali na perdição 
Me alcançava Seu grande amor. 

Eu gozo desta grande salvação, 
Meu nome já no céu está; 
E recebi a divina! unção, 
Que aos fiéis ainda Deus dá. 

Num dia alegre, Cristo voltará, 
E para o céu eu subirei; 
Meu corpo transformado, então será, 
Qual o de Cristo Jesus. o meu Rei.`},
{id:"h079",num:79,title:"Sua Graça Me Basta",category:"harpa",author:"Gunnar Vingren",lyrics:`Quando me sinto fraco, não tenho mais vigor, 
Não vendo mais o brilho do sol, da clara luz; 
Jesus está comigo, é meu Consolador; 
Ele jamais me deixa, pois sempre me conduz. 

Coro:
Sua graça me basta a mim, a mim, 
Sus graça me basta a mim; 
Na vida d’aquém, no céu também, 
Sua graça me basta a mim.

Quando a tempestade vem contra mim feroz, 
Nas trevas navegando com minha embarcação, 
Cristo Jesus me anima, ouço a Sua voz; 
"Eis que estou contigo, por que temer, então?" 

Quando m’atingem os dardos do inimigo audaz, 
Que busca com astúcia a vida me tirar, 
Eu clamo, então, a Cristo, meu Salvador veraz, 
O qual me dá vitória, se nEle eu confiar.`},
{id:"h080",num:80,title:"Cristo Te Chama",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo te chama, a ti. pecador, 
Te chama a ti, com voz de amor; 
Deixa os pecados, e vem ao Senhor. 
Cristo te chama a til 

Coro:
Cristo te chama, te chama a ti! 
Cristo te chama, ó vem pecador! 
Cristo te chama com voz de amor. 
Cristo te chama a ti!

Deixa as sendas do mundo d’horror, 
Vem a Jesus, vem com amor; 
Cristo te salva, ó vem, pecador; 
Cristo te chama a ti! 

Cristo glorioso virá com poder; 
Pronto estás para ascender? 
Só por Seu sangue tu podes vencer. 
Cristo te chama a ti! 

A compassiva voz do Salvador, 
Chama-te já com santo amor; 
Vem para a fonte, á vem pecador, 
Cristo te chama a ti!`},
{id:"h081",num:81,title:"Pode Salvar",category:"harpa",author:"Erik Janson",lyrics:`Somente em Cristo podemos 
A salvação receber; 
Novo concerto nós temos 
Em quem na cruz quis morrer. 

Coro:
Pode salvar, pode salvar, 
Tira os pecados, e quer vos salvar, 
Pode salvar, pode salvar, 
Tira os pecados, e quer vos salvar.

Quando perdoa os pecados 
Vida nos quer conceder. 
Fomos por sangue comprados 
Do modo vão de viver. 

Teu coração já entrega 
A quem te pode salvar; 
E quem as dores carrega: 
Cristo te pode livrar! 

Cristo te quer dar agora 
Paz e descanso real; 
Quer revelar-te esta hora: 
Graça imensa e real.`},
{id:"h082",num:82,title:"Um Meigo Salvador",category:"harpa",author:"Samuel Nyström",lyrics:`Um Salvador meigo eu tenho,
A quem antes não conheci;
Agora, alegre, eu venho
Contando a todos que O vi.

Coro:
Todos, todos verão,
Todos, todos verão;
Jesus glorioso e bondoso,
Sim, todos, todos verão.

De todos, é o mais formoso,
Imagem da glória de Deus;
Tornou-me alegre e ditoso,
E herdeiro da glória dos céus.

Se os ímpios me armarem cilada.
Na senda que hei de trilhar,
Jesus me dará boa espada,
E os laços eu hei de cortar.

A vida e o amor Tu me deste,
Porque Tu amaste a mim,
Tornou, sim, a glória celeste,
Minha sorte bendita, enfim.`},
{id:"h083",num:83,title:"Não Posso Explicar",category:"harpa",author:"Samuel Nyström",lyrics:`Mais perto de Jesus, procuro sempre eu chegar,
Mais belo que o ouro do sol nado é a Ti mirar.
Em pensamento, sonhos, tanta glória nunca vi;
Pois Ele é mais belo do que eu jamais previ! 

Coro:
Não posso explicar 
Quão meigo é Jesus; 
Mas, face a face, no Teu lar, 
Eu Te verei, Jesus!

A estrela resplendente da manhã á minha luz; 
O lírio dos vales é o bom Senhor Jesus; 
Suave e doce é o cheiro que só vem de Ti; 
Pois Ele é mais belo do que eu jamais previ! 

Se mágoas vêm me perturbar, o bálsamo Ele tem; 
Me toma nos Seus braços e, assim, descanso bem; 
Na cruz levou Jesus o meu pecado sobre Si; 
Pois Ele é mais belo do que eu jamais previ!`},
{id:"h084",num:84,title:"O Grande “Eu sou”",category:"harpa",author:"José Rodrigues",lyrics:`Não perturbeis o coração, 
Porque Eu sempre sou fie!; 
Eu fecho a boca do "leão", 
Na cova estou com Daniel. 

Coro:
Sou Eu aquele, o grande “EU SOU” 
E, onde estais, também estou; 
Não disse, Eu, há muito já: 
“Pedi, pedi... dar-se-voa-á”? 
Pedi com fé e com fervor 
E vos darei o Consolador.

Quem tem a fé de Abraão, 
O mundo sempre há de vencer; 
Quem quer ter firme o coração. 
Precisa igualmente crer. 

Um terremoto e vento, após. 
Do céu, um fogo e mui furor. 
Ouviu Elias a minha voz, 
Voz do Eterno, voz de amor. 

Um certo dia, Estêvão viu 
O céu aberto e viu-me a mim; 
Apedrejado, sucumbiu, 
Mas foi fiel, até o fim. 

Firmado em Mim, Rocha Eternal, 
Assim jamais o crente cai; 
Buscai o dom celestial, 
Que vem da casa de Meu Pai.`},
{id:"h085",num:85,title:"Deixai Entrar o Espírito de Deus",category:"harpa",author:"Frida Vingren",lyrics:`Do Santo Espírito, está escrito,
Que sois o templo, sim, templo de Deus;
Já recebestes, depois que crestes,
O dom glorioso descido do céu?

Coro:
Deixai entrar, para morar,
O Espírito de Deus;
Dom prometido, já concedido,
Bendito dom dos altos céus.

O que vos salva, também vos lava,
P'ra vossa alma de manchas limpar;
Purificados de vis pecados,
O Santo Espírito já pode entrar.

Ó peregrinos, vede o destino,
Entrai na terra de leite e mel,
Santificados, por Deus chamados,
Sereis guiados, por guia fiel.`},
{id:"h086",num:86,title:"Satisfeito com Cristo",category:"harpa",author:"Anônimo",lyrics:`Oh! 'stou satisfeito com Cristo, 
Porque Ele minh’alma salvou; 
E sobre o madeiro, sofrendo, 
O Seu grande amor revelou. 

Coro:
Oh! 'stou satisfeito com Cristo, 
Confesso-O por meu Salvador: 
Embora de nada ser digno, 
Desfruto do Seu grande amor.

Oh! 'stou satisfeito com Cristo, 
De triste, tornei-me feliz, 
Ouvindo o Seu santo Evangelho, 
E crendo no que Ele me diz. 

Oh! 'stou satisfeito com Cristo, 
E sei que vai logo voltar; 
Virá com poder glorioso, 
A fim de Seu povo levar.`},
{id:"h087",num:87,title:"Meu Testemunho",category:"harpa",author:"Samuel Nyström",lyrics:`Justificado estou; 
Cristo Jesus me livrou; 
Ele é meu Mediador, 
Também, meu bom Salvador. 

Coro:
Jesus, sou Teu, e Tu és meu; 
Me guiarás para o céu; 
Com graça e paz me satisfaz 
Cristo, meu Mestre veraz.

Santificado fiquei, 
Quando a Ele roguei; 
Ele me disse: tomai; 
De minha graça usai. 

Fui redimido, também, 
Obra do meu Sumo Bem; 
Tudo de graça ganhei; 
Nada por obras da lei. 

Ele a promessa me deu, 
Do Guia santo do céu; 
Também me disse: ficai, 
E o batismo esperai. 

Quando a Ele busquei, 
E batizado fiquei, 
Línguas estranhas falei, 
E meu Senhor exaltei. 

Agora, vou trabalhar, 
E muitas almas ganhar; 
Essas que Ele salvou 
Quando na cruz expirou.`},
{id:"h088",num:88,title:"Revela a Nós Senhor",category:"harpa",author:"Anônimo",lyrics:`Jesus, meu Rei, Mestre e Senhor,
O Teu amor revela a mim,
Enquanto eu aqui viver,
Até eu ver da vida o fim.

Coro:
Revela a nós, Senhor Jesus, meu Salvador,
As maravilhas mil do Teu divino amor;
E com veraz louvor, fervente gratidão;
Eleva a TI, Jesus Senhor, o nosso coração.

As bênçãos mil do Teu amor,
Qual esplendor me cercarão;
O Teu olhar será, Jesus,
A grata luz do coração.

Sorrisos Teus verei brilhar,
Se não andar no mundo vil:
Desfrutarei prazer veraz,
Tempo de paz primaveril.

E, quando for no céu morar,
E descansar dos dias meus,
Feliz viver receberei
De Ti, meu Rei, meu santo Deus!`},
{id:"h089",num:89,title:"Sublime e Grande Amor",category:"harpa",author:"M.S.B Manuel Sabino Bezerra",lyrics:`Conta-me, sim, de Jesus, 
Para na mente, eu gravar 
Como foi que padeceu 
Na cruz, pra me libertar: 
A Sua paixão e morte, 
A começar no jardim, 
Não houve mais quem tivesse 
Um sofrimento assim! 

Coro:
Só amor! Só amor! 
Só amor! Sublime e grande amor!

Conta-me como sentiu 
A rude morte na cruz, 
Suportando a acusação 
Dos inimigos da luz; 
Conta-me como tem dado 
Ao malfeitor Sua paz, 
Dizendo: "Hoje, comigo, 
No Paraíso estarás". 

Conta-me como chorou, 
Falando a Jerusalém; 
Profetas fazes morrer, 
Quando a ti eles vêm; 
Conta-me como inda chora, 
Por causa do pecador, 
Que não quer Seu Evangelho, 
Proclamado com amor. 

Conta-me como o Senhor 
Um bom testemunho deu. 
Satisfazendo a lei, 
Quando o cálice bebeu; 
Também disse estas palavras, 
Com Seu tão profundo amor; 
Pai, lhes perdoa a cegueira, 
Que é própria do pecador. 

Conta-me como, também, 
Veio ao povo judeu, 
Povo que tanto amou, 
Querendo dar-lhe os céus; 
Como inda hoje Ele ama 
A todo o pecador, 
Dando-lhe paz e descanso, 
Pelo Evangelho de amor.`},
{id:"h090",num:90,title:"Há Paz e Alegria",category:"harpa",author:"A.T.G Antônio Torres da Silva",lyrics:`Há paz e alegria no reino da luz; 
Á pátria dos remidos, Jesus nos conduz, 
No reino dos céus há gozo e paz; 
Os filhos de Deus têm poder veraz. 

Há paz e alegria no reino dos céus; 
Os salvos lá entoam louvores a Deus; 
Dai glória a Jesus! Porque nos amou; 
Por nós o Seu sangue Ele derramou! 

Jesus tem prometido o Consolador! 
O Espírito Santo, o instruidor; 
Também prometeu, no reino dos céus, 
Um santo lugar, junto ao nosso Deus. 

Firmado na promessa tão grande e eficaz, 
Agora neste mundo desfruto a paz; 
Espero Jesus, nas nuvens descer, 
E na Sua glória me receber.`},
{id:"h091",num:91,title:"Nívea Luz",category:"harpa",author:"J.H.N Justus H. Nelson",lyrics:`Jesus, eu almejo a pureza do céu,
Tua linda presença no coração meu
Os ídolos quebro, me toma Jesus;
Ó dá-me a pureza da nívea luz.

Coro:
Nívea luz, a nívea luz,
Ó dá-me a pureza da nívea luz.

Jesus, me acode enquanto lidar,
A colocar tudo no santo altar;
A Ti me entrego; nas chamas me pus;
Ó dá-me a pureza da nívea luz!

Jesus, com instância, humilde, roguei
Que o sangue perfeito pureza me dê;
Me lava na fonte aberta na cruz
Ó dá-me a pureza da nívea luz!

Jesus, neste instante, espero a mão
Que há de criar-me o bom coração;
Aqueles que o Espírito pedem de Deus,
Dás sempre a pureza da nívea luz!`},
{id:"h092",num:92,title:"O Bondoso Salvador",category:"harpa",author:"Samuel Nyström",lyrics:`Meu bondoso Salvador 
Meus pecados carregou; 
Foi Jesus, o Redentor, 
Que da morte me livrou. 

Coro:
Oh! Que Salvador eu tenho! 
O Seu sangue me remiu, 
Quando, sobre o rude lenho, 
Meu castigo Ele cumpriu.

Oh! Que amor do meu Jesus, 
Que em homem se encarnou, 
Pra sofrer por mim, na cruz; 
E meus crimes perdoou.

3 Não há outro nome igual 
Ao bom nome de Jesus, 
Porque livra-me do mal 
E à glória me conduz. 

Com Jesus, alegre, vou 
Sua graça publicar, 
Porque Ele me chamou 
Na Sua vinha a trabalhar.`},
{id:"h093",num:93,title:"Há Trabalho Pronto",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Há trabalho pronto para ti, cristão; 
Que demanda toda a tua devoção; 
Vem, alegremente, a Cristo obedecer, 
Pois só tu, ó crente, o poderás fazer! 

Coro:
Por Jesus a trabalhar, 
Prontamente, fielmente, trabalhar! 
Em Servi-Lo, que prazer! 
E só tu, ó crente, o poderás fazer.

Para cada crente, o Mestre preparou 
Um trabalho certo, quando o resgatou, 
O trabalho a que Jesus te chama aqui. 
Como será feito, se não for por ti? 

Pode ser humilde, mas se for p'ra Deus, 
Ele é contemplado lá dos altos céus. 
E o esforço feito não será em vão 
Se tiver de Cristo, plena aprovação! 

Quantos há perdidos, sem a salvação! 
Quantos que precisam de consolação! 
Como Cristo os ama, fá-los entender, 
Pois só tu, á crente, o poderás fazer!`},
{id:"h094",num:94,title:"Na Jerusalém de Deus",category:"harpa",author:"Otto Nelson",lyrics:`Quando a luta desta vida 
Trabalhosa se findar, 
O adeus a este mundo vamos dar; 
Para o céu então iremos, 
Com Jesus nos encontrar 
Na Jerusalém de Deus. 

Coro:
Oh! que gozo e alegria, 
Quando o povo ali chegar, 
Em Jerusalém! Em Jerusalém! 
Sempre ali cantando hosanas, 
Pois o Rei no trono esta, 
Na Jerusalém de Deus.

O caminho é extenso, 
Mas Jesus vai me guiar, 
Quando, pelas provações aqui passar; 
Pois olhando nEle, eu sigo. 
Para brevemente estar, 
Na Jerusalém de Deus.

Ao sairmos deste mundo, 
Para a divina! mansão, 
Gozaremos a perfeita salvação; 
E Jesus contemplaremos 
A estender-nos Sua mão, 
Na Jerusalém de Deus. 

Quando, unidos com os salvos, 
Lá na pátria do Senhor, 
Contemplarmos a Jesus, o Salvador, 
Sempre nos alegraremos 
Onde há perfeito amor; 
Na Jerusalém de Deus.`},
{id:"h095",num:95,title:"Ouve, ó Pecador",category:"harpa",author:"José Felinto",lyrics:`Ouve, ouve, ó pecador! 
Ouve bem, presta atenção 
A Jesus, o Salvador, 
Que do céu trouxe o perdão; 
Ouve a Sua meiga voz; 
Digna é de aceitação. 

Ouve o que diz o Senhor, 
Por Sua mensagem de amor; 
"Será livre de temor 
Todo que vier a Mim”; 
Vem a Cristo, Salvador, 
E aceita o Seu amor. 

Ouve, ouve, ó pecador! 
E medita com atenção; 
Deixa o mundo enganador; 
De Jesus, terás perdão; 
Ele diz: “Quem crer em Mim, 
Há de ter a Salvação”. 

Ouvi já, amigos meus, 
Não tenhais hesitação; 
Vinde ao Filho, sim, de Deus; 
Dai-Lhe o vosso coração; 
Ele diz: “Quem crer em Mim, 
Não terá condenação”.`},
{id:"h096",num:96,title:"Deixa Penetrar a Luz",category:"harpa",author:"José Rodrigues",lyrics:`Se ao inimigo temes combater, 
Se estás em trevas e não tens poder, 
Que a formosa luz de Deus fulgure em ti; 
E serás feliz assim. 

Coro:
Deixa penetrar a luz! 
Deixa penetrar a luz! 
Que a formosa luz de Deus fulgure em ti; 
E serás felIz assim.

Se a tua fé é fraca no Senhor, 
E não mostras fruto ou nenhum fervor, 
Que a formosa luz de Deus fulgure em ti 
E serás feliz assim. 

Se na luz estamos, que divina luz! 
Se nos limpa sempre o sangue de Jesus, 
Temos claridade em nosso coração, 
E vivemos nós na luz. 

Se de Deus, o Espírito Consolador, 
Traz a luz do céu, divino resplendor, 
Penetrando Ele, no teu coração. 
Viverás então de amor. 

Se alegre fores à mansão sem par, 
Ó enfrenta as trevas, que vão se afastar, 
Que a formosa luz de Deus fulgure em ti, 
E serás feliz assim.`},
{id:"h097",num:97,title:"Há um Caminho Santo",category:"harpa",author:"Frida Vingren",lyrics:`Há um caminho santo, ao céu de plena luz, 
As vezes espinhoso, à glória nos conduz; 
E o caminho certo pra todo pecador; 
Jesus é o Salvador, Jesus é o Salvador. 

Há paz inabalável pra quem está na luz; 
Por preço incomparável 
comprou-me a mim Jesus 
O dom do Pai amado minh'alma satisfaz, 
Jesus é minha paz, Jesus é minha paz. 

Há um poder que sara o triste coração, 
Que dá alívio à alma, paz e consolação, 
E guarda minha veste, também, em nívea luz; 
Poder de meu Jesus, poder de meu Jesus! 

Há um fim glorioso, além do escuro véu; 
No fim do espinhoso caminho está o céu; 
E quando for tirado o véu da escuridão, 
Verei Jesus, então, verei Jesus, então.`},
{id:"h098",num:98,title:"Estarás Vigiando?",category:"harpa",author:"Almeida Sobrinho",lyrics:`Estarás tu vigiando, quando Jesus Vier? 
Ansioso, esperando, quando Jesus vier? 

Coro:
Oh! Que noite! Solene noite! 
Brilhará a tua luz, quando Jesus vier? 
Ó, sê pronto, ó, sê pronto! 
Ó, sê pronto, quando Jesus vier. 
Ó, sê pronto, ó sê pronto! 
Ó sê pronto, quando Jesus vier!

Ouvirás tu o bem-vindo, quando Jesus vier? 
Darás o brado sorrindo, quando Jesus vier? 

Só esperas preparar-te, quando Jesus vier? 
Qual será a tua parte, quando Jesus vier? 

Estarás tu jubiloso, quando Jesus vier? 
Triste ou esperançoso quando Jesus vier? 

Oh! Que culto glorioso, quando Jesus vier!
Cheio de sublime gozo, quando Jesus vier!`},
{id:"h099",num:99,title:"Eis o Dia a Declinar",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Eis o dia a declinar,
Nos convida a meditar
No Teu grande insigne amor,
Ó bendito Salvador,
E te louvar! 

Coro:
Santo! Santo! Santo Senhor dos céus
Toda terra louve a TI;
No céu, tudo adore a TI,
Bondoso Deus!

Glorioso no poder!
Infinito no saber!
A mais plena perfeição
Na justiça e no perdão
Nos fazes ver! 

Na profunda escuridão,
Ouve a nossa petição,
Vem teus filhos proteger,
E seguros sempre os ter
Na Tua mão. 

Quando tudo, enfim, passar,
Céus, estrelas, terra e mar,
Pela cruz do Salvador,
Faz-nos no Teu grande amor,
Contigo estar!`},
{id:"h100",num:100,title:"O Bom Consolador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quem quer ir, por Jesus, a nova proclamar 
Nos antros de aflição, misérias, mal e dor? 
Cristãos, anunciai que o Pai quer derramar 
O bom Consolador. 

Coro:
O bom Consolador, o bom Consolador 
Que Deus nos prometeu, ao mundo Já desceu; 
Ó Ide proclamar, que Deus quer derramar 
O bom Consolador.

No mundo de horror, a luz, enfim, brilhou 
Que veio dissipar as sombras de terror; 
Também o nosso Pai, aos Seus fiéis mandou 
O bom Consolador. 

É o Consolador que traz a salvação 
Aos que aprisionou o grande tentador: 
Dizei que veio já, com todo o coração, 
O bom Consolador. 

Oh! Grande eterno amor! Oh! Gozo divina!! 
Que tenho em proclamar o dom de meu Senhor 
Pois mora já em mim, poder celestial, 
O bom Consolador.`},
{id:"h101",num:101,title:"A Unção Real",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Qual órfãos não nos deixou o Senhor, 
Mas como nos prometeu, 
Mandou-nos o bom Consolador, 
Que nos encheu do poder do céu, 
Do Seu divinal amor! 

Coro:
Recebestes já a unção real 
Do Espírito Consolador? 
Deus quer te usar para outros salvar, 
Se recebes o Consolador.

O crentes, Deus vos convida também 
A vir buscar Seu poder; 
E para todo, que humilde vem 
O Santo Hóspede receber: 
Orando se obtém. 

Um Pentecoste, Jesus prometeu, 
A cada um coração; 
Prostrados, roguemos, pois a Deus, 
Com fé. em potente oração, 
Pra viro poder do céu.`},
{id:"h102",num:102,title:"Crê na Promessa",category:"harpa",author:"Almeida Sobrinho",lyrics:`Hoje, Jesus pode te salvar; 
Somente crê na promessa; 
Dos teus pecados purificar; 
Somente crê na promessa. 

Coro:
Crê na promessa de Jesus, 
Somente crê na promessa; 
Bênção dos céus, vida à flux! 
Somente crê na promessa.

Do alto, Jesus dará poder; 
Somente crê na promessa; 
Na Sua alegria irás vencer; 
Somente crê na promessa. 

A Sua graça vem receber; 
Somente crê na promessa; 
Tudo Jesus quer te conceder. 
Somente crê na promessa. 

Vem recebera paz do Senhor, 
Somente crê na promessa; 
Cheio serás do Consolador. 
Somente crê na promessa.`},
{id:"h103",num:103,title:"Caminhemos na Luz",category:"harpa",author:"Almeida Sobrinho",lyrics:`Há uma luz, bendita luz, 
Que vem a nós dos céus; 
A face do Senhor Jesus 
Reflete o amor de Deus. 

Coro:
Caminhemos na luz 
Caminhemos na luz de Deus. 
Caminhemos na luz 
Caminhemos na luz de Deus.

Há uma gloriosa luz 
Guiando o nosso andar, 
Nos santos passos de Jesus, 
‘Tó chegarmos ao lar. 

Há uma luz, a santa luz 
Na qual podemos ver 
No lindo céu, a glória à flux, 
Que vamos receber. 

Em santa e bendita luz. 
Cercado de esplendor, 
Virá O que morreu na cruz, 
Nosso amado Senhor.`},
{id:"h104",num:104,title:"Jesus Procura a Ovelha",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Eis Jesus a procurara ovelha, que a vagar 
Desgarrou-se do aprisco do Senhor; 
Pelos montes a sofrer, faça sol ou a chover, 
Cristo busca Sua ovelha, com amor. 

Coro:
Com amor.., o Pastor... 
Eis que chama Sua ovelha, sem cessar; 
Possa hoje, o pecador 
escutar a voz do amor, 
De Jesus, que procura p’ra salvar.

Com Seus pés o bom Pastor, já feridos, que horror, 
De descer nos tenebrosos pedregais, 
E cansado de andar, mais, ainda a clamar: 
"Ó ovelhas minhas, onde vós estais?” 

Se escuta o gemer da ovelha, que prazer 
Enche logo o coração do bom Pastor! 
E correndo sem parar, 'té a ovelha abraçar, 
E trazê-la ao Seu ombro com amor. 

Já em casa, o Pastor, Oh! Jubila com dulçor, 
Pela ovelha desgarrada que achou; 
E assim, também Jesus, com os anjos lá na luz, 
Se alegra pelas almas que salvou!`},
{id:"h105",num:105,title:"A Gloriosa Esperança",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Possuis em ti, ó pecador,
A gloriosa esperança?
E Cristo tua confiança,
Que te sustenta com vigor?
A minha é Jesus, á Jesus, é Jesus,
A minha é Jesus,
Que me concede segurança.

Se nada mais te satisfaz,
Aqui no mundo, ó perdido,
E se te sentes abatido,
Qual há de ser a tua paz?
A minha é Jesus, é Jesus, á Jesus,
A minha é Jesus,
Que não me deixa desvalido.

E quando o teu fim chegar,
E te cobrir o véu da morte,
Qual há de ser a tua sorte?
Irás sofrer? Irás gozar?
A minha é Jesus, é Jesus, é Jesus,
A minha é Jesus,
Que me tornou, de fraco, forte.

Vem a Jesus, vem pecador,
Vem dar o teu primeiro passo;
Qual é a força do teu braço,
Que te fará um vencedor?
A minha é Jesus, é Jesus, é Jesus,
A minha é Jesus,
Por ela quebro todos os laços.`},
{id:"h106",num:106,title:"Viva Cristo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Viva Cristo, eternal riqueza,
Meu escudo, vida e firmeza,
Sua graça - Oh! me faça
Reluzir no Seu amor.

Viva Cristo, rocha já eleita,
A verdade pura e perfeita;
Meu sustento - gran contento,
Que me faz andar na luz.

Viva Cristo, minha eterna sorte;
Meu tesouro é depois da morte;
Me conforta, me exorta
A viver em perfeição.

Viva Cristo, o Senhor da glória,
Que aos crentes sempre dá vitória,
E a vida prometida,
Que, p'ra nós ganhou na cruz.

Viva Cristo, Condutor dos santos!
Viva Cristo, fortemente canto!
Pois me ama e derrama
No meu ser, celeste paz.`},
{id:"h107",num:107,title:"Firme nas Promessas",category:"harpa",author:"C M.E. Carver",lyrics:`Firme nas promessas do meu Salvador,
Cantarei louvores ao meu Criador;
Fico na dispensação do Seu amor,
Firme nas promessas de Jesus. 

Coro:
Firme, Firme, 
Firme nas promessas de Jesus, o Cristo; 
Firme, firme, 
Sim, firme nas promessas de Jesus.

Firme nas promessas, hei de não falhar, 
Quando as tempestades, vêm me assolar; 
Pelo Verbo vivo, hei de batalhar. 
Firme nas promessas de Jesus. 

Firme nas promessas, sempre vejo assim, 
Purificação no sangue, para mim; 
Plena liberdade em Jesus sem fim. 
Firme nas promessas de Jesus. 

Firme nas promessas do Senhor Jesus, 
Em amor ligado com a Sua cruz. 
Cada dia mais alegro-me na luz. 
Firme nas promessas de Jesus.`},
{id:"h108",num:108,title:"Pelejar Por Jesus",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Por Jesus vamos pelejar, 
Prosseguindo o nosso andar; 
E com Ele, então, no céu, 
Nós iremos a paz gozar. 

Coro:
Lutemos todos contra o mal, 
E vamos a Jesus seguir; 
Ele é o nosso General 
E a glória do porvir!

Em Jesus temos nós poder; 
Avancemos, já sem temer; 
Confiando no Seu amor. 
Vamos lutar, até vencer.

Crentes, para Jesus olhai, 
Pela fé, sempre, sim, lutai; 
Ao inimigo, ó combatei; 
O Evangelho anunciei. 

A Escritura nos diz assim: 
Que Jesus é p'ra ti e mim, 
O caminho, a luz veraz, 
Que nos leva ao céu, enfim.`},
{id:"h109",num:109,title:"Venha a Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Se alguém deseja, venha a Jesus, 
Água e pão da vida, Ele te conduz. 
A mão Lhe estende, pede-Lhe a luz, 
Se alguém deseja, venha. 

Coro:
Se alguém deseja, se alguém deseja, 
Venha hoje mesmo receber perdão, 
Pois Jesus te chama, ó, não chama em vão, 
Se alguém deseja, venha!

Se alguém deseja, paz fruirá; 
Cristo que te chama, te libertará; 
Com Seus braços santos te abraçará 
Se alguém deseja, venha! 

Se alguém deseja, não morrerá, 
Pois a vida eterna sempre gozará; 
Esta é a promessa que Jesus te dá. 
Se alguém deseja, venha!`},
{id:"h110",num:110,title:"Clama: Jesus, Jesus!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó clama na tribulação: Jesus, Jesus.
De todo o teu coração: Jesus, Jesus,
Por certo, te socorrerá: Jesus, Jesus,
E gozo e paz te dará: Jesus, Jesus.

Tu queres um bom Salvador? Jesus, Jesus,
Que ama o vil pecador? Jesus, Jesus,
E que tem poder p’ra salvar? Jesus, Jesus,
E para o céu te levar? Jesus, Jesus.

Há um que te pode curar: Jesus, Jesus.
E da corrupção te guardar: Jesus. Jesus.
Só um nome dá salvação: Jesus, Jesus.
O gozo, a paz, o perdão: Jesus, Jesus.

Aceita, no teu coração: Jesus, Jesus;
Assim, tu terás salvação, Jesus, Jesus;
Abraça, com terno amor: Jesus, Jesus;
Que chora por ti, pecador, Jesus, Jesus.`},
{id:"h111",num:111,title:"Que Mudança!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Que mudança em mim fez o meu bom Jesus,
Vindo Ele ao meu coração
Deu-me paz divinal, deu-me gozo e luz,
Entrando Ele no meu coração.

Coro:
Entrando no meu coração!
Entrando no meu coração!
Que mudança em mim
Fez o meu bom Jesus,
Vindo Ele ao meu coração.

Eu andava perdido, Jesus me salvou,
Entrando no meu coração
Meus pecados sem conta, Seu sangue lavou,
Vindo Ele ao meu coração!

E agora, do céu, a certeza me deu,
Entrando no meu coração
Seu Espírito, o selo e penhor concedeu,
Vindo Ele ao meu coração.

Pelo vale da morte não temo passar!
Com Ele no meu coração;
A cidade celeste me vai transportar,
O guarda do meu coração.`},
{id:"h112",num:112,title:"O Nome Soberano",category:"harpa",author:"Ernesto Wootton",lyrics:`Não há na terra e céu também, 
Um nome com doçura, 
Como este a quem louvor convém, 
De toda a criatura. 

Coro:
Jesus, a luz és Tu do céu! 
Jesus, o nosso amado) 
Jesus, o verdadeiro Deus, 
Por todos exaltado!

Descendo ao mundo, a luz do céu 
Vestiu-se em corpo humano; 
Ao santo Filho, então, se deu 
O nome soberano. 

Entregue à morte sobre a cruz, 
Por cima foi escrito 
O nome amável de Jesus, 
Por nós, ali maldito. 

Da morte o grande vencedor 
A mão do Pai sentado, 
Por nós Ele é intercessor, 
E único Advogado. 

Jesus, meu terno Salvador, 
Es Tu minha esperança, 
Confio só no Teu amor; 
E pões-me em segurança.`},
{id:"h113",num:113,title:"O Celeste Diretor",category:"harpa",author:"Ernesto Wootton",lyrics:`Dia a dia vem guiar-me 
Meu Jesus e meu Senhor! 
Não sou meu, pois me compraste 
Com Teu sangue redentor; 
Quero a Ti viver unido, 
Pela vida até ao fim; 
Que se torne assim verdade, 
“Não mais eu, mas Cristo em mim”. 
Que se torne assim verdade. 
“Não mais eu, mas Cristo em mim”. 

Cada instante vem guiar-me. 
O celeste Diretor! 
Já fizeste em mim morada, 
Tu és meu Dominador; 
ó transforma minha vida; 
Seja meu o Teu querer; 
Quero andar, passo por passo, 
Confiando em Teu poder. 
Quero andar, passo por passo, 
Confiando em Teu poder. 

Se maior intimidade 
Para mim possível for; 
Quero mais ser atraído 
A Ti, meigo Salvador! 
Ah! Que fique em Ti morando 
Meu secreto pavilhão, 
Escondido, inteiramente, 
Em Ti, minha salvação, 
Escondido, inteiramente, 
Em Ti, minha salvação.`},
{id:"h114",num:114,title:"Aceita o Perdão de Jesus",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Se tu cansado já estás de pecar, 
Aceita o perdão de Jesus. 
Se vida nova quiseres achar, 
Aceita o perdão de Jesus, 

Coro:
Vem a Jesus, pecador. 
Por ti morreu lá na cruz. 
É tempo, vem sem temor; 
Aceite o perdão de Jesus.

Se vida pura desejas obter, 
Aceita o perdão de Jesus. 
Ele é a fonte que limpa teu ser; 
Aceita o perdão de Jesus. 

Se tu não podes tuas lutas calmar, 
Aceita o perdão de Jesus, 
Se teus desejos não podes domar, 
Aceita o perdão de Jesus. 

Se com os santos te queres unir, 
Aceita o perdão de Jesus. 
Se para os céus tu desejas partir, 
Aceita o perdão de Jesus.`},
{id:"h115",num:115,title:"Trabalhai e Orai",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Eu quero trabalhar pra meu Senhor, 
Levando a Palavra com amor; 
Quero eu cantar e orar, 
E ocupado quero estar, 
Sim, na vinha do Senhor. 

Coro:
Trabalhai e orai. 
Na seara e na vinha do Senhor; 
Meu desejo é orar, 
E ocupado quero estar 
Sim, na vinha do Senhor.

Eu quero, cada dia, trabalhar; 
Escravos do pecado libertar; 
Conduzi-los a Jesus, 
Nosso guia, nossa luz, 
Sim, na vinha do Senhor. 

Eu quero ser obreiro de valor, 
Confiando no poder do Salvador; 
Se quiseres trabalhar, 
Acharás também lugar, 
Sim, na vinha do Senhor.`},
{id:"h116",num:116,title:"Livre Estou",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Eu vagava pela senda de horror,
Oprimido pelo pecado e temor.
Quando o Salvador eu vi,
Sua terna voz ouvi,
Meu Jesus me libertou por Seu amor. 

Coro:
Livre estou! Livre estou!
Pela graça de Jesus livre estou;
Livre estou! Livre estou!
Aleluia! Pela fé, livre estou!

Eu vagava pela senda de horror. 
Não pensando no amor do Salvador; 
Eu vagava sem ter luz, 
Longe do Senhor Jesus, 
Mas liberto, hoje canto a Deus louvor. 

Eu vagava pela senda de horror, 
Mas, agora, quero andar com meu Senhor, 
Quero ouvir Sua terna voz, 
E segui-Lo sempre após, 
Glória seja dada ao nosso bom Pastor.`},
{id:"h117",num:117,title:"O Senhor Salva a Todo o Pecador",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Aleluia! O Senhor Salva a todo pecador! 
Salvação! Salvação! 
Jesus Cristo tem poder para todo o mal vencer, 
Salvação! Salvação! 

Coro:
Salvação e redenção! 
Aleluia! Cristo já me amou e me salvou. 
Glória dou e aleluia, a Jesus que me salvou.

Eu confio em Jeová, Ele santidade dá; 
Salvação! Salvação! 
Tenho paz e vivo já, Sua graça em mim está. 
Salvação! Salvação! 

Falarei sempre o que sei, exaltando o meu Rei, 
Salvação! Salvação! 
Pois Seu sangue já verteu, pra tornar-me filho Seu, 
Salvação! Salvação! 

Cantaremos, sempre ali, ao sairmos nós daqui; 
Salvação! Salvação! 
Exaltando o Salvador, louvaremos com fervor 
Salvação! Salvação!`},
{id:"h118",num:118,title:"Face a Face",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Na presença estar de Cristo, 
Em Sua glória, que será; 
Lá no céu, em pleno gozo, 
Minha alma O verá. 

Coro:
Face a face, espero vê-Lo; 
No além do céu de luz; 
Face a face em plena glória, 
Hei de ver o meu Jesus.

Oh! que glória será vê-Lo; 
Que O possa eu mirar! 
Eis, em breve, vem o dia; 
Que Sua glória há de mostrar.

Quanto gozo há em Cristo, 
Quando não houver mais dor, 
Quando cessar o perigo, 
E gozarmos pleno amor. 

Face a face, quão glorioso 
Há de ser o existir, 
Vendo o rosto de quem veio, 
Nossas almas redimir.`},
{id:"h119",num:119,title:"Inesgotável é Seu Amor",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Seja louvado o bom Salvador 
Livre é Seu amor, livre é Seu amor. 
Há preparado para o pecador, 
Fonte preciosa de amor; 
E, se em Cristo queres confiar, 
Livre é Seu amor, livre é Seu amor; 
A vida eterna tu irás gozar, 
Inesgotável é Seu amor. 

Coro:
Terno, te chama Jesus: queres ir? 
Ó pecador, ó pecador! 
Ele deixou para nós, ao subir, 
Fonte preciosa de amor.

Por que vivendo em pecado há de estar? 
Livre é Seu amor, livre é Seu amor. 
Cristo te chama, ó vem sem tardar, 
Inesgotável é Seu amor; 
Deixa as trevas por luz divinal, 
Livre é Seu amor, livre é Seu amor; 
Hoje Jesus quer livrar-te do mal, 
Inesgotável é Seu amor. 

Ó! se tu creres, perdão obterás, 
Livre é Seu amor, livre é Seu amor; 
Vem o momento que tu bendirás; 
Inesgotável é Seu amor; 
Cristo te espera, ó ouve o chamar; 
Livre é Seu amor, livre é Seu amor; 
Fé em Seu nome te há de salvar. 
Inesgotável é Seu amor.`},
{id:"h120",num:120,title:"Noite de Paz",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Noite de paz, noite de amor; 
Tudo dorme, em derredor! 
Entre os astros que espargem a luz 
Bela, indicando o menino Jesus, 
Brilha a estrela da paz, 
Brilha a estrela da paz. 

Noite de paz, noite de amor; 
Ouve o fiel pastor 
Coros celestes que cantam a paz, 
Que nesta noite sublime nos traz, 
O nosso bom Redentor, 
O nosso bom Redentor. 

Noite de paz, noite de amor; 
Oh! Que belo resplendor. 
Paira no rosto do meigo Jesus! 
E no presépio do mundo, a luz! 
Astro de eterno fulgor, 
Astro de eterno fulgor.`},
{id:"h121",num:121,title:"Maravilhoso é Jesus",category:"harpa",author:"Frida Vingren",lyrics:`Maravilhoso é Jesus, 
Da minha vida a luz, 
Pois me salvando, me perdoando, 
Para Sião me conduz. 

Coro:
Maravilhoso, sim, maravilhoso! 
É Cristo, pois salvou-me a mim! 
Maravilhoso e mui glorioso, 
É Cristo, que vive em mim.

Nunca podia saber, 
Qual é o grande prazer, 
Dum que perdido, arrependido, 
A graça vem receber. 

Ele nas trevas me achou, 
Eternamente me amou; 
Vida abundante, gozo bastante. 
Tenho por quem me salvou. 

Cristo é tudo pra mim, 
Também será para ti; 
Vou caminhando, sempre O louvando, 
Pois Ele salvou-me a mim!`},
{id:"h122",num:122,title:"Fogo Divino",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Fogo divino, clamamos por ti; 
Vem lá do alto, vem, desce aqui; 
Ó vem despertar-nos com teu fulgor; 
Vem inflamar-nos com teu calor.

Coro:
Desce do alto, bendito fogo, 
Desce poder celestial! 
Desce do alto, bendito fogo, 
Vem, chama pentecostal!

Desce, Espírito Consolador, 
Desce e enche-nos de santo amor, 
Desce ao mundo, nos mostra Jesus; 
Dá-nos poder, vida, graça e luz. 

Arde em minh'alma, ó chama de amor 
Arde em meu peito e dá-me valor; 
Consome todos os restos do mal; 
Desce já, ó fogo pentecostal!`},
{id:"h123",num:123,title:"Cristo Voltará",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Um dia, Cristo voltará; 
Ao ascender, o prometeu; 
Do modo que subiu virá; 
Há de ver o Rei Jesus, o povo Seu. 

Coro:
Mui breve sim, Jesus virá, 
Alegre O verá Seu povo; 
Velando, todos devem sempre estar, 
A fim de vê-Lo voltar.

Os mensageiros do Senhor, 
Afirmam que Jesus virá; 
E o poder Consolador 
As fiéis promessas nos revelará. 

Oh! gozo sem comparação 
No dia do meu Salvador, 
Com a mui grande multidão, 
Subiremos ao encontro do Senhor. 

Bem-vindo sejas, meu Senhor, 
Em Tua gloriosa luz; 
E nossa fá terá valor; 
Nós dizemos: “Ora, vem Senhor Jesus”.`},
{id:"h124",num:124,title:"Adoração",category:"harpa",author:"Ernesto Wootton",lyrics:`Adorai o Rei do Universo!
Terra e céus, cantai o Seu louvor!
Todo o ser no grande mar submerso,
Louve ao Dominador!

Coro:
Todos juntos O louvemos!
Grande Salvador e Redentor!
Todos O louvemos!
Régio Dominador!

Adorai-O, anjos poderosos,
Vós que Sua glória contemplais!
Vós, remidos, já vitoriosos;
Graças, rendei-Lhe mais!

Sol e lua, coros estelares,
Sua majestade anunciai,
Hostes grandes, centos de milhares,
O Seu poder mostrai!

Ventos! Chuvas! Raios! Trovoadas!
Revelai o forte Criador!
Vós dizeis, ó serras elevadas,
Quão grande é meu Senhor!

Altos cedros! Grama verdejante!
Esta sinfonia aumentei;
Aves, vermes, todo o ser gigante;
Gratos a Deus louvai!

Homens! Jovens! Velhos e meninos!
Adorai ao vosso Redentor!
Reis e sábios, grandes, pequeninos,
Dai-Lhe veraz louvor!`},
{id:"h125",num:125,title:"Quem Dera Hoje Vir!",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Vem, outra vez, nosso Salvador; 
Quem dera hoje vir! 
Para reinar com poder e amor! 
Quem dera hoje vir! 
Já por Sua Esposa, vem esta vez; 
Que O espera em oração; 
Fora do mundo de entremez; 
Quem dera hoje vir! 

Coro:
Glória, glória, gozo sem fim, trará;
Glória, glória, ao coroar o fiei; 
Glória, glória, nos arrebatará; 
Glória, glória! Cristo vem Outra vez!

Terminará o poder do mal; 
Quem dera hoje ser! 
Começará o prazer sem igual; 
Quem dera hoje ser! 
Todos os mortos em Cristo serão 
Arrebatados por seu Senhor; 
Quando estas glórias aqui virão? 
Quem dera hoje ser! 

Em santidade nos deve achar, 
Eis quEle pode vir. 
Todos, velando, com gozo e paz, 
Eis quEle pode vir. 
Multiplicados os sinais estão; 
No oriente se vê o alvor; 
Breve, os crentes subirão; 
Quem dera hoje vir!`},
{id:"h126",num:126,title:"Bem-Aventurança do Crente",category:"harpa",author:"Frida Vingren",lyrics:`Bem-aventurado o que confia
No Senhor, como fez Abraão;
Ele creu, ainda que não via,
E, assim, a fé não foi em vão.
É feliz quem segue, fielmente,
Nos caminhos santos do Senhor,
Na tribulação é paciente,
Esperando no seu Salvador.

Os heróis da Bíblia Sagrada,
Não fruíram logo seus troféus;
Mas levaram sempre a cruz pesada,
Para obter poder dos céus,
E depois, saíram pelo mundo,
Como mensageiros do Senhor,
Com coragem e amor profundo,
Proclamando Cristo, o Salvador.

Quem quiser de Deus ter a coroa,
Passará por mais tribulação;
Às alturas santas ninguém voa,
Sem as asas da humilhação;
O Senhor tem dado aos Seus queridos,
Parte do Seu glorioso ser;
Quem no coração for mais ferido,
Mais daquela glória há de ter.

Quando aqui as flores já fenecem,
As do céu começam a brilhar;
Quando as esperanças desvanecem,
O aflito crente vai orar;
Os mais belos hinos e poesias,
Foram escritos em tribulação,
E do céu, as lindas melodias,
Se ouviram, na escuridão.

Sim, confia tu, inteiramente;
Na imensa graça do Senhor;
Seja de ti longe o desalento
E confia no Seu santo amor.
Aleluia seja a divisa,
Do herói e todo o vencedor;
E do céu mais forte vem a brisa,
Que te leva ao seio do Senhor.`},
{id:"h127",num:127,title:"O Senhor da Ceifa Chama",category:"harpa",author:"Otto Nelson",lyrics:`O Senhor da ceifa está chamando: 
“Quem quer ir por Mim a procurar 
Almas que no mundo, vão chorando; 
Sem da salvação participar?” 

Coro:
Fala Deus! Fala Deus! 
Toca-me com brasa do altar; 
Fala Deus! Fala Deus! 
Sim, alegre, atendo ao Teu mandar.

O profeta a Deus se aproximando, 
Considera-se um pecador, 
Mas, o fogo santo o queimando, 
Torna-o útil para seu Senhor. 

Muitos são os que vão expirando 
Sem ter esperança de ver Deus: 
Vai depressa lhes anunciando, 
Que Jesus os leva para os céus. 

Breve, os trabalhos serão findos, 
Bênçãos vão os servos desfrutar; 
E Jesus os saudará: “Bem-vindos", 
Esta glória espero alcançar.`},
{id:"h128",num:128,title:"Entrega o Teu Coração",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Ó alma triste, perdida, 
Que vagas sem ter direção! 
Aceita de Deus a vida, 
Entrega teu coração! 

Coro:
Dá, hoje, a Cristo, 
Teu coração, teu coração. 
Pois nEle acharás a paz, o perdão, 
Entrega teu coração. 
Dá, hoje, a Cristo, 
Teu coração, teu coração. 
Pois nEle acharia a paz, o perdão, 
Entrega teu coração.

Jesus não quer teu dinheiro; 
De graça te dá salvação! 
E gozo mui verdadeiro: 
Entrega teu coração! 

De Cristo ressuscitado 
Aceita o vero perdão, 
Se queres ser libertado, 
Entrega teu coração. 

Agora é o tempo aceitável 
O dia em que há salvação. 
A Cristo, meigo, adorável 
Entrega teu coração.`},
{id:"h129",num:129,title:"A Fonte Salvadora",category:"harpa",author:"Almeida Sobrinho",lyrics:`Ó pecador, vem à fonte, 
Com o teu fardo de dor, 
Vem Sepultá-lo nas águas; 
Paz acharás no Senhor. 

Coro:
Depressa vem, depressa vem! 
Um só instante não queiras perder; 
Jesus espera salvar-te; 
Mercê p’ra ti, Ele tem.

Como estás, vem à fonte, 
Jesus esperando está; 
E tua alma manchada 
Alva e pura será. 

O Salvador não despreza 
Quem, arrependido, crer. 
A vida eterna esperando 
De Suas mãos receber. 

Vem ser curado na fonte; 
Jesus a paz te quer dar; 
Vem, humilhado e Contrito, 
Tua alma purificar.`},
{id:"h130",num:130,title:"Cristo é Meu!",category:"harpa",author:"Ernesto Wootton",lyrics:`Manso Pastor já no mundo viveu e Ele é meu, 
Nos dando a vida, por nós padeceu e Ele é meu; 
Graça tão vasta não posso sondar, mas Ele é meu. 
Sou perdoado já posso cantar, que Ele é meu. 

Coro:
Cristo é meu! Cristo é meu! 
Maravilhoso, mas certo é dizer: 
Jesus é meu!

Há um amigo de amor sem igual e Ele é meu; 
Sempre o mais forte, o mais firme e leal e Ele é meu. 
Sou tão indigno de ser um dos Seus, mas Ele é meu. 
Vou Seu amor desfrutar, lá nos céus, pois Ele é meu. 

Ele mandou-nos o Consolador, também é meu. 
Cheio de graça, de paz e de amor, e tudo é meu. 
Nada me nega dos Seus ricos dons, pois tudo é meu. 
Grandes tesouros, tão puros e bons, são todos meus.`},
{id:"h131",num:131,title:"De Valor Em Valor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Só em Ti, meu Senhor eu desejo estar,
E também receber Tua luz;
De valor em valor só por Ti avançar,
Ó me traz junto a Ti, meu Jesus.

Coro:
Eu desejo, ó Deus, em Jesus habitar;
Pois minh’alma suspira por Ti;
De valor em valor, e na fé aumentar,
Para que vejam Cristo em mim.

O caminho, Senhor, faz-me mais conhecer,
Que me leva à santa Sião;
Por Teu grande favor, e com muito prazer
Entrarei na eternal mansão.

Tua mão, ó Senhor! Queira me proteger,
E dos males daqui me livrar;
Na manhã d’esplendor, eu também quero ser
Dos fiéis, que vão ressuscitar.`},
{id:"h132",num:132,title:"Obreiros do Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Somos obreiros do Senhor, 
À messe vamos, com amor, 
A proclamar a salvação 
De Cristo e o Seu perdão; 
Pois trabalhemos por amor 
De Cristo, nosso Salvador, 
Que por nós o sangue derramou, 
E no Calvário expirou. 

Coro:
À colheita vinde já, pois Jesus vos chama; 
“Todos devem trabalhar”, o Senhor proclama, 
Breve, tudo findará, não se poderá segar; 
Vinde crentes, vinde trabalhar.

O Evangelho, á pregai, 
A todo mundo, sim chamai, 
E, sem temor, as novas dai 
E a bandeira levantai 
Em nossas mãos Deus confiou, 
A graça que nos enviou. 
As novas dai, não vacileis, 
Que a vitória obtereis. 

As horas, prestes, passarão, 
E nunca mais a vós virão, 
Se não falardes de Jesus, 
Alguns jamais verão a luz. 
Ainda hoje há perdão, 
O mundo jaz na perdição, 
Oh! não desprezeis o favor 
Do amoroso Salvador.`},
{id:"h133",num:133,title:"No Rol do livro",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Teu nome, por inteiro, escrito está nos céus 
No livro do Cordeiro, no livro do bom Deus, 
Teremos a vitória, olhando no Senhor; 
Por isso, damos glórias e gran louvor. 

Coro:
Teu nome escrito, irmão, está por Deus, 
No livro da vida, no rol dos filhos Seus, 
Teu nome escrito, irmão, está nos céus; 
Oh! glória, aleluia! Amém.

Alegres nós andamos na graça do Senhor; 
E nela nós achamos poder consolador! 
De Cristo recebemos, ajuda e vigor; 
Avante, pois marchemos, sem mais temor. 

Nós criaturas, somos remidas por Jesus, 
No qual eleitos fomos, pra desfrutar a luz, 
Nós temos, por herança, Jesus nos altos céus, 
Também a esperança de ver a Deus. 

Contentes, levantemos os olhos para os céus, 
Escritos nós já temos, os nomes, lá por Deus; 
Sentindo grande gozo, servindo ao Senhor, 
Ao Todo-poderoso, ao Redentor.`},
{id:"h134",num:134,title:"Jesus à Porta do Coração",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quem está batendo assim,
Que enche-me de comoção?
Quem procurará por mim?
Sinto bater no coração. 

Coro:
Quem bate, diz com mansidão: 
Eu sou Jesus, te vim salvar; 
Abre, duro coração, 
Dentro de ti quero cear.

Quem será? Quem pode ser? 
Sinto bater no coração! 
Que farei? Que vou fazer? 
No vale estou da decisão.

Quem escuto eu bater? 
- Eu sou Jesus, o bom Jesus: 
Abre logo, sem temer 
Quero te dar a minha luz. 

Entra, entra, Salvador, 
Meu coração te quero dar, 
Só em Ti achei amor, 
Mesmo em mim queiras morar. 

Coro:
No coração, ó bom Jesus, 
Entra, trazendo Teu perdão! 
Concedendo Tua luz, 
Tenho, assim, a salvação.`},
{id:"h135",num:135,title:"O Nome Precioso",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Teu nome é precioso, amado Salvador, 
E grande, glorioso, nos enche de amor, 
Nós todos Te adoramos com verdadeira fé, 
Também nos humilhamos, aos Teus santos pés. 

Coro:
Quantas bênçãos prometidas 
No Teu nome, ó Salvador! 
Hoje tenho vida. Graça é concedida, 
No Teu nome, ó Salvador!

Teu nome é sagrado, nos dá consolação; 
Por Ele foi-nos dado, do céu, real perdão; 
Aviva a esperança, aumenta nosso amor, 
Dá firme confiança e mais do Teu vigor. 

Teu nome é nossa vida e paz, ó Salvador! 
A arca oferecida ao pobre pecador; 
Por Ele abençoada é toda a nação, 
Que foi predestinada à grande vocação.`},
{id:"h136",num:136,title:"Jesus, Nosso Socorro",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em nosso socorro vem, ó vem, Jesus! 
Pois grande tristeza nos ofusca a luz; 
A Ti recorremos, vem nos dar vigor, 
Reveste-nos todos do Teu grande amor! 

Em nosso socorro vem, ó vem Jesus! 
Em Ti confiamos, és a nossa luz; 
Protege-nos sempre do vil tentador, 
Reveste-nos todos do Teu grande amor! 

Em nosso socorro vem, ó vem, Jesus! 
Combate o inimigo com a Tua luz; 
A Ti nós clamamos, responde, Senhor, 
Reveste-nos todos do Teu grande amor! 

Em nosso socorro vem, ó vem, Jesus! 
A plena vitória, hoje nos conduz; 
Dá-nos Tua graça, poder e valor. 
Reveste-nos todos do Teu grande amor!`},
{id:"h137",num:137,title:"Liberto da Escravidão",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em Babilônia, em prisão, 
Estava Israel, 
O povo santo de Sião, 
Sofrendo dor cruel. 

Coro:
Mas, um dia, se ouviu, 
Que do rei a voz saiu 
P’ra voltarem da escravidão. 
Todo povo a Jubilar, 
Com as harpas a cantar, 
Foi em busca de Sião.

"Cantai" disseram os caldeus, 
Os hinos de Sião, 
Mas isto mais entristeceu, 
Os filhos de Abraão. 

Libertos foram lá por Deus 
Da vil escravidão. 
E toda alma se encheu, 
De riso e gratidão.

Quão grandes coisas nos fez Deus! 
Cantavam, já. então; 
E qual um sonho pareceu 
A volta pra Sião. 

E neste mundo, qual Babel, 
Há muitos em prisão, 
Sofrendo uma dor cruel, 
Sem ter consolação. 

Coro:
Mas, de Cristo se ouviu 
Que de Deus, a voz saiu, 
P’ra voltarem da escravidão. 
Queiras isto aceitar, 
Com a harpa vem cantar, 
E, assim, volta p’ra Sião.`},
{id:"h138",num:138,title:"Quem Bate é Jesus Cristo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Se da morte tens horror,
E salvação desejas, 
Volta aos braços do Senhor, 
Para que salvo tu sejas; 
Abre bem teu coração, 
E recebe salvação, 
Sem nenhuma turbação; 
Quem bate é Jesus Cristo. 

Coro:
Deves-Lhe dar abrigo. 
Não há nenhum perigo; 
Cristo quer só te salvar; 
Na mesa, cear contigo.

Já sofreu por ti, na cruz, 
Para te dar a vida; 
O divino e bom Jesus 
As marcas tem das feridas; 
Não O vês a soluçar, 
E Seu sangue a gotejar? 
Não O vais deixar entrar? 
Quem bate é Jesus Cristo. 

Se tu andas em temor; 
Longe do Pai amado, 
Quem será teu protetor, 
Quando o mal for chegado? 
Segue a quem morreu na cruz, 
Pois à vida te conduz; 
Dar-te-á nas trevas luz, 
Quem bate é Jesus Cristo.`},
{id:"h139",num:139,title:"Jesus, Meu Eterno Redentor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Já o Filho de Deus é descido do céu;
A obra perfeita na cruz consumou;
E ali Sua carne, rasgada qual véu,
Vivo caminho para o céu nos consagrou. 

Coro:
Jesus é meu eterno Redentor!
Por Seu sangue lá remido estou;
Deu-me paz, poder consolador;
Vivo contente, pois Ele me amou.

Por Adão, o pecado no mundo entrou;
Ninguém dessa lei se podia libertar;
Mas o Filho do homem por nós triunfou,
NEle podemos do mal ressuscitar. 

Do inferno, que paga aos maus, há de dar, 
Do medo da morte, esse dardo cruel, 
Do abismo eterno te pode salvar, 
Só Jesus Cristo, o bom Emanuel. 

Bem alegres buscamos a pátria de amor, 
A qual Deus no céu para nós preparou, 
Onde sempre veremos o nosso Senhor, 
Cristo Jesus, que do mal nos libertou.`},
{id:"h140",num:140,title:"A Segurança do Crente",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`De mal nenhum eu temerei,
Em mim está Jesus:
Jamais perturbação terei,
Pois vivo já na luz.

Coro:
Sinto paz mui profunda enfim,
Sinto paz proveniente da cruz,
Pela fé sinto viver em mim,
Meu Jesus, meu Jesus.

Jesus me trouxe salvação;
Também, me disse assim:
Me busca na tribulação,
Pra teres paz em Mim.

Na grande festa do perdão,
No Seu real poder,
Me concedeu admissão,
Quem quis por mim morrer.

Já tenho uma viva fé,
Que não confundirá;
O amor de Deus, que puro é,
De paz me encherá.`},
{id:"h141",num:141,title:"Guia-me Sempre, Meu Senhor",category:"harpa",author:"Ernesto Wootton",lyrics:`Aonde guiar-me meu Senhor, 
Eu seguirei, por Seu amor; 
É Sua mão que me conduz, 
Por mim ferida sobre a cruz. 

Coro:
Guia-me sempre, meu Senhor, 
Guia meus passos, Salvador; 
Tu me compraste sobre a cruz; 
Rege-me em tudo, meu Jesus.

Acho prazer em Te seguir; 
Descanso e paz me faz sentir; 
Doce é a mim o Teu querer, 
Gozo me traz Te obedecer. 

Sigo sem medo o meu Senhor 
Que me encheu do Seu amor; 
Sentindo perto a Sua mão, 
Posso cantar na escuridão. 

Para Seu reino me conduz, 
Pelo jardim e pela cruz; 
Lá ficou morto o velho "eu", 
Lá meu espírito reviveu.`},
{id:"h142",num:142,title:"A Cidade Celeste",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Sião celeste, repouso dos santos, 
O teu arquiteto se chama o SENHOR; 
Em ti entraremos, com gozo e canto, 
Com os que adoram o bom Salvador, 
Em bela planície estás situada, 
E que majestosa rainha és tu! 
De pedras preciosas estás adornada; 
Demonstras a glória de Cristo Jesus. 
De Cristo Jesus. de Cristo Jesus. 
Demonstras a glória de Cristo Jesus. 

Teus belos caminhos tratados com zelo, 
E as tuas torres, que vistas farão! 
De todos os palácios, grandioso é o modelo; 
Em ti nós teremos a consolação; 
As portas do muro são todas formosas; 
A praça é calçada de ouro que luz; 
Em ti essas coisas são mui gloriosas, 
E és toda cheia da paz de Jesus! 
Da paz de Jesus, da paz de Jesus. 
E és toda cheia da paz de Jesus. 

Jamais haverá em ti noite alguma, 
Teu grande luzeiro perpétuo será; 
Sem a luz do sol, nem d’estrelas ou lua. 
A glória de Cristo te alumiará. 
E neste esplendor, de um sol verdadeiro, 
Os santos e anjos do céu entrarão, 
E virá na frente Jesus, o Cordeiro; 
Com Ele pra sempre ali reinarão. 
Ali reinarão, ali reinarão, 
Com Ele pra sempre ali reinarão. 

Oh! que grande festa nos é concedida, 
Com a mesa posta, espera o Senhor, 
A todos inscritos no livro da vida, 
E que já da morte não têm mais temor; 
De todos os que foram por Cristo comprados, 
O lindo cortejo composto será; 
E Deus, que há dado o Seu filho amado, 
Com Cristo na glória, os consolará, 
Os consolará, os consolará, 
Com Cristo na glória, os consolará.`},
{id:"h143",num:143,title:"O Verdadeiro Amigo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tu és pra mim o verdadeiro amigo,
Só em Ti, meu Redentor, vou confiar,
Defende-me do mundo, do perigo;
Ansioso, eu Te quero encontrar. 

Coro:
Vem levar me para perto 
Do Teu grande e bondoso coração; 
Sempre avante e bem certo, 
Com Jesus, eu vou andando p'ra Sião.

Vem já, Senhor, com Tua graça imensa 
Ajudar-me a levar a minha cruz, 
Fazendo-me sentir real presença, 
Do Consolador divino, ó Jesus! 

Jesus, Tu és a minha esperança, 
E contente eu desejo Te seguir; 
A Ti orando, com perseverança, 
Para que me guardes sempre de cair.`},
{id:"h144",num:144,title:"Vem à Assembléia de Deus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`À Assembléia de Deus, vem comigo, 
Ouvir a Palavra de Deus; 
E terás a certeza, contigo, 
Que Jesus é o caminho dos céus. 

Coro:
Ó vem, vem, vem, vem!
Vem à Assembléia e louvemos
Ao nosso bom Deus Redentor,
Pois maior alegria não temos,
Que fruir Seu imenso amor.

Vem, irmão, à Assembléia dos Santos, 
Sentir o poder do Senhor 
E ali entoar lindos cantos 
Exultando no Consolador. 

Na Assembléia de Deus tu estejas 
Humilde aos pés do Senhor: 
Santidade convém à Igreja, 
P'ra gozarmos celeste amor. 

Nós sentimos a santa presença 
Do nosso querido Jesus; 
Anulada foi tua sentença: 
Deixa as trevas e vem para a luz.`},
{id:"h145",num:145,title:"União do Crente Com Seu Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`A minha alma Te ama, ó Senhor! 
E desfalece sedenta de amor; 
meu consolo na aflição, 
E luz perfeIta na escuridão; 
Meu verdadeiro pão. 

Coro:
A minha alma ama-Te; Senhor,
De Ti só recebe vida e amor!

A minha alma Te ama, ó Senhor! 
Almeja sempre andar no Teu temor: 
Tu vives já no meu coração 
E guias-me pela Tua mão; 
És minha salvação. 

A minha alma Te ama, ó Senhor! 
A Tua face procura com fervor: 
Desejo ter a celeste paz, 
O gozo santo, que satisfaz, 
E salvação veraz. 

A minha alma Te ama, ó Senhor! 
Por mim sofreste incomparável dor; 
Teu nome quero, aqui louvar; 
Os Teus preceitos e leis honrar, 
E sempre em Ti pensar.`},
{id:"h146",num:146,title:"Caminho brilhante",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Por um caminho brilhante vou,
De majestosa luz;
Pelo caminho que já trilhou,
Nossa Senhor Jesus;
Sem me lembrar do que se passou,
Bem feliz canto, sim,
Pois filho do Rei do~ reis eu sou:
Cristo é meu, por fim; 

Coro:
Meu, por fim; meu, por fim!
Cristo da morte livrou-me, sim!
Me ouviu, me remiu,
Cristo é meu, por fim!

No mundo não tenho mais prazer,
Purificado estou,
Nunca jamais hei de perecer,
Pois Jesus me livrou;
Ele me ama e me quer bem,
Tudo é para mim;
NEle encontro louvor, também.
Cristo é meu, por fim. 

Quem de Jesus me separará? 
Tenho-O no coração; 
Ele nas trevas me guiará 
Para a feliz Sião. 
Sempre contente, sem vacilar, 
Venço o mal, assim; 
Tenho prazer se na luz andar. 
Cristo é meu, por fim.`},
{id:"h147",num:147,title:"Servir a Jesus",category:"harpa",author:"M.A.N Manuel Augusto das Neves",lyrics:`Quero eu servir-Te, ó meu Rei Jesus,
E contigo sempre caminhar na luz,
Tendo com o povo de Deus comunhão
E dos meus pecados purificação.

Coro:
Sim, ó meu Senhor;
Quero seguir-Te, ó Deus de amor.
Sempre Te servindo,
E também dando a Ti louvor.

No Teu bom serviço tenho eu prazer.
Nele muita graça eu vou receber;
Sempre falarei assim do Teu amor.
E Te glorificarei, meu Salvador.

Desça Tua graça sobre mim, Senhor,
Para trabalhar com mais e mais fervor,
Dá-me entendimento e veraz saber,
Para alegre, eu fazer o Teu querer.

Só em Ti confio, meu Senhor e Rei;
Só em Ti vitória eu alcançarei.
E contigo quero sempre aqui viver,
'Té que p'ra Sião, me venhas receber.`},
{id:"h148",num:148,title:"Bendirei a Jesus",category:"harpa",author:"Ernesto Wootton",lyrics:`Louvarei meu Guia sábio, 
Louvarei, louvarei; 
Bendirei, com alma e lábios, 
Bendirei Jesus. 

Coro:
Aleluia! Louvo a Jesus! 
Deu-me salvação na cruz! 
Aleluia a quem me conduz! 
Glória a meu Jesus!

Louvarei a quem me ampara, 
Louvarei, louvarei; 
Nada dEle me separa; 
Bendirei Jesus. 

A quem leva os meus cuidados, 
Louvarei, louvarei; 
Me sustenta os pés cansados, 
Bendirei Jesus. 

A quem dá-me aqui vitória, 
Louvarei, louvarei; 
Dar-me-à coroa e glória; 
Bendirei Jesus. 

Meu sublime Rei glorioso, 
Louvarei, louvarei; 
Em celeste coro e gozo. 
Bendirei Jesus.`},
{id:"h149",num:149,title:"Canto do Pescador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`No meu barco a remar.
Sobre as ondas, pelo mar,
Mesmo na bonança ou no furacão
Não desejo mais parar;
Com a rede vou pescar,
Muitos peixes para o reino de Sião,

Coro:
Vou pescar os pecadores para Crlsto,
Neste mundo cheio de horror;
Não mais desanimarei;
Minha rede lançarei;
Muitos peixes apanhando p’ra o Senhor.

O meu barco não é bom,
De pescar não tenho dom.
E me dizem que não devo continuar;
Mas Jesus me quis mandar,
E por isso vou pescar,
Té que Ele se apraze em me chamar.

Tem um modo o Senhor.
Que é próprio do amor,
Ele usa dos remidos o menor,
Todo o mundo me deixou,
E de mim se envergonhou,
Mas alegre, vou pescar, pois é melhor.

Se há coisa de valor,
E a rede de amor,
Cujo tio é a obra de Jesus,
Que puxada sempre traz
Os perdidos e sem paz,
Para receberem do Senhor, a luz.

Quando há um temporal,
E a pesca corre mal,
Novamente no meu barco vou pescar!
Pode ser que desta vez,
Eu não tenha mais revés
Pois Jesus eu levo para m'ensinar.

Acabando de pescar,
E deitado a pensar,
Tenho gozo pelo tempo que gastei;
Pois terei um galardão
Pela pesca, em Sião,
Pelas almas que no mundo eu ganhei.`},
{id:"h150",num:150,title:"Para Casamentos",category:"harpa",author:"Domingos Lins",lyrics:`Cheios de contentamento 
Estamos, Senhor amado, 
Porque é o casamento 
Um Teu bom mandado. 

Coro:
Aos noivos dá proteção, 
Concedendo o Teu amor, 
Para eles em união, 
Viverem p’ra Teu louvor.

Faze viverem guardados 
Na Tua santa doutrina 
E só andarem guiados 
Por Tua mão divina. 

Confirma esta aliança, 
Nós Te pedimos ainda, 
Enchendo-os da esperança 
Da Tua santa vinda.`},
{id:"h151",num:151,title:"Fala Jesus Querido",category:"harpa",author:"Anônimo",lyrics:`Fala, Jesus querido; fala-me, hoje sim!
Fala com Tua bondade; fica ao pé de mim;
Meu coração aberto 'stá p'ra Tua voz ouvir;
Enche-me de louvores e gozo p’ra Te servir. 

Coro:
Fala-me suavemente! Fala, com muito amor!
Vencedor para sempre, livre te hei de por,
Fala-me cada dia, sempre em terno tom;
Ouvir Tua voz eu quero e neste mesmo som.

Para teus filhos fala, e, no caminho bom,
Pela bondade os guia a pedir o santo dom;
Quererão consagrar-se para suas vidas dar.
Obedecendo a Cristo e com fervor O amar. 

Como no tempo antigo, Tu revelaste a lei, 
Mostra-me Tua vontade, e à Tua santa grei; 
Deixa-me gloriar-Te, quero a Ti louvar,
Cantar alegremente e sempre Te honrar.`},
{id:"h152",num:152,title:"Pela Cruz ao Céu Irei",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Ao Calvário, só Jesus se transportou 
Levando pesada cruz, 
E morrendo, lá p'ra o mortal deixou, 
Um fanal de gloriosa luz. 

Coro:
Pela cruz ao céu irei; 
Pela cruz eu seguirei 
Pare o lar de paz e eterno amor 
Pela cruz ao céu irei.

Só na cruz, a alma sedenta achará 
A fonte de Inspiração; 
E ali o fardo de dor cairá; 
No Calvário, há salvação. 

Pela cruz irei à mansão celestial. 
O rumo marcado está, 
Em minha vida obscura será o fanal; 
Em sua luz minha alma irá.`},
{id:"h153",num:153,title:"Soldados de Cristo",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Soldados de Cristo que entrastes na lida. 
Lutai sem desmaio, lutai com valor; 
E o inimigo levai de vencida, 
Dizendo que Cristo é nosso Senhor. 

Coro:
Soldados de Cristo, marchei sempre avante, 
Levando à destra as armas da luz; 
As almas perdidas buscai triunfantes 
E prestes, levai-as a Cristo Jesus.

Peleja, ó crente, a santa peleja, 
Prossegue avante por Cristo Jesus; 
E sê mui valente; na frente estejas, 
Dizendo que Cristo morreu numa cruz. 

A aurora se acerca do dia faustoso, 
Em que prêmio terão a fé e o valor; 
E nele, Jesus, galardão grandioso, 
Dará a qualquer que sair vencedor.`},
{id:"h154",num:154,title:"Doce Nome de Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Oh! doce nome de Jesus! 
Que belo é a Ti cantar, 
Co'a alma cheia proclamar 
O nome bom de Jesus! 

Coro:
Jesus, ó meu doce Rei! 
Jesus, verdadeiro Deus! 
Jesus, sempre louvarei 
De coração, Teu nome.

Adoro o nome de Jesus; 
Jamais me falta Seu amor, 
E põe, à parte, minha dor, 
O nome bom de Jesus.

Tão puro o nome de Jesus! 
Que meu pesar pôde tirar. 
A grata paz também me dá 
O nome bom de Jesus. 

No doce nome de Jesus, 
A minha alma salva está, 
E nEle tu te salvarás; 
No nome bom de Jesus.`},
{id:"h155",num:155,title:"Imploramos Teu Poder",category:"harpa",author:"Almeida Sobrinho",lyrics:`Imploramos, nosso Salvador, 
Teu poder; Teu poder, Teu poder, 
Divinal, poder renovador, 
Teu poder, Teu poder, Teu poder. 
Bendita promessa paternal! 
Vem encher-nos de real valor, 
Do pleno poder celestial, 
Teu poder, Teu poder, Teu poder. 

Com o óleo, sim, vem nos ungir, 
Teu poder, Teu poder, Teu poder. 
Pai celeste, faze-nos fruir 
Teu poder, Teu poder, Teu poder. 
Tu já prometeste derramar 
Tuas bênçãos e nos revestir. 
Pra Tua Palavra proclamar, 
Com poder, com poder, com poder.

Com o fogo vem nos inflamar, 
Teu poder, Teu poder, Teu poder. 
E de toda a mancha nos limpar, 
Teu poder, Teu poder, Teu poder. 
Aquece os frios, ó Senhor; 
Faze os que dormem despertar. 
Nós te suplicamos com fervor, 
Teu poder, Teu poder, Teu poder. 

Como a brisa, queiras assoprar 
Teu poder, Teu poder. Teu poder. 
Deus bendito, vem nos outorgar 
Teu poder, Teu poder, Teu poder. 
Perene e doce comunhão, 
Quero aqui contigo, ó Pai, gozar; 
Depressa nos enche o coração 
Com poder, com poder, com poder.`},
{id:"h156",num:156,title:"A Ovelha Perdida",category:"harpa",author:"Anônimo",lyrics:`O bom Pastor buscou-me 
Já longe do redil, 
E com ternura achou-me, 
Caído, triste, vil! 
As chagas com amor pensou, 
E ao lar nos braços me levou. 

Coro:
Sim, Jesus amou-me, 
Com amor buscou-me, 
Ele mesmo restaurou-me a Deus; 
Por Seu sangue, restaurou-me a Deus.

Seguiu-me, bem distante 
Do Seu lugar, no céu, 
E disse, em voz amante: 
“Achei-te, tu és Meu”. 
Jamais senti tão grande amor 
Como este do meu bom Pastor. 

Por Ele sou querido, 
Que graça singular! 
Pois Ele foi ferido, 
A fim de me salvar; 
Assim, ovelha dEle sou, 
E com o Seu rebanho vou. 

Prossigo alegre agora; 
Deus dá poder cabal 
E graça salvadora; 
Protege-me do mal, 
O bom Pastor comigo está, 
Meus passos Ele guiará.`},
{id:"h157",num:157,title:"Cristo, em Breve, Vem!",category:"harpa",author:"Erik Janson",lyrics:`O dia vem, a clarear, 
Já fugiu a noite, brilha a luz dalém; 
Um grito soa: aprontar! 
Cristo, em breve, vem! 

Coro:
Qual forte vendaval, rugindo Sobre o mar, 
Escuta-se a mensagem, que do céu provém; 
Ouvi a grande nova, que alegria traz; 
“Cristo, em breve, vem!”

Ó povos, tribos e nações 
Que escravizados no pecado estais, 
Ó preparei os corações! 
Oh! Por que demorais? 

Da morte queiram acordar; 
Trevas e pecados. é luz, hão de fugir; 
Em breve iremos encontrar 
Crista, que há de vir.`},
{id:"h158",num:158,title:"Que Farás de Jesus Cristo?",category:"harpa",author:"Frida Vingren",lyrics:`Diante de Pilatos 'stá Jesus, 
Por todos deixado em aflição, 
O qual pergunta à multidão... 
-"Que farei de Jesus Cristo?" 

Coro:
Que farás de Jesus Cristo? 
Responde, hoje, sim; 
Diria um dia ao vê-Lo: 
“Que fará Ele de mim?

Em julgamento ainda está 
O Nazareno em aflição, 
E se repete a pergunta, então: 
-"Que farei de Jesus Crlsto?" 

Será julgado Jesus por ti, 
Ou recebido com gratidão? 
E, mui alegre, dirás, então: 
-"Aceito a Jesus Cristo!"`},
{id:"h159",num:159,title:"Cantai, ó Peregrinos",category:"harpa",author:"J.F.J J.F. Jamielson",lyrics:`Cantai, ó peregrinos, na lida não canseis
A vossa fé crescendo, as harpas já tocai
Eu sobre o monte santo e glorioso estou,
E para a minha pátria celestial já vou.

Coro:
Cantai, continuamente,
louvai p’ra todo o sempre;
Meu coração transborda com divinal louvor.
Cantai, continuamente,
Louvai p’ra todo o sempre;
Meu coração transborda com divinal louvor.

Cantai, ó peregrinos, enquanto aqui estais;
Cantai, a Jesus Cristo, enquanto assim passais;
Cantei a velha história de Deus e Seu amor;
O coro sempiterno responde, com fervor.

Cantai, ó peregrinos, em breve estareis,
Cantando melhor hino, junto ao Rei dos reis,
Com os que foram antes, e nos esperam lá,
Encontraremos todos, e nada turbará.`},
{id:"h160",num:160,title:"Deus Nos Quis Salvar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Irmãos, unidos, vamos publicar 
Que Deus nos quis salvar, 
Que Deus nos quis salvar, 
Com o precioso sangue de Jesus, 
Vertido lá na cruz. 

Coro:
Que Deus nos quis salvar, 
Que Deus nos quis salvar, 
Co’o sangue do Senhor Jesus; 
Ó irmãos, devemos avançar, 
Olhando para a cruz

Irmãos, ao mundo vamos proclamar 
Que Deus nos quis salvar. 
Que Deus nos quis salvar. 
E que, mui breve, há de vir Jesus, 
Em gloriosa luz. 

Na sã Palavra fomos encontrar 
Que Deus nos quis salvar, 
Que Deus nos quis salvar, 
E que no céu veremos o Senhor, 
Repletos de amor! 

Alegres, sempre temos que cantar: 
Que Deus nos quis salvar, 
Que Deus nos quis salvar. 
Por Sua graça, pelo Seu amor, 
Louvemos ao Senhor!`},
{id:"h161",num:161,title:"Navegando Pra Terra Celeste",category:"harpa",author:"J.Car Joel Carlson",lyrics:`Pra terra celeste meu barco andará,
Ali, onde os santos já estão;
Findando a noite, manhã romperá;
Então, os remidos entrarão.

Coro:
Sim, vou pelas terras, pelos mares também,
Alerta, Jesus me guiará; Ele prometeu a mim,
Nunca deixar-me no mundo, porém,
Sim, levar-me ao porto, co’alegria sem fim.

Será jubiloso esse dia pra mim,
Em que eu chegar ao céu de luz;
Que paz e descanso, com Deus, lá sem fim!
Saúdo-Te já, ó meu Jesus!

Ó mundo que jazes no vil tentador
Não quero jamais em ti morar,
P'ra festa celeste eu vou com fervor,
Louvares a Cristo irei cantar!

Amigos, lembrai-vos que o naufragar
É fácil p’ra qualquer um de vós;
Convite, p’ras bodas, Jesus vos quer dar;
Lugar há bastante para nós.`},
{id:"h162",num:162,title:"O Estandarte da Verdade",category:"harpa",author:"Severino Silva",lyrics:`Da verdade, levantemos o estandarte, 
Arvoremos o estandarte de Jesus. 
Proclamemos, com valor, por toda parte, 
A mensagem soleníssima da cruz. 

Coro:
O mundo está sem luz, sem paz; 
Levemos paz, consolação, 
A quem, na dor, no luto faz, 
Sem luz, sem paz, sem salvação.

Da verdade, levantemos o estandarte; 
Proclamaremos o Senhor, que é luz e paz; 
Pecador, ouve! Jesus tem para dar-te 
Salvação que nEle só, encontrarás. 

Do Evangelho, levantemos o estandarte, 
Vem, desperta do teu sono, pecador; 
Que o teu Deus, que o teu Senhor tem para dar-te 
Copiosas bênçãos do Seu grande amor.`},
{id:"h163",num:163,title:"Cristo Morreu Por Mim",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Do Calvário, pela senda,
O Senhor Jesus subiu,
E na cruz, em dor horrenda,
Obra de amor cumpriu!

Coro:
Sobre a cruz, sobre a cruz,
Cristo Jesus morreu por mim;
Sobre a cruz, sobre a cruz,
Cristo Jesus morreu por ti.

Oh! Que obra gloriosa
Foi pra Deus a de Jesus!
Sua morte tão penosa
Fez raiar, do céu, a luz!

Nesta obra hoje crendo,
Tenho vida e prazer;
Pela fé, estou revendo
O Senhor, por mim sofrer.

Pecador na cruz remirá,
De Jesus a morte atroz.
Pois o teu pecado tira,
Se ouvires Sua voz.`},
{id:"h164",num:164,title:"Paz Luz e Amor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Recebi de graça, abundante paz 
Por Deus concedida, que me satisfaz; 
Queres recebê-la no teu coração? 
Busca o Senhor e a Sua salvação, 
Mais de Sua paz, mais de Sua paz, 
Quero receber de Deus, que é veraz. 
Mais de Sua paz, mais de Sua paz, 
Quero receber de Deus, que é veraz. 

Recebi de graça, abundante luz, 
Luz maravilhosa, que me deu Jesus; 
Queres recebê-la, pobre pecador? 
Deixa, hoje mesmo, o mundo de horror. 
Mais de Sua luz, mais de Sua luz, 
Quero receber do Salvador Jesus, 
Mais de Sua luz, mais de Sua luz, 
Quero receber do Salvador Jesus. 

Recebi de graça abundante amor, 
O amor divino do Consolador; 
Queres recebê-lo? Abre o coração, 
E terás mais gozo e veraz perdão. 
Mais de Seu amor, mais de Seu amor, 
Quero receber do bom Consolador, 
Mais de Seu amor, mais de Seu amor, 
Quero receber do bom Consolador.`},
{id:"h165",num:165,title:"A Armadura Cristã",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao bom Combate vamos, repletos de amor,
Vestidos de justiça, ferventes no Senhor;
Co’os lombos bem cingidos de verdadeira luz,
Calçados do Evangelho do Salvador Jesus. 

Coro:
De Deus, a armadura - de Cristo, o valor,
irmão meu, segura - p’ra seres vencedor.

Da fé, o escudo, que pode vos salvar
Dos dardos inflamados, que vem vos atirar
O grande inimigo, o astuto tentador 
Que sempre vos procura tragar, Com seu furor. 

Entrai no bom combate, em nome do Senhor 
Com zelo, com coragem, unidos em amor; 
O inimigo, breve, assim, se vencerá, 
E sob os pés nossos .Jesus nô-lo porá.`},
{id:"h166",num:166,title:"Deixa Entrar o Rei da Glória",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ouves tu? Jesus te chama 
Sim, te chama, ó pecador!
A Jesus, que salva e ama,
Vem agora, sem temor. 

Coro:
Deixa entrar o Rei da glória 
Em ti mesmo, ó pecador; 
Quem é este Rei da glória? 
É Jesus o teu Senhor

Para o mundo e o pecado 
Tens no coração lugar, 
Mas Jesus ressuscitado, 
Tu não podes abrIgar? 

Do prazer, a vista linda, 
Deste mundo sedutor, 
Sim, um dia aqui se finda, 
Com a morte, ó pecador! 

Hoje é dia aceitável 
Para vires t’entregar 
A Jesus, que mui amável, 
Quer, e pode te salvar`},
{id:"h167",num:167,title:"As Testemunhas de Jesus",category:"harpa",author:"Samuel Nyström",lyrics:`Ó companheiros desta causa santa 
Anunciai que Cristo é Salvador, 
E boa nova que o perdido salva 
E do escravo faz um vencedor; 
Do Amazonas, até ao Rio Grande, 
O Evangelho, ousados, proclamai, 
E a mensagem, que da paz nos fala; 
Eterna glória vos dará do Pai. 

A salvação perfeita e gloriosa, 
Que, em Jesus, o Pai quis revelar, 
Nós publicamos, sim, por toda a parta. 
Aos que Jesus já veio pra salvar. 
E muitos já a Cristo se entregaram, 
E a estes outros vão se reunir, 
Sim, a Palavra, em vão, não se semeia, 
Pois quem a deu, também a faz fruir. 

Poder do alto pra ser testemunha, 
Foi a promessa qu’Ele nos deixou, 
Bem poucos crentes, 'stão à Sua espera, 
Desconhecendo o que Deus nos legou, 
Mas, glória a Deus! Há outros que acordaram 
E cheios de poder pentecostal, 
Vão despertar os crentes ociosos, 
P'ra acharem este dom celestial. 

No nome de Jesus nós proclamamos, 
A salvação pra todo o pecador, 
E este nome cura os enfermos, 
Que buscam nEle aliviar a dor; 
E os demônios serão expulsos, 
Porque Jesus poder nos prometeu, 
E já um povo está se preparando 
Pra encontrar Jesus, o Rei do céu.`},
{id:"h168",num:168,title:"Meus Irmãos, Nos Jubilemos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Meus irmãos, nos jubilemos 
Em Jesus, o Rei da glória, 
Nesta fé que recebemos, 
Nesta paz, que dá vitória, 
No Consolador divino, 
Que aviva a memória, 
E em nós entoa hinos a Jesus. 

Coro:
Meus Irmãos, nos jubilemos 
Em Jesus, por Sua bênção; 
Pois, assim, nós sempre temos 
Salvação.

Meus irmãos, nós congregados, 
Entoemos nosso canto 
Ao Senhor, o nosso amado, 
Ao bom Deus, perfeito e santo; 
No seu gozo jubilemos, 
E secar-se-á o pranto; 
Em espírito adoremos a Jesus. 

Meus irmãos, em Cristo somos 
Pelo Espírito gerados, 
E pra sermos santos, fomos 
Por Jesus já resgatados; 
Pela fé, nós desfrutamos 
Liberdade do pecado, 
E também, nos alegramos em Jesus.`},
{id:"h169",num:169,title:"Oh! Jesus Me Ama",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Longe do Senhor, andava, 
No caminho de horror, 
Por Jesus não perguntava, 
Nem queria o Seu amor. 

Coro:
Oh! por que Jesus me ama? 
Eu não posso t’explicar! 
Mas, a ti também te chama, 
Pois deseja te salvar!

No juízo não pensava, 
Nem na minha perdição, 
Nem minh’alma desejava 
A eterna Salvação.

Já cansado do pecado, 
Fui aos pés do Salvador, 
E ali, caiu o fardo 
De tristezas e de dor. 

Como é maravilhoso. 
Pertencer ao meu Jesus! 
Ter a graça, o repouso, 
E ficar ao pé da cruz!`},
{id:"h170",num:170,title:"Ao Calvário de Horror",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Como havia trevas no meu coração,
Quando Jesus Cristo me salvou;
Pela luz divina, com a Sua mão,
Todas as minhas trevas dissipou! 

Coro:
Ao Calvário de horror, subiu Jesus,
Levando a cruz, levando a cruz;
Ao Calvário de horror, subiu Jesus,
Levando a minha cruz!

Vindo um perdido ao Senhor Jesus,
Achará o gozo divina!,
E na sua alma raiará á luz,
Luz que vem do céu, luz eternal! 

É maravilhoso o amor de Deus,
Que mandou Seu Filho p'ra salvar
Todo o perdido pecador ou réu,
Que a Sua graça aceitar!`},
{id:"h171",num:171,title:"Um Pecador Remido",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Era um pecador, andava sem Jesus,
Não tinha esperança, nem divina luz;
Hoje sou remido, Cristo me salvou,
Co’o Seu sangue me lavou!

Coro:
Que amor me concedeu Jesus,
Gozo santo e celeste luz;
Cristo, breve, do céu descerá,
E consigo, então, me levará.

O Consolador já veio em mim morar,
A Palavra santa veio iluminar;
Quero ser guiado por tão clara luz,
Que a Cristo me conduz.

Vem, Jesus amado, vem sem demorar,
Eu estou ansioso pra no céu entrar;
Vem sem mais tardança, faz raiar a luz,
"Ora vem, Senhor Jesus"

Queres, pecador, gozar a salvação?
Vem a Cristo, hoje, receber perdão,
Cristo te aceita, pobre pecador,
Nos Seus braços de amor!`},
{id:"h172",num:172,title:"Ó Vem Te Entregar",category:"harpa",author:"Almeida Sobrinho",lyrics:`Ó pecador, cansado e abatido, 
que neste mundo vagas, sem consolação! 
Se queres ser, de graça, revestido, 
Aceita Cristo, e Sua salvação. 

Coro:
Ó vem te entregar 
Ao grande Salvador, 
Que veio te salvar, 
E te espera, cheio de amor.

Ó pecador, se estás desanimado, 
Porque o mal domina todo o teu ser, 
Ó crê em Cristo, o crucificado, 
E contra o vício tu terás poder. 

Ó pecador, por que não te entregas 
A Jesus Cristo, o bondoso Salvador? 
Que, vindo a morte, grato te carrega 
Ao Paraíso, ao país de amor! 

Se comoção tu sentes em tu’alma, 
E queres hoje receber a salvação, 
Aceita Cristo, com fá e com calma, 
Vem te entregar, de todo o coração.`},
{id:"h173",num:173,title:"Os Santos Louvam Ao Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Pronto 'stamos p’ra louvar Jesus, o Salvador, 
Glória a Jesus e aleluia! 
E havemos de cantar ao nosso Redentor, 
Glória a Jesus e aleluia! 

Coro:
Têm os santos do Senhor 
O direito de cantar 
Que Jesus, com grande amor, 
Veio à terra p ‘ra salvar; 
Nossa alma resgatou, 
Com Seu sangue nos lavou; 
Glória a Jesus e aleluia!

A certeza temos já da nossa redenção, 
Glória a Jesus e aleluia! 
E, cantando, vamos indo p’ra feliz Sião; 
Glória a Jesus e aleluia! 

Temos firmes as promessas que Deus nos quis dar, 
Glória a Jesus e aleluia! 
Por Jesus, aqui, podemos sempre triunfar, 
Glória a Jesus e aleluia! 

Coro:
Têm os santos do Senhor 
O poder de exaltar 
Cristo, nosso Salvador, 
Que nos veio resgatar; 
Já vivemos pela fé, 
No palácio do que “É”; 
Glória a Jesus. aleluia!`},
{id:"h174",num:174,title:"Glória, Aleluia, Gloria",category:"harpa",author:"Almeida Sobrinho",lyrics:`Tenho gozo em dar louvor,
Glória, aleluia, glória!
A Jesus, meu Salvador,
Glória, aleluia, glória! 

Coro:
Glória a Deus, Jesus me salvou!
Glória a Deus, Jesus me livrou!
Glória a Deus, que eu salvo estou!
Glória, aleluia, glória!

Só Jesus pode salvar,
Glória, aleluia, glória!
E de todo o mal livrar,
Glória, aleluia, glória! 

Enquanto no mundo andar, 
Glória, aleluia, glória! 
A Jesus hei de louvar, 
Glória, aleluia, glória! 

Quando eu no céu chegar, 
Glória, aleluia, glória! 
Para sempre irei cantar, 
Glória, aleluia, glória!`},
{id:"h175",num:175,title:"Irmãos Amados",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Irmãos amados - E resgatados, 
Segui avante - E triunfantes, 
Combateremos - E venceremos, 
No nome santo de Jesus! 

Coro:
No nome santo - alegre canto: 
Eu fui lavado - Santificado; 
Vivi perdido - Mas sou remido. 
No nome santo de Jesus!

Irmãos amados - Santificados, 
Vivei unidos - Pois sois remidos, 
Não mais temendo - O bem fazendo, 
No nome santo de Jesus! 

Irmãos amados - Purificados, 
Sede valentes - E mui prudentes, 
Estais lavados - E libertados, 
No nome santo de Jesus!`},
{id:"h176",num:176,title:"Sacerdotes do Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao Senhor que nos tem feito 
Sacerdotes verdadeiros, 
Demos-Lhe louvor e glória, sem cessar; 
Pois Seu sangue é perfeito, 
Regenera por inteiro, 
Toda a alma, que quer se salvar. 

Coro:
Todos, tendo a mesma mente, 
Jubilosos e contentes, 
Demos glória, suma honra ao Redentor: 
Sobre a cruz foi traspassado; 
Com Seu sangue derramado, 
Resgatou-nos o bom Salvador.

Ele é o alfa e o Ômega. 
O primeiro e o Ultimo, 
E o Rei dos reis, de todos o Senhor; 
Ele é quem nos achega 
Sua graça, Seu arrimo, 
Pelo divinal Consolador. 

Com Jesus, o nosso Esposo. 
Lá no céu, nós entraremos. 
Todos juntos, sim, no Reino Seu, de amor; 
Vê-Lo-emos glorioso, 
E com Ele cantaremos 
Novos hinos, cheios de fervor.`},
{id:"h177",num:177,title:"Salvo Estou",category:"harpa",author:"Frida Vingren",lyrics:`Salvo estou, Jesus comprou-me 
Do pecado e perdição; 
Com Seu 'spírito já selou-me 
Deu-me paz no coração. 

Coro:
Glória, glória, aleluia, 
Já acheis salvação; 
Glória, glória, aleluia, 
Cristo deu-me redenção.

Cantarei com alegria, 
Jubiloso som do céu. 
Louvarei com harmonia 
A Jesus. o amado meu.

A mensagem gloriosa 
Duma eterna salvação, 
Forte, sim, e poderosa, 
Digna é de aceitação. 

Ao chegar o fim da lida, 
Me recebes, Salvador; 
Me concede eterna vida, 
No Teu reino de amor.`},
{id:"h178",num:178,title:"Gloriosa Paz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Crendo em Cristo Jesus vim obter 
Gloriosa paz, perfeita paz: 
Inda que dores açoitem meu ser, 
Tenho doce paz! 

Coro:
Paz, paz, gloriosa paz; 
Paz, paz, perfeita paz; 
Desde que Cristo minh’alma salvou, 
Tenho doce paz!

2 Paz insondável, qual um grande mar, 
Gloriosa paz, perfeita paz; 
Posso nos braços de Deus repousar, 
Tenho doce paz! 

Paz inefável de Deus, que faz bem, 
Gloriosa paz, perfeita paz; 
Que dá alento à alma também, 
Tenho doce paz! 

E, nos conflitos com o tentador, 
Gloriosa paz. perfeita paz, 
Cristo Jesus me fará vencedor, 
Tenho doce paz!`},
{id:"h179",num:179,title:"Redentor Formoso",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Redentor formoso e belo,
Que habitas em alvor;
Na minh'alma eu anelo
De ser como és Tu, Senhor 

Coro:
Té que um dia vá, remido,
No céu eu ver o Redentor!
Depois que eu tiver cumprido
O Seu querer, por Seu amor.

Os meus olhos, ó retira, 
Deste mundo de horror, 
Pois minh’alma em Ti remira 
Tua graça e Teu favor.

Já a noite se avança; 
Bela estrela vai nascer, 
Temos nós a esperança 
Dum eterno e gran prazer. 

Tua mão, ó me sustente, 
Humilhado aos Teus pés, 
Com a alma e com a mente, 
Pela verdadeira fé.`},
{id:"h180",num:180,title:"Em Cristo Fruímos a Paz",category:"harpa",author:"J.T.H J.T. Houston",lyrics:`Aonde fruirmos a paz, o amor? 
Em Cristo, somente em Cristo; 
Aonde nós temos poder e vigor? 
Em Cristo, somente em Cristo. 

Coro:
Em Cristo, em Cristo, 
Eu sinto em mim um gozo, sem fim; 
É Inexplicável mas é agradável 
Estar no amor de Cristo.

Aonde águas vivas nós vamos buscar? 
Em Cristo, somente em Cristo: 
É inexplicável mas é agradável 
Estar no amor de Cristo. 

Aonde havemos nós de repousar? 
Em Cristo, somente em Cristo; 
As forças podemos também renovar? 
Em Cristo, somente em Cristo. 

Aonde achamos imenso poder? 
Em Cristo, somente em Cristo; 
E um povo cheio de santo prazer? 
Em Cristo, somente em Cristo.`},
{id:"h181",num:181,title:"Vem, Celeste Redentor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem, Senhor, do bem a fonte, 
Vem, celeste Redentor. 
Ajudar-me a entoar-te 
Dignos hinos de louvor; 
Tu, Jesus, por mim morreste, 
Quero só pra Ti viver; 
Quero em todos os momentos 
Tua bênção receber. 

Era pobre desgarrado 
Quando Cristo me buscou; 
Para me salvar do inferno 
O Seu sangue derramou; 
Em Sua morte tão penosa, 
Paz, perdão e vida achei. 
E com Ele eternamente 
Sua glória fruirei. 

De tua graça, ó meu amado. 
Sou contínuo devedor; 
Mais e mais a Ti me atrai 
Pelo Teu divino amor; 
Sou ingrato, e bem conheço. 
Peço, meu Senhor, perdão; 
Tira-me do vil pecado, 
Rege Tu meu coração.`},
{id:"h182",num:182,title:"Jesus no Getsêmane",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus no Getsêmane foi ligado, 
E pelos ímpios foi arrastado 
A corte, onde foi muito insultado, 
E atingido, por meu pecado; 
E a sentença da turba foi o brado: 
"Que seja Cristo crucificado." 
Vituperado e flagelado 
Jesus sofreu o meu pecado. 
Vituperado e flagelado 
Jesus sofreu o meu pecado. 

Então, na cruz, foi o Cristo pendurado 
E duma lança foi traspassado; 
Ali estava Jesus ensangüentado, 
Por meus pecados atormentado! 
“Deus meu, Deus meu, por que tens m’abandonado?" 
Clamava Cristo crucificado; 
“Perdoa o povo tão enganado, 
Que cometeu um tal pecado”. 
“Perdoa o povo tão enganado, 
Que cometeu um tal pecado". 

Depois Jesus Cristo foi da cruz tirado, 
E ao sepulcro foi carregado; 
Por santos, Seu corpo foi embalsamado, 
E entre ricos foi sepultado; 
Estando Cristo Jesus já enterrado; 
O Seu sepulcro foi bem guardado; 
Após três dias, Jesus amado, 
Da morte foi ressuscitado. 
Após três dias Jesus amado, 
Da morte foi ressuscitado.`},
{id:"h183",num:183,title:"Ressuscitou!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Da sepultura, para o céu, Jesus voltou, 
Depois que o pecado aniquilou; 
Com gran poder foi que ressuscitou, 
E liberdade aos presos proclamou; 
Tremendo, a terra O saudou, 
Pois que da morte se levantou. 

Coro:
Ressuscitou! Ressuscitou! 
E para o céu Jesus tornou; 
Mas voltará, também de lá, 
E neste mundo, então reinará.

Em riso, o pranto dos discípulos se tornou, 
Pois vivo, Cristo se apresentou; 
- “Parti p’ra Galiléia, ordenou, 
E a promessa santa revelou: 
“Poder do alto, eu vos dou 
Pois ao meu Pai, pedi-lo vou". 

Jesus a Sua mão divina levantou, 
Abençoando seres que salvou, 
E, triunfante, para o céu tornou. 
E uma nuvem logo O ocultou; 
Mas a promessa lhes deixou: 
“Eis que convosco pra sempre estou” 

Sentado à destra de Deus Pai, Jesus está, 
Por Sua Esposa suplicando já; 
O mundo disto não cogita cá, 
Porque não vê a luz que brilha lá; 
Mui breve, Cristo voltará, 
Mas, só os Seus, ao céu levará.`},
{id:"h184",num:184,title:"Meu Jesus! Meu Jesus!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`De meu terno Salvador, 
Cantarei o imenso amor, 
Dando glória e louvor a Jesus, 
Pois das trevas me chamou, 
De cadeias me livrou, 
E da morte me salvou meu Jesus!

Coro:
Meu Jesus! Meu Jesus! 
Que precioso é o nome de Jesus! 
Com Seu sangue me limpou; 
De Seu gozo me fartou; 
Oh! que graça me mandou, meu Jesus.

Oh! que triste condição 
A do ímpio coração; 
Me salvou da perdição; meu Jesus; 
Do pecado, o perdão; 
Da ruína, salvação; 
Por tristeza, galardão, meu Jesus! 

Pelo mundo a vagar. 
Solitário sem parar, 
Sem a doce paz gozar de Jesus; 
Todo pranto a sofrer, 
Hão passados, e prazer 
Já começo a receber de Jesus. 

Oh! que sangue remidor, 
Encontrei no Salvador, 
Sangue purificador, de Jesus! 
Dai louvores em ação 
Da bendita salvação! 
Hinos dai por gratidão a Jesus!`},
{id:"h185",num:185,title:"Invocação e Louvor",category:"harpa",author:"A.H.S Alfredo H. Da Silva",lyrics:`Vem Tu, ó Rei dos reis. 
Guiar os teus fiéis p’ra Te louvar. 
Grande e glorioso Ser, Pai de todo o poder, 
Vem sobre nós reger, oh! Deus sem par! 

Vem Tu, Verbo de Deus, 
Fazer chegar aos céus nossa oração. 
Vem, sim, abençoar teu povo e prosperar 
Mensagem que falar da salvação. 

Vem. Tu. Consolador, 
Inspira e dá fervor às orações; 
Espírito de paz, afasta Satanás, 
E plena graça traz aos corações. 

Ao grande trino Deus 
Louvem os anjos Seus e nós também, 
A Deus nosso Senhor: Pai, Filho e Condutor 
Louvemos com fervor, pra sempre. Amém.`},
{id:"h186",num:186,title:"De Valor em Valor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Pela fé que uma vez me foi dada, 
Pra seguir o Cordeiro de Deus, 
Pela graça de Deus enviada, 
Andarei, com valor, para os céus. 

Coro:
Quero andar de valor em valor 
E seguir a Jesus, meu Senhor; 
Té que um dia receba no céu 
A coroa, que me dará Deus.

De Deus, quero vestir a armadura, 
Pra lutar com coragem e valor. 
Pois aqui a peleja é dura, 
Contra as hostes do vil tentador. 

Em Jesus eu farei mil proezas 
No combate da fé e do amor; 
NEle tenho vigor e destreza, 
P’ra lutar e pra ser vencedor! 

Eu direi, ao findar esta liça: 
Combati o combate de amor 
E coroa terei de justiça. 
Que no céu me dará o Senhor.`},
{id:"h187",num:187,title:"Mais Perto Meu Deus de Ti!",category:"harpa",author:"J.G.R João G. Da Rocha",lyrics:`Mais perto quero estar
Meu Deus, de Ti!
Inda que seja a dor
Que me una a Ti,
Sempre hei de suplicar
Mais perto quero estar
Mais perto quero estar
Meu Deus, de Ti!

Andando triste, aqui
Na solidão,
Paz e descanso a mim
Teus braços dão;
Nas trevas vou sonhar,
Mais perto quero estar,
Mais perto quero estar,
Meu Deus, de Ti!

Minh'alma cantará
A Ti, Senhor!
E em Betel alçará
Padrão de amor,
Eu sempre hei de rogar
Mais perto quero estar,
Mais perto quero estar,
Meu Deus, de Ti!

E, quando Cristo, enfim,
Me vier chamar,
Nos céus com serafins,
Irei morar.
Então me alegrarei
Perto de Ti, meu Rei.
Perto de TI, meu Rei,
Meus Deus, de Ti!`},
{id:"h188",num:188,title:"O Gozo do Céu",category:"harpa",author:"Almeida Sobrinho",lyrics:`Bem sei, muitos não podem compreender 
Porque feliz é o meu viver; 
Entrar na Canaã de santo prazer, 
É gozo do céu para mim. 
É gozo do céu para mim; 
Sim, gozo do céu para mim; 
Entrar na Canaã de santo prazer, 
É gozo do céu para mim. 

Os lindos acordes celestes ouvir, 
No Evangelho que recebi; 
Confiar em Jesus e segui-Lo aqui, 
É gozo do céu para mim. 
É gozo do céu para mim; 
Sim, gozo do céu para mim; 
Confiar em Jesus e segui-Lo aqui, 
É gozo do céu para mim. 

Possuir o meu ser transformado em luz 
Ter o ‘spírito de Jesus, 
Negar a mim mesmo e tomar minha cruz, 
É gozo do céu para mim. 
É gozo do céu para mim; 
Sim, gozo do céu para mim; 
Negar a mim mesmo e tomar minha cruz, 
É gozo do céu para mim. 

A vida eterna, em Cristo, gozar, 
O que é “lá de cima” buscar, 
Deixar meu Jesus em minha alma reinar, 
É gozo do céu para mim. 
É gozo do céu para mim; 
Sim, gozo do céu para mim; 
Deixar meu Jesus em minh'alma reinar, 
É gozo do céu para mim.`},
{id:"h189",num:189,title:"Glória ao Salvador",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Chegado à cruz do meu bom Senhor, 
Prostrado aos pés do Redentor, 
Ele ouviu todo meu clamor 
Glória ao Salvador. 

Coro:
Glória ao Salvador! 
Glória ao Salvador 
Agora sei que Ele me salvou 
Glória ao Salvador!

Que maravilha! Jesus me amou, 
Tudo de graça me perdoou; 
Quebrou meus laços e me livrou; 
Glória ao Salvador! 

Junto à cruz, inda há lugar, 
Vem, ó aflito, sem demorar, 
Cristo está pronto pra te salvar, 
Vinde ao Salvador!`},
{id:"h190",num:190,title:"Cristo! Meu Cristo!",category:"harpa",author:"K Kalley",lyrics:`Oh! quanto fez Jesus por mim! 
Salvou-me do pecado! 
Até à morte (triste fim), 
Amou-me o bem amado. 
Com Deus, o Pai, agora está 
Jesus, meu Advogado; 
Morada me concederá 
Na glória, com o amado. 

Coro:
Cristo! meu Cristo!
Teu nome é doce, amado!
Desejo ver-te, face a face
meu Cristo bem amado.

Defende como protetor, 
Segura o pé cansado; 
E sobre mim, com terno amor. 
Vigia o bem amado. 
A minha humilde petição 
Escuta com agrado; 
Tranqüilo e débil coração, 
Repousa em Ti, Amado.`},
{id:"h191",num:191,title:"O Meu Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O meu Jesus, por mim, morreu 
Na cruz, com dor horrenda; 
Ali em meu lugar sofreu, 
Angustia mui tremenda! 
Quem poderei no mundo achar. 
Que a meu Jesus vá comparar? 
Jesus. Jesus, somente vou amar! 

O meu Jesus está no céu, 
intercessor potente, 
Por mim, pedindo sempre a Deus. 
A graça, amor fervente. 
Ninguém jamais ao Pai conduz 
O pecador, senão Jesus; 
Jesus, Jesus, a Deus, ó me introduz! 

O meu Jesus ressuscitou, 
Em corpo glorioso, 
Também, por mim, a Deus pagou 
Um preço fabuloso! 
Qual dos mortais vou encontrar 
Que a meu Jesus vou igualar? 
Jesus, Jesus, não posso comparar! 

Jesus do céu há de voltar, 
Em majestade e glória, 
Então Seus anjos irão cantar 
O hino da vitória, 
Jesus, enfim, vai suplantar 
O Anticristo, e reinar. 
Jesus, Jesus, ó vem me arrebatar!`},
{id:"h192",num:192,title:"Pelo Sangue",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Pelo mundo brilha a luz,
Desde que morreu Jesus.
Pendurado lá na cruz do Calvário!
Os pecados carregou
E de culpa nos livrou,
Com o sangue que manou, no Calvário! 

Coro:
Pelo sangue, pelo sangue,
Somos redimidos, sim
Pelo sangue carmesim;
Pelo sangue, pelo sangue.
Pelo sangue de Jesus, no Calvário!

Antes, tinha mui temor, 
Mas, agora, tenho amor, 
Pois compreendo o valor do Calvário; 
Eu vivi na perdição 
Mas achei a salvação 
Pela grande redenção: o Calvário! 

És um grande pecador? 
Eis aqui Teu Salvador! 
Tema do bom pregador: o Calvário. 
O Cordeiro divinal 
Padeceu na cruz teu mal, 
E oferece graça tal, no Calvário.`},
{id:"h193",num:193,title:"A Alma Abatida",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Se tu, minh'alma, a Deus suplicas, 
E não recebes, confiando fica 
Em Suas promessas, que são mui ricas, 
E infalíveis pra te valer. 

Coro:
Por que te abates, ó minha alma? 
E te comoves, perdendo a calma? 
Não tenhas medo, em Deus espera, 
Porque bem cedo, Jesus virá.

Ele intercede por ti, minh'alma; 
Espera nEle, com fé e calma; 
Jesus de todos teus males salva, 
E te abençoa, dos altos céus. 

Terás em breve, as dores findas, 
No dia alegre da Sua vinda; 
Se Cristo tarda, espera ainda 
Mais um pouquinho, e O verás.`},
{id:"h194",num:194,title:"Jesus Me Guiará",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Há quem vele as pisadas 
Que eu dou na sombra ou luz, 
Pelas sendas escarpadas, 
Velará por mim Jesus; 
Pelos vales, pelos montes, 
Me conduz a Sua mão; 
Vejo já os horizontes 
Duma perene mansão. 

Coro:
Há quem vele as pisadas, 
Minha senda traçará; 
Para as célicas moradas, 
Sim, Jesus me guiará

Há contacto que m’explica 
A presença do Senhor, 
Que as manchas purifica 
E me livra de temor; 
Cristo com a mão ferida, 
Proteção me pode dar, 
Quando vejo desta vida 
O inquieto e forte mar. 

Há um coração amante, 
De infinita compaixão, 
Que concede paz constante 
Ao contrito coração; 
Há favor e liberdade 
Em Jesus, o Salvador, 
Muita graça e verdade 
E poder consolador.`},
{id:"h195",num:195,title:"Benigno Salvador",category:"harpa",author:"K Kalley",lyrics:`Benigno Salvador! Com Tua aprovação, 
Consagra em doce amor esta feliz união, 
E sobre os noivos faz descer 
A graça que lhes é mister. 

Fá-los em paz andar unidos no Senhor, 
E a vida aqui passar em terno e santo amor 
Ligados no amor de Deus; 
Caminhem juntos para os céus. 

Ó digna-Te reger sua casa como Rei; 
Seus corações manter dóceis, 
à Tua lei; Livra-os de toda a tentação, 
Consola-os na tribulação. 

Se o Salvador cumprir a nossa petição, 
Podemos descobrir nesta bendita união 
A sombra do celeste amor 
Dos salvos e seu Salvador.`},
{id:"h196",num:196,title:"Uma  Flor Gloriosa",category:"harpa",author:"Frida Vingren",lyrics:`Já achei uma flor gloriosa, 
E quem deseja a mesma terá;
A rosa de Saron preciosa
Entre mil mais beleza terá;
No vale de sombra e morte,
Nas alturas de glória e luz,
Esta rosa será a minha sorte,
Precioso p’ra mim é Jesus! 

Coro:
Precioso p’ra mim é Jesus!
Precioso p?a mim é Jesus!
Eu confesso na vida e na morte
Que tudo p’ra mim é Jesus!

Já de muitos foi achada a rosa 
E provado o excelente odor 
E o poder desta flor gloriosa 
Que dá vida ao vil pecador. 
Mui zeloso pela lei foi Saulo, 
Perseguia o povo de Deus, 
Mas transformado foi em um Paulo. 
Pois achou ele a rosa dos céus. 

Vai buscar a Jesus precioso, 
Vai depressa, a noite já vem, 
E, se perdes o amor glorioso, 
Será triste pra ti o além; 
Esta flor hoje é ofertada 
A quem humildemente a buscar; 
Será logo da terra tirada, 
Para brilhar em outro lugar.`},
{id:"h197",num:197,title:"O Lar da Glória",category:"harpa",author:"Tora Hedlund",lyrics:`No céu foi Jesus preparar-nos lugar.
Na glória.
E breve, mui breve Ele há de voltar,
Em glória. 

Coro:
Eu sal, eu sei, eu tenho um lar na glória!
Oh! eu sei, eu sei, um lar no céu!

Levanta os olhos e conta o que há.
Na glória.
De pedras preciosas o lar brilha lá,
Em glória. 

Ainda não vi, mas os anjos estão, 
Na glória. 
E ruas cobertas de ouro serão, 
Na glória. 

Um dia, feliz para o céu seguirei, 
P’ra.glória, 
Com Cristo a reinar, eu depois voltarei, 
Em glória. 

Amigos espero no céu encontrar, 
Na glória. 
E juntos havemos de sempre ficar, 
Na glória.`},
{id:"h198",num:198,title:"Jesus o Bom Amigo",category:"harpa",author:"J.H.N Justus H. Nelson",lyrics:`Achei um bom amigo, 
Jesus, o Salvador, 
O escolhido dos milhares para mim; 
Dos vales é o lírio; é o forte Mediador, 
Que me purifica e guarde para Si, 
Consolador amado, meu protetor do mal, 
Solicitude minha toma a Si. 

Coro:
Dos vales é o lírio, a estrela da manhã, 
O escolhido dos milhares para mim. 
Consolador amado, meu protetor do mal, 
Solicitude minha toma a Si, 
Dos vales é o lírio, a estrela da manhã, 
O escolhido dos milhares para mim.

Levou-me as dores todas, 
As mágoas lhe entreguei; 
Minha fortaleza é, na tentação. 
Deixei, por Ele tudo; os ídolos queimei; 
Ele me conserva santo o coração, 
Que o mundo me abandona; persiga o tentador; 
Jesus me guarda até da vida o fim. 

Não desampara nunca, 
Nem me abandonará, 
Se fiel e obediente eu viver; 
Um muro é de fogo, que me protegerá, 
Té que venha a mim o tempo de morrer, 
Ao céu então voando, Sua glória eu verei 
Onde a dor e a morte nunca vêm.`},
{id:"h199",num:199,title:"A Ceia do Senhor",category:"harpa",author:"Emílio Conde",lyrics:`Senhor, reunidos aqui 
A fim da Tua morte lembrar; 
Partindo este pão nos lembramos de Ti, 
Até que nos venhas buscar. 

O cálice que vamos beber, 
É símbolo do sangue Teu, 
Do qual nunca devemos nos esquecer; 
Por ele nós temos o céu. 

Faz-nos sempre dignos, Senhor, 
Da Tua divinal comunhão; 
Do Teu corpo e sangue purificador 
Que nos dá veraz salvação.`},
{id:"h200",num:200,title:"O Bondoso Amigo",category:"harpa",author:"R.H.M R.H. Moreton",lyrics:`Quão, bondoso amigo é Cristo!
Carregou co’a nossa dor,
E nos manda que levemos
Os cuidados ao Senhor.
Falta ao coração dorido
Gozo, paz, consolação?
Isso é porque não levamos
Tudo a Deus em oração. 

Tu estás fraco e carregado
De cuidados e temor?
A Jesus, refúgio eterno,
Vai com fé teu mal expor!
Teus amigos te desprezam?
Conta-Lhe isso em oração,
E com Seu amor tão terno,
Paz terás no coração. 

Cristo é verdadeiro amigo, 
Disto provas nos mostrou, 
Quando pra levar consigo 
O culpado encarnou. 
Derramou Seu sangue puro 
Nossa mancha pra lavar; 
Gozo em vida e no futuro 
NEI’ podemos alcançar.`},
{id:"h201",num:201,title:"A Decisão",category:"harpa",author:"K Kalley",lyrics:`Oh! Dia alegre! Eu abracei
Jesus, e nEle salvação!
O gozo deste coração
Eu mais e mais publicarei. 

Coro:
Dia feliz! Dia feliz! 
Quando em Jesus me satisfiz! 
Jesus me ensina a vigiar. 
E confiante nEle, orar, 
Dia feliz! Dia feliz! 
Quando em Jesus me satisfiz!

Completa a grande transação, 
Jesus é meu, eu do Senhor! 
Chamou-me a voz do Seu amor; 
Cedi à imensa atração. 

Descansa, ó alma! O Salvador 
E teu sustento, o pão dos céus; 
E quem possui o eterno Deus, 
Resiste a todo o tentador. 

Meu sacro voto, excelso Deus, 
De dia em dia afirmarei! 
E além da morte exultarei, 
Teu filho e súdito dos céus.`},
{id:"h202",num:202,title:"Lugar de Delícias",category:"harpa",author:"L.V.F Luiz V. Ferreira",lyrics:`Junto ao trono de Deus preparado 
Há, cristão, um lugar para ti; 
Há perfumes, há gozo exaltado. 
Há delicias profusas ali; 
Sim, ali; sim, ali, 
De Seus anjos fiéis rodeado, 
Numa esfera de glória e de luz, 
Junto a Deus nos espera Jesus. 

Os encantos da terra não podem 
Dar idéia do gozo dali; 
Se na terra os prazeres acodem, 
São prazeres que acabam-se aqui; 
Mas ali, mal ali 
As venturas eternas concorrem 
Co'a existência perpétua da luz, 
A tornar-nos felizes com Jesus. 

Conservemos em nossa lembrança, 
As riquezas do lindo país, 
E guardemos conosco a esperança, 
De uma vida melhor, mais feliz; 
Pois dali, pois dali 
Uma voz verdadeira não cansa 
De oferecer-nos do reino da luz, 
O amor protetor de Jesus. 

Se quisermos gozar da ventura 
Que no belo país haverá, 
É somente pedir da alma pura, 
Que de graça Jesus nos dará. 
Pois dali, pois dali 
Todo cheio de amor, da ternura, 
Desse amor que mostrou-nos na cruz, 
Nos escuta, nos ouve Jesus.`},
{id:"h203",num:203,title:"Deixai as Ilusões",category:"harpa",author:"H.E.N Hedwig Elisabeth Nordlund",lyrics:`O mundo de ilusão deixei, 
A senda de pecado e dor, 
Pra ir ao meu glorioso lar; 
Ali há gozo, paz e amor. 

Coro:
No mundo não está meu lar, 
Aqui não posso descansar; 
Mas quero sempre avançar: 
No céu em breve hei de entrar.

Alguns procuram m'impedir, 
Na senda gloriosa andar, 
Mas quero sempre avançar, 
Até no lar poder entrar. 

Amigo que no mundo estás, 
Não queres me acompanhar, 
À terra do eterno amor? 
Jesus deseja te livrar.`},
{id:"h204",num:204,title:"O Peregrino da Terra",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Sou peregrino na terra 
E longe estou do meu lar, 
Mlnh'alma anelante espera 
Que Cristo a venha buscar; 
Aqui só há descrença, 
As lutas não têm fim, 
Mas de Jesus, a presença, 
Glória será para mim! 

Coro:
No céu de luz vou descansar, 
Com meu Jesus hei de morar.

Em Cristo tendo já crido, 
Só pela fé viverei, 
Pois Deus me tem prometido, 
Que no céu descansarei! 
Eu tenho permanente 
O bom Consolador, 
Guiando-me brandamente 
À fonte viva de amor. 

Embora às vezes o crente 
As dores sofra da cruz, 
Gozo terá permanente, 
Quando no céu vir Jesus 
De glória coroado 
No trono divina!, 
Por anjos sempre louvado, 
Num coro celestial.`},
{id:"h205",num:205,title:"Graça, Graça",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`A graça de Deus revelada
Em Cristo Jesus, meu Senhor,
Ao mundo perdido é dada
Por Deus d’infinito favor.

Coro:
Graça, graça,
A mim basta a graça de Deus: Jesus;
Graça, graça,
A graça eu achei em Jesus.

A graça de Deus é mais doce,
Do que bens terrestres daqui;
Em gozo meu choro tornou-se
Correndo Sua graça pra mim.

Mais alta que nuvens celestes,
Mais funda que profundo mar,
A fonte da vida fizeste,
Na qual nos podemos fartar.

A graça de Deus hoje prova
Tu que vives na perdição,
Pois Ele te salva, renova,
Também limpa teu coração.`},
{id:"h206",num:206,title:"O Clarim nos Alerta",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O clarim já nos alerta, 
Nosso coração desperta, 
Pois a vinda é bem certa de Jesus; 
De mil anjos rodeado, 
Para o crente preparado, 
Cristo volta coroado. Aleluia! 

Coro:
Ó irmão por Deus liberto, 
Pelo sangue estás coberto; 
Tens o teu perdão bem certo, salvo estás; 
Voz de júbilo ouviremos 
E no céu nós cantaremos, 
Cristo breve nós veremos. Aleluia!

Lá nas bodas do Cordeiro, 
Sentaremos prazenteiros; 
Oh! Que gozo verdadeiro com Jesus! 
Pois no céu não há mais pranto, 
Eis que tudo será canto; 
Cristo vem buscar os santos.Aleluia! 

Sim à mesa sentaremos, 
E com Cristo cearemos; 
Quão felizes nós seremos com Jesus! 
Para sempre gozaremos, 
E com Cristo reinaremos, 
Sua glória fruiremos. Aleluia!`},
{id:"h207",num:207,title:"Jerusalém Divina",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jerusalém divina 
Visão de paz ditosa, 
De Cristo, santa esposa, 
Radiante de esplendor; 
Tens fontes cristalinas, 
São vivos teus altares 
E os anjos, aos milhares, 
Te cingem ao redor. 

Mansão do Rei bendito, 
São doze tuas portas 
Que sempre são transpostas 
Por seres imortais; 
Teus livros têm escritos 
Os nomes dos remidos; 
Em ti, serão ouvidos 
Os hinos celestiais.

Teus Santos moradores, 
Um glorioso canto 
Proferem ao Deus santo 
Que já lhes perdoou; 
Entoam mil louvores 
A Cristo, qual cordeiro, 
Que manso, num madeiro 
Por eles se imolou! 

Ao mesmo Cristo amemos, 
Ao mesmo Deus temamos, 
Nós que por fé andamos, 
Levando a Sua cruz; 
E prontos fruiremos, 
Os teus umbrais passados, 
Mil gozos preparados, 
Na glória, com Jesus!`},
{id:"h208",num:208,title:"Vem a Cristo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Hoje queres te entregar p'ra Jesus Cristo, 
Ó cansado e triste pecador? 
Para aquele, que, no Gólgota. foi visto 
Padecendo nossa culpa, nossa dor? 

Coro:
Vem a Cristo, vem a Cristo,
Que te chama com amor celestial;
Vem a Cristo, vem a Cristo,
Pois Jesus é o rochedo divinal.

Hoje queres obter a liberdade, 
Que se encontra no Senhor Jesus 
Receber no coração a santidade, 
Pelo sangue derramado lá na cruz? 

Hoje queres desfrutar a paz divina, 
Que no mundo não se pode achar? 
Vem a Cristo, que te salva, que te ensina, 
Onde podes esta paz do céu gozar! 

Hoje queres renunciar o bem terreno 
Crendo em Cristo, o grande Salvador? 
Queres vir após o meigo Nazareno, 
Vê-Lo um dia lá no céu de resplendor?`},
{id:"h209",num:209,title:"A Voz do Bom Pastor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Escuta a voz do bom Pastor
Em esplendorosa solidão,
Chama ao cordeiro que em temor
Vaga na densa escuridão. 

Coro:
Hoje vem a Jesus,
Ao bondoso Salvador,
Receber Sua luz.
Vem a Cristo, o bom Pastor.

Quem ajudar quer a Jesus,
Os pecadores procurar,
Vá espalhar a Sua luz,
O Evangelho proclamar. 

Triste deserto o mundo é,
Cercado de perigos mil;
Vem, chama Cristo, vem com fé,
Vem para dentro do redil. 

Escuta hoje, o bom Pastor, 
Vem no aprisco te abrigar, 
Foge do lobo enganador, 
Pois ele quer te devorar.`},
{id:"h210",num:210,title:"Fala, fala, Senhor",category:"harpa",author:"Emílio Conde",lyrics:`Fala, fala, Senhor, nesta hora, 
Que ansioso te quero ouvir; 
Teu falar dá valor e restaura, 
E mais sábio me faz no porvir. 

Coro:
Oh! Bendito o Teu nome em eterno, 
Que Tu falas a quem escutar, 
De saúde e repouso superno, 
De alegria e paz eternal.

Fala, fala, Senhor, que conservo 
Tuas palavras de vida e vigor; 
Estou pronto a seguir-Te com zelo, 
Pelas Tuas veredas de amor. 

Fala, fala, Senhor, que eu ouço 
Tuas palavras com todo fervor, 
Pois conduzem ao eterno repouso, 
São conselhos mui ricos de amor.`},
{id:"h211",num:211,title:"Vem a Deus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem, enquanto Deus te chama 
E tu sentes Seu amor, 
Pois do céu poder derrama 
Pra salvar o pecador! 

Coro:
Vem a Deus, a Jesus,
entregar teu coração;
E terás Sua luz...
A perfeita salvação!

Se da vida tens o fardo 
E tu’alma triste está, 
Crê em Deus, não sejas tardo, 
Que Jesus te salvará! 

Neste mundo vais andando, 
Sem tranqüilidade e paz; 
- Volta a Deus, mas confiando, 
E feliz então serás. 

Vem a Cristo, que te espera, 
Não demores, pecador! 
Nos Seus braços Deus quisera 
Receber-te com amor!`},
{id:"h212",num:212,title:"Os Guerreiros Se Preparam",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Os guerreiros se preparam para a grande luta 
É Jesus, o Capitão, que avante os levará. 
A mílicia dos remidos marcha impoluta; 
Certa que vitória alcançará! 

Coro:
Eu quero estar com Cristo, 
Onde a luta se travar, 
No lance imprevisto 
Na frente m’encontrar. 
Até que O possa ver na glória, 
Se alegrando da vitória, 
Onde Deus vai me coroar!

Eis os batalhões de Cristo prosseguindo avante, 
Não os vês com que valor combatem contra o mal? 
Podes tu ficar dormindo, mesmo vacilante, 
Quando atacam outros a Belial? 

Dá-te pressa, não vaciles, hoje Deus te chama 
Para vires pelejar ao lado do Senhor; 
Entra na batalha onde mais o fogo inflama, 
E peleja contra o vil tentador! 

A peleja é tremenda, torna-se renhida, 
Mas são poucos os soldados para batalhar; 
Ó vem libertar as pobres almas oprimidas 
De quem furioso, as quer tragar!`},
{id:"h213",num:213,title:"Sobre a Terra Vou Andando",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Sobre a terra vou andando, 
Bem alegre para o céu, 
Satisfeito e salmodiando 
Ao bondoso Deus; 
Com ferozes inimigos 
Pelejando sempre estou, 
Mas conservo paz comigo, 
Pois amado sou. 

Meu Pastor é Pai celeste, 
Que me guia pra Sião 
Pelos vales e mui prestes, 
Com segura mão; 
Nos perigos da viagem, 
Nas angústias e na dor, 
Sua voz me diz: Coragem, 
Sou teu Salvador. 

Com Jesus eu trabalhando, 
Persevero em oração; 
Seu saber com fé buscando 
Pra tornar-me são. 
Que prazer incomparável 
Ser guiado por Jesus. 
Sim, por Cristo tão amável, 
Na perene luz. 

Ao chegar-se nessa pátria 
Todos prantos cessarão. 
Já o sol divino raia, 
Na feliz mansão. 
Males, lutas e agonias, 
Acabaram-se aqui; 
Cristo vem, oh! Que alegria 
Vamos ter ali!`},
{id:"h214",num:214,title:"Desejamos ir Lá",category:"harpa",author:"Emílio Conde",lyrics:`Nosso Redentor foi preparar 
Um lugar de repouso e esplendor; 
Brevemente chamará para a casa a descansar, 
Nós, os salvos, do mundo enganador. 

Coro:
Desejamos Ir lá, 
Desejamos Ir lá; 
Que alegria será, 
Quando nós nos encontrarmos lá.

Nesta terra tesouros não há, 
Que nos possam aqui segurar; 
Desejamos ir ao céu onde Cristo já está, 
Ao lugar onde iremos descansar. 

Neste lar com Jesus, o Senhor, 
Nós havemos de sempre reinar. 
Vamos nós ali cantar, novos hinos de louvor 
Ao Cordeiro que veio nos salvar.`},
{id:"h215",num:215,title:"Ver-nos-emos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Neste mundo a vera Igreja, 
Peregrina vai andar, 
Anelando que esteja 
No seu verdadeiro lar. 

Coro:
Ver-nos-emos, ver-nos-emos, 
Ver-nos-emos na terra divinal; 
Ver-nos-emos, ver-nos-emos, 
Ver-nos-emos junto ao rio sem igual.

Nada aqui é permanente, 
Tudo tem que terminar, 
Mas olhamos para a frente, 
Para o nosso eterno lar. 

Os remidos cá enterram 
Seus amados ao morrer, 
Mas um dia, sim, esperam 
Que no céu os hão de ver. 

Com Jesus, o Rei, nos ares, 
Breve havemos nós de estar, 
E com anjos, aos milhares, 
Sua glória contemplar.`},
{id:"h216",num:216,title:"Louvai a Deus",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Louvai a Deus, com júbilo, cantando,
E Seu amor ao mundo anunciai!
De Cristo. as glórias, juntos celebrando;
Do Salvador, a fama publicai.

Coro:
Os prodígios cantaremos
De Jesus, o Redentor;
Força, vida, bens daremos
P’ra falar do Seu amor!

Louvei a Deus. Senhor onipotente,
A quem devemos nossa salvação,
Que habita os céus, porém, aqui presente.
Seguros, guia os Seus por Sua mão!

Louvai a Deus e alegres, adorai-O;
Mil graças demos por Seu grande amor;
Com a celeste multidão louvai-O,
Deus, sempiterno e nosso Redentor.`},
{id:"h217",num:217,title:"Ouve Sua Voz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo com voz amorosa 
Chama-te pra Sua luz, 
Torna tua alma ditosa 
Se carregares a cruz. 

Coro:
Ouve Sua voz a chamar! 
Cristo te quer libertar; 
Fala com voz amorosa: 
“Paz hoje quero te dar”.

Por que voltar não procuras, 
Do mau caminho em que estás? 
No fim do qual amarguras, 
E eterna dor sofrerás.

Mui breve irás encontrar-te 
Perante a morte, que atroz 
Vai, sem piedade, levar-te 
Onde não ouças Sua voz! 

Ouve Sua voz amorosa 
Como persiste. a chamar; 
Com Sua mão poderosa 
Cristo te quer libertar.`},
{id:"h218",num:218,title:"Dá Teu Fardo a Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Só em Jesus, queres tu descansar? 
Dá teu fardo a Jesus. 
Paz e socorro não podes achar? 
Dá teu fardo a Jesus. 

Coro:
Dá teu fardo a Jesus,
As trevas fará em luz.
Em Cristo um abrigo, terás no perigo,
Ó, dá teu fardo a Jesus.

Paz redentora tu’alma terá, 
Dá teu fardo a Jesus. 
E de inquietudes te libertará. 
Dá teu fardo a Jesus. 

Das grandes lutas não queiras fugir, 
Dá teu fardo a Jesus. 
Se santo gozo não podes fruir, 
Dá teu fardo a Jesus. 

Males te assaltam aos mil, pecador? 
Dá teu fardo a Jesus. 
Vais já cansado de penas e de dor? 
Dá teu fardo a Jesus. 

Cristo virá dissipar teu temor, 
Dá teu fardo a Jesus. 
Pois, aos Seus santos, dá sempre vigor, 
Dá teu fardo a Jesus.`},
{id:"h219",num:219,title:"O Amor do Criador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Os raios do amor de Deus, 
Brilharam na minh’alma, 
E o fim eu vi dos dias meus, 
Também Um que me salva; 
Eu tenho já do céu a luz. 
Das trevas fui liberto, 
Agora Cristo me conduz 
Nas plagas do deserto! 

Coro:
O Teu amor, ó Criador, 
Se revelou ali na cruz. 
Quando expirou em meu lugar 
Quem me salvou: - o meu Jesus.

Ao meu Jesus darei louvor, 
Pois hoje compreendo, 
Que o amor do grande Redentor, 
Vai tudo me provendo; 
Já dantes desta criação 
Jesus me preparava 
A mais perfeita salvação; 
Oh! Quanto a mim amava! 

O dom precioso de Jesus, 
Oh! Deus, me revelaste! 
E Teu amor, celeste luz, 
Em mim Tu derramaste! 
Quem medirá o amor de Deus, 
Tão santo, insondável, 
O qual enche os mais altos céus; 
Amor inesgotável!`},
{id:"h220",num:220,title:"Ide Segar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Para os campos a segar, 
Eis o trigo a lourejar, 
Ide ceifar, ide segar; 
Todo dia trabalhai 
E só de Jesus falai; 
Ide ceifar, ide pregar! 

Coro:
Ide segar, ide ceifar! 
Sim, trabalhai, e proclamai! 
Eis que o amor do Salvador 
Vos impele ao Seu labor 
Sem demorar, ide segar.

Para o vale, monte ou mar, 
O Senhor vos quer mandar 
A proclamar, anunciar; 
Os perdidos procurar, 
Pois Jesus os quer salvar; 
Ide falar, e proclamar! 

Falaremos com fervor, 
Do poder do Salvador, 
Ao pecador, ao sofredor; 
Pronto chegará o fim, 
Soará do céu o clarim, 
Tereis, então, o galardão.`},
{id:"h221",num:221,title:"Opera em Mim",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Eis-me a Teus pés, Senhor, opera em mim! 
Espero mais vigor, opera em mim! 
Eu gozo vou fruir, se Tua lei cumprir: 
O dá-me Teu amor: opera em mim! 

Sedento, com ardor, opera em mim! 
Te peço mais amor, opera em mim! 
Tu só me podes dar a perfeição sem par, 
O bom Consolador: opera em mim! 

Ó meu Senhor Jesus, opera em mim! 
Por Tua santa luz, opera em mim! 
Revela-me o valor da morte do Senhor, 
Por mim, na dura cruz; opera em mim! 

Não tardes mais. Senhor, opera em mim! 
Escuta o meu clamor, opera em mim! 
No sangue de Jesus, vertido lá na cruz, 
Me guarda por favor, opera em mim!`},
{id:"h222",num:222,title:"Vem a Jesus, ó Perdido",category:"harpa",author:"Samuel Nyström",lyrics:`Vem a Jesus; ó perdido, 
Vem a Jesus como estás; 
O sangue na cruz vertido,. 
Dar-te-á graça e paz. 

Coro:
Vem a Jesus, sem demora; 
ó crê no Filho de Deus! 
Ele te salva agora, 
Quer te guiar para o céu.

Por que demoras ainda, 
Dar tua vida a Jesus? 
Eis quando tudo aqui finda, 
Qual há de ser tua luz?

O mundo quer enganar-te, 
Para a tua alma perder, 
Triste será a tua parte; 
Além t'espera o sofrer. 

As horas passam depressa, 
Nunca jamais as terás 
Quando a tua vida aqui cessa, 
Onde tua alma estará? 

Portas abertas aos libertos 
No céu de luz sempre estão; 
Eis que os anjos assertos 
A ver tua entrada estarão!`},
{id:"h223",num:223,title:"Na Minh’Alma Reina a Paz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em escuridão, sem Jesus, me vi,
Com mil penas e grande dor;
Mas Jesus chamou: "Vem, sim, vem a Mim,
Quero ser teu Salvador". 

Coro:
Na minh ‘alma reina paz; 
Desde que vim a Jesus; 
Tenho sempre paz 
E gozo mui veraz.
Pois avistei de Deus, a luz!

Pelas grandes ondas da perdição, 
Fui cercado no alto mar, 
Sem ter um piloto no furacão, 
Que pudesse me guiar. 

E se te encontrares a pelejar, 
Sem auxilio ter eficaz, 
Clama ao Salvador, clama sem tardar, 
Sua graça é mui veraz.`},
{id:"h224",num:224,title:"É o Tempo de Segar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`É o tempo de segar e tu sem vacilar, 
Declaraste sem temor: “Não posso trabalhar?” 
Vem, enquanto Cristo, o Mestre, está a te chamar: 
"Jovem, jovem, ó vem trabalhar!" 

Coro:
Vem e vê os campos brancos já estão 
Aguardando braços que os segarão; 
Jovem, desperta, faz-te pronto e alerta! 
Queiras logo responder: “Eis-me aqui, Senhor” 
Olha que a seara bem madura está; 
Que colheita gloriosa não será! 
Jovem, desperta. Faz-te pronto e alerta! 
Poucos dias são que restam para o segador!

As gavelas que recolhes: jóias de esplendor 
Brilharão na tua coroa, e darão fulgor; 
Busca logo essas jóias; Deus é premiador; 
Jovem. jovem, entra no labor! 

A manhã já vai passando, não mais voltará; 
Da colheita o tempo brevemente findará; 
E perante o teu Senhor vazio t’acharás; 
Jovem, jovem, obedece já!`},
{id:"h225",num:225,title:"Sê Valente",category:"harpa",author:"Almeida Sobrinho",lyrics:`Na batalha contra o mal, sê valente! 
Segue em marcha triunfal, sê valente! 
Olha o alvo que á Jesus, 
Que à vitória te conduz; 
Ó não deixes tua cruz, 
Sê valente! 

Coro:
Sê valente! Pelejando por Jesus, 
Sê valente! Nunca rejeitando a cruz! 
Firme sempre no amor, 
Com indômito valor, 
Cheio do Consolador, 
Sê valente!

Se o maligno t’enfrentar, sê valente! 
Lutarás sem recuar, sÊ valente! 
Seja aqui, ou onde for, 
Escudado no Senhor. 
Mostrarás o teu valor; 
Sê valente! 

Co'altruísmo, com poder,sê valente! 
Franco, sem o mal temer, sê valente! 
Aos caídos em redor. 
Manifesta-lhes o amor; 
E serás um vencedor; 
Sê valente! 

O Evangelho a proclamar, sê valente! 
No Brasil, em terra ou mar, sê valente! 
Tua vida enobrecer! 
Sempre com Jesus viver, 
E a ti também vencer; 
Sê valente!`},
{id:"h226",num:226,title:"Cristo, Teu Santo Amor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo, Teu Santo amor deste para mim 
Nada pra Ti, Senhor, negarei aqui; 
Me prostro em gratidão, 
Cumpro com prontidão, 
Me guia Tua mão, oh! me rendo a Ti. 

Perante o trono estou, pede Tu, por mim, 
Ao nosso Pai eu vou, só Jesus, por Ti; 
A cruz hei de levar, 
Teu nome proclamar, 
Um hino a Deus cantar, sim, Jesus, por Ti. 

Um coração de amor, quero, ó meu Jesus, 
Ao Teu igual, Senhor, espalhando a luz; 
A Ti eu vou servir, 
O tempo redimir, 
As almas conduzir, quero eu a Ti. 

Tudo que tenho ou sou, é por Teu favor; 
Alegre sempre vou, junto ali, Senhor; 
Teu rosto, sim, verei, 
Contigo eu estarei, 
E sempre viverei, ia no céu por Ti!`},
{id:"h227",num:227,title:"Deus Amou de Tal Maneira",category:"harpa",author:"Emílio Conde",lyrics:`Música

Instrumental 01

Instrumental 02

Deus amou de tal maneira 
Este mundo sofredor. 
Que à humanidade inteira, 
Deus Seu Filho para Salvador. 

Coro:
E agora nunca mais perece 
O que crê, mais vida eterna tem; 
Quem em Cristo permanece. 
Vai ser coroado além. 
O pecado na cruz foi vencido, 
Podes, pele fé, vencer também; 
De justiça, ó sê vestido, 
E receberás coroe além.

Prisioneiro do pecado, 
Vagas sem esperança ter; 
Mas Jesus foi enviado, 
Para liberdade te trazer. 

Tu que vives desviado 
Sem a paz de Deus gozar, 
Ouve a voz do Pai amado, 
Que te espera para te abraçar.`},
{id:"h228",num:228,title:"Este Mundo Não Compreende",category:"harpa",author:"Emílio Conde",lyrics:`Este mundo não compreende.
Quão alegre é o meu viver,
Mas a Cristo quem atende,
Do céu pode o gozo ter. 

Coro:
Mesmo quando em aflição,
Gozo a paz de Deus;
Cristo ao meu coração,
Gozo traz dos céus,
Se com Cristo aqui viver,
Tão glorioso é,
Maior glória hei de ter,
Se eu guardar sempre a fé.

O que me faz mui ditoso,
Oh, provém do amor de Deus!
Mas será maior meu gozo,
Quando for morar nos céus. 

Sinto meu ser transformado,
Pela graça do Senhor;
Cada dia mais chegado.
Eu à pátria, estou, de amor.`},
{id:"h229",num:229,title:"Jesus, ó Meigo Salvador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus, á meigo Salvador,
Do céu, à terra és vindo,
E nos Teus braços com dulçor,
Oh! vai-me conduzindo;
Assim eu vou seguindo
Na Tua luz perfeita,
Que sempre me deleita;
Tua Palavra, oh, Senhor! 

Que grande gozo foi pra mim,
Oh, quando me encontraste!
Do coração, abriu enfim
A porta e logo entraste;
Então Tu me levaste,
Por Tua luz perfeita,
Que sempre me deleita;
Tua Palavra, que amor, sim!

Tu me livraste, Salvador, 
De miserável sorte, 
Me guardarás por Teu amor, 
Fiel até à morte; 
Desejo que me exortes 
Por Tua luz perfeita, 
Que sempre me deleita; 
Tua Palavra, meu Senhor! 

Ó Salvador, e bom Jesus, 
Meus pés na rocha fundas; 
Pois Tua mão, a mim conduz, 
As águas mui profundas, 
Do trono oriundas, 
A Tua luz perfeita, 
Que sempre me deleita; 
Tua Palavra, ó Jesus!`},
{id:"h230",num:230,title:"Nós Vogamos Nesta Nau",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Nós vogamos, o mar vencemos, 
Nesta nau que nos conduz, 
Um naufrágio não tememos, 
Pois ao leme vai Jesus. 

Coro:
Vem amigo, pois te amamos, 
Sem tardar, que nós Já vamos; 
A tormenta não olhamos 
E rumamos para o céu. 
A tormenta não olhamos 
E rumamos para o céu.

Para nossa feliz morada, 
Eis a hora de partir; 
Hoje mesmo se faz chamada; 
“Quem com Cristo quer seguir?” 

Ao findar da travessia, 
No céu vamos ancorar; 
Com presteza, com alegria, 
Nós havemos de saltar. 

Ante nós, vemos a cidade, 
Cujo porto se abrirá. 
E Jesus cheio de bondade 
Aos chegados sorrirá.`},
{id:"h231",num:231,title:"Não Foi Com Ouro",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Nós, os salvos do Senhor, 
Caminhemos com valor; 
Ele guarda o coração, 
Cristo é a nossa salvação. 

Coro:
Não foi com ouro que nos comprou Jesus, 
Mas com Seu sangue vertido lá na cruz; 
Nós, que somos salvos, vamos sem temer, 
Sempre por Seu sangue o mal vencer.

Pela morte de Jesus, 
Recebemos vida e luz; 
Do abismo de horror, 
Não temos mais nenhum temor. 

Seguiremos o Senhor, 
Pois nos guia ao Criador; 
Nos concede paz real, 
Nos dá repouso eternal! 

Tu que não tens salvação, 
Abre já teu coração. 
Deixa Cristo te salvar, 
E para o céu te preparar.`},
{id:"h232",num:232,title:"Os Bem Aventurados",category:"harpa",author:"Almeida Sobrinho",lyrics:`Bem-aventurados são 
Os de limpo coração, 
Que não buscam as riquezas para si; 
A tranqüilidade e paz, 
Que desfrutam, oh, jamais, 
Poderão discriminadas ser por mim! 

Coro:
Oh, Cantemos aleluia! 
Jubilosos, com poder! 
Bem Alegres, com fervor, 
Demos a Jesus louvor, 
E mais gozo vamos dEle receber!

Grande dita e mui, favor 
Me concede meu Senhor, 
Pelo sangue que por mim verteu na cruz; 
Tornará também meu ser, 
Cheio de veraz prazer, 
Se viver e caminhar na Sua Luz! 

Ao Senhor obedecer, 
DEle mesmo me encher, 
Para mim isto é o verdadeiro céu; 
E por Seu imenso amor, 
Para o pobre pecador, 
Quero aqui, louvá-Lo, e além do véu! 

Quão perfeita, é minha paz! 
Não anelo nada mais, 
Quero sempre aqui fazer o Seu querer; 
Tenho o amado Salvador, 
E possuo Seu amor; 
Gozarei eternamente mui prazer!`},
{id:"h233",num:233,title:"A Ceia Do Senhor",category:"harpa",author:"J.Car Joel Carlson",lyrics:`Ó Jesus Cristo, aqui estamos
Unidos todos em um lugar,
Pra Tua morte nós relembrarmos,
Que Tu quiseste por nós provar. 

Alegra-nos, é Jesus amado,
Enchendo-nos do Consolador;
Ó grande graça Tu nos tens dado,
Pois somos salvos p'lo Teu amor. 

Que nós sejamos abençoados; 
Também o pão e o vinho aqui, 
P'lo Teu poder sejam consagrados 
P'ra nos alimentarmos de Ti. 

E quando todos nos reunirmos, 
Um dia, lá no Teu lar, nos céus, 
Nós aleluias, sim, cantaremos, 
Eterno hino ao nosso Deus.`},
{id:"h234",num:234,title:"O Gozo Dos Santos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O gozo dos santos é o amor de Jesus.
Grande é este amor que paz nos produz!
A fonte da vida, que nos dá vigor,
É o sangue de Cristo vertido em dor!

Coro:
Oh! Vê ali na cruz a graça de Jesus,
Amor potente, que gozo produz!

Ó vê, "eis o Homem" que padece ali,
Coberto de sangue, ferido por ti.
Estampa na face tão enorme dor
De ‘spinhos coroa possui meu Senhor!

Com cravos, furados tem os pés e as mãos;
Pregado no lenho, em grande aflição;
Aberto Seu lado co'a lança Cruel
Sai água e sangue do Emanuel!

Por Cristo Cumprida foi a obra de amor,
Morreu qual Cordeiro, por ti pecador;
Confiando agora na obra da Cruz,
A vida nós temos por Cristo Jesus.`},
{id:"h235",num:235,title:"Já Sei, Já Sei",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Comprado com sangue de Cristo, 
Alegre ao céu, sim eu vou; 
Liberto do vício maldito, 
Já sei que de Deus, filho sou. 

Coro:
Já sei, já sei, 
Comprado com sangue eu sou; 
Já sei, já sei, 
Com Cristo ao céu, sim eu vou.

Estou livre da lei severa, 
Pois Cristo me quis redimir, 
Enchendo minh’alma, deveras, 
Do gozo, que vem do porvir. 

Em Cristo Jesus sempre espero, 
E nunca O posso deixar; 
Calar Seus favores não quero, 
Vou sempre de Cristo falar! 

Eu sei que, um dia, a beleza 
Do grande Rei vou contemplar; 
Agora me dá fortaleza, 
E sempre me quer consolar! 

Eu sei que me espera a coroa, 
A qual, a Seus servos dará, 
Jesus, a divina pessoa, 
No céu onde Ele está!`},
{id:"h236",num:236,title:"Já Nos Lavou",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Sobre a cruz o bom Cordeiro, 
Dura morte já provou, 
Por nós todos no madeiro, 
Para Deus Pai nos comprou; 
Com Seu sangue tem lavado 
Nossa alma imortal, 
E também nos resgatado 
Do poder do mal. 

Coro:
Já nos lavou, Já nos lavou, 
Com Seu precioso sangue, Jesus, Salvador. 
Nos libertou, nos libertou, 
Com Seu precioso sangue do vil tentador.

Pelo sangue derramado 
Livre entrada se nos dá 
No lugar santificado 
Onde o Pai celeste está; 
Este sangue nos indica 
O infinito, imenso amor 
De Jesus, pois purifica 
Todo pecador! 

Fomos nós predestinados 
Para crermos em Jesus, 
Com Espírito selados, 
Para desfrutar na luz; 
Se vós hoje mesmo crerdes, 
Por Deus, feitos vós sereis, 
Para dons Lhe oferecerdes, 
Sacerdotes, reis.`},
{id:"h237",num:237,title:"O Gozo de Estar Preparado",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O Noivo estamos prontos pra encontrar,
Eis que do céu virá.
Com nossas luzes vamos esperar,
Jesus não tardará! 

Coro:
Oh! que gozo preparado está, 
Para os servos do Senhor Jesus; 
Breve Cristo do céu voltará 
Em gloriosa luz!

Coroa nós teremos lá no céu, 
Se Cristo em nós viver; 
Em breve Ele vem rompendo o véu, 
O mal vem desfazer! 

Lá em Sião nós vamos encontrar 
Com nosso Redentor; 
Na glória eterna vamos desfrutar 
Do divinal amor!`},
{id:"h238",num:238,title:"Ó Pecador Desalentado",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó pecador desalentado
Vem a Jesus, teu Salvador;
Por que viver atribulado?
Vem a Jesus, teu Salvador;
Eis o Cristo te chamando,
Pois quer te dar Seu grande amor,
Vem nos Seus braços te lançando
Vem a Jesus, o teu Salvador. 

Ó não rejeites a liberdade,
Vem a Jesus, teu Salvador;
Recebe hoje a santidade;
Vem a Jesus, teu Salvador;
Tudo aqui no mundo passa;
Tu morrerás, ó pecador,
Vem aceitar a vera graça,
Vem a Jesus, o teu Salvador. 

Se queres paz, também o gozo, 
Vem a Jesus, teu Salvador. 
Pois nEle tu terás repouso, 
Vem a Jesus, teu Salvador; 
Não terás senão tristeza, 
Cá neste mundo de horror, 
Mas em Jesus há fortaleza, 
Vem a Jesus, o teu Salvador. 

Hoje é o dia aprazível, 
Vem a Jesus, teu Salvador. 
Ó Seu amor é irresistível, 
Vem a Jesus, teu Salvador. 
Tuas horas vão passando, 
Ó não desprezes, pecador; 
A voz de Deus te convidando. 
Vem a Jesus, o teu Salvador.`},
{id:"h239",num:239,title:"Imploramos o Consolador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem á Senhor, e completa 
A obra Tua em mim: 
Torna a minha alma dileta, 
Enchendo-me de Ti. 

Coro:
Ó manda agora, 
O bom Consolador; 
Minh’alma Te implora, 
O meu amado Senhor!

Há tanto tempo Te espero. 
Ó caro Salvador, 
Mas hoje mesmo eu quero 
O bom Consolador. 

Tens me tirado pra fora 
Do mundo sedutor; 
Ó vem selar-me agora 
Glorioso Redentor. 

A Ti pertence a glória, 
Benigno Salvador; 
Sempre me dás a vitória, 
Por Teu imenso amor.`},
{id:"h240",num:240,title:"Oh Dia Alegre",category:"harpa",author:"Almeida Sobrinho",lyrics:`Cristo pode hoje vir, 
Oh dia alegre! Irei amigos ver; 
O mal terá o seu fim. 
Se Cristo do céu descer! 

Coro:
Oh dia alegre, da vinda de Jesus! 
Jesus vem buscar-me para os céus; 
Ele vem breve para os Seus; 
Oh dia alegre! Da vinda de Jesus!

Se hoje for pra meu lar, 
Oh dia alegre! Parece-me ouvir 
Os salvos cantando: “Vem!’ 
Quem dera pra o céu partir! 

Por que ansioso estar? 
Oh dia alegreI Há luz na margem além; 
Temporal nunca haverá; 
Do céu breve Cristo vem! 

Fiel a Jesus estou, 
Oh dia alegre! Livre estou pra dizer: 
"Cristo é tudo p’ra mim”; 
Do céu virá com poder!`},
{id:"h241",num:241,title:"Marchemos Sem Temor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`P'ra Sião marchamos sem algum temor, 
Por fé nos chamamos filhos do Senhor; 
Presto caminhamos, sem pra trás olhar, 
Com Jesus nós vamos, não podemos errar. 

Coro:
Marchemos sem temor, repletos de valor, 
Marchemos nas pisadas do bom Redentor; 
Depressa, sem tardar, até no céu entrar; 
Por Jesus podemos sempre triunfar.

P'ra Sião marchamos sem desanimar, 
A verdade, vamos todos proclamar; 
Presto caminhamos, carregando a cruz, 
Pois nós desejamos ver no céu a Jesus. 

P'ra Sião marchamos em celeste luz, 
Dirigidos vamos p'Io Senhor Jesus; 
Presto caminhamos, rasga-se o véu; 
Já daqui estamos, pela fé, vendo o céu.`},
{id:"h242",num:242,title:"Eu Confio Firmemente",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Música

Playback

Eu confio firmemente, 
Que no céu vou descansar 
Com Jesus alegremente, aleluia! 
Que prazer celeste sente 
A minh’alma em pensar, 
Na glória que no céu eu vou gozar! 

Coro:
Que eterna glória vou no céu gozar! 
Com Jesus, que do pecado me salvou; 
Santa paz e alegria lá no céu vou desfrutar; 
Eterna glória Cristo me comprou!

No céu vou ver o Cordeiro, 
Que por mim quis expirar, 
Pendurado no madeiro, aleluia! 
Que me fez também herdeiro 
Do que nunca vai murchar, 
Da glória que no céu eu vou gozar! 

De Jesus, o rosto santo, 
No céu hei de contemplar, 
Onde não há dor ou pranto, aleluia! 
Mas sim um sublime canto 
Que pra sempre vai soar 
Na glória, que no céu eu vou gozar! 

Quando for ao céu chegado 
E a glória alcançar 
Por ter Cristo ao meu lado, aleluia! 
No Seu trono assentado, 
A Jesus vou adorar; 
Eterna glória vou no céu gozar!`},
{id:"h243",num:243,title:"Ao Abrir o Culto",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Nós abrimos este culto
Em Teu nome, ó Jesus Cristo!
Ao pequeno e ao adulto,
Luz divina vem dar por isso;
Gozaremos em Tua face,
Ó Cordeiro ressuscitadol
Com doçura, sim, nos enlaces,
Pra ouvir o que nos for dado.

Ó nos manda Tua Palavra
Pelo Teu Espírito Santo,
Que no peito um fogo lavra,
Que enxuga também o pranto;
Nosso Pai, nós Te suplicamos
Nova vida pra Tua Igreja;
Ó não tardes, pois desejamos
Que pureza em nós Tu vejas.

Abençoa, ó Deus Santo,
Os Teus servos em todo o mundo;
Abençoa o nosso canto
E dá vida aos moribundos;
Abençoa aos cordeirinhos,
A família dos Teus amados,
Como ave, que no seu ninho.
Tem seus filhos bem abrigados.`},
{id:"h244",num:244,title:"Louvai a Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Louvai a Jesus, amoroso; 
Na cruz os pecados levou, 
Que nos enche de Santo gozo; 
Com sangue o céu nos ganhou.

Coro:
Ao meu Senhor, 
Que tenho no meu coração, 
Eu dou louvor, 
Pois Ele me deu salvação.

Louvai a Jesus poderoso, 
Que veio livrar da prisão 
Um povo cativo, medroso, 
Que não tinha consolação. 

Louvai a Jesus, vosso guia 
No mundo de tribulação; 
E não tem temor, quem confia 
Em Deus, mas real proteção. 

Louvai a Jesus, dai-Lhe glória, 
Pois Rei e Senhor Ele é; 
Na cruz nos ganhou a vitória; 
Vencei com Jesus pela fé.`},
{id:"h245",num:245,title:"Paz de Deus em Jesus Encontrei",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`A paz e gozo Jesus já me deu, 
Ele pra isso ao mundo baixou; 
Para salvar-me, Seu sangue verteu, 
Quando por mim na cruz expirou. 

Coro:
Paz de Deus em Jesus encontrei, 
Pois tenho gozo no coração; 
Honra e glória tributarei 
Ao que me trouxe a salvação.

A paz e gozo desfruto enfim, 
Por Jesus Cristo, o meu Redentor; 
Um amor santo, oh, tenho em mim, 
Que alcancei do Consolador! 

A paz e gozo tem meu coração, 
Vida celeste, repleta de amor; 
Cristo me deu a real salvação, 
Também o dom do Consolador.`},
{id:"h246",num:246,title:"O Descanso em Jesus",category:"harpa",author:"Frida Vingren",lyrics:`Tens descanso encontrado em Jesus Cristo? 
Permaneces pela graça que Ele deu? 
Tens tu paz com teu Salvador bendito? 
Plenitude do Espírito de Deus? 

Coro:
Tens descanso encontrado em Jesus Cristo? 
Permaneces pela graça que Ele deu? 
Plena paz, consolação, acharás na oração: 
Deus aí vitória aos santos concedeu.

Estarás bem seguro e corajoso, 
Quando a tentação chegar-se para ti? 
Tens a graça pra ser Vitorioso 
Nas terríveis provações da vida aqui. 

Só em Cristo encontrarás descanso, 
Que ninguém aqui, jamais irá tirar; 
Com Jesus tu hás de aprender ser manso, 
E Sua glória em ti o mundo há de mirar.`},
{id:"h247",num:247,title:"Deus Nos Guarde No Seu Amor",category:"harpa",author:"Emílio Conde",lyrics:`Deus nos guarde bem no Seu amor; 
Onde quer que nos achemos, 
O Seu nome louvaremos; 
Deus nos guarde bem no Seu amor! 

Coro:
Ao voltar Jesus vamos nós estar 
Livres de qualquer separação; 
U’a coroa, então vamos, sim, formar, 
Lá no céu, na eternal mansão.

Deus nos guarde em santificação 
Nas agruras da jornada, 
Que é mui breve terminada! 
Deus nos guarde em Santificação! 

Deus nos guarde e nos conceda paz, 
De que tanto carecemos; 
Ó, enquanto aqui vivemos, 
Deus nos guarde e nos conceda paz.`},
{id:"h248",num:248,title:"Hosana e Glória",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Já perto de Betfagé, o Mestre ordenou: 
“Ó ide à aldeia, que avistando estou, 
Trazei-Me um jumentinho, no qual ninguém montou 
Dizei aos que perguntem: "Jesus requisitou". 

Coro:
Hosana e glória davam ao Senhor Jesus, 
O Rei que vem trazendo amor, poder e luz; 
Também vem concedendo eficaz perdão; 
Por isso O louvam de todo o coração.

Trouxeram o jumentinho, no qual Jesus montou, 
Com ramos o caminho o povo enfeitou; 
A que de Sião é filha, á logo lhe dizei: 
Não temas mas exulta, aí vem o Rei. 

No monte das Oliveiras, ouviu-se um clamor: 
“Bendito o Rei que é vindo em nome do Senhor”; 
Jesus diz aos que o mandam calar a multidão: 
“Se estes se calarem, as pedras clamarão”.`},
{id:"h249",num:249,title:"Ó vem, Senhor, e Habita",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó vem, Senhor, e habita no meu coração; 
Dá-me a graça bendita por Tua compaixão. 

Coro:
Ó meu Deus vem dar-me 
O dom do Consolador; 
Vem hoje selar-me, 
Enchendo-me do Teu amor!

Dia de paz e de gozo eu vou desfrutar, 
Quando Jesus glorioso minh’alma batizar. 

Do Teu amor puro e santo sempre falarei; 
Mesmo com dor e com pranto a Cristo louvarei. 

Ó Deus, Te peço agora, ouve-me Senhor 
Batiza-me nesta hora, no Teu Consolador!`},
{id:"h250",num:250,title:"Noiva de Jesus, Apronta-te",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`A Cristo unida está a minh'alma, 
Pois nEle eu tenho meu vero sustento; 
Me enche de gozo do céu, e de calma; 
Também me ensina os seus mandamentos. 

Coro:
Ó Noiva de Jesus, apronta-te para ir 
Para o eterno e santo reinado; 
Que divinal amor irás lá, então, fruir 
Com Jesus Cristo, o teu amado!

Na santa Igreja, com sangue remida, 
Já é manifesta em mim Sua glória, 
Que por Sua graça me foi concedida, 
Na qual abrigado, terei a vitória. 

Assim eu desejo a Cristo unido, 
Seguir o caminho pra bela cidade, 
Pois nEle, dos males, sou bem protegido, 
Também rodeado de Vera bondade.`},
{id:"h251",num:251,title:"Ao Culto Não Faltar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao outro culto; não faltar,
Ó vinde todos p'ra louvar
O nome santo do Senhor,
Que nos dá vida e fervor.

Nós separamos em amor,
Levando a paz do Salvador,
Mas breve vinde, não falteis,
Os pecadores sim, trazei.

Se não pudermos reunir
Veremos santos no porvir,
No culto do Senhor Jesus
Que vai haver no Céu de luz.`},
{id:"h252",num:252,title:"Santo, Santo és Tu Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Santo, santo és Tu, Senhor,
Em Teu louvor eu vou cantar
Com esperança, ó Deus de amor;
Tu me queres consolar;
Eu te peço, ó meu Jesus,
Só Tu és meu Salvador,
Que me faças andar na luz;
Santo és, meu Redentor!

Coro:
Ao meu Jesus eu cantarei
Entrando na feliz Sião;
Oh! Santo, santo, proclamarei
Na minha eternal mansão,
Com os anjos e serafins,
Santo! Sempre vou cantar
Com Arcanjos e querubins;
A Jesus eu vou adorar.

Santo, santo, eu cantarei,
ao meu Jesus, que me salvou,
E só nEle confiarei,
Pois minh'alma resgatou;
Dá-me o pão do Céu p'ra comer.
O maná celestial,
P'ra Teu povo fortalecer,
Com o Teu poder vital.

Em Jesus, só, hei de buscar,
A Sua força divinal,
Que avante me vai levar,
Para o reino eternal;
Oh! quão doce é Teu pão,
Que nos dá real vigor
No deserto; consolação,
Que nos enche de fervor.`},
{id:"h253",num:253,title:"Avante, ó Crentes",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Avante, ó crentes, o mal desfazendo,
O inimigo com a luz combateremos;
A peleja pois, todos, não temendo,
A vitória por Jesus receberemos.

Coro:
Com a graça de Jesus nos firmaremos,
Com a graça de Jesus, combateremos,
Com a graça de Jesus nos venceremos,
Com a graça de Jesus vitória temos.

Avante, ó crentes, marchai sem tardança,
Jamais do bom Jesus nós nos afastaremos,
Porque nEle nós temos esperança
E vitória nós assim alcançaremos.

Avante, ó crentes, fiéis corajosos,
Vitória por Jesus, a nós é concedida;
No combate, ó sede valorosos,
Para alcançar o galardão da vida.

Avante, ó crentes, dum só pensamento;
"O vil pecado sempre nós combateremos".
Pois Jesus vem, não tarda um momento,
Crendo em Jesus, vitória nós já temos.`},
{id:"h254",num:254,title:"Mais Perto de Jesus",category:"harpa",author:"J.A.S J.A.S",lyrics:`Mais profundo no amor de Cristo
Eu desejo estar!
Mais humilde no meu ser, eu quero
Sempre aqui andar.

Coro:
Mais perto de Jesus,
Eu quero aqui viver;
Mais santo, meu Jesus,
Eu desejo sempre ser.

Mais profunda a Tua vontade,
Quero conhecer;
Té que minha vida, por inteiro,
Mostre o Teu ser.

Mais profundo, com dor, não importa,
Pois eu quero estar,
No Teu divinal amor firmado,
Para fruto dar.

Mais profundo, dia após dia,
Quero eu estar,
Té que o alvo, o Mestre, aqui, me faça,
Breve alcançar.`},
{id:"h255",num:255,title:"Meu Redentor",category:"harpa",author:"Frida Vingren",lyrics:`Na cruz morrendo meu redentor;
Minhas maldades todas levou;
Se O recebes, tens Seu amor,
Pois teus pecados, Jesus perdoou.

Coro:
Quando Deus, o Sangue vir,
Que Jesus já verteu,
Passará sem te ferir,
No Egito assim sucedeu.

Deus quer salvar ao vil malfeitor,
como promete, sempre fará
NEle confia, ó pecador,
E pela fé vida nova terás.

Breve se finda a tua luz,
E no juízo tu vais entrar;
Não te detenhas, vem a Jesus,
Que teus pecados deseja apagar.

Que maravilha, que grande amor!
Se hoje creres, salvo serás!
Cristo te chama, vem pecador,
E gozo eterno no Céu fruirás.`},
{id:"h256",num:256,title:"Abandona Este Mundo de Horror",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Abandona este mar,
Onde podes naufragar;
Abandona este mundo de horror,
A maré te levará,
O teu barco quebrará,
Ó aceita a Jesus, o Salvador!

Coro:
Abandona já duma vez,
Este proceloso mar.
Hoje sem tardar;
do castigo eternal,
E de morte tão falta,
Foge logo pecador com rapidez,

Eis faróis a clarear
E perigos a marcar;
Abandona este mundo de horror,
Já na barra mais além,
O teu barco se sustém,
Ó Aceite a Jesus, o Salvador!

Eis que vozes sem cessar,
Não se cansam de clamar;
Abandona este mundo de horror,
Ó amigo, ouve já,
Essa voz te salvará.
Ó aceite a Jesus, o Salvador!

Não escutas a Jesus,
Que te chama para luz?
Abandona este mundo de horror,
Se persistes em vagar,
Não te poderás salvar.
Ó Aceite a Jesus, o Salvador!`},
{id:"h257",num:257,title:"O Perdão Sem Igual",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Amoroso Salvador,
Sem igual é teu perdão;
Só Tu és meu redentor
E perfeita salvação.

Meu contrito coração
Te confessa seu pecar,
Pede ao Pai real perdão,
Pelo Teu amor sem par.

Te contemplo, sem cessar,
No teu trono desde aqui;
Oh quão grato é meditar,
Que intercedes Tu por mim.

A fonte és da compaixão,
Sempre a Ti darei louvor!
Faz-me bem ao coração,
Exaltar-Te, meu Senhor!`},
{id:"h258",num:258,title:"Na Rocha Eterna Firmado",category:"harpa",author:"J.A.S J.A.S",lyrics:`Uma Salvador meigo é Cristo Jesus,
Pois ele minh'alma salvou;
Também meus pecados tomou sobre si,
Na cruz quando me resgatou.

Coro:
Na rocha eterna firmado estou eu,
E tenho a salvação;
Me esconde Jesus Cristo no manto Seus,
Velando-me com Sua mão.
Velando-me com sua mão.

As bênçãos do Céu desfrutando eu estou,
Em Cristo, o Filho de Deus;
Alegre eu vivo e ando na luz,
Prossigo na senda do Céu.

As cargas que eu tive Jesus as tomou,
Agora liberto estou;
A graça me basta que Cristo me deu,
Assim para o céu presto eu vou.

Findando a lida etão O verei,
com anjos e santos no Céu;
E hinos de glória eu entoarei,
Aquele que por mim morreu.`},
{id:"h259",num:259,title:"Creio eu na Bíblia",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Música

Playback

Creio eu na Bíblia, o Livro do Senhor,
Pois de Jesus Cristo mostra o doce amor;
todos meus pecados apagados estão,
Paz e gozo tenho em meu coração.

Coro:
Creio eu na Bíblia, livro de meu Deus;
Para mim a Bíblia é o maná dos céus!
Mostra-me o caminho para o lar celestial;
Acho eu na bíblia, graça divinal!

Creio eu na Bíblia, ensina-me a cantar
Cantos de vitória, e de amor sem par;
Lindas melodias, eu cantando vou,
Porque redimido pelo Sangue estou!

Só a santa Bíblia a santidade dá,
Este dom de Cristo, prometido já;
Todos os que buscam plena salvação,
Estas bênçãos, só em Cristo, acharão.

Lemos hoje a bíblia p'ra todo pecador,
Para que encontre Cristo, o Salvador;
Sendo sua vida, livre de pecar,
O divino Livro, ele vai honrar!`},
{id:"h260",num:260,title:"Avante com o Nosso Capitão",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Irmãos avante, avante com nosso Capitão,
Seremos triunfantes, não lutareis em vão!
Vitória esperamos, vitória Deus dará,
Se firmes pelejarmos, sim, contra Goliá.

Coro:
Avante, avante, as trevas dissipai
com o supremo Capitão, avante! Vitória alcançai!

Lugares deleitosos, a sorte nos tocou;
De jugos tão penosos Jesus nos libertou;
Herança foi-nos dada, herança de valor;
No Céu é conservada por Deus, meu Salvador.

Com nosso Comandante, avante, pelejai;
Alegres, exultantes, por Cristo avançai,
Já temos a Espada, não temos que temer,
A Bíblia Sagrada p'ra todo mal vencer`},
{id:"h261",num:261,title:"Alma Triste, Abatida",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Alma triste, abatida, 
Que tens medo de morrer; 
Por um triz, atua vida, 
Pode hoje perecer; 
Vê nos mares e nas dores, 
Um farol jorrando luz, 
Que te enche de louvores: 
É Jesus, sim, é Jesus! 

Tu que andas vacilante 
E que o mundo seduziu, 
Vem e segue, confiante, 
Quem na cruz já te remiu, 
Pois a graça não é finda 
De quem expirou na cruz; 
Olha, com amor, ainda, 
Pra Jesus, sim, pra Jesus!

Lá na cruz Jesus morrendo, 
Teus pecados expiou; 
Santo Espírito concedendo, 
A Sua Igreja adornou, 
Todo o mal e sofrimento, 
Já pregados estão na cruz, 
Oh, sublime livramento, 
De Jesus, sim, de Jesus! 

A Teus pés, Jesus bondoso, 
Acho paz, consolação! 
Enches-me de santo gozo 
E de imensa gratidão; 
Quero eu constantemente 
Receber a pura luz, 
Que dimana fortemente 
De Jesus, sim, de Jesus!`},
{id:"h262",num:262,title:"Senhor, Estás Comigo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Senhor, estás comigo em todo tempo, 
Fazendo-me feliz no sofrimento, 
O dá-me cada dia o Teu sustento 
E graça p’ra cumprir Teu mandamento. 

Coro:
Sim, estás comigo em todo tempo, 
Tu es o meu maná, meu alimento; 
Jesus, estás comigo em todo tempo, 
O dá-me Tua vida; Teu Sustento.

Contigo, ó Senhor, vou caminhando, 
O Evangelho santo proclamando: 
A face do Senhor Jesus buscando, 
E sempre do pecado me guardando. 

Por Deus estamos nós santificados 
Em Ti, Jesus, que nos tens resgatado 
Do mundo e de todo o vil pecado, 
Também o nosso ser vivificado.`},
{id:"h263",num:263,title:"Ao Fim do Culto",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O culto tendo já terminado, 
Te suplicamos, ó Salvador, 
Se em qualquer coisa foi perturbado, 
Que nos perdoes, por Teu amor. 

Gravar Tu queiras a sã doutrina, 
Por Teu Espírito Consolador, 
Que nos sustenta, que nos ensina, 
E que nos enche do Teu amor. 

Se nós aqui não mais regressarmos, 
Certeza temos de ver na luz 
Os santos juntos e contemplarmos 
No céu, um dia, o bom Jesus!`},
{id:"h264",num:264,title:"Ó Pai Celeste",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Pai celeste no nome santo 
Do Teu amado Filho Jesus, 
Grato Te sela o nosso canto, 
Que reverente Tua grei produz; 
Ó Deus, preside Teu povo unido, 
Com Tua graça e com Teu poder, 
No Santo Espírito já recebido, 
Nós desejamos aqui viver. 

Rocha divina, nossa firmeza, 
Dá-nos a graça, dá-nos poder; 
És dos Teus servos a fortaleza, 
Onde, abrigados, não têm pavor; 
Chuvas de bênçãos sempre derrama 
Em abundância dos altos céus; 
A nossa alma, qual cervo brama 
Em grande seca por Ti, bom Deus! 

Rebanho santo, por Deus selado, 
Duma só mente, dum coração, 
E que assim seja realizado, 
Ver, esperamos, com prontidão; 
Ó nos defende com o Teu braço, 
Do inimigo, do tentador; 
Sempre dirige os nossos passos, 
As vivas fontes que dão vigor! 

Manda, Senhor, a Tua mensagem 
Pela divina e sacra unção, 
Qual o maná, que trouxe, em viagem, 
Para Teu povo, a consolação; 
Tua Palavra, água da vida, 
Do nosso cálice, faz transbordar, 
Cheia de graça, bem dirigida, 
Para os sedentos poder saciar.`},
{id:"h265",num:265,title:"Doce é Crer em Cristo",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Oh! quão doce é crer em Cristo. 
E entregar-se a Jesus, 
Esperar em Suas promessas 
E andar na Sua luz! 

Coro:
Jesus Cristo, Jesus Cristo, 
Teu amor me deste a mim! 
Jesus Cristo, Jesus Cristo, 
Sempre quero crer em Ti.

E mui doce crer em Cristo, 
E cumprir o Seu querer, 
Não descrendo em Sua Palavra, 
Que é luz pra nosso ser.

E mui grato crer em Cristo; 
Quando busca o coração 
Os tesouros infinitos 
De amor, paz e perdão. 

Sempre em Ti confiar eu quero, 
Meu precioso Salvador; 
Na bonança e na luta, 
Me proteja aTeu amor.`},
{id:"h266",num:266,title:"Resgatados Fomos",category:"harpa",author:"Anônimo",lyrics:`Nós resgatados fomos, 
Por quem nos quis salvar; 
Em Cristo livres somos, 
Pra nunca mais pecar! 
Em Cristo livres somos, 
Pra nunca mais pecar! 

Coro:
Resgatados fomos, 
Resgatados fomos, 
Resgatados fomos, 
P’ra nunca mais pecar!

Nós fomos já eleitos, 
O céu, p’ra desfrutar; 
Também por Deus aceitos 
P’ra nunca mais pecar! 
Também por Deus aceitos 
Pra nunca mais pecar!

A imortalidade 
Havemos de gozar, 
Pois temos liberdade 
Pra nunca mais pecar! 
Pois temos liberdade 
Pra nunca mais pecar! 

No meio dos remidos 
A Cristo vou louvar, 
Por tê-Lo recebido 
Pra nunca mais pecar! 
Por tê-Lo recebido 
Pra nunca mais pecar!`},
{id:"h267",num:267,title:"Jesus Minha Força",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vai chegando mais perto e causando terror, 
A predita enchente de pecados e dor; 
Mas eu sei que potente é a mão do Senhor, 
Por isso, tranquilo, não tenho temor. 

Coro:
É Jesus minha força, meu amado Senhor, 
Se Ele é o guarda, não tenho temor; 
Eu desejo encher-me do Seu grande amor, 
Vivendo na graça do meu Salvador.

Mais chegado a Cristo eu desejo ficar; 
Mais alegre e contente quero sempre andar, 
Nos Seus passos seguindo para nunca errar, 
Até que um dia eu vá descansar.`},
{id:"h268",num:268,title:"Confiante em Deus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Sê tu, em Deus confiante;
Ora muito a Jesus,
E alegre, triunfante,
Leva sempre tua cruz.
No Senhor tem esperança;
Pois te guia Sua mão;
Vem a Ele, sem tardança,
E terás consolação. 

Coro:
Glória, glória. Aleluia, aleluia a Jesus! 
Aleluia! Glória a Jesus! 
Glória, glória. Aleluia, aleluia a Jesus! 
Aleluia ao Redentor! Amém.

Se aqui és perseguido, 
Tens a glória do porvir; 
Se estás enfraquecido, 
Novas forças hão de vir; 
Mesmo que o sol se turve, 
Haja forte furacão, 
Sê fiel, não te perturbes, 
Crê em Deus, de coração.`},
{id:"h269",num:269,title:"Louvarei ao Meu Amado",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Louvarei ao meu amado; 
Sobre todos exaltado; 
Por Seu sangue fui comprado; 
Todo dEle sou. 

No Seu nome há melodia; 
Quão suave em harmonia! 
Enche as almas de alegria 
Esse som - Jesus! 

Digno é de confiança, 
Mui fiel e sem mudança; 
NEle está minha esperança; 
Bem seguro estou! 

Seu caminho vou seguindo, 
Sua força me cingindo, 
Na carreira prosseguindo, 
Té no céu entrar. 

Lá verei meu Rei glorioso, 
Coroado, majestoso, 
Mais que todos amoroso, 
Meu Senhor Jesus.`},
{id:"h270",num:270,title:"Louvando ao Nosso Salvador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Sinto prazer louvando 
Ao nosso Criador, 
E gozo celebrando 
Os feitos do Senhor; 
Saber que sou lavado 
No sangue de Jesus. 
Também que sou guiado, 
Pela divina luz! 

Coro:
Alegre irei avante, 
Unido ao Salvador; 
Cantando triunfante, 
Ao nosso Criador!

Em Cristo, tenho gozo, 
E paz, celeste luz; 
Na obra, eu repouso, 
Cumprida lá na cruz; 
De graça revestido, 
Nada me faltará; 
Cristo tem prometido, 
Que tudo suprirá! 

Alegre sigo avante, 
Na senda que conduz 
A porta fulgurante 
Da mansão de Jesus; 
Com Deus aqui eu ando, 
Ele me guiará, 
E por fim me tomando, 
Ao céu me levará!`},
{id:"h271",num:271,title:"Na Mansão do Salvador",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Lá na mansão do Salvador, 
Não há, jamais, tribulação; 
Nenhum pesar, nenhuma dor, 
Que me quebrante o coração. 

Coro:
Ali não há tristeza e dor, 
Nenhum pesar, nem aflição; 
Quando eu estiver morando lá 
Direi: Não há tribulação.

Pra mim é triste estar aqui, 
Mui longe, sim, do Salvador, 
Pois moram já com Ele ali, 
Os salvos pelo Seu amor. 

Perfeito amor encontrarei, 
Lá na mansão do meu Senhor, 
Completa paz, ai terei, 
Pois me dará o Salvador. 

Estando lá. eu gozarei 
De toda a bênção divinal; 
Também, com Cristo reinarei, 
Na Sua glória eternal.`},
{id:"h272",num:272,title:"Quando Jesus Aparecer",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quando Jesus aparecer,
Que festa para nós há de ser,
Ao céu de luz iremos ter,
P’ra desfrutar eterno prazer,
Quando ao Seu Pai nos apresentar,
Que alegria no céu haverá;
No trono Seu teremos lugar,
Em nossa fronte coroa porá. 

Marchai com Deus, sem vos deter, 
Em santidade e sem temer; 
Se nada mais podeis fazer - 
Por crer em Cristo - tendes poder, 
Se hoje crerdes... Deus vos dará; 
Se fé tiverdes, vós recebereis, 
Vida de paz no céu gozará 
Todo que crer em Jesus, nosso Rei. 

Iremos nós, no céu cear 
E Jesus Cristo nos servirá; 
A Sua grei que quis salvar, 
No céu, então, se reunirá. 
Qual forte sol, dará resplendor 
Ante Jesus, o Senhor eternal! 
Oh, que prazer, que sublime amor, 
Existirá no lar celestial!`},
{id:"h273",num:273,title:"Só a Ti Recorrerei",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quer nas trevas quer na luz, 
Só a Ti recorrerei, 
Só ali meu bom Jesus, 
E socorro acharei. 

Coro:
Só a Ti, meu Senhor, 
Só a Ti recorrerei; 
Só em Ti, Salvador, 
Um refúgio encontrarei!

Quando lutas, penas, dor, 
Neste mundo encontrar, 
Eu Te buscarei, Senhor, 
E virás me consolar!

Quando o grande tentador 
A minh'alma combater, 
Pela graça do Senhor, 
Todo o mal hei de vencer. 

Portes lutas eu terei, 
Neste mundo enganador, 
Mas socorro eu acharei, 
Em Ti, sempre, oh, Senhor!`},
{id:"h274",num:274,title:"Jesus é a Luz do Mundo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O mundo perdido em pecado se achou, 
Jesus é a luz do mundo; 
Mas nas densas trevas a glória brilhou, 
Jesus é a luz do mundo! 

Coro:
Vem para a luz, não queiras perder 
Perfeita paz, dum novo viver: 
Eu cego fui, mas Já posso ver, 
Jesus é a luz do mundo!

Nas trevas do mundo já temos Betel, 
Jesus é a luz do mundo, 
Irás pela luz se tu fores fiel, 
Jesus é a luz do mundo! 

Ó cegos e presos no vale de horror, 
Jesus é a luz do mundo, 
E manda chamar-vos a ver Seu fulgor, 
Jesus é a luz do mundo! 

Nem sol, nem luzeiros no mundo haverá 
Jesus é a luz do mundo, 
A luz do Seu rosto ali brilhará, 
Jesus é a luz do mundo!`},
{id:"h275",num:275,title:"Ó Acorda, Desperta!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó acorda, desperta dormente, 
Tu que jazes no sono da morte, 
E que tens uma tão triste sorte. 
Ó desperta por Cristo, o Senhor! 
Pois te chama o fiel Salvador, 
O Seu sangue na cruz já derramou, 
Teus pecados ali aniquilou, 
E respondes: "Não quero, Senhor?” 

O não sabes que teu próprio alento 
Vem de Deus, vem a cada momento? 
Queres tu despertar num tormento 
Que jamais poderá se findar? 
Cristo hoje te quer libertar, 
Ó desperta-te à voz do Salvador, 
Foge logo do abismo de horror, 
Que tu’alma procura tragar. 

Não te importas por teres agora, 
A tua alma em negra masmorra? 
Em Jesus hoje crê, busca-O e adora, 
Pois assim tu terás salvação; 
Crendo em Cristo no teu coração, 
Paz e gozo por Ele obterás; 
E também no céu tu habitarás, 
Se recebes agora o perdão.`},
{id:"h276",num:276,title:"Em Canaã Eu Entrarei",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em Canaã eu entrarei, no meu país ditoso,
E em Sião habitarei; que paz ali terei
Com meu Jesus! Que gozo! Pois me dará repouso,
Irei cantar, então, nos céus, um hino ao meu Deus!

Coro:
Oh! Glória a Jesus, a Jesus, a Jesus!
Oh! Glória a Jesus, ó meu poder e luz!
Os santos reunidos, no reino dos remidos,
Entoarão, enfim, nos céus,
um hino ao bom Deus!

Já muitas provas eu passei e lutas bem notórias;
Mas de andar não cansarei, até eu ver o Rei.
Jesus, que dá vitória, me levará em glória,
E entrarei no esplendor do reino do Senhor.

Mui breve Cristo voltará;
nas nuvens, vê-Lo-emos;
E o Seu povo levará, e festa haverá;
Ao céu nós subiremos, e lá encontraremos
O nosso caro e bom Jesus, verdade, vida e luz.`},
{id:"h277",num:277,title:"Salvo Estás? Limpo Estás?",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tens achado em Cristo plena salvação,
Pelo sangue vertido na cruz?
Toda mancha lava de teu coração,
Este sangue eficaz de Jesus. 

Coro:
Salvo estás, limpo estás, 
Pelo sangue de Cristo Jesus? 
Tens teu coração mais alvo que a luz, 
Foste limpo no sangue eficaz?

Vives sempre ao lado do teu Salvador, 
Pelo sangue que mana da cruz? 
Do pecado foste sempre vencedor, 
Como foi teu bendito Jesus? 

Terás roupa branca quando vier Jesus, 
Foste limpo na fonte de amor? 
Estás pronto pra seguir ao céu de luz, 
Pelo sangue purificador? 

Cristo hoje dá pureza e mui poder: 
Fita os olhos na cruz do Senhor, 
Dela, fonte sai que te enche de prazer, 
Que te farta de vida e vigor.`},
{id:"h278",num:278,title:"Levar a Cruz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vais levando só, e mui cansado, 
Tua cruz, tua cruz? 
Não sabendo que tens ao teu lado 
O auxilio do Senhor Jesus? 

Coro:
Se tenho cargas, que só não posso levar 
Eu peço auxílio ao meu bom Salvador! 
Se de cansado não posso mais caminhar, 
Eu clamo a meu Jesus, que vem me dar o Seu vigor.

Não te esqueças, que só, ao Calvário, 
Foi Jesus, foi Jesus, 
Onde derrotou o adversário, 
Quando por ti sucumbiu na cruz. 

Só em Cristo, o fiel amigo, 
Acharás, acharás, 
Escondido, neste bom abrigo, 
A paz de Deus, então fruirás.`},
{id:"h279",num:279,title:"Ali Quero ir, e Tu?",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus me falou dum formoso lugar; 
Ali quero ir, e tu? 
Aonde os salvos irão desfrutar; 
Ali quero ir; e tu? 
Pois Jesus as mansões nos foi preparar; 
Ali quero ir; e tu? 
Aonde a morte não pode chegar; 
Ali quero ir; e tu? 

Coro:
Ao céu quero Ir 
Ao céu quero Ir, 
Ao céu quero ir; e tu? 
Ao céu quero ir; 
Não queres tu ir? 
No céu quero ver Jesus!

As portas são jóias, o mar de cristal; 
Ali quero ir; e tu? 
É Cristo a luz do país celestial; 
Ali quero ir; e tu? 
Os que lá vão entrar, jamais morrerão; 
Ali quero ir; e tu? 
Aonde termina a tribulação. 
Ali quero ir; e tu? 

E quando navegue a nau de Sião, 
Ali quero ir; e tu? 
Ao dar-se à vela, pra essa mansão, 
Ali quero ir; e tu? 
Quando vão coroar a Cristo, também, 
Ali quero ir; e tu? 
E quando os coros disserem: "Amém". 
Ali quero ir; e tu?`},
{id:"h280",num:280,title:"Ó Jesus, Te Suplico",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Jesus, no Teu caminho,
Te suplico com fervor,
Tem-me mais a Ti vizinho
P'ra gozar do Teu amor. 

Ó Senhor, ó vem guardar-me 
Sob Tua proteção; 
Para o céu, ó vem guiar-me 
Pela Tua forte mão.

Dá-me Teu celeste gozo, 
E vitória sobre o mal; 
Dá-me a graça, Teu repouso, 
Tua paz celestial! 

Ó Senhor, vem consolar-me, 
No Teu divinal amor! 
Tua vida queiras dar-me, 
Meu amado Redentor!`},
{id:"h281",num:281,title:"Vem Sem Tardar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem a Cristo, sem tardar,
Não te queiras recusar,
Ó amigo, vem depressa a Jesus!
Vem das trevas para a luz,
Cristo quer te consolar,
Vem a Ele, ó perdido, sem tardar!

Coro:
Sem tardar, vem sem tardar;
Sem tardar, vem sem tardar.
O aceita a salvação,
No teu pobre coração,
Jesus Cristo te convida: “Sem tardar”.

Vem a Cristo, sem tardar,
Um tesouro te quer dar;
Ele quer te conceder real perdão;
Cristo vê teu coração,
Tua alma a soluçar;
Vem a Ele, á perdido, sem tardar!

Vem a Cristo, sem tardar,
Com Seus dons te quer fartar,
Com riquezas que jamais se perderão.
Vem, estende a tua mão,
Cristo quer te perdoar!
Vem a Ele, ó perdido, sem tardar!

Vem a Cristo sem tardar,
Tua tenda vem firmar
Sobre a rocha que do mal te guardará;
O receio larga já,
Vem pra Cristo te salvar;
Ele mesmo te avisa: “Sem tardar”!`},
{id:"h282",num:282,title:"Que Sangue Precioso",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Que sangue precioso 
Saiu do Salvador! 
Oh sangue glorioso, 
Que lava o pecador! 

Coro:
Sim, o sangue que Jesus 
Na cruz derramou; 
Sim, o sangue de Jesus, 
Meu coração lavou!

Irmãos, nos recordemos 
Que o sangue nos lavou 
Alegres, jubilemos 
Seu sangue nos comprou! 

Na glória está sentado, 
Jesus, meu Redentor! 
No trono coroado, 
O meu intercessor! 

Por que assim resistes 
Ao meigo Salvador? 
Aceita o Seu convite 
Pras bodas de amor.`},
{id:"h283",num:283,title:"O Pastor e as Ovelhas",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Ama o Pastor as ovelhas, 
Com um amor paternal, 
Ama o Pastor seu rebanho, 
Com um amor sem igual; 
Ama o Pastor inda outras, 
Que desgarradas estão, 
E comovido as procura, 
Por onde quer qu’elas vão. 

Coro:
Pelos desertos errantes, 
Vêem-se a sofrer penas mil, 
Ele ao achá-las, nos ombros 
Leva-as ditoso, ao redil.

Ama o Pastor seus cordeiros, 
Com inefável amor, 
Aos que, às vezes, perdidos, 
Gemendo se ouvem de dor. 
Vede o Pastor comovido 
Pelas colinas vagar, 
E os cordeiros nos ombros, 
Vede-O, levando ao lugar.

Ama as noventa e nove, 
Que no redil abrigou; 
Ama a que, desgarrada. 
No campo se desviou; 
"Ó minha ovelha perdida!" 
Clama o dolente Pastor; 
Quem irá em sua ajuda, 
Para salvá-la, Senhor? 

São delicados teus pastos, 
Mui quietas tuas águas são; 
Eis-nos aqui. ó bom Mestre, 
Dá-nos veraz direção, 
Faz-nos obreiros zelosos, 
Enche-nos de santo amor, 
Pelas ovelhas perdidas 
Do Teu redil, bom Senhor.`},
{id:"h284",num:284,title:"Bendito Cristo, Eis-me Aqui",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tal como sou, vou decidir, 
Que a outro eu não posso ir; 
Pois me convidas para vir, 
Bendito Cristo, eis-me aqui. 

Tal como sou, sem demorar, 
Do mal, querendo me livrar; 
Só podes Tu me perdoar: 
Bendito Cristo, eis-me aqui.

Tal como sou, em aflição, 
Exposto à morte, e perdição, 
Buscando vida e perdão, 
Bendito Cristo, eis-me aqui. 

Tal como sou, Teu grande amor 
Me vence, e busco Teu favor, 
Servir-Te quero com valor, 
Bendito Cristo, eis-me aqui.`},
{id:"h285",num:285,title:"Tu És o Meu Gozo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Senhor, pela fé me sustento
Na graça, nos Teus mandamentos,
Que operam a cada momento,
No meu coração, salvação! 

Coro:
Tu és o meu gozo,
Senhor, o meu manancial de amor;
Irei Te louvar para sempre nos céus,
Bem perto do trono de Deus!

A graça de Deus recebida,
Encheu-me de gozo, de vida,
E sempre a mim é concedida
Por nosso Senhor, Redentor! 

De bênçãos oh! vem me inundando,
O meu coração inflamando,
Também meus pecados queimando,
De todo meu ser, com poder.`},
{id:"h286",num:286,title:"Não Tarda Vir Jesus!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Jesus, nesta terra, 
Há só tristeza e dor; 
Os Ímpios fazem guerra 
Aos santos do Senhor. 

Coro:
Cristo volta 
Em fulgurante luz; 
O mar já se revolta, 
Não tarda vir Jesus!

Do mundo nós não somos, 
Mas do Senhor Jesus; 
Remidos todos fomos 
Com sangue, lá na cruz!

No mundo tenebroso 
Não vamos descansar, 
Mas para o céu, de gozo, 
Queremos já voar! 

Olhamos para cima 
Donde virá Jesus; 
Pois isto nos anima 
Para viver na luz.`},
{id:"h287",num:287,title:"Oh, Foi o Sangue",category:"harpa",author:"I.A.F Ingrid Anderson Franson",lyrics:`Oh, foi o sangue do Senhor 
Que me salvou, sim, me salvou; 
Sim, este sangue tem poder, 
De toda a mancha me lavou. 

Coro:
Jesus pra todos tem poder e salvação, 
Meu amigo, a Ele vem, aceitando a remissão; 
Glória ao Salvador! Glória ao meu Jesus! 
O Seu sangue me salvou!

Oh! maravilha de amor 
A mim mostrou, sim, me mostrou; 
Jesus sofreu tão grande dor. 
E tua vida resgatou. 

Em mim não há poder algum 
Mui débil 'stou, mereço dó. 
Mas por Jesus eu vencerei, 
Ainda que eu seja pó. 

Meu Pai me deu o Consolador, 
Pra me guiar, me iluminar, 
Jamais temerei o tentador, 
Jesus sempre há de me guardar.`},
{id:"h288",num:288,title:"A Palavra da Cruz",category:"harpa",author:"Samuel Nyström",lyrics:`Da cruz, a palavra é fiel, 
Aleluia! Aleluia! 
Chamando aquele que é infiel, 
Aleluia! Aleluia! 
Qualquer temporal pode vir, 
A mensagem mui firme ‘stá: 
Que Jesus veio nos remir, 
Pela morte sobre a cruz. 

Coro:
Aleluia! Aleluia! A palavra da cruz é poder. 
Aleluia! Aleluia! Para quem em Cristo crer. 
Aleluia! Aleluia! A palavra da cruz é poder. 
Aleluia! Aleluia! Para quem em Cristo crer.

Morrendo por nós lá na cruz, 
Aleluia! Aleluia! 
Vitória nos ganhou Jesus, 
Aleluia! Aleluia! 
Ali o Cordeiro de Deus 
Veio a graça do céu raiar! 
Nos salvou quem veio dos céus, 
Pela morte, sobre a cruz. 

Não me envergonho da cruz, 
Aleluia! Aleluia! 
Pois deu-me vida, deu-me luz, 
Aleluia! Aleluia! 
O caminho pra o céu se abriu, 
Para todo o vil pecador, 
Quando Cristo nos redimiu, 
Pela morte sobre a cruz.`},
{id:"h289",num:289,title:"Sob o Sangue Teu",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Asperge hoje meu coração,
Com sangue Teu, á Redentor!
Liberta-me da vil tentação,
Com sangue Teu, Senhor!

Coro:
Sob o sangue Teu, Senhor,
Guarda-me da corrupção!
Sob o sangue expiador,
Eu tenho proteção!

De todas dúvidas, do temor,
No sangue Teu, vem me lavar,
Dos males do grande tentador,
O queiras me livrar!

Refúgio acha o pecador,
No sangue Teu, ó meu Jesus;
Asperge-me sempre, ó Senhor,
No sangue, lá da cruz!

O vem me enchendo do Teu vigor,
Pelo manar do sangue Teu;
Fazendo-me mais que vencedor,
Pelo poder de Deus.

Concede-me a perfeita paz,
Por Tua cruz e sangue Teu;
Com ricos dons, ó me satisfaz,
E faz-me ver o céu.`},
{id:"h290",num:290,title:"Teu Espírito Vem Derramar",category:"harpa",author:"Samuel Nyström",lyrics:`Ó Senhor, nós esperamos
Que escutes a oração;
Nós, Teus servos, já clamamos,
Com humilde coração. 

Coro:
Teu Espírito, vem, derrama,
Sobre cada coração!
E no crente, que a Ti clama,
Vem, confirma a petição.

Deixa o fogo do Espírito,
Sim, nos corações arder,
P’ra que tudo que é finito,
Jamais possa se reter. 

Ó Senhor, me purifica,
Tira o mal que está em mim,
A minh’alma santifica,
E me guarda até o fim. 

Dá-nos mais da Tua graça,
E enche-nos do Teu poder,
Do Teu templo, ó Deus, se faça
A Tua voz se perceber. 

Dá-nos dons do Teu Espírito; 
Faz milagres, ó Senhor, 
Pra que tudo, que tens dito, 
Cumpra-se, meu Redentor. 

Coro:
Dou-te graças, Rei da glória, 
Pois ouviste a petição; 
Belos hinos de vitória, 
Mais Tu deste ao coração.`},
{id:"h291",num:291,title:"A Mensagem da Cruz",category:"harpa",author:"Antônio Almeida",lyrics:`Rude cruz se erigiu,
Dela o dia fugiu,
Como emblema de vergonha e dor;
Mas contemplo esta cruz.
Porque nela Jesus
Deu a vida por mim, pecador.

Coro:
Sim, eu amo a mensagem da cruz
Té morrer eu a vou proclamar;
Levarei eu também minha cruz
Té por uma coroa trocar.

Desde a glória dos céus,
O Cordeiro de Deus,
Ao Calvário humilhante baixou;
Essa cruz tem pra mim
Atrativos sem fim,
Porque nela Jesus me salvou.

Nesta cruz padeceu
E por mim já morreu,
Meu Jesus, para dar-me o perdão
E eu me alegro na cruz,
Dela vem graça e luz,
Para minha santificação.

Eu aqui com Jesus,
A vergonha da cruz
Quero sempre levar e sofrer;
Cristo vem me buscar,
E com Ele, no lar,
Uma parte da glória hei de ter.`},
{id:"h292",num:292,title:"Qual o Preço do Perdão",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Qual o preço do perdão? 
Só o sangue de Jesus Cristo. 
O que limpa o coração? 
Só o sangue de Jesus Cristo. 

Coro:
Qual o poder real 
Que limpa todo o mal, 
E dá paz divinal? 
Só o sangue de Jesus Cristo.

Fez resgate eficaz 
Só o sangue de Jesus Cristo. 
Deu-nos santidade e paz. 
Só o sangue de Jesus Cristo. 

Sempre pode me curar, 
Só o sangue de Jesus Cristo. 
E do mal me libertar. 
Só o sangue de Jesus Cristo. 

Lá no céu, eu vou cantar: 
Só o sangue de Jesus Cristo. 
Deu-me graça para entrar. 
Só o sangue de Jesus Cristo.`},
{id:"h293",num:293,title:"Jesus no Calvário",category:"harpa",author:"Samuel Nyström",lyrics:`Jesus no Calvário, por mim sofreu 
A morte da maldição; 
Minh’alma ganhou, com o sangue Seu 
O preço da redenção. 
Do alto da cruz, Jesus exclamou: 
“Consumado está”, ao espírito rendeu; 
O sangue verteu, a me expiou, 
Unindo-me ao povo Seu. 

Na cruz do Calvário, a cédula foi 
Cravada que Ele riscou. 
O véu se rasgou, a porta se abriu, 
Aberta p’ra Deus ficou. 
Sobre a cruz eu morri, com Cristo Jesus; 
O meu “ego” falaz sobre o lenho levou. 
A noite fugiu, e raiou a luz! 
Por Cristo eu salvo estou. 

Na cruz do Calvário, ao mundo morri; 
Aqui um estranho fiquei; 
Não vivo mais eu, com Cristo me uni; 
Que vida excelsa achei! 
O Cordeiro de Deus minh’alma nevou; 
O sangue pascoal a culpa tirou, 
O destruidor minh’alma passou, S.N.
Em Cristo liberto estou.`},
{id:"h294",num:294,title:"Eu Vou Com Jesus",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Mui triste em pecado, vagava sem luz,
Mas já vivo alegre, pois a Cristo achei,
Em todos os dias, eu canto a Jesus,
Eu sigo com Cristo, meu Mestre, meu Rei.

Coro:
Eu vou com Jesus; Aleluia!
Eu sigo com Cristo, o Rei;
Não vago Jamais, eu quero seguir
A Cristo Jesus, o meu Rei.

Por anos e anos, sem Cristo, a sós,
Eu nunca, no mundo feliz me achei;
Mas já com as aves elevo a voz,
E canto feliz, pois eu vou como Rei.

Ó alma que vivas no vala sem luz,
Se olhas pra cima, verás um farol;
Ó sobe depressa, vem já pra Jesus;
De Cristo, a luz brilha mais que o sol.`},
{id:"h295",num:295,title:"Novo Canto de Louvor",category:"harpa",author:"Eufrosine Kastberg",lyrics:`Novo canto de louvor,
Canta já meu coração;
Hino de paz a de amor,
Que me traz consolação. 

Coro:
Ouve quão doce e o louvor,
Ao Cordeiro divinal!
Jesus, canto inspirador,
Harmonia angelical

Canto hinos de louvor, 
Porque Cristo me salvou 
Deste mundo enganador; 
Sobre a rocha me firmou 
. 

Este canto novo é 
Cada noite que passar; 
Sombras dão lugar à fé, 
Se a Deus louvor cantar. 

Quando o coração vibrar, 
Os acordes lá do céu, 
E da rola a voz soar, 
No jardim do nosso Deus. 

Quando meu Jesus voltar, 
E levar-me com os Seus, 
Inda eu irei cantar, 
Este hino lá nos céus. 

Coro:
No céu, hino de louvor, 
Canta a grande multidão. 
Vinde às bodas de amor, 
Ao banquete do perdão.`},
{id:"h296",num:296,title:"No Jardim",category:"harpa",author:"Emílio Conde",lyrics:`No jardim. Jesus Cristo clamava, 
Quando os ímpios O foram prender; 
E falando co'o Pai suplicava, 
Pelo cálice que ia beber. 

Coro:
Com Jesus a min'alma deseja estar 
No jardim, em constante oração; 
Quando a noite chegar, e o mal me cercar, 
Quero estar em constante oração.

Qual orvalho que dá vida às flores, 
Assim é para o crente a oração; 
Meus cuidados, tristezas e dores, 
Cristo as sabe por minha oração. 

Jesus teve completa vitória, 
Porque sempre viveu em oração, 
Muitos santos chegaram à glória, 
Sob o manto da doce oração. 

Renovados em forças seremos, 
Nós teremos u'a nova unção; 
E com Deus, no jardim falaremos, 
Se vivermos sempre em oração.`},
{id:"h297",num:297,title:"Abundância de Cristo",category:"harpa",author:"Eufrosine Kastberg",lyrics:`Desde que Jesus deu-me Sua luz, 
Posso jubilar, cantar; 
Ao meu coração trouxe salvação 
Que eu não posso te explicar. 

Coro:
Abundantemente Cristo dá, 
Graça, que não há igual, não há; 
Aleluia, glória ao nome Seu! 
Que alegria Sinto eu!

Desde que na cruz contemplei Jesus, 
Meus pecados dissipou; 
Tenho grande paz e perdão veraz, 
Quando a Seus pés estou. 

Lá da cruz provém, um caudal também, 
Que ao cansado forças dá; 
E das chagas vem o perdão, pra quem 
Mui sedento e fraco está! 

Grato, então, darei glória a Cristo,o Rei, 
Pelo gozo que é sem par; 
Em continuação, o meu coração, 
Inda mais vai se alegrar.`},
{id:"h298",num:298,title:"Avante, Servos de Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Avante, servos de Jesus, por nosso Deus; 
Nas trevas brilhe vossa luz, a luz lá dos céus. 

Coro:
Glória a Deus, pois vencerei, 
Glória a Deus, pois vencerei, 
Triunfante sigo, levando a cruz! 
Glória a Deus, pois vencerei, 
Glória a Deus, pois vencerei, 
Em nome de Jesus!

Levanta ,Josué pendão. com mui valor; 
E o inimigo foge, então, com grande pavor. 

Sai com trezentos Gideão, a combater; 
Os midianitas logo vão a guerra perder. 

Golias mui soberbo está, zomba de Deus. 
Mas vem Davi, e nele dá, com ajuda do céu. 

Cerrai fileiras, ó fiéis, sempre avançai; 
No céu coroas e lauréis, Jesus vai nos dar.`},
{id:"h299",num:299,title:"Há um Canto Novo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Há um canto novo no meu ser, 
É a voz de meu Jesus, 
Que me chama: ‘Vem em mim obter 
A paz, que eu ganhei na cruz”. 

Coro:
Cristo, Cristo, Cristo, nome sem igual; 
Enches o contrito, de prazer celestial.

Preso no pecado eu me achei, 
Sem paz no meu coração; 
Mas em Cristo eu já encontrei 
Doce paz e proteção. 

Tenho Sua graça divinal, 
Sob as asas de amor, 
E riquezas que fluem em caudal, 
Lá do trono do Senhor. 

Pelas águas fundas me levou, 
Provas muitas encontrei; 
Mas Jesus bendito me guiou 
Por Seu sangue vencerei. 

Cristo, numa nuvem voltará, 
Baixará do céu em luz; 
Pelo Seu poder me levará, 
Pra Seu lar, o bom Jesus.`},
{id:"h300",num:300,title:"Nossa Esperança",category:"harpa",author:"Almeida Sobrinho",lyrics:`Jesus, sim, vem do céu, em glória Ele vem!
Ecoa a nova pelo mundo além;
Oh esperança que a Sua Igreja tem!
Dai glória a Deus, Jesus em breve vem!

Coro:
Nossa esperança é Sua vinda
O Rei dos reis vem nos buscar;
Nós aguardamos, Jesus, ainda,
Té a luz da manhã raiar.
Nossa esperança é Sua vinda
O Rei dos reis vem nos buscar;
Nós aguardamos, Jesus, ainda,
Té a luz da manhã raiar.

Jesus, sim, vem, os mortos esperando estão;
O gran momento da ressurreição
E do sepulcro em breve se levantarão!
Dai glória a Deus, Jesus em breve vem!

Jesus, sim, vem do céu cercado de esplendor,
Aniquilando a corrupção e a dor,
Quebrando os laços do astuto usurpador,
Dai glória a Deus, Jesus em breve vem!

Jesus, sim, vem, completamente restaurar
O mundo que se arruína sem parar;
Sim, todas as coisas vem depressa transformar
Dai glória a Deus, Jesus em breve vem!

Jesus, sim, vem, e sempiterna adoração
Daremos nós ao Rei de coração;
Ao grande autor da nossa eterna salvação,
Dai glória a Deus, Jesus em breve vem!`},
{id:"h301",num:301,title:"Vem Cear",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo já nos preparou 
Um manjar que nos comprou, 
E, agora, nos convida a cear: 
Com celestial maná 
Que de graça Deus te dá, 
Vem, faminto, tua alma saciar. 

Coro:
“Vem cear”, o Mestre chama - “vem cear”. 
Mesmo hoje tu te podes saciar; 
Poucos pães multiplicou, 
Água em vinho transformou, 
Vem, faminto, a Jesus, “vem cear”.

Eis discípulos a voltar, 
Sem os peixes apanhar, 
Mas Jesus os manda outra vez partir, 
Ao tornar à praia, então, 
Vêem no fogo peixe e pão, 
E Jesus, que os convida à ceia vir. 

Quem sedento se achar, 
Venha a Cristo sem tardar, 
Pois o vinho sem mistura Ele dá; 
E também da vida, o pão, 
Que nos traz consolação; 
Eis que tudo preparado já está. 

Breve Cristo vai descer, 
E a Noiva receber 
Seu lugar ao lado do Senhor Jesus; 
Quem a fome suportou. 
E a sede já passou, 
Lá no céu irá cear em santa luz.`},
{id:"h302",num:302,title:"Não Murmures; Canta",category:"harpa",author:"Eufrosine Kastberg",lyrics:`No mundo murmura-se tanto, 
Entre os que cristãos dizem ser; 
Em vez de Iouvores há pranto, 
Fraqueza em lugar de poder. 
Murmuram - assim no deserto, 
Em Mara, Israel murmurou; 
Oh! Não vêem que Deus está perto; 
Jamais Seu auxilio negou. 

Coro:
Em vez de murmurares, canta 
Um hino de louvor a Deus; 
Jesus quer te dar vida santa, 
Qual noiva levar-te p’ra os céus.

Tu vives, irmão, murmurando, 
Tal como um escravo do mal; 
Se Deus a tua fé stá provando, 
Tu não tens razão para tal. 
Deus castiga aquele a quem ama, 
De ti. também não se esqueceu; 
Qual pai amoroso te chama, 
E cuida, sim, do que é Seu. 

E mesmo se as ondas rugirem. 
No revolto e bravio mar, 
Os céus poderás ver se abrirem, 
Se um hino tua alma cantar, 
Não temas ciladas, nem morte, 
Pra cima tu deves olhar; 
O leme segura bem forte, 
Até do céu a luz raiar. 

Se um hino cantar tu puderes, 
Nas horas de grande aflição. 
Então voarás, se quiseres, 
Até a celeste mansão; 
Nas asas da águia levado. 
Bem perto do mar de cristal 
E por fim então libertado, 
A terra, chegar, celestial.`},
{id:"h303",num:303,title:"Precisamos de Jesus",category:"harpa",author:"Emílio Conde",lyrics:`Quando o sol brilhar em qualquer lugar, 
Tu precisas de Jesus; 
Quando escurecer, tudo fenecer. 
Tu precisas de Jesus! 

Coro:
Eu preciso de Jesus, 
Tu precisas de Jesus; 
Pecador, vem para a luz 
Que resplandeceu na cruz; 
Tu precisas de Jesus!

Pra obter perdão, plena salvação, 
Tu precisas de Jesus; 
Para caminhar firme, sem errar; 
Tu precisas de Jesus! 

Mesmo havendo paz, calma mui veraz, 
Tu precisas de Jesus; 
Na perseguição, na tribulação, 
Tu precisas de Jesus! 

Quando a morte entrar em teu próprio lar, 
Tu precisas de Jesus;. 
Ante o tribunal, decisão final, 
Tu precisas de Jesus!`},
{id:"h304",num:304,title:"A Face Adorada de Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Desprezando toda a dor eu vou a cantar,
E o Calvário, ao pecador, sempre apontar;
Flechas traspassaram-me, padeci gran dor;
Mas Jesus, minha luz, fez-me vencedor.

Coro:
A face adorada de Jesus verei,
Com a grei amada, no céu estarei,
Na mansão dourada, hinos vou cantar
A Jesus, minha luz, que me quis salvar!

Pode a noite escura ser ao servir Jesus,
Mas clamando, com poder brilhará a luz;
Podem os laços de Satan, todos, me cercar,
Mas Jesus, pela cruz, faz-me triunfar!

Quando estou a contemplar a montanha além,
Onde a luta a governar, está Jesus também,
Que estende a Sua mão sobre nós dali;
Sei assim, que por mim, Cristo vela aqui.

Se entre as ondas estou sem luz, quase a perecer,
Meu Piloto é Jesus, pode me valer;
O meu barco guia bem pelo bravo mar,
Sim, Jesus me conduz, posso sossegar!`},
{id:"h305",num:305,title:"Campeões da luz",category:"harpa",author:"Eufrosine Kastberg",lyrics:`Soldados somos de Jesus 
E campeões do bem, da luz; 
Nos exércitos de Deus, 
Batalhamos pelos céus, 
Cantando, vamos combater. 
O vil pecado e seu poder; 
A batalha ganha está; 
A vitória Deus nos dá. 

Coro:
Breve vamos terminar a batalha aqui, 
E p ‘ra sempre descansar com Jesus ali; 
Todos os que são fiéis ao bom Capitão, 
Hão de receber lauréis como galardão.

Levai o escudo, sim, da fé, 
Pois a peleja dura é, 
Mas promessa temos nós 
De jamais lutarmos sós. 
- As flechas do mal não temer, 
Mas combater até vencer, 
Olham os campeões p’ros céus, 
A vitória vem de Deus. 

Se alguém cansado se encontrar, 
Sem forças para pelejar, 
O Senhor quer te ajudar 
A vitória alcançar; 
O mal vencendo avançai, 
E hinos a Jesus cantai, 
E da salvação falai; 
Almas ao Senhor levai.`},
{id:"h306",num:306,title:"A Palavra de Deus é um Tesouro",category:"harpa",author:"Emílio Conde",lyrics:`A Palavra de Deus é para mim 
Um tesouro sem igual em valor! 
Fala do amor de Deus, do amor que não tem fim; 
Mais precioso do que ouro é este amor! 

Coro:
A Palavra de Deus é doce, mais que o mel, 
O que a toma pela fé há de ser fiel, 
Porque Deus nos concedeu o Emanuel, 
Rocha viva donde mana leite e mel.

Luz que guia pela senda da paz, 
E alumia os que em trevas estão; 
Lâmpada que nos faz ver os ardis de Satanás, 
E que brilha mesmo na escuridão. 

É um farol que sempre resplandeceu. 
E que mostra o porto da salvação; 
Quem na arca já entrou 
e do mundo se esqueceu, 
Chegará por certo à eternal mansão.`},
{id:"h307",num:307,title:"Louvor ao Deus Trino",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao Pai, ao Filho, o Redentor,
Ao divinal Consolador;
Ao trino Deus, sim, adorai,
Louvor eterno tributai. Amém.`},
{id:"h308",num:308,title:"Só o Sangue de Jesus",category:"harpa",author:"Emílio Conde",lyrics:`Só o Sangue de Jesus tem poder pra nos lavar, 
E de toda mancha nos limpar; 
Todo o que lavado for nesse sangue expiador. 
Não mais teme a morte nem a dor! 

Coro:
Só o sangue pode libertar, 
E também nos lavar; 
Pelo sangue vamos nós alcançar, 
A morada de Jesus.

Só o sangue de Jesus, guarda-nos da corrupção. 
E nos livra da vil tentação; 
Esse sangue tem valor, pois é preço do amor 
Com que resgatou-nos o Senhor. 

Só o sangue de Jesus tem poder de preservar 
O fiel que a Deus quer agradar; 
Todo o ouro é sem valor pra pagar o gran favor, 
Do eterno e divino amor!`},
{id:"h309",num:309,title:"Ao Findar do Dia",category:"harpa",author:"A.T.G Antônio Torres da Silva",lyrics:`Finda a lida deste dia, ó bendito Salvador; 
Eis-nos todos reunidos a cantar o Teu louvor; 
Vem encher-nos do Teu santo e doce amor! 

A leitura da Palavra, vem, Senhor, abençoar, 
E no coração dos crentes Teus ensinos vem gravar. 
Tuas bênçãos continua a derramar! 

Congregados nos achamos constrangidos pelo amor 
Que emana do Teu nome, ó amado Salvador; 
Aprendendo no Teu livro, ó Senhor! Amém.`},
{id:"h310",num:310,title:"Avante Eu Vou",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus é o Redentor, que veio nos salvar, 
Do mundo de horror, das ondas deste mar; 
A todo o que crer vitória lhe, dará, 
Também real poder, que gozo lhe trará. 

Coro:
Avante eu vou, avante eu vou, 
Para entrar no céu, na divinal mansão; 
Tenho gozo mui profundo; Jesus no coração, 
Não olhando para o mundo, avante eu vou.

Jesus meu Salvador, ao Céu me levará, 
E do destruidor, o corpo esmagará, 
Ao caro Redentor, fiel aqui serei, 
A Ele, com fervor, somente seguirei. 

Trombeta soará do nosso Criador; 
A grei se elevará dos santos do Senhor; 
Em glória e poder Jesus regressará, 
Seus servos hão de O ver, pois breve voltará. 

Eis que virá Jesus, afim de me levar, 
A desfrutar em luz, o Seu amor sem par; 
Abraão, Isaque e Jó ali no céu verei, 
Ao lado de Jacó, com eles cearei.`},
{id:"h311",num:311,title:"Jesus, Meu Salvador",category:"harpa",author:"N.J.N Nils J. Nelson",lyrics:`Jesus salvou-me do mundo, 
Ele é tão doce pra mim; 
Amor, Lhe tenho, profundo, 
Por Sua graça sem fim; 
Quando ia eu no deserto, 
Sem gozo, paz e sem luz, 
Ele buscou-me, por certo, 
Té que achou-me - Jesus! 

Coro:
Jesus, Jesus, Tu és meu Salvador, 
Jesus, Jesus, só Teu serei, Senhor. 
Na senda mui verdadeira, 
Guia-me Tua mão, 
E ao findar minha carreira, 
Receberei galardão.

Jesus de Saron é a rosa, 
Lírio suave é p’ra mim; 
Ele é a rocha preciosa, 
Onde há gozo sem fim; 
É da manhã a estrela, 
Na noite escura e sem luz, 
Tenho doçura em vê-la, 
Pois ela é meu Jesus! 

Na manjedoura nascendo, 
No mundo, só batalhou; 
Em meu lugar padecendo, 
Sangue por mim derramou, 
Ressurgiu da sepultura, 
Subindo à dextra de Deus; 
Breve virá das alturas, 
Descendo em nuvens dos céus.`},
{id:"h312",num:312,title:"A Vinda de Cristo",category:"harpa",author:"Domingos Lins",lyrics:`Subiu triunfante p'ra o céu, o Senhor:
Assim mesmo há de voltar;
"Eis que venho breve”, diz o Salvador,
Quando o alarido ecoar. 

Coro:
Com muita prudência eu quero estar
Esperando por meu Senhor,
E sempre alerta aqui vigiar.
Té que venha o meu Salvador.

Com Cristo encontrar-me, gozoso irei. 
Quando Ele nas nuvens descer, 
Corpo igual ao Seu, nesse dia terei; 
Que dia de glória há de ser. 

Bendizendo a Cristo, no céu entrarei; 
Irei no milênio ingressar; 
Só com meu Jesus, eu aqui voltarei. 
Pois todas nações vem julgar. 

Vem sobre o Teu povo reinar, ó Senhor! 
Teu reinado aqui gozo traz, 
Ó vem, proteção nos trazer, Salvador! 
Vem, Jesus, com justiça e paz! 

Vem, Cristo, meu Rei, Tua Esposa buscar; 
Eu quero contigo subir; 
Um canto perene Te quero entoar, 
E a glória eternal fruir.`},
{id:"h313",num:313,title:"Louvor a Trindade",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao Pai Eterno dai louvor,
Ao Filho Seu também,
E ao celestial Consolador,
Louvai p’ra sempre. amém!`},
{id:"h314",num:314,title:"O pai bondoso",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Um Pai bondoso tenho lá no céu.
Um Pai bondoso tenho lá no céu,
A Ele breve eu irei,
E a meu Pai, no céu verei;
Eu irei, eu irei, eu irei ao céu;
Eu irei, eu irei, eu irei ao céu;
Meu Pai me chama, vou andar
Pra Sua face contemplar. 

Um Salvador eu tenho lá no céu; 
Um Salvador eu tenho lá no céu; 
A Ele presto eu irei, 
Seu esplendor no céu verei, 
Eu verei, eu verei, eu verei no céu, 
Eu verei, eu verei, eu verei no céu. 
Jesus ao céu me levará 
E grande gozo me dará. 

Uma coroa tenho lá no céu: 
Uma coroa tenho lá no céu; 
De espinhos a teve o Salvador, 
Mas eu terei de esplendor, 
Eu terei, eu terei, eu terei no céu; 
Eu terei, eu terei, eu terei no céu; 
Jesus coroa me dará, 
Que minha fronte cingirá. 

Nós nos encontraremos lá no céu; 
Nós nos encontraremos lá no céu; 
Unidos todos ao Senhor, 
E cheios sempre de amor; 
Andarei, andarei, andarei pro céu, 
Andarei, andarei, andarei p’ro céu, 
A paz eterna lá terei. 
A face de Jesus verei.`},
{id:"h315",num:315,title:"Oh! Amor Bendito",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Oh! Amor bendito, Tu possues a mim!
Enches o infinito, oh! amor sem fim!
Vivo hoje em Cristo, vivo no Fiel;
Por Deus sou benquisto no Emanuel.

Coro:
Oh! Amor bendito: Tu possues a mim!
Enches o infinito, oh! amor sem fim!

Paz e glória eterna, há pra mim no céu,
Vida sempiterna com o nosso Deus.
Em verdade sinto vida no Senhor,
E do céu pressinto gozo e esplendor!

Coração, desfruta deste grande amor;
Na paz ou na luta, faz-te vencedor;
Que este amor é forte, viu-se ali na cruz;
Forte mais que a morte: O amor de Jesus!`},
{id:"h316",num:316,title:"Em Busca de Sião",category:"harpa",author:"Frida Vingren",lyrics:`Saindo do Egito em busca de Sião,
Meu Salvador guiou-me com Sua forte mão;
Levou-me em vitórias pelo fogo e o mar;
Agora, canto a Deus, pela salvação sem par.

Coro:
Não busquem mais a Mim na escravidão, 
Ergui a tenda, enfim, na terra de Sião. 
Não busquem mais a Mim na escravidão, 
Ergui a tenda, enfim, na terra de Sião.

Mui perto de Jesus e vendo o galardão, 
Pra Canaã eu sigo, lá está meu coração; 
Jesus pra grande herança, há de me levar, 
A quem deu-me esperança, eu hei de aqui louvar. 

Andei eu pelos campos, onde fruto achei; 
Em Hebron, uvas vivas também eu apanhei, 
Aqui melhor mel, vinho e leite eu encontrei, 
Pra escravidão do Egito jamais eu voltarei. 

As lutas desta vida eu não sinto mais, 
Pois sempre vou cantando Sua graça, amor e paz; 
Eu vou marchando para o eterno lar, 
E breve, lá no céu - minha pátria - hei de estar.`},
{id:"h317",num:317,title:"Jesus Vem Triunfante",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Como brilha do oriente 
O relâmpago ao ocidente, 
Deste mundo voltará do céu, Jesus; 
Levará Sua Noiva em gozo 
Ao Seu lado mui ditoso, 
Para o lar eterno de celeste luz. 

Coro:
Em breve, do céu, Jesus virá nos buscar; 
Com gran poder, virá Jesus. 
E nós devemos todos preparados estar, 
Com vestes brancas, e brilhando como a luz.

Eis que a porta está aberta 
Para a alma que desperta, 
Aceitando a Jesus, o Salvador, 
Pois Seu sangue derramado 
Tem vencido o vil pecado, 
Carregando, no madeiro nossa dor! 

Jesus vem, vem triunfante, 
Com Seus olhos chamejantes, 
Pois Sua face brilhará qual luz do sol! 
Mui felizes os que clamam. 
Sua vinda, pois O amam, 
E no céu, os nomes escritos têm no rol. 

Jesus vem, qual sol raiando, 
Este mundo iluminando, 
A Igreja subirá ao encontro Seu; 
Na Sua mão traz luz brilhante, 
Qual estrela cintilante, 
E os louvores se ouvirão nos altos céus!`},
{id:"h318",num:318,title:"Ao Lar Paternal",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quero vos contar a história dum varão, 
Que Jesus outrora relatou. 
O qual tinha dois filhos em feliz mansão, 
Té que o mais jovem o deixou. 

Coro:
Filho desleal ao lar paternal, 
Queiras hoje regressar! 
Pois o Pai está por ti esperando lá; 
Pecador, á volta p’ra teu lar!

O mais moço disse ao seu bondoso pai: 
"A herança minha queiras dar"; 
E a sua fazenda, alegremente vai 
Num pais distante desfrutar. 

O incauto jovem os seus bens esbanjou 
Com seus camaradas, no prazer; 
Eis que vindo a fome, do seu pai se lembrou 
Que pudera sempre o sustar. 

O perdido filho, ao lar por fim, voltou, 
Mui arrependido do que fez; 
E o pai contente, amoroso o beijou, 
Pois seu filho via outra vez!`},
{id:"h319",num:319,title:"Ainda Há Lugar",category:"harpa",author:"J.A.S J.A.S",lyrics:`Inda há lugar, p’ra ti, ó pecador! 
Ouve o convite do teu Salvador. 
Entra, entra, ‘inda há pra ti lugar. 

A tua vida breve vai findar, 
As sombras crescem, onde vais morar? 
Entra, entra, ‘inda há pra ti lugar. 

Eis lá no céu, Jesus nos preparou 
Bodas festivas, e nos convidou, 
Entra, entra, ‘inda há pra ti lugar. 

A multidão que salva lá já está, 
Vem, pois t’espera a ela te ajuntar. 
Entra, entra, ‘inda há pra ti lugar. 

Vês tu a porta aberta por Jesus? 
Ele te chama, vem pra Sua luz; 
Entra, entra, ‘inda há pra ti lugar. 

Enche-se a sala, vem sem demorar; 
Quem se descuida, perde o seu lugar; 
Entra, entra, ‘inda há pra ti lugar. 

Ali se encontra gozo, paz sem fim, 
Glória te espera; a luta terá fim. 
Entra, entra, ‘inda há pra ti lugar.`},
{id:"h320",num:320,title:"Seguir a Cristo",category:"harpa",author:"Frida Vingren",lyrics:`Queres tu seguir a Cristo, 
E andar na Sua luz? 
Pelo mundo sempre visto, 
Por levar a sua cruz? 

Queres hoje dar o passo, 
Para seres um cristão? 
Vem, quebranta triste laço 
Do pecado e sedução. 

A cidade na montanha, 
Não se pode esconder, 
E também, até tamanha 
Que à vida deu poder.

Amas tu a Jesus Cristo, 
Que por ti Sua vida deu? 
Vem, então, declara isto - 
Júbilo terás no céu. 

Ó vê bem o teu intento, 
Custa tua vida, sim! 
Não resistas! Com alento, 
Vem a Cristo, a luz sem fim. 

Vem, confessa teus pecados 
Junto à cruz do Salvador; 
Pede graça de segui-Lo, 
Com coragem e amor. 

Considera o grande gozo 
Que no céu espera, sim; 
Aqui lutas, lá repouso, 
Galardão terás enfim.`},
{id:"h321",num:321,title:"Só em Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Só em Jesus fruirás paz e gozo, 
Tu, pecador, que tens sede de amor; 
Só em Jesus poderás ser ditoso; 
NEle a graça obténs do Senhor. 

Só em Jesus acharás forte escudo 
Para abrigar-te dos dardos do mal; 
NEle, oculto das dores, de tudo, 
Receberás uma paz divinal. 

Só em Jesus, sobre a divina rocha, 
Salvar-te-ás deste mundo, qual mar; 
Só em Jesus, sim na luz desta tocha, 
Podes o santo caminho trilhar. 

Só em Jesus, neste porto seguro, 
Podes tua alma qual nau ancorar, 
Só em Jesus, um brilhante futuro, 
O pecador, poderás encontrar. 

Só em Jesus, deixa tudo portanto, 
Quer seja o mundo, o mal ou pecar; 
Vem pra Jesus, que por Deus te garanto, 
Que paz e gozo irás desfrutar.`},
{id:"h322",num:322,title:"As Santas Escrituras",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`São as santas Escrituras 
Que nos contam de Jesus, 
O qual vindo das alturas 
Fez brilhar nas trevas luz! 
Pra nos dar eterna vida, 
Té a morte se humilhou; 
Tendo já vencido a lida, 
Deus, o Pai, O exaltou. 

Coro:
Nunca mais vai ser ouvido 
Outro conto de amor, 
Que converta um perdido, 
E rebelde pecador, 
Como o santo Evangelho, 
Que nos fala de perdão, 
E transforma o homem velho 
Numa nova criação.

Sobre a cruz foi derramado 
O Seu sangue remidor; 
Duma lança traspassado 
Foi o lado do Senhor; 
Suas mãos e pés pregaram 
Com uns cravos, sobre a cruz; 
Tudo isto me contaram 
Da bondade de Jesus. 

Quero continuar ouvindo 
A história do Senhor; 
Salvação estou fruindo 
Deste conto de amor! 
Do juízo fui liberto, 
Da condenação, da dor. 
Pela Bíblia estou bem certo, 
Que Jesus é o Salvador.`},
{id:"h323",num:323,title:"Levantai Vossos Olhos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Levantai os vossos olhos para cima, 
Ó remidos do Senhor Jesus! 
A figueira mostra que se aproxima 
O verão: Brotos já produz! 

Coro:
Levantai, levantai! 
Vossos olhos para o céu donde Jesus virá; 
Levantai, levantai! 
A redenção breve se fará.

Muitos dizem que Jesus está tardando, 
Para vir buscar o povo Seu; 
Qual nos dias de Noé, estão pecando, 
Sem temer o bondoso Deus. 

Muitos, como Faraó, estão dizendo: 
“Quem é o Senhor p’ra lhe ouvir?" 
E também o coração endurecendo: 
Mas as pragas estão p’ra vir. 

Ser arrebatado, eu, p’ro céu, quem dera! 
Pois a Igreja Cristo levará. 
A figueira está em flor, é primavera, 
Levantai os vossos olhos já.`},
{id:"h324",num:324,title:"Jesus, o Melhor Amigo",category:"harpa",author:"Anônimo",lyrics:`Meu Jesus é o melhor amigo, 
NEle ponho toda a minha fé; 
Minhas chagas quer sarar, 
E minh’alma consolar, 
Oh, Jesus é o melhor amigo! 

Coro:
Jesus é o melhor amigo, 
Jesus é o melhor amigo, 
Sempre prestes a ajudar, 
Ele a todos quer salvar, 
Sim, Jesus é o melhor amigo!

Meu Jesus é o fiel amigo, 
E me dá Sua força e poder; 
Torna em gozo minha dor, 
Me inspira, dá valor; 
Oh! Jesus é o melhor amigo! 

Quando as ondas se embravecem, 
E meu barco querem afundar, 
Ele dá-me calma e paz, 
E bonança sempre traz, 
Sim Jesus é o melhor amigo! 

Ele deu a Sua própria vida 
Pra salvar o ímpio pecador; 
Oh! Jamais me quer deixar, 
Nunca me desamparar! 
Sim, Jesus é o melhor amigo!`},
{id:"h325",num:325,title:"A Luz do Céu Raiou",category:"harpa",author:"H.E.N Hedwig Elisabeth Nordlund",lyrics:`Noutro tempo, sei como eu andei, 
Do pecado sob o véu, 
Mas do céu raiou e em mim entrou 
A luz do glorioso céu. 

Coro:
Em meu coração a luz raiou 
Desde a glória, pois Jesus me amou; 
E agora vivo sempre alegre, 
Depois que luz do céu raiou!

E poder me dá, que só vem de lá, 
De Jesus, que me salvou; 
E eu vivo aqui, a louvar a Deus, 
Que minh’alma libertou. 

O descanso entrou e o lutar findou, 
Com Jesus, meu Salvador; 
Seu amor sem fim revelado a mim, 
Enche-me de paz e amor. 

Vou morar, então, na feliz Sião, 
Com meu Salvador Jesus, 
Para sempre ali, gozarei prazer 
Lá na gloriosa luz.`},
{id:"h326",num:326,title:"Oh! Meu Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó meu Jesus, quando lutas no caminho encontrar,
A Tua mão divina vem me ajudar;
Não temerei amparado por Ti mesmo, meu Jesus,
Ó Salvador, a vitória me vem por Tua luz,
Por Ti espero somente, meu Senhor,
Para andar de valor em valor;
Ó meu Jesus, minhas forças hei de ver mais aumentar;
Tendo a fé; Tua graça me há de bastar. 

Ó meu Jesus, encostado em Teu braço vou andar,
E com amor na sã Palavra meditar;
Sempre assim na peleja,
por Jesus eu vencerei,
E pela fé, abrigado do mal estarei;
Já bem armado as trevas desfarei,
Pelo poder de Jesus, o meu Rei!
O meu Jesus, que me dás,
no coração, do Teu amor,
Hei de Te ver glorioso, no céu d’esplendor! 

Ó meu Jesus, o Teu nome invocarei com mui amor,
Todo o poder Te foi entregue Salvador;
De todo o ser, o joelho ante Ti se dobrará;
Que és o Senhor, toda língua testificará,
Os nossos pés, Salvador queiras firmar
Na rocha, que não se pode abalar;
Ó meu Jesus, Tua graça quero sempre procurar,
Té que eu vá nos Teus braços enfim repousar.`},
{id:"h327",num:327,title:"Teu Nome Precioso",category:"harpa",author:"Joseph Scriven",lyrics:`Jesus Cristo, o Teu nome 
E tão doce para mim - 
Tua doçura incomparável 
Enche-me de amor sem fim. 
Tua doçura incomparável 
Enche-me de amor sem fim. 

És a estrela resplendente, 
Que rebrilha com fulgor, 
E dirige os meus passos, 
Neste mundo de horror. 
E dirige os meus passos, 
Neste mundo de horror.

Teus são os eternos braços, 
Protegendo o seguidor, 
Que não fique enlaçado 
Pio maligno tentador. 
Que não fique enlaçado 
Pio maligno tentador. 

Com meu Salvador amado 
Posso alegre prosseguir, 
E com Ele eterno gozo 
Eu terei lá no porvir. 
E com Ele eterno gozo 
Eu terei lá no porvir. 

Oh! Teu nome precioso 
Continua a soar 
Pelo mundo de pecado, 
Para as almas despertar! 
Pelo mundo de pecado, 
Para as almas despertar!`},
{id:"h328",num:328,title:"O Pão da Vida",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O pão da vida, descido dos céus, 
Dá paz, saúde e vigor; 
O pão celeste, mandado por Deus, 
É Cristo, o Salvador; 
O Redentor, vem sem tardar, 
Do pecador o mal sanar! 
Se algum perdido buscar Tua luz, 
Depressa vem a paz lhe dar; 
Não tardes mais, amoroso Jesus, 
Ó vem me confortar! 

Há gozo santo p'ra quem tem a luz, 
Em se lembrar do seu Senhor, 
E só falar do amor de Jesus, 
O grande Redentor! 
Teu jugo é doce, meu Senhor, 
Teu fardo é leve, que amor! 
Se eu não posso levar minha cruz, 
Depressa vem me ajudar; 
Não tardes mais, amoroso Jesus, 
Ó vem me confortar! 

Por duras provas e perseguições, 
Tu fazes o fiel passar; 
E quem vencer há de ter galardão, 
Também no céu lugar, 
Eu lá verei Teu esplendor, 
A Tua glória. Salvador; 
Se não puder carregar minha cruz, 
Depressa vem me auxiliar; 
Não tardes mais, amoroso Jesus, 
Ó vem me confortar! 

Jesus, o Teu insondável amor, 
Me faz sentir no coração; 
O amor de Deus, este santo amor, 
E viverei, então; 
A Ti, Jesus, eu dou louvor; 
Tu me dás graça e vigor; 
Tu és o pão que a vida produz; 
Minh'alma vem alimentar; 
Não tardes mais, amoroso Jesus 
O vem me confortar!`},
{id:"h329",num:329,title:"Jesus é Minha Paz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus nos braços me tomou, 
Jesus me deu a paz; 
Agora canto a quem me amou, 
Jesus é minha paz! 

Faminto e sedento andei, 
Sem ter descanso, aqui; 
Mas água viva eu aceitei; 
Achei descanso aqui! 

Onipotente pra me amar, 
É Cristo, o Rei dos céus; 
Alegremente vou cantar; 
Achei descanso em Deus!`},
{id:"h330",num:330,title:"A Fé dos Santos",category:"harpa",author:"Anônimo",lyrics:`Pela fé que uma vez foi entregue aos santos, 
Que nos vem por Jesus, e nos seca o pranto, 
Podem os crentes, sem ter nenhum espanto, 
Prosseguir nas pisadas do Senhor. 

Coro:
Nas tristezas, nas lutas, na dor, 
Recorriam ao caro Jesus; 
A vitória lhes dava o Senhor, 
Pelo sangue vertido na cruz.

Os cristãos foram por tribunais vis julgados, 
Nas prisões, inocentes, à força lançados, 
E de seus bens terrestres despojados, 
Mas alegres seguiram o Senhor. 

Peregrinos os santos no mundo andavam, 
Nas cavernas da terra se refugiavam, 
E ali reunidos, celebravam 
A Jesus, seu amado Salvador. 

Pela fé é que nós, crentes, sempre devemos 
Nos firmar em Jesus e assim venceremos, 
E um dia, no céu encontraremos 
Os fiéis, que amaram o Senhor. 

Coro:
Lá no céu não teremos mais dor, 
E o pranto ali há de findar, 
Quando perto do nosso Senhor, 
Nossa alma, enfim, repousar.`},
{id:"h331",num:331,title:"Ó Caro Salvador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O caro Salvador, manancial de amor, 
Te sinto em mim! 
Teu gozo a mim virá, jamais me faltará, 
O qual me levará ao céu enfim. 

Ó caro Salvador, riqueza de amor, 
Vela por mim; 
Tem-me na Tua mão, ó grande Capitão, 
E lutarei, então, contigo assim. 

Ó caro Salvador, meu vero intercessor. 
Ora por mim; 
Eu posso então falar, oh! deste amor sem par, 
Que veio me salvar do mundo, sim! 

Ó caro Salvador, com Teu poder, 
Senhor, Opera em mim; 
Na senda de valor, repleto de vigor, 
Sem ter nenhum temor, irei assim!`},
{id:"h332",num:332,title:"Para o Céu eu vou",category:"harpa",author:"Samuel Nyström",lyrics:`Para o céu eu vou, embora, for nublado; 
O caminho, às vezes, espinhoso está, 
Por Jesus, meu Mestre, sempre bem guiado, 
Em Seus passos sigo, até que chegue lá. 

Coro:
Aleluia! P’ro céu vou caminhando, 
Nada me desanimará! 
Para o céu eu me vou aproximando, 
Sempre meu Jesus me guiará!

Para o céu eu vou, ainda que lutando 
Contra tentações, que surgem ante mim: 
Sob o sangue de Jesus me abrigando, 
Escondido e bem seguro, estou assim. 

Para o céu eu vou, embora, mui cansado, 
E amigos velhos, voltem-se pra trás. 
Forte sigo co'o Senhor Jesus ao lado, 
Convidando a outros aceitar a paz. 

Para o céu eu vou, alegre caminhando: 
Breve findará a peregrinação, 
Se cansado, neste mundo vou andando, 
Eu repousarei na divina! mansão.`},
{id:"h333",num:333,title:"O Céu, Meu Lar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`É o meu lar, o céu, o céu de luz: 
Livre da carne, o véu, verei Jesus; 
Oh! Que feliz serei ao fado do Senhor, 
Louvando ao meu Rei, o Salvador! 

É o meu lar, o céu, o céu de luz; 
Por mim sofreu, qual réu, o meu Jesus: 
Oh! Que feliz serei no reino de amor, 
Pois sempre gozarei, com meu Senhor! 

É o meu lar, o céu, o céu de luz; 
E com os meus troféus vou a Jesus: 
Oh! Que feliz serei quando, com mui fervor, 
Aos pés estar do Rei, dando louvor!`},
{id:"h334",num:334,title:"O Fim Vem, Cuidado!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O fim de todas coisas vem, não tarda, cuidado! 
Não queiras hoje recusar a graça do Salvador: 
Procura bem depressa, ficar abrigado, 
No sangue do Cordeiro, no sangue remidor. 

Coro:
Que sangue precioso, saiu de meu Jesus! 
Que sangue glorioso, vertido foi, na cruz!

O fundamento do cristão é a rocha eleita, 
Por isco pode resistir os ventos da tentação. 
A todo o que sincero, a Cristo aceita, 
O sangue do Cordeiro garante salvação. 

Quem pois ouvir, há de viver com Cristo na glória, 
Quem não ouvir há de morrer, tormentos padecerá, 
Pois quem deseja sobre o mal a vitória, 
No sangue do Cordeiro poder encontrará.`},
{id:"h335",num:335,title:"Mui Perto Está o Dia",category:"harpa",author:"Luiz V. Ferreira",lyrics:`Perto, sim, mui perto está, 
O dia não tardará; 
Iremos nós residir 
Com Jesus, que há de vir. 

Oh! Quanta glória há de ser, 
Se Cristo hoje descer, 
Pois os fiéis em Jesus, 
Gozarão eterna luz! 

Que glória imensa, sem par, 
Havemos nós de gozar 
Ao lado, sim, do Senhor, 
Nosso amado Salvador! 

Devemos, pois, esperar, 
E ao mundo olhos fechar; 
Andemos sempre na luz, 
A buscar o Rei Jesus.`},
{id:"h336",num:336,title:"Oração de Elias",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Elias no Carmelo orou 
Com insistência a Deus; 
Curvado ao pó, com fé clamou 
Por chuva lá dos céus. 

Coro:
Chuva, manda Senhor, 
A chuva do Santo Consolador; 
Manda chuva forte, Salvador: 
Na Tua lgreja faz descer 
A chuva de poder.

Vai, servo meu, do monte olhar 
Se nuvens negras vêm; 
Pois pode agora Deus mandar 
A chuva a nós também. 

Uma nuvem surge qual u'a mão, 
No horizonte além, 
Ao longe ouve-se um trovão: 
Sim, muita chuva vem. 

Ó crente frio, vai buscar 
A Deus em oração, 
E tua vida consagrar, 
P’re receber a unção.`},
{id:"h337",num:337,title:"O Bom Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó bom Jesus, tesouro de poder, 
Quero sentir-Te. sempre no meu ser! 
Faz-me andar, oh, sempre nesta luz, 
Pois dentro de mim vives, ó meu bom Jesus! 

Coro:
Oh! Em mim, Já enfim, ressuscitou Jesus; 
Das trevas livre estou assim, por Sua luz!

O bom Jesus, ó fonte de amor, 
Faz-me ouvir a Tua voz, Senhor; 
Sempre viver deli eu quero sim, 
Ó manifesta mais o Teu poder em mim! 

O bom Jesus, real Consolador, 
Longe de Ti está o pecador! 
Vives em mim, és minha salvação; 
Só é feliz, o que Te tem no Coração!`},
{id:"h338",num:338,title:"Quero Jesus, Tua Luz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quero sempre, Jesus, receber Tua luz, 
Revestir-me do Consolador; 
E um dia nos céus, junto ao trono de Deus, 
Fruirei abundante amor! 

Coro:
Ó Jesus, guarda o meu coração, 
Nele faz Tua eterna habitação, 
Quero sempre Teu nome louvar! 
Pois quiseste minh’alma resgatar!

Sob o sangue estarei abrigado da lei, 
Do pecado e da vil tentação; 
Neste sangue há paz, gozo que satisfaz 
E certeza de vem perdão! 

Oh! Que consolação eu terei em Sião, 
Vendo a face do meigo Jesus; 
Um eterno louvor eu darei ao Senhor, 
Ao entrar na cidade da luz!`},
{id:"h339",num:339,title:"Jesus Ressuscitado",category:"harpa",author:"F.N.Q Francisco N. De Queiroz",lyrics:`Oh! Jesus ressuscitado, 
Grande é o Teu poder! 
Sê comigo, ó meu amado, 
Dá-me a graça e o saber. 

Coro:
P’ra fazer a Tua vontade, 
Quero de Ti mais poder; 
Dá-me a Tua santidade, 
Quero só p’ra Ti viver.

Meu Senhor, Tu és meu guia, 
Dá-me força, vida e luz; 
Plena paz e alegria, 
Me concede,ó meu Jesus! 

Es a luz tão radiosa, 
Que me traz consolação; 
Com Tua morte dolorosa, 
Tu me deste a salvação. 

Quero, ó Deus, agradecer-Te 
O Teu grande, imenso amor, 
Porque já me concedeste 
O real Consolador.`},
{id:"h340",num:340,title:"Um Povo Forte",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Eis que surge um povo forte, 
Revestido de poder; 
E não teme nem a morte, 
Quem a ele pertencer; 
E terá sublime sorte, 
Pois com Cristo ao céu vai, 
Podes tu dizer também. 
“Sou um dos tais”? 

Coro:
Um dos tais. Um dos tais.
Podes tu também dizer: “Sou um dos tais”?
Um dos tais, um dos tais.
Podes tu também dizer: “Sou um dos tais”?

No Cenác’lo reunidos, 
O poder buscavam então, 
Pelo amor de Deus unidos 
A clamar em oração; 
Eis que um vento é descido 
E o fogo do céu cai; 
Podes tu dizer também: 
“Sou um dos tais”? 

Este povo destemido, 
(São os discípulos de Jesus) 
Pelo mundo perseguido, 
Por levar a sua cruz. 
E agora revestido 
Com poder ao mundo sai; 
Podes tu dizer também: 
“Sou um dos tais”? 

Ó não sejas descuidado 
Pra buscar o dom de Deus, 
Dom que te fará ditoso, 
Dar-te-á visões do céu. 
E Jesus maravilhoso 
Proclamando aos outros vais, 
Poderás então dizer: 
“Sou um dos tais”.`},
{id:"h341",num:341,title:"A Aspiração da Alma",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Minh’alma aspira habitar 
Nos átrios do Senhor, 
E para sempre ouvir soar 
A voz do meu Redentor. 

Descanso não se encontrará 
No lar do pecador; 
Só em Jesus se achará 
Justiça, paz e amor. 

Ó vinde, crentes, vamos já 
A casa do Senhor, 
Pois Ele nos ensinará 
Servi-Lo com mui fervor!`},
{id:"h342",num:342,title:"As Cordas do Coração",category:"harpa",author:"Nils Kastberg",lyrics:`Do meu coração vibram as cordas,
Afinadas pra o Mestre louvar:
O pecado este som não outorga:
Só o Gólgota as pode afinar. 

Coro:
Aleluia! Glória a Deus, 
Que no Gólgota a minh’alma afinou! 
Aleluia! Glória a Deus, 
Que no Calvário a minh’alma afinou!

Também fomos no mundo afinados, 
Mas não era agradável o som; 
Mas no Gólgota já transformados. 
Temos nova harmonia e tom. 

É Jesus quem as almas afina, 
O instrumento Ele cuida mui bem, 
Cada dia o som mais refina, 
Té tocar os acordes de além. 

Se provar esta afinação queres. 
Hoje chega-te á cruz com amor; 
Harmonia terás se estiveres 
Em Jesus, o teu afinador!`},
{id:"h343",num:343,title:"Abre o Coração",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó pecador que não tens luz. 
Abre o coração; 
Aceita hoje o bom Jesus; 
Abre o coração! 

Coro:
Quem sinto bater no meu coração? 
Jesus diz: “Abre sem tardar o teu coração”.

Tu que almejas salvo ser. 
Abre o coração; 
A paz de Deus vem obter, 
Abre o coração! 

Que meiga voz escutas já! 
Abre o coração; 
Jesus tua alma salvará, 
Abre o coração! 

Sim, hoje vem em Cristo crer 
Abre o coração; 
No amanhã que vai haver? 
Abre o coração! 

Ouvindo a voz do bom Jesus, 
Abre o coração; 
Ó vem depressa, vem pra luz, 
Abre o coração!`},
{id:"h344",num:344,title:"Um Amigo Entre os Lírios",category:"harpa",author:"Otto Nelson",lyrics:`Entre os lírios, no meio dos vales 
'Stá um amigo, que é caro pra mim; 
Quero segui-Lo, isento dos males, 
Vê-Lo no céu, com os anjos enfim. 

Coro:
Meu Salvador Jesus, Ó Filho do bom Deus; 
Graças por Tua luz, que veio dos Céus! 
Por mim provaste a Cruz, 
Por mim morreste, Jesus!

Hoje Te busco, ó vem, revelar-me 
A luz divina, onde estás, meu Jesus, 
Com Teu rebanho vem já a levar-me 
Para o rio que vida produz. 

Ouve-me agora, Jesus mui amado, 
Deixa-me Teu grande amor desfrutar; 
Não mais me 'scondas Teu rosto adorado, 
Pois me chamaste pra me libertar. 

A voz de Cristo é pra mim mais preciosa 
Que a voz dos anjos; e do sol a luz, 
Não tem o brilho da face radiosa 
Quando sorri meu amado Jesus.`},
{id:"h345",num:345,title:"Oh! Tenho Gozo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Oh! Tenho gozo no meu coração, 
Também a vida, e santo fervor; 
Pois Cristo me deu real salvação 
E a certeza dum reino de amor! 

No mundo nunca irás conhecer 
O gozo santo do meu Salvador, 
Que já desfruta, sim, todo o que crer, 
E vive sempre repleto de amor. 

Louvemos juntos o Rei de Israel, 
Por Sua graça, que nos dá vigor, 
Pois Ele esconde o crente fiel, 
Em Suas asas de paz e amor. 

O Pai Eterno Seu povo selou, 
Com a promessa do Consolador; 
Oh! Foi de graça, que Deus me salvou 
Por Seu imenso e santo amor!`},
{id:"h346",num:346,title:"É Meu o Céu",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Que alegria agora, é meu o céu,
Pois Jesus rasgou o sagrado véu;
A condenação não mais temerei,
E meu Redentor sempre louvarei. 

Coro:
Lá no céu eu descansarei
Com Jesus, o nosso Rei;
Vem a Deus, ó pecador, 
Pois no céu te espera com amor.

Pelo mundo eu solitário andei, 
Fora de Sodoma o céu avistei, 
Pois olhei pra cima, p’ra meu Jesus, 
Que por mim morreu na sangrenta cruz. 

Eu sou um soldado pra combater. 
E com Deus irei todo o mal vencer; 
A bandeira é o sangue de Jesus, 
Que por mim vertido foi lá na cruz. 

Quando um dia eu venha a perecer, 
Sim, meu coração cesse de bater, 
Subirei ao céu, sem nenhum temor, 
Descansado nos braços do Senhor. 

Ante o trono alegre eu estarei, 
E com Deus irei todo o mal vencer; 
Hei de ver as palmas da multIdão 
Que aleluias à Deus, sempre cantarão.`},
{id:"h347",num:347,title:"Vem a Cristo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem a Cristo, vem agora, 
Vem assim como estás; 
De Deus, sem demora, 
O perdão obterás. 

Crê e firma tua confiança 
Na Sua morte por ti; 
Pois gozo alcança, 
Todo que faz assim. 

Vem a Cristo, não temendo 
Pensa no Seu amor; 
Vem logo, mas crendo, 
Pois te chama o Senhor. 

Ele anela redimir-te, 
Quer livrar-te do mal; 
As portas abrir-te, 
Do prazer divinal.`},
{id:"h348",num:348,title:"Longe de Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vagava longe de Jesus, em plena solidão, 
Até que a preciosa luz encheu meu coração, 
Assim, os meus pecados vi, qual negra escuridão; 
Ao pé da cruz, então, caí, e recebi perdão. 

Coro:
Cristo por mim sofrendo, lá na cruz morrendo, 
Minh’alma salvou e meus grilhôes já quebrou 
Aleluia! 
Cristo por mim sofrendo, lá na cruz morrendo 
Deu-me paz, perdão, no meu coração.

Jesus morreu em grande dor, a fim de me salvar, 
Verteu Seu sangue expiador, que pôde me lavar: 
Sem murmurar, sofreu Jesus por mim, vil pecador; 
Por isso vim ao pé da cruz, vencido pelo amor. 

Escuta a voz do Salvador que chama-te pra luz; 
Confessa-te um pecador, e vem ao bom Jesus, 
Que te dará real poder, o gozo e paz de Deus; 
E quando tudo fenecer, tu viverás no céu.`},
{id:"h349",num:349,title:"Os Dons do Céu",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Os dons do céu prometidos, 
Pai esperamos aqui; 
Em santo amor reunidos, 
Nós suplicamos a Ti. 

Coro:
Manda, ó Senhor, chuvas dos céus; 
Chuvas do Consolador, 
Manda dos céus, ó bom Deus! 
Manda, ó Senhor, chuvas dos céus, 
Que nos dão sempre vigor; 
Manda-nos lá, ó bom Deus!

Manda-nos chuvas constantes, 
Chuvas do Consolador; 
Chuvas, sim, mas abundantes, 
Chuvas de vida e de amor! 

O Teu poder esperamos, 
O glorioso Senhor! 
Dos altos céus aguardamos 
Chuvas do Consolador! 

Pai abençoa os crentes 
Que sempre estão a buscar 
A Tua face, tementes; 
Chuvas, lhes queiras mandar.`},
{id:"h350",num:350,title:"A História da Cruz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tens tu lido a história da dura cruz, 
Na qual Jesus morreu, 
Desfazendo as trevas raiou a luz, 
Manando o sangue Seu? 

Coro:
Jesus padeceu na cruz por ti; 
Jesus padeceu na cruz! 
Oh! Grande amor do Salvador 
Morrendo na cruz por mim!

Tens tu lido que Cristo não se queixou, 
No lenho, em grande dor, 
Mas ao Pai o perdão ‘inda suplicou 
Pra o povo pecador? 

Tens tu lido que Cristo salvou, por fim, 
Na cruz, um malfeitor? 
Que sofrendo na cruz Lhe rogou: 
“De mim, á lembra-Te, Senhor”? 

Tens tu lido que Cristo exclamou na cruz: 
“Eis consumado está”. 
Foi por mim, foi por ti, que morreu Jesus, 
Aceita Cristo já.`},
{id:"h351",num:351,title:"A Felicidade da Salvação",category:"harpa",author:"Eufrosine Kastberg",lyrics:`São felizes os que têm o alegre som 
Da salvação real do nosso Deus. 
Pois eles têm ouvido num suave tom, 
A multidão que canta lá no céu. 

Coro:
Já os filhos de Deus bem alegres estão, 
Porém no céu prazer melhor terão, 
Os gozos do cristão, apenas gotas são 
Do mar de bênçãos, em Sião!

Secam-se do mundo os mananciais por fim, 
Deixando aqui somente sequidão, 
Porém, as fontes divinais não são assim, 
Pois sempre águas vivas manarão. 

Paulo e Silas, eis que na cadeia estão, 
No tronco têm seguros mãos e pés, 
Mas sem se importarem, mesmo na prisão, 
Entoam hinos ao Senhor, com fé! 

Eis Estêvão numa grande exultação, 
Embora às pedradas sucumbiu, 
Porque do Espírito cheio teve a visão: 
O Salvador à dextra de Deus, viu! 

Muitos séculos têm-se passado já, 
Depois que Estêvão, pela fé morreu, 
Mas salvação igual Jesus ainda dá, 
A todos crentes e fiéis em Deus. 

Qual pombinho já em canto divinal, 
Que louva: "Aleluia”, em nosso ser; 
Se perguntares: “Onde apanharei igual?” 
“No Gólgota” nós vamos responder.`},
{id:"h352",num:352,title:"Jesus, Nossa Esperança",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Jesus, nossa esperança, 
Vide santa - nós os ramos; 
Com fervor e confiança, 
Vera graça Te rogamos, 
Ó Salvador. 

Nossos corações contritos 
A Ti nós apresentamos. 
Vem lavá-los, Jesus Cristo. 
Com Teu sangue, suplicamos, 
Ó Salvador. 

Aos que Tu tens resgatado, 
Mais e mais os purifica. 
Já que os tens pra luz chamado 
Suas almas santifica, 
Ó Salvador.`},
{id:"h353",num:353,title:"Vem, ó Pródigo",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó tu qu’inda vagas no mundo d’horror, 
Nas trevas e na escuridão, 
Por que não descansas em Cristo, o Senhor, 
Que trouxe do céu Salvação. 

Coro:
Ó vem, ó pródigo, ó vem a Jesus; 
Parti foi erguido no alto da cruz; 
Aceita agora de Deus o favor; 
O vem, sem demora a Cristo, o Senhor.

O mundo jazia na dura prisão, 
Mas Cristo, a porta abriu; 
Ó crê na mensagem que dá salvação, 
Pois Cristo na cruz te remiu! 

Que gozo completo terás em Jesus, 
Se aceitares o Seu perdão; 
Ó deixa o pecado e vem para a luz; 
Entrega o teu coração.`},
{id:"h354",num:354,title:"O Cuidado da Alma",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Eu tenho que guardar 
Minh’alma imortal, 
E prepará-la para entrar, 
No reino celestial. 

P’ra isto eu fazer, 
Meu Deus, vem me ajudar; 
A Teu serviço, sim, meu ser, 
Te quero consagrar. 

Teu filho quero ser, 
De todo coração 
E para sempre obter 
Tua eterna proteção. 

Ajuda-me a velar, 
Na fé me firmar bem, 
Pois em Ti posso confiar, 
E descansar também!`},
{id:"h355",num:355,title:"Fala do Amor de Cristo",category:"harpa",author:"J.Car Joel Carlson",lyrics:`Fala do amor de Cristo 
Ao triste pecador, 
Amor por todos visto 
Na cruz do Redentor; 
Com alegria canta 
A paz que vem do céu; 
A tua voz levanta 
Em glória a Deus. 

Coro:
Cristo na cruz ganhou-nos 
Eterna salvação. 
Com sangue Seu lavou-nos 
O Rei da redenção! 
No templo, o véu rasgado; 
Caminho abriu Jesus 
Na cruz, inaugurado 
P’ro céu de luz!

Para os aflitos, canta, 
As bênçãos que em Deus há; 
Da cruz pendão levanta 
Pois ânimo nos dá. 
Canta para os perdidos 
A graça de Jesus; 
Seu sangue já vertido, 
Que flui da cruz! 

Canta com esperança, 
Na escuridão também, 
Canta com confiança, 
Há vida no além; 
Canta no alvor do dia, 
E quando a noite vem; 
Em Cristo, harmonia 
Com Deus se obtém!`},
{id:"h356",num:356,title:"Oração Dominical",category:"harpa",author:"Domingos Lins",lyrics:`Ó nosso Pai que estás no céu, 
Do universo o benfeitor; 
Santificado seja o nome Teu, 
O glorioso Deus de amor! 

O reino Teu, venha com poder, 
Conforme o anúncio Teu; 
E seja feito sempre Teu querer, 
Na terra, como lá no céu. 

E cada dia o nosso pão, 
Dá-nos Senhor, e sem faltar; 
E nossas almas que sedentas estão, 
Vem para sempre saciar. 

Vem perdoar nossas faltas, vem, 
Pai glorioso eterna!; 
Pois perdoado temos nós, também, 
Os que a nós fizeram mal. 

Da tentação queiras nos livrar, 
E do mal nos afastar bem, 
Pois Te pertence o céu, a terra e o mar. 
O reino para sempre, amém!`},
{id:"h357",num:357,title:"O Fim das Lutas",category:"harpa",author:"Anônimo",lyrics:`Quando esta vida de lutas cessar, 
Vou para o céu meu descanso gozar 
Com meu Jesus, lá na glória sem fim; 
Oh! Que ventura será para mim! 

Coro:
Oh! Que prazer! Glória a Jesus! 
Eu hei de ver no céu de luz; 
Nunca morrer, a Jesus sempre ver, 
Oh! Será gozo eterno, p’ra mim!

Penso na paz e no grande amor, 
Do lar celeste do meu Salvador; 
Em ver Seu rosto, em sorrir também, 
Na grande glória do dia que vem. 

Pais e amigos, irmãos, hão de estar 
No santo rio, de gozo a cantar, 
Sempre alegres, louvando ao Senhor, 
Gozando bênçãos do seu Criador.`},
{id:"h358",num:358,title:"Senhor, Manda Teu Poder",category:"harpa",author:"Almeida Sobrinho",lyrics:`Os fiéis oravam unidos 
Num cenáculo ao Senhor, 
Quando foi do céu descido 
O real Consolador! 

Coro:
Senhor, manda já o Teu poder. 
Senhor, manda já o Teu poder. 
Senhor, manda já o Teu poder, 
E batiza cada Um!

Qual um Vento veemente, 
O poder a casa encheu; 
Línguas vieram sobre os crentes, 
Mas de fogo, lá do céu! 

Noutras línguas, sim, falaram. 
Como Cristo concedeu; 
Do Espírito transbordaram, 
Exaltando o Rei do céu! 

O poder foi prometido 
Para os servos do Senhor: 
E p’ra todos concedido, 
Se o pedirem com fervor!`},
{id:"h359",num:359,title:"Vem a Mim, Pecador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Eis que clamo, Eu Jesus, o poderoso, 
Vem a Mim, pecador; 
Quero dar-te Minha paz, perdão e gozo. 
Vem a Mim, sofredor. 

Coro:
Eu te amo, ó pecador perdido, 
Morri p’ra ser teu Salvador, 
Por teus crimes e pecados fui ferido; 
Vem a Mim, sofredor.

Dos pecados hoje posso libertar-te, 
Vem a Mim, pecador; 
Pois na cruz, Eu padecendo, quis livrar-te, 
Vem a Mim, sofredor. 

Hoje quero te fazer feliz, ditoso, 
Vem a Mim, pecador; 
Com meu sangue abri um trilho glorioso, 
Vem a Mim, sofredor. 

Não desprezes com orgulho o Meu convite 
Vem a Mim, pecador; 
Pois teu coração é fraco, não resiste, 
Vem a Mim, sofredor.`},
{id:"h360",num:360,title:"A Preciosa Fonte",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem à fonte sanadora, 
Que abriu o Salvador, 
Cujas águas sedutoras 
Têm um divinal sabor. 

Coro:
Oh! Preciosa fonte sanadora 
Para todos corre, sim! 
Oh! Preciosa fonte sanadora! 
Glória a Deus, me sara a mim!

Nesta fonte, que nos sara, 
Encontrei real perdão; 
Minha veste fez-se clara, 
Tenho purificação. 

Nesta fonte, que nos cura, 
Deu-me Cristo, salvação; 
Sã tornou minh'alma e pura, 
E lhe deu consolação. 

Vem à fonte que te cura; 
Hoje vem purificar 
A tu'alma. que impura, 
Lá no céu não pode entrar.`},
{id:"h361",num:361,title:"O Peregrino da Glória",category:"harpa",author:"Frida Vingren",lyrics:`Peregrino segue para a glória, 
Pois no céu em breve entrarás! 
Ouves já os cantos de vitória? 
Tua voz também lá unirás. 

Coro:
Sim, queres entoar 
O cântico dos salvos, lá na glória, 
Que nos céus há de sempre soar? 
Sim, queres tu cantar, 
Os gloriosos hinos de vitória? 
A Jesus mil louvores entoar?

Vem do céu um som de alegria, 
Na escura noite te chamar, 
Mui suave e cheio de harmonia. 
- Ó minh'alma. volta pra teu lar! 

Raios últimos do sol se escondem, 
Na dourada porta de Sião; 
Terminada a luta estarei onde 
As saudades não mais chegarão. 

De Jesus, o sangue, dá entrada; 
Glória a Deus, a porta aberta está! 
Queres tu no céu feliz morada? 
Pois será mui triste não ir lá.`},
{id:"h362",num:362,title:"O Espírito Diz: Vem!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O Espírito e a Noiva dizem: 
"Vem beber da água da vida”; 
Que voz de amor do Salvador, 
A uma alma perdida! 

Coro:
O Espírito diz: Vem! A Noiva diz: Vem!
E toma de graça da água dá vida.
O Espírito diz: Vem! A Noiva diz: Vem!
E toma de graça da água da vida.

E o que escuta diga: Vem!
E fale da paz obtida,
Pois recebeu e já bebeu
Da água que lhe deu vida. 

Ó pecador sedento, vem! 
A fonte das águas puras! 
Vem te saciar, vem sem tardar, 
Ó infeliz criatura! 

Se tu quiseres, hoje: Vem! 
A Cristo, alma sequiosa; 
Tu beberás, te fartarás 
Da água maravilhosa!`},
{id:"h363",num:363,title:"Consagração",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Amor e vida dou a Ti. 
Jesus, pois lá na cruz, por mim, 
Verteste sangue carmezim; 
Meu Deus e Salvador! 

Coro:
Amor e vida dou a Ti, 
Que foste à cruz sofrer por mim, 
Amor e vida dou a Ti, 
Jesus, meu Salvador!

Tu me salvaste, isto sei; 
A minha fé em Ti porei; 
Feliz, agora viverei! 
Contigo, meu Jesus! 

Tu que morreste sobre a cruz, 
Concede-me, Senhor Jesus, 
Que sempre ande na Tua luz, 
Em santificação.`},
{id:"h364",num:364,title:"Oh, que Paz!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Oh! Que paz eu sinto no Senhor Jesus 
Paz eterna, que me faz andar na luz, 
E está em mim na prova e na dor; 
Minha paz é o Senhor! 

Coro:
Oh! Que paz recebo pela cruz 
Paz eterna no Senhor. 
Se viver sempre em Jesus 
E vencer por Seu amor! 
Oh! Que paz que luz tem o pecador 
Quando vem a TI, Jesus!

Oh! Que paz eu tenho no meu coração, 
Paz eterna, que me dá consolação! 
E a paz que goza todo o fiel; 
De Jesus: o Emanuel! 

Oh! Que paz celeste me dá o Senhor! 
Paz eterna, que me enche de amor; 
Essa é Cristo, a vitória d’israel. 
Que possui quem for fiel! 

Oh! Amados, caminhemos com Jesus! 
Só pensando nEle e na Sua cruz; 
Ele é a paz que alegra o coração 
Pois nos dá o Seu perdão!`},
{id:"h365",num:365,title:"Confiança em Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Débil, pobre, cego sou, 
Nada pode me valer; 
Aos Teus pés, ansioso vou, 
Para graça obter. 

Coro:
Só em Ti vou confiar 
Oh! Jesus, meu Salvador, 
Nos Teus braços descansar 
E fruir o Teu amor!

Muito tempo o mal em mim, 
Há reinado, sem cessar; 
Eu, Senhor, acudo a Ti, 
Desejando descansar. 

Toma meu fraquinho ser, 
Nele faz habitação; 
Nunca deixes me reter, 
Os ardis da tentação. 

Cristo vem ao coração 
Para os males dissipar: 
Dá-me hoje Teu perdão, 
Vem minh'alma consolar.`},
{id:"h366",num:366,title:"O Nascimento de Jesus",category:"harpa",author:"S.J.N Sebastião J. Nóbrega",lyrics:`Em Belém nasceu Jesus,
Nosso grande Redentor,
Sendo a bendita luz
Para um mundo pecador. 

Coro:
Oh! Aleluia a Cristo Jesus,
O Enviado, Filho de Deus!
Gozo e luz que vida produz,
Cristo trouxe lá dos céus!

Com pastores, a Belém
Vamos a Jesus louvar,
Nossa gratidão, também,
Dar a quem nos quis salvar. 

Em humilde adoração 
A Jesus, sim, ofertar 
Nosso grato coração, 
Que sentiu o amor sem par. 

Lá do céu Jesus desceu, 
Fez-se homem, sendo Deus; 
Nossas dores padeceu, 
Pra levar-nos para os céus. 

Demos glória, glória a Deus, 
Pelo dom do Seu amor! 
Louvaremos, sim, nos céus, 
A Jesus, com mais fervor. 

Cantam anjos, glória a Deus! 
Para os homens santa paz! 
Cantam glória os filhos Seus: 
Salve o Rei, que gozo traz.`},
{id:"h367",num:367,title:"Espírito Consolador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Espírito Consolador, divino e eterna!, 
Preciosa fonte de amor e vida imortal. 

Com símbolos que o Salvador morrendo nos deixou, 
Celebraremos Seu amor, que na cruz demonstrou. 

Tu, pão da vida Redentor! Em nosso coração 
Infunde graça, com fervor, e celestial unção. 

Acende em nós fogo eficaz de fé e de valor; 
Concede-nos perdão e paz, humilhação e amor. 
Amém.`},
{id:"h368",num:368,title:"Jesus, Tudo prá Mim",category:"harpa",author:"I.A.F Ingrid Anderson Franson",lyrics:`Eu estava no pecado, perdido, triste a só, 
Que diferença agora, Jesus de mim tem do. 
Eu hoje só confio na graça que me deu; 
O Seu amor conheço e ando para o céu. 

Coro:
Jesus, tudo é p’ra mim, de culpa me livrou; 
Amor e paz eterna, 
na cruz p’ra mim ganhou; 
Sim, tudo é p’ra mim, 
mostrou Seu imenso amor, 
Glória ao santo nome. do amado Salvador!

Estou pra o mundo morto, mas vivo pra Jesus; 
Só Ele é o piloto que certo; me conduz; 
A Bíblia é que me ensina, que na cruz padeceu; 
Comprou-me com Seu sangue e Sua paz me deu. 

Mui perto vou chegando do glorioso lar; 
Me preparou morada, onde irei habitar, 
Jesus me santifica, ajuda-me a lutar 
Contra a vil injustiça e, mesmo me negar.`},
{id:"h369",num:369,title:"Sob as Asas de Deus",category:"harpa",author:"Antônio Cabral",lyrics:`Sob as asas de Deus, descansado. 
Inda que é noite confiando estou; 
Sob Suas asas me acho abrigado. 
Fui redimido, de Cristo eu sou. 

Coro:
Descansarei, descansarei, 
Sob Suas asas preciosas! 
Descansarei, e não temerei. 
Sob asas tão poderosas!

Sob Suas asas refúgio eu tenho, 
Meu coração pode, então, descansar; 
E se aflito, a Cristo eu venho, 
Perfeito gozo vou nEle encontrar. 

Sob Suas asas, promessa preciosa! 
Cristo me livra, me pode guardar; 
Bem protegido, nas asas gloriosas. 
Paz e alegria eu posso achar.`},
{id:"h370",num:370,title:"Grato a Ti",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó meu Senhor, dá-me mais gratidão,
Por tudo que Tu fizeste por mim
Por Tua graça no meu coração,
Que me encheu de ventura sem fim!

Coro:
Mais grato a Ti, mais grato a Ti.
Mais consagrado, ó faz-me, Senhor!
Mais humilhado e cheio de amor
Faz-me mais grato a ti, mais grato a Ti!

De graça deste ao meu coração
A santidade, a paz e a fé;
Gozo celeste e consolação,
E liberdade de estar aos Teus pés.

O meu Senhor, Tu fizeste por mim,
O que ninguém poderia fazer;
Na cruz pregado verteste, assim,
Sangue, no qual sempre posso vencer!`},
{id:"h371",num:371,title:"Breve Vem o Dia",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Breve vem o grande dia
Em que lutas findarão;
Todos males, agonias,
Deste mundo cessarão. 

Coro:
Cessará no céu o pranto,
Pois não haverá mais dor,
E ouvir-se-á o canto,
Dos remidos do Senhor!

Oh! que gozo, estar com Cristo,
Escutando a Sua voz!
Eu almejo hoje isto,
E segui-Lo sempre após! 

Se Jesus Cristo é meu guia,
O Caminho hei de trilhar;
Quem assim em Deus confia,
Lá no Céu há de chegar.`},
{id:"h372",num:372,title:"Vencerá",category:"harpa",author:"Almeida Sobrinho",lyrics:`Quem possui a Cristo, nEle firme está,
Achará poder para o mal combater;
Porque Suas promessas Ele cumprirá.
Quem está em Cristo, sempre há de vencer.

Coro:
Vencerá, vencerá, por Seu sangue vencerá;
Vencerá, vencerá, sempre vencerá;
Pois Jesus que impera, novas forças dá;
E quem nEle espera sempre vencerá.

Em qualquer batalha, não desmaiará;
Do poder das trevas há de triunfar;
Deus lhe dará forças, nunca falhará;
Porque Jeová combate em seu lugar.

Entre os inimigos, mui audaz será,
Quem unido a Cristo nunca vacilar.
Em Jesus firmado, luz espargirá;
A luz do Evangelho para os libertar.`},
{id:"h373",num:373,title:"Vem a Teu Salvador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Pecador, que segues no mundo errante 
Sem achar consolação; 
Hoje, vem a Cristo, vem confiante. 
E terás a salvação! 

Coro:
Ó vem ao teu Salvador, 
Que foi morto sobre a cruz, 
Pois ali, salvou O vil pecador; 
ó vem ao Senhor Jesus!

Pecador, se tu sentes em tu’ alma, 
Do pecado a escravidão; 
A Jesus, se vieres, com fé e calma, 
Fruirás de Deus, o perdão. 

Pecador aflito e tão doente. 
Vem pra Cristo te curar. 
Vem a Ele hoje humildemente. 
Pois tu'alma quer salvar!`},
{id:"h374",num:374,title:"Vida Abundante",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Nós queremos ter vida abundante. 
De pureza e de santidade, 
Para amarmos a Deus em verdade, 
Pela graça que Ele nos deu. 

Coro:
Vem nos dar Tua vida abundante, 
Nosso amado e divino Senhor; 
Tua vida de gozo exultante, 
Abundante no Consolador.

Nós queremos ter vida abundante 
De amor, que o Pai nos tem dado 
Em Jesus, o Seu Filho amado, 
Cuja vida por nós derramou. 

Nós queremos ter vida abundante 
De Jesus, a veraz fortaleza, 
Que nos dá do perdão a certeza. 
E nos encha de consolação.`},
{id:"h375",num:375,title:"A Igreja Universal",category:"harpa",author:"J.A.S J.A.S",lyrics:`Na rocha firme, triunfal. 
Está a Igreja universal; 
Fundada foi por Ti, Jesus, 
Ao expirares lá na cruz. 

Coro:
Com Teu poder, enche meu ser; 
Ó Deus de amor, dá-me fervor; 
Remido estou, Teu filho sou, 
Com Teu poder, ó vem me encher.

A graça imensa do bom Deus, 
Lugar me deu, de filho Seu, 
Com plena paz no coração, 
Amor veraz, e salvação. 

Eis, pedra viva agora sou; 
No templo Seu me colocou; 
Do corpo Seu, um membro sou, 
O sangue Seu me consagrou. 

Na rocha, não vai se abalar, 
A Tua Igreja e vencerá; 
Quando este mundo se acabar, 
Contigo, ela reinará.`},
{id:"h376",num:376,title:"Vamos Todos Trabalhar",category:"harpa",author:"F.P.N Francisco Pereira do Nascimento",lyrics:`Vamos todos trabalhar para o Senhor Jesus, 
Nosso guia Ele é, para o campo nos conduz, 
Prontos nós devemos 'star, pois Jesus não vai tardar. 
Subiremos para o céu, onde vamos habitar. 

Reunidos em amor, com Jesus, o Salvador, 
Vamos sempre nos lembrar das palavras do Senhor: 
“Orfãos não vos deixarei, mas ao Pai, Eu rogarei, 
Dar-vos o Consolador, que do céu enviarei” 

Aos discípulos ordenou, logo após ressuscitar: 
O Evangelho de amor, ide a todos, sim, pregar, 
O que crê se salvará, e sinais receberá, 
Pelo Espírito de Deus, novas línguas falará”. 

Este selo de amor foi mandado por Jesus, 
O cenác’lo todo encheu de poder do céu, de luz, 
Compungidos, os judeus, creram no Rei divinal; 
Aceitaram a Jesus pelo poder do sinal.`},
{id:"h377",num:377,title:"As Promessas Que Não Falham",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`De Deus as sentas promessas, 
Hoje se cumprirão. 
Desde que a Deus sempre peças, 
Crendo de coração. 

Coro:
Terra e céus ardendo, 
Os montes ‘stão tremendo, 
Mas, nas promessas crendo, 
Deus sempre as vai cumprir!

Contando Abraão as estrelas 
Na vastidão dos céus, 
Vendo-as brilhantes, tão belas! 
Creu inda mais em Deus! 

Se tens em ti amargura, 
Firma-te, sim, em Deus, 
Breve, a noite escura 
Há de findar p’ros Seus. 

Se fores tu perseguido, 
Só Deus te livrará; 
O Filho de Deus, o Ungido, 
Por ti combaterá. 

Se os teus se tornam inimigos, 
Querem te abandonar, 
Cristo, o melhor dos amigos 
Quer ao teu lado estar. 

Crê, pois a fé alivia 
Teu sofrimento e dor 
Quem nas promessas confia, 
No céu dará louvor!`},
{id:"h378",num:378,title:"As Pisadas do Mestre",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quero seguir as pisadas do Mestre. 
Quero ir após o meu Rei e Senhor, 
Para que no Seu poder me adestre, 
Eu vou orando ao meu Redentor. 

Coro:
Quão doce é seguir as pisadas do Mestre 
Na bendita luz, perto de Jesus! 
Quão doce é seguir as pisadas do Mestre, 
E levar a Cruz!

Ando mais perto de Um que me guia, 
Quando o maligno me vem enganar; 
Que me sustenta na grande porfia. 
Devo por isso, o Seu nome exaltar! 

Sigo Seus passos de terno carinho, 
Misericórdia, amor e mansidão; 
Qual ave que vai em busca do ninho, 
Eu me dirijo à santa Sião. 

Quero seguir as pisadas de Cristo, 
Sempre acima desejo galgar. 
Para Sião, que por fé eu avisto. 
Onde pra sempre eu vou descansar.`},
{id:"h379",num:379,title:"Salvo de Graça",category:"harpa",author:"Frida Vingren",lyrics:`Que alegria, Jesus me salvou. 
Por Sua graça, pois Ele levou 
Os meus pecados, cravando-os na cruz, 
Fazendo brilhar sobre mim a luz. 

Coro:
Salvo de graça por meu Jesus! 
Salvo de graça, Já tenho a luz! 
Demos-Lhe glória por grande vitória, 
Que por mim ganhou o Senhor Jesus.

Sempre errante no mundo andei, 
Longe de Deus, dos preceitos da lei, 
Que me promete o gozo sem par, 
Também liberdade aqui me dar. 

Choro e prantos não podem valer, 
Nem seus esforços, nem grande saber, 
Para um perdido sedento de luz, 
Se ele não crer no Senhor Jesus. 

Tenho descanso do céu, gozo enfim, 
Pois Jesus Cristo salvou-me a mim; 
Quando eu entrar no Seu reino de luz. 
Melhor vou louvar o Senhor Jesus.`},
{id:"h380",num:380,title:"Abraão e Seu Sacrifício",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Debaixo dumas mui formosas tamareiras,
Estando já Berseba na escuridão.
As aves escutando, entre as roseiras,
Se vê andar o patriarca Abraão.
Seu coração perante Deus está aflito,
Pois quer que O sirvamos sem murmuração;
E por amor pergunta ao Senhor bendito:
"O meu amado filho queres Tu, então?"

A voz de Jeová potente é ouvida:
“O teu Isaque oferece para Mim,
Embora fiques com tu’alma dolorida,
Pois te abençoo se fizeres tu assim”.
De abatido Abraão se torna forte
E Canta hinos, pois com fé medita já:
“Deus pode o meu filho libertar da morte!”
E não temendo, segue para Moriá.

Ao pé do monte do supremo sacrifício,
Profunda duvida entrou em Abraão:
“Irei perder da minha vida o beneficio?”
E triste começou subir com lentidão,
Pois ia dar, do coração a esperança
- No seu outono, sacrifício duma flor,&amp;
Assim levou o seu cordeiro à matança,
Em obediência ao mandato do Senhor.

Isaque com a lenha, presto vai na frente,
Oh! Quanto é formoso para Abraão!
Mas eis que volta p’ra seu pai suavemente
E lhe dirige esta interrogação:
“O fogo e a lenha estou vendo que trouxemos,
Mas o cordeiro d’holocausto onde está?”
E a resposta de Abraão na Bíblia temos:
“Meu filho, Deus pra Si, Cordeiro proverá"
.

Chegando Abraão aonde Deus mandara,
Fez um altar e nele a lenha arrumou:
E a seu filho, que já dantes amarrara,
Tomando nos seus braços sobre o altar deitou,
Mas quando Abraão foi para imolá-lo,
O Anjo do Senhor bradou-lhe desde os céus:
“A tua mão, ó não estendas p’ra matá-lo;
Porquanto eu agora sei que temes Deus”.

Erguendo Abraão seus olhos de repente,
Vê um cordeiro, que no mato preso está,
E o tomando, oferece-o alegremente;
Assim “No monte do Senhor se proverá”.
A voz do Anjo é ouvida novamente;
“Diz o Senhor: Porque fizeste esta ação,
Deveras, Eu abençoarei a tua semente,
E nela, as nações benditas se farão”.

O nosso Isaque oferecemos com firmeza
No Moriá onde finda o ideal,
Pois foi ali que alcançaram fortaleza,
Os vencedores, sob canto angelical;
Ali, o nosso Deus jurou fidelidade,
Também os santos se encheram de valor,
E só teremos a perfeita santidade,
Depois que formos para o monte do Senhor.`},
{id:"h381",num:381,title:"O Cordeiro de Deus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vejo um homem na cruz pendurado 
A derramar sangue, por meu pecado, 
É o Cordeiro de Deus imolado, 
Que por mim sofre grandíssima dor; 
Quanto padece na cruz, no altar, 
Cristo Jesus, o meu bom Salvador, 
Para fazer-me um tesouro herdar. 
No santo reino do Senhor! 

Em oração, quando rompe a alva, 
Sinto remorsos no fundo da alma, 
Porque na cruz sofreu Cristo com calma, 
Todo castigo, por mim pecador; 
Quis o supremo Pai determinar 
Tão cruel morte ao meu Salvador; 
Para no céu conceder-me lugar 
Junto de Cristo Redentor. 

Oh! Quanta dor não sentiu o Eterno, 
Quando nos deu Cristo meigo e terno! 
Para minh’alma salvar do inferno, 
Por mim morreu o meu bom Salvador, 
Os meus pecados na cruz expiou 
E morte horrenda sofreu com amor. 
Mas sobre Si minha culpa tomou, 
O meu amado Redentor. 

Faz Jesus Cristo. que eu mais Te ame 
E mais e mais Tua graça proclame; 
Livra-me de todos fortes liames, 
Que sempre tece o vil tentador; 
Sobre o altar, por mim Cristo subiu, 
Oferecendo holocausto de amor: 
Qual um cordeiro, na cruz sucumbiu 
Cristo Jesus, meu Salvador.`},
{id:"h382",num:382,title:"Olhando Para o Calvário",category:"harpa",author:"J.P.Q João P. Queiroz",lyrics:`Na cruz do Calvário olhando,
Avistei o Salvador;
Meu pecado expiando,
Revelou-se o Seu amor.

Coro:
Lá na fonte desta luz,
que me trouxe um clarão,
Foi onde eu achei abrigo,
vida, paz e salvação.

Vi Jesus crucificado
A sofrer tão grande dor,
Foi Seu sangue derramado
Pelo pobre pecador.

Ó Cordeiro imaculado,
Que morreste sobre a cruz!
Livra-me do vil pecado,
Ó meu Salvador Jesus!`},
{id:"h383",num:383,title:"O Sustento da Alma",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Dá sustento à minha vida, 
A Palavra do Senhor; 
A minh’alma abatida, 
Vem poder Consolador: 
Livramento glorioso 
Nós achamos em Jesus, 
NEle o coração ditoso 
Já desfruta Sua luz. 

Coro:
Jesus Cristo deu-me salvação, 
Também vida eternal; 
Deu-me gozo no meu coração, 
E poder celestial; 
Sua graça é bastante, 
Divina! é Seu amor; 
Tenho vida exultante, 
Pelo bom Consolador!

Santos, todos proclamemos 
Que Jesus há de voltar, 
E que Lhe servir devemos 
E sinceros O amar. 
Resaurgiu da sepultura, 
E com vida se mostrou 
As felizes criaturas, 
Que no mundo tanto amou. 

Que não haja ociosos 
Na Igreja do Senhor, 
Mas, sim, crentes fervorosos 
Trabalhando com vigor; 
Quem aqui tiver vencido 
Por Jesus e Seu amor, 
Há de ter real vestido, 
Para as bodas d’esplendor! 

Entraremos na formosa 
Sala, cheia de fulgor, 
Preparada para a Esposa 
De Jesus, o Salvador; 
Quando formos lá chegados 
Grande festa haverá; 
E Jesus, que nos tem dado 
Salvação, nos servirá`},
{id:"h384",num:384,title:"Sinto Vida do Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Sinto que vivo no Senhor, 
Que veio me salvar; 
E Sua lei, por Seu amor, 
Desejo sempre guardar. 

Coro:
Habitarei sempre em Jesus, 
Firmá-Lo-ei no coração; 
Deus, pela fé, em mim produz 
Perfeição!

Sinto que vivo no Senhor, 
Em liberdade já, 
Jesus me cobre de favor, 
Repouso sempre me dá. 

Sinto que vivo no Senhor, 
Na rocha eternal, 
Que me sustenta com vigor, 
Nas tempestades do mal. 

Sinto que vivo no Senhor. 
E sempre viverei; 
Por Seu poder consolador, 
Em Deus permanecerei.`},
{id:"h385",num:385,title:"Amemos o Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Irmãos, amemos o Senhor, 
Por Seu divinal amor; 
Pois a nossa culpa expiou, 
Com sangue que derramou. 

Coro:
Irmãos, amemos o Senhor, 
Pois Ele Já nos amou; 
E do pecado enganador, 
Com Seu sangue nos lavou.

Irmãos, amemos o Senhor, 
O nosso ensinador; 
Ele é a fonte do saber 
Pra todo que nEle crer. 

Irmãos, amemos o Senhor, 
O nosso bom Salvador; 
E o consumador daquela fé, 
Que desce do Deus, que “É”. 

Irmãos, amemos o Senhor, 
Também o Consolador, 
E a nosso Pai Celestial, 
Que paz nos dá eternal.`},
{id:"h386",num:386,title:"Vencidos os Combates",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó, não temas tu, Esposa de Jesus, 
Em justiça Deus te edificará! 
Tua tenda que dimana viva luz, 
Ele mais aumentará. 

Coro:
Toda arma de rancor, 
Contra ti se desfará, 
Quando o inimigo 
se erguer com seu furor 
Ele não te vencerá!

Toda arma fabricada com rancor. 
Te combate, mas jamais te vencerá, 
O inimigo que ataca com furor, 
O Senhor abaterá. 

Lá no céu não hás de ter recordação 
Dos combates que sofreste por amor; 
Mas ali terás sublime posição 
Com Jesus, teu Salvador. 

Patriarcas e profetas já estão 
Lá no céu te esperando com amor: 
Sê fiel e guarda a divina! unção 
Para as bodas d’esplendor.`},
{id:"h387",num:387,title:"Derrama Teu Espírito",category:"harpa",author:"Erik Janson",lyrics:`Derrama sobre nós o Teu Espírito,
Como fizeste em Jerusalém;
À Tua grei, Ó manda o mesmo fogo.
Indispensável para nós também!
A Tua grei, ó manda o mesmo fogo,
Indispensável para nós também! 

Derrama sobre nós o Teu Espírito
Como em casa do centurião,
E dá-nos o poder da Tua Palavra
Fazendo a luz brilhar na escuridão.
E dá-nos o poder da Tua Palavra
Fazendo a luz brilhar na escuridão. 

Derrama sobre nós o Teu Espírito,
E dá-nos, hoje, muitas conversões;
Ó deixa-nos sentir poder celeste,
E vivifica os nossos corações;
Ó deixa-nos sentir poder celeste,
E vívifica os nossos corações. 

Derrama sobre nós o Teu Espírito,
E aos que sofrem dá Tua proteção;
A orar ficamos em amor unidos,
Para obter a prometida unção,
A orar ficamos em amor unidos
Para obter a prometida unção. 

Desperta, Jesus Cristo, os que dormem 
O mui profundo sono do "jardim”; 
Como operaste nos antigos tempos, 
Com Teu poder nos guia até o fim. 
Como operaste nos antigos tempos, 
Com Teu poder nos guia até o fim.`},
{id:"h388",num:388,title:"Canta, ó Crente",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Canta com vida, ó crente! 
Doce será Cantar! 
Anda só para a frente, 
Deixa o teu pesar; 
Canta nas noites tristes, 
Canta no sol, na luz; 
O mal assim resistes: 
Canta pra Jesus! 

Canta com vida, á crente, 
Alegra o coração! 
Louva ao Deus clemente, 
Com feliz canção! 
Cheio está o mundo 
De turbação e dor; 
Canta o amor profundo 
Do teu Salvador. 

Canta com vida, ó crente! 
Deus teu socorro é; 
Guarda-te a mão potente, 
Se tiveres fé. 
Cristo, sim, te levanta, 
Quando medroso estás, 
Se confiando cantas 
Seu amor veraz.`},
{id:"h389",num:389,title:"Lava-me ó Deus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tua justiça eu quero cumprir, 
Alegremente me vou batizar 
Por imersão, para Cristo seguir 
E meus pecados, assim sepultar. 

Coro:
Lava-me, lava-me, ó Deus de amor, 
No sangue puro de Cristo Jesus; 
Torna minh’alma mais alva que a luz, 
No sangue puro de Cristo Jesus.

Quando das águas eu ressuscitar, 
Já criação nova sou em Jesus; 
Posso e Ele servir e honrar, 
Por crer na obra sublime da cruz. 

Com toda força, meu bom Salvador, 
Teu santo nome eu invocarei, 
Para que eu vá de valor em valor, 
Ao céu de luz, onde descansarei.`},
{id:"h390",num:390,title:"Um Coração Bondoso",category:"harpa",author:"Frida Vingren",lyrics:`Um coração, bondoso sim, custa dor, obter; 
Ser manso, amoroso e santo em todo o ser; 
Manando nova vida ao coração - dá luz. 
E toda a minha lida será só em Jesus. 

Quem quer seguir os pessos 
de nosso pai Abraão, 
No coração, os laços, então, se quebrarão; 
Isaque é oferecido em cima do altar; 
Jacó, com gran gemido, Raquel vai enterrar. 

Se grande é o sacrifício - Isaque no altar, 
Se torna em beneficio pra quem o ofertar, 
Pois tem profunda calma e paz celestial, 
Também de Deus alcança, aprovação real. 

Na cova, Jeremias, lamenta grande dor, 
Na escuridão não via o bom Consolador; 
Sim, grandes amarguras se tornam em prazer, 
Vêm anjos das alturas “O sonhador” a ver. 

Arão foi castigado por sua rebelião, 
E, triste, humilhado, aceita exortação; 
Consagra tua vida pra Deus melhor honrar; 
Assim em dor e lida, precisas te guardar. 

Acima nuvens densas o sol sempre a brilhar; 
Promessas mais imensas não podem a ti falhar. 
Põe plena confiança em quem não pode errar, 
Jesus, já sem tardança vem tua dor sarar.`},
{id:"h391",num:391,title:"Jesus no Monte da Ascensão",category:"harpa",author:"Frida Vingren",lyrics:`Jesus disse aos discípulos, no monte, ao subir:
"Detei-vos em Jerusalém, pois há de se cumprir
A vinda gloriosa do Consolador,
Pra revestir as testemunhas do Senhor".

Coro:
Descendo o fogo do altar, o vento de amor,
Depressa foram proclamar o Salvador.

Encheu-se o cenác'lo de gloriosa luz; 
Descendo o fogo divina!, a nós voltou Jesus. 
E todos, revestidos com o poder do céu, 
Falaram noutras línguas em louvor a Deus. 

O povo, assustado com o poder do céu, 
Não compreendeu que isto foi o que Deus prometeu. 
Mas Pedro lhes proclama: "Assim diz o Senhor: 
No fim dos dias, Vos darei Consolador". 

Assim Jesus te manda orar e esperar 
O Santo Espírito de Deus, que vem pra t’ensinar; 
Jesus, a gloriosa unção, te mandará, 
E Seu amor sublime, proclamar irás.`},
{id:"h392",num:392,title:"Peregrinos Somos",category:"harpa",author:"M.A.N Manuel Augusto das Neves",lyrics:`Peregrinos somos aqui
Té o labor findar;
Deste mundo queremos ir
Ao celeste lar. 

Coro:
Oh! Pátria mui feliz
Em ti irei morar;
Eu irei morar
Eu irei morar
Jerusalém, oh meu país
E meu querido lar!
Jerusalém, oh meu país
E meu querido lar!

Minha grande consolação
É sempre em ti morar,
Oh, querida, bela Sião,
Meu eterno lar!

Como o povo de Abraão, 
Sempre a viajar, 
Para a terra da promissão, 
Santo e doce lar. 

Ó Senhor, queremos vencer, 
E de Ti alcançar 
Gozo, paz, eterno prazer, 
No bendito lar! 

É o meu desejo, Jesus, 
Sempre peregrinar; 
Dirigido por lua luz 
Té que chegue ao lar.`},
{id:"h393",num:393,title:"Há um Amigo Mui Chegado",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Há um amigo mui chegado - Cristo Senhor, 
Pois salvou-nos do pecado e do temor; 
Este amigo agonizava. 
Quando o mundo resgatava, 
E de Deus o amor mostrava; dai-Lhe louvor! 

Conhecê-Lo é ter vida, Cristo Senhor. 
NEle nos é permitida paz no labor; 
Ele sobre nós derrama 
Sua graça, pois nos ama, 
E pra Si a todos chama; dai-Lhe louvor! 

Sempre é o mesmo, nunca muda. Cristo Senhor 
E a pedra de ajuda; vem, pecador! 
Bom maná é no deserto, 
Nosso guia, amigo certo, 
Seu amor é céu aberto; dai-Lhe louvor!`},
{id:"h394",num:394,title:"A Mão ao Arado!",category:"harpa",author:"Frida Vingren",lyrics:`Quem sua mão ao arado já pôs, 
Constante precisa ser; 
O sol declina e, logo após, 
Vai escurecer. 
Avante, em Cristo pensando, 
Em oração vigiando, 
Com gozo e amor trabalhando, 
Pra teu Senhor. 

Não desanimes, por ser tua cruz 
Maior que a de teu irmão; 
A mais pesada levou teu Jesus, 
Te consola, então; 
A tua cruz vai levando, 
Como Jesus perdoando. 
Alegremente andando 
Pra o lindo céu. 

Sê bom soldado de Cristo Jesus, 
Sofrendo as aflições, 
Não sufocando a mensagem da cruz, 
Nas perseguições; 
Vai Seu amor proclamando, 
Novas de paz, sim, levando. 
Aos que estão aguardando 
A salvação. 

Quando, enfim, tu largares a cruz, 
Jesus te coroará; 
Com santo gozo em glória e luz 
Te consolará. 
Esquecerás teus lidares. 
Tribulações e pesares, 
Quando no céu desfrutares, 
Perfeita paz.`},
{id:"h395",num:395,title:"Ide por Todo Mundo",category:"harpa",author:"Emílio Conde",lyrics:`Ide por todo o mundo e dizei: 
“E-Me dado todo o poder"; 
Ide. anunciai que já ressuscitei. 
Pra dar vida a todo o que crer. 

Coro:
Confiando, irei onde me mandar; 
Pela terra, pelo mar também. 
Eis que estou convosco para vos guardar, 
Por todos os séculos. Amém.

Ide e ensinai todas as nações; 
Publicai a salvação e paz; 
Cristo já venceu a morte e seus grilhões, 
Liberdade agora, a todos traz. 

Da salvação a porta aberta está; 
Quem por ela hoje quer entrar? 
E Jesus quem oferece e quem dá 
Livre entrada no celeste lar.`},
{id:"h396",num:396,title:"Além do Nosso Entendimento",category:"harpa",author:"Ernesto Wootton",lyrics:`Muito além do nosso entendimento, 
Alto mais que todo o pensamento, 
Glorioso em seu sublime intento, 
É o amor de Deus, sem par. 

Coro:
Grande amor! Amor de Deus! 
Enche a terra e enche os céus! 
Grande amor! Amor que abrange 
A todo o mundo e atinge a mim!

Fez um sacrifício infinito 
Dum valor imenso, inaudito; 
Dando-nos o Filho Seu bendito; 
Calculei o amor de Deus! 

Grande, foi mui grande o meu pecado; 
Triste, perigoso o meu estado; 
Mas o amor que nunca foi sondado 
Me salvou - o amor de Deus! 

Foi quem perdoou os pecadores, 
Rogos atendeu de malfeitores, 
Quem sarou os pobres sofredores, 
Esse imenso amor de Deus!`},
{id:"h397",num:397,title:"O Salvador me Achou",category:"harpa",author:"Frida Vingren",lyrics:`Em pecados e temor o Salvador me achou,
Tão indigno pecador, sem ter do céu a luz,
No Calvário ao morrer minh’alma resgatou;
Meu perdão foi consumado lá na cruz.

Coro:
Vem ao Senhor, vem pecador:
Ele é terno e mui fie!, vem pecador!
Vem ao Senhor, Deus é amor;
Ouve Sua terna voz “Vem, pecador”!

Do sepulcro ressurgiu meu Redentor Jesus;
Ele a morte já venceu - também o nosso algoz;
Vida eterna o pecador goza por Sua cruz
Pois os mortos hão de ouvir Sua terna voz.

Para o céu subiu Jesus, ganha a vitória cá.
E na dextra do bom Deus, tem-No por Mediador,
Intercede em teu favor, não te detenhas lá.
Não desprezes esta voz de teu Senhor.`},
{id:"h398",num:398,title:"Perto do Meu Redentor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Desejo estar em um lugar 
Mui perto do meu Redentor; 
Ali eu posso descansar, 
Por Seu amparo e Seu amor. 

Coro:
Mui perto do meu Redentor, 
Seguro abrigo encontrarei; 
Me guardará do tentador, 
Assim eu nada temerei.

Ninguém me poderá tirar 
A paz que frui o coração; 
Jesus bondoso vai me dar 
A mais segura proteção. 

Tristezas, nem temor terei, 
Estando perto de Jesus; 
Envolto sempre me verei, 
Com Seu fulgor, com Sua luz.`},
{id:"h399",num:399,title:"Terra de Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Deste mundo, sim, além, há um país de luz; 
Oh! Não queres ir lá? Oh! Não queres ir lá? 
Onde as trevas não se vêem, 
pois brilha ali Jesus; 
Oh! Não queres ir lá? Oh! Não queres ir lá? 

Coro:
Terra de Jesus, terra de amor! 
Oh! Não queres ir lá? Oh! Não queres Ir iá? 
Onde brilha a luz do meu Salvador; 
Oh! Não queres Ir lá? Oh! Não queres Ir lá?

Pelas portas de fulgor, não pode o mal entrar; 
Oh! Não queres ir lá? Oh! Não queres ir lá? 
Nem a morte, luto ou dor, no céu terão lugar, 
Oh! Não queres ir lá? Oh! Não queres ir lá? 

Oh! Que divina! mansão Jesus nos preparou! 
Oh! Não queres ir lá? Oh! Não queres ir lá? 
Onde todos os irmãos 
vão ver quem os salvou, 
Oh! Não queres ir lá? Oh! Não queres ir lá?`},
{id:"h400",num:400,title:"Em Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em Jesus, vivendo cada dia,
Em Jesus eu tenho alegria!
Em Jesus, oh, doce harmonia!
Em Jesus, desfruto a paz de Deus!

Em Jesus, na rocha inabalável,
Em Jesus, no homem incomparável!
Em Jesus, no Deus tão adorável!
Em Jesus, o mal não temerei!

Em Jesus a graça é infinita,
Em Jesus, oh! bênção inaudita;
Em Jesus, minh'a!ma é bendita;
Em Jesus eu tenho salvação!

Em Jesus não temo o mal e a morte,
Em Jesus estou firmado e forte!
Em Jesus meu barco ruma ao norte;
Em Jesus eu sempre hei de vencer!`},
{id:"h401",num:401,title:"Jesus Voltará",category:"harpa",author:"Hebert Nordlund",lyrics:`Tudo nos mostra que Cristo já volta;
Breve Jesus voltará!
Já deste mundo o mar se revolta;
Breve Jesus voltará. 

Coro:
Breve virá, breve virá,
Breve Jesus voltará.

Cristão, acorda, Sua vinda é certa:
Breve Jesus voltará!
Pra recebê-Lo estás bem alerta?
Breve Jesus voltará 

Crente proclama para os pecadores:
Breve Jesus voltará!
Não haverá mais tristezas nem dores:
Breve Jesus voltará. 

Consola o coração que lhe clama,
Breve Jesus voltará!
Pra Suas bodas o bom Rei nos chama:
Breve Jesus voltará.`},
{id:"h402",num:402,title:"Ao Gólgota",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao Gólgota ascende alma minha,
Contempla ali teu Senhor,
Também a agonia que tinha,
Sofrendo por ti com amor;
Não vês uma rubra torrente
Cobrindo a terra de horror?
E o sangue de Cristo inocente
Vertido por mim, pecador. 

Minh'alma, te lava contente 
No sangue do teu Redentor! 
É Cristo a senda somente. 
Que leva ao repouso de amor; 
Jubila no onipotente 
Por toda a Sua mercê, 
Também pelo dom excelente 
De Cristo em todo o que crê! 

Minh’alma, ó sobe p'ra o alto! 
Ali ouvirás o falar 
D'Aquele a quem eu exalto; 
Não sabes que vê teu penar? 
Na graça divina medita, 
Que tens em Jesus, teu Senhor; 
Recebe a glória bendita 
Orando a Deus, com fervor! 

Hosanas ao onisciente! 
Jesus veio aqui pra salvar 
Minh'alma da "velha serpente” 
Que anda no mundo a tentar; 
Hosanas a Deus entoemos 
Por Sua Palavra de amor; 
Hosanas e glória rendemos, 
A Cristo Jesus, o Senhor.`},
{id:"h403",num:403,title:"Gozo Real",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Oh! Que gozo real sinto no meu ser, 
Já tenho de Deus perdão! 
Pois Jesus nos diz: Que qualquer que crer 
Recebe salvação. 

Coro:
Se tu crês, ó vem o passo dar, 
Vem o passo dar, sim, vem o passo dar! 
Se tu crês, ó vem o passo dar, 
Pois Jesus te quer salvar. 
2 Por amor foi Cristo, meu Redentor, 
Da glória, aqui desceu; 
E transforma a vida dum pecador, 
Na graça que nos deu.

Que mercê, que amor o Senhor mostrou 
Morrendo na dura cruz; 
Sangue divina! por nós derramou, 
O Salvador Jesus!`},
{id:"h404",num:404,title:"Em Glória Virá",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Espera do céu, seu Senhor, o fiel 
Aguarda orando, pois há de voltar 
Na nuvem, em glória o Emanuel, 
Com grande poder, a fim de o buscar. 

Coro:
Em glória virá o Filho de Deus, 
Sempre orando Jesus esperai; 
Se virdes a “estrela da alva” no céu, 
Alerta estai!

2 Ó Pai amoroso, envia Jesus. 
O crente fiel O espera do céu; 
Ó manda-lhe logo a celeste luz, 
Em que há de vir o Filho de Deus. 

O santo Evangelho se há de cumprir 
E breve nas nuvens veremos Jesus; 
“Assim descerá como O vistes subir" 
O que S’imolou por nós sobre a cruz!`},
{id:"h405",num:405,title:"Queres Perdão",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Queres ser salvo, queres perdão, 
Paz e repouso no coração? 
O que farás para teres a luz? 
Com toda a força - Crê em Jesus; 
Se hoje queres em Cristo crer. 
Inda que morto hás de viver; 
Deixa este mundo enganador, 
Crê só em Cristo. teu Salvador. 

Ó crê em Cristo - ei-Lo aqui 
Em nosso meio, chora por ti; 
Ele te ama; queres a luz? 
Queres vitória? - Crê em Jesus, 
Sim! Hoje creio no Salvador, 
E minha vida, meu Redentor; 
Nas minhas lutas, o Capitão; 
Creio em Cristo de coração. 

Quando o inimigo com seu terror 
Ruge em torno com mui furor 
Não desanimes por tua cruz, 
Olha pra cima - Crê em Jesus; 
E nas terríveis provas d’horror, 
Segue avante com teu Senhor, 
Ele te guarda da corrupção 
E te liberta da tentação.`},
{id:"h406",num:406,title:"A Sombra do Meu Redentor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Preciso sempre encostar-me
Aos pés do meu bom Redentor;
Presto virá pra levar-me
Aos céus, minha pátria de amor. 

Coro:
Eu preciso sempre lançar-me 
Nos braços do meu Redentor; 
Só em Jesus vou também abrigar-me 
No Seu sublime amor.

Preciso sempre deter-me 
A sombra do meu Redentor; 
Não posso só defender-me 
E alçar a bandeira de amor. 

Preciso sempre chegar-me 
Contrito aos pés do Salvador, 
Para poder consolar-me 
No Seu abundante amor.`},
{id:"h407",num:407,title:"Ó Criador Bendito",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Criador bendito, ó fonte de esperança, 
A Ti, ó Pai contritos buscamos com confiança; 
Nos deste em herança a glória sempiterna; 
O pão da vida eterna, ó manda-nos dos céus! 

Coro:
Excelso Criador, supremo benfeitor, 
O Teu amor derrama em nós, qual viva chama 
Excelso Criador, supremo benfeitor, 
O Teu amor derrama, por Teu Consolador.

Unidos esperamos o Teu celeste ensino; 
Ó manda, suplicamos por Teu poder divino; 
Aceita este hino, que nós a Ti cantamos, 
Pois gratos Te louvamos, por Tua salvação. 

O coração se alegra e a alma está contente 
No dia em que se entrega 
ao Deus onipotente; 
Que paz profunda sente a alma do perdido 
Que hoje é um remido por Cristo, o Salvador!`},
{id:"h408",num:408,title:"Abre os Meus Olhos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Abre os meus olhos em Tua luz, 
Teu rosto quero ver, Jesus, 
Põe em meu coração Teu amor. 
E dá-me a paz e Teu fervor; 
Humildemente acudo a Ti. 
Porque Tua terna voz ouvi 
Meu guia sê, Espírito Consolador. 

Abro os ouvidos para ouvir 
Tua Palavra a me ungir. 
Belas palavras de doce amor, 
Ó! Meu bendito Salvador, 
Consagro a Ti meu frágil ser! 
Para cumprir o Teu querer, 
Enche meu ser, Espírito Consolador. 

Abre-me a mente para ver 
O Teu amor em gran poder; 
Dá-me Tua graça, dá-me vigor; 
Faz-me na luta, vencedor; 
Sê Tu o meu refugio aqui, 
Aumenta minha fé em Ti, 
Sustenta-me, Espírito Consolador. 

Abre-me a porta divinal 
Do Teu palácio de cristal. 
Pois o Teu lindo rosto Senhor, 
Quero no céu ver, d’esplendor; 
E quando lá enfim entrar, 
Teu santo nome vou louvar 
Pelo teu bom Espírito Consolador.`},
{id:"h409",num:409,title:"Trabalhadores do Evangelho",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Trabalhadores do Evangelho, 
Em breve ceifareis; 
Quer fracos vós sejais, ou velhos, 
Do céu vigor tereis. 

Coro:
Os que esperam no Senhor 
Novas forças obterão; 
Como águias voarão, 
Subirão para as alturas; 
Correrão sem se cansar, 
Sem fatigar hão de andar; 
Correrão sem se cansar, 
Sem fatigar hão de andar; 
Correrão sem se cansar, 
Até no céu chegar!

No bom trabalho, quantas vezes, 
Estamos a falhar, 
Sempre devemos nos revezes 
Em Cristo confiar. 

Jesus está ao nosso lado. 
Sua força nos dará; 
O nosso Salvador amado, 
Sim, tudo suprirá. 

Em Cristo sempre confiando 
Socorro vamos ter; 
O Salvador do céu baixando
Virá nos socorrer!`},
{id:"h410",num:410,title:"Jesus Meu Rei Glorioso",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus é meu Rei glorioso, 
É grato cantar-Lhe louvor; 
É Rei, mas me torna ditoso, 
Enchendo-me do Seu amor; 
Deixando Seu trono de glória 
Me veio livrar desta escória. 
Já sou mui feliz, já sou mui feliz com Deus! 

Jesus é meu Rei mui amado, 
Nas lutas, na dor, sempre está 
Paciente e humilde ao meu lado, 
Ajuda e consolo me dá; 
Por isso constante O sigo, 
Pois é meu Pastor e amigo. 
Já sou mui feliz, já sou mui feliz com Deus! 

Jesus, que pudera eu dar-Te 
Por tanto amor para mim? 
Bastante é servir-Te e amar-Te? 
E tudo entregar-me a Ti? 
Aceita, então, minha vida, 
Que a Ti só, se prostra rendida. 
Já sou mui feliz, já sou mui feliz com Deus!`},
{id:"h411",num:411,title:"Nós Somos Teus",category:"harpa",author:"G.W.O Guido W. de Oliveira",lyrics:`Filho do eterno Deus, nós somos Teus! 
Compraste-nos, Jesus, por Tua cruz, 
Rendemo-nos, Senhor, cheios de fé e amor; 
Nós somos Teus, Filho de Deus! 

O Teu caminho, ó Deus que leva ao céu, 
Faze-nos percorrer até morrer. 
Não tem que recear todo o que nele andar; 
Tu és, Senhor, o bom Pastor. 

A quem nos quis salvar vamos louvar 
Com voz e coração, em santa união, 
Aceita, pois, Senhor, nosso veraz louvor! 
Graças, oh! Deus, que somos Teus!`},
{id:"h412",num:412,title:"Jesus Cristo, Bem Amado",category:"harpa",author:"F.F.M Francisca F. Menezes",lyrics:`Glória ao Salvador divino. 
Nosso guia e Redentor, 
Glória seja ao Deus trino; 
Aleluia ao Deus de amor! 

Coro:
Jesus Cristo, bem amado, 
Poderoso Salvador, 
Ele era ontem, é hoje, 
Será sempre o Deus de amor!

Alegrar-se todos devem 
Pela grande salvação; 
Honra e glória a Deus elevem, 
Pois nos dá Seu galardão. 

Adorei a Deus, com canto, 
Ele é compassivo e bom, 
Ó divino Espírito Santo, 
Desça sobre nós Teu dom. 

Ao Teu nome seja glória, 
O bendito e bom Senhor! 
Tu nos guias pra vitória, 
Aleluia ao Redentor!`},
{id:"h413",num:413,title:"Meu Pastor",category:"harpa",author:"Adriano Nobbre",lyrics:`Meu Pastor é Jesus Cristo 
NEle quero confiar; 
Com Jesus, não tenho falta, 
Junto a Ele eu quEro andar; 
Me conduz ao bom descanso; 
Para o campo verde em flor, 
Refrigera, sim, minh’alma, 
Saciando-me de amor. 

Ele é meu companheiro; 
Com Jesus desejo andar; 
Pois me dá vigor e força, 
P’ra que eu possa caminhar; 
Ele é quem dá coragem, 
Para nada eu temer; 
Mesmo próximo à morte 
Certo estou que vou vencer. 

Caminhando ao Seu lado 
Não mais temerei o mal; 
Seu bordão e Seu cajado 
Dão-me proteção real; 
Contra o meu inimigo 
O Senhor sempre virá; 
Me prepara uma mesa 
E comigo nela está. 

Unge a cabeça minha 
Com óleo do Seu amor; 
O meu gozo é transbordante, 
Pois meu cálice tem dulçor; 
Por Sua misericórdia 
E por Seu sublime bem 
Habitarei em Sua casa 
Eternamente, amém?`},
{id:"h414",num:414,title:"Tem Compaixão do Pecador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Salvador, ó Pai de amor? 
Tem compaixão do pecador; 
Sem ser em Ti não achará 
A salvação, que Tu nos dás. 

Coro:
Tem compaixão, ó Salvador, 
Tem compaixão do pecador! 
Ó vem lavar seu coração, 
Ó vem lhe dar a salvação!

Sem ser em Ti não há perdão 
Pra o pecador, nem salvação; 
Só mesmo em Ti o pecador 
Encontrará um Salvador. 

Ó Rei doa reis, tem compaixão 
Do pecador na perdição 
Seu coração, ó vem lavar 
No sangue Teu purificar.`},
{id:"h415",num:415,title:"Jesus Te Quer Curar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`A terna voz do Salvador 
Te fala comovida; 
"Ó vem ao médico de amor, 
Que dá aos mortos vida"! 

Coro:
Cristo Jesus te quer curar, 
E tem poder p’ra te curar, 
Dos males todos te livrar, 
Se nEle confiares!

Crê tu, a quem já Satanás 
Há anos tem ligado; 
A fé te salva, vai-te em paz, 
De todo o mal curado! 

Os surdos ouvem, cegos vêem, 
Pois Cristo é poderoso! 
os coxos saram e andam bem. 
Por Seu poder glorioso! 

Sinais pra sempre seguirão 
Aos verdadeiros crentes! 
Demônios, sim, expulsarão, 
E curarão as gentes.`},
{id:"h416",num:416,title:"Quando o Povo Salvo Entrar",category:"harpa",author:"Samuel Nyström",lyrics:`Anjos aos milhares, no céu, verão 
Quando o povo salvo entrar; 
Crentes coroados também serão. 
Quando o povo salvo entrar. 

Coro:
Quando o povo salvo entrar, 
Quando o povo salvo entrar; 
Multo grande alegria no céu haverá, 
Quando o povo salvo entrar.

Os remidos lá hão de se encontrar, 
Quando o povo salvo entrar; 
Vestes brancas todos hão de trajar, 
Quando o povo salvo entrar. 

Todos vencedores, lá hão de estar, 
Quando o povo salvo entrar; 
A tribulação não terá lugar, 
Quando o povo salvo entrar. 

O Cordeiro morto, (que vivo está) 
Quando o povo salvo entrar; 
Para sempre em glória dominará, 
Quando o povo salvo entrar.`},
{id:"h417",num:417,title:"Bastante Para Mim",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`No meio duma grande dor,
A cruz de Cristo eu vi,
Qual viva fonte de amor,
Bastante para mim!

Coro:
Lá da cruz corre sem cessar,
Insondável como é o mar.
Esta graça, que brota assim,
Basta para mim!

Meu coração, a vacilar
E apenas, pude assim
Na graça crer; mas fui achar
Bastante para mim!

Cravados já, então, na cruz,
Os meus pecados vi;
E a graça achei de meu Jesus;
Bastante para mim!

Com meu Jesus eu cantarei
No céu, alegre, enfim;
Que Sua graça foi, direi:
Bastante para mim!`},
{id:"h418",num:418,title:"Sou Um Soldado",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Sou um soldado de Jesus 
E servo do Senhor; 
Não temerei levar a cruz, 
Sofrendo grande dor. 

Coro:
Depois da batalha me coroará, 
Deus me coroará; 
Deus me coroará; 
Depois da batalha me coroará, 
Na celestial mansão; 
Lá verei o meu Rei, 
E terei meu galardão, 
Depois de batalha me coroará, 
Na cidade de Sião!

Lutaram outros sem temor, 
Mui forte hei de ser; 
Pelejarei por meu Senhor, 
Confiando em Seu poder. 

Se eu for fiel ao meu Jesus 
E não voltar pra trás, 
Alcançarei no céu de luz, 
Lugar de santa paz.`},
{id:"h419",num:419,title:"Vinde, Pecadores",category:"harpa",author:"Otto Nelson",lyrics:`Vinde todos pecadores 
A Jesus, o Salvador; 
Vinde logo, sem temores, 
Encontrar o Redentor. 

Coro:
Sim eu sei; Oh! Eu sei, 
Cristo salva o perdido pecador! 
Sim, eu sei; oh! Eu sei, 
Cristo salva o perdido pecador!

Dá aos fracos, fortaleza; 
Das montanhas planos faz, 
Ao deserto dá beleza, 
E aos crentes, luz e paz. 

Nas fraquezas, ei-Lo perto, 
Dominando a força má; 
No caminho, guia certo, 
E Sua graça sempre dá. 

Tenho gozo mui superno 
Pelo sangue que verteu, 
Nem o mundo, nem o inferno, 
Tiram a vida que me deu. 

Quando Cristo vier na glória 
A buscar o povo Seu. 
Cantaremos a história, 
Do amor de Deus, no céu.`},
{id:"h420",num:420,title:"O Que Buscas Ansioso?",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O que buscas ansioso 
Ó perdido pecador? 
Tudo que tens por precioso, 
Murchará qual linda flor! 
Quando teu fim chegar, 
Quando teu fim chegar, 
Há de cessar o teu gozo, 
Mas vai o crente entrar, 
Mas vai o crente entrar, 
Num lar eterno de repouso! 

Neste mundo há belas flores, 
Que nos querem seduzir, 
Mas espinhos tÊm, que dores, 
Hão de sempre produzir; 
Mas Cristo, o Salvador, 
Mas Cristo, o Salvador, 
De Saron é linda rosa, 
Tem excelente odor, 
Tem excelente odor, 
E alegra a alma desditosa! 

Larga o mundo e o pecado 
Que te trazem perdição; 
E aceita de bom grado 
A Jesus no coração. 
Vida eternal terás; 
Vida eternal terás; 
Sim, fruirás santo gozo; 
Cristo será tua paz, 
Cristo será tua paz, 
E os altos céus o teu repouso.`},
{id:"h421",num:421,title:"Careço de Jesus",category:"harpa",author:"Anônimo",lyrics:`Quando de Ti careço 
Jesus, meu Salvador! 
O Teu amor, O vem m'alegrar, 
Quando de Ti careço.`},
{id:"h422",num:422,title:"No Céu não Entra Pecado",category:"harpa",author:"I.A.F Ingrid Anderson Franson",lyrics:`No céu não entra pecado
Fadiga, tristeza, nem dor;
Não há coração quebrantado,
Pois todos são cheios de amor,
As nuvens da vida terrestre
Não podem a glória ofuscar
Do reino de gozo celeste,
Que Deus quis pra mim preparar!

Coro:
Irei eu p’ra linda cidade,
Jesus me dará um lugar,
Co’os crentes de todas Idades,
A Deus hei de sempre louvar.
Do céu tenho muitas saudades,
Das glórias que lá hei de ver;
Oh! Que gozo vou ter,
Quando eu vir meu Senhor,
Rodeado de grande esplendor!

Pagar não é necessário
A casa, que lá hei de ter;
E meu eternal vestuário,
No céu, nunca vai se romper.
Jamais viverei em pobreza,
Aflito no meu santo lar,
Ali há bastante riqueza,
Da qual podarei desfrutar.

No céu o luto é banido,
Enterros não hão de passar;
Sepulcros jamais são erguidos,
Lá mortos não vou encontrar.
Os velhos serão transformados;
Mudados nós vamos ficar.
Quais astros por Deus espalhados
No céu, para sempre brilhar.`},
{id:"h423",num:423,title:"De Ti Preciso Mais",category:"harpa",author:"Almeida Sobrinho",lyrics:`Jesus, preciso mais de amor, 
Reino de Deus, em meu coração; 
Da compaixão Tu és o Senhor; 
De Ti preciso mais. 
De Ti preciso mais, 
Do Teu amor veraz; 
Sei que estás pronto pra me valer, 
De Ti preciso mais! 

Jesus, preciso mais de poder, 
Dom do eterno Consolador; 
És o dador que enche meu ser; 
De Ti preciso mais! 
De Ti preciso mais, 
Do Teu poder veraz, 
Da lua graça, ó vem me encher, 
De Ti preciso mais! 

Jesus, preciso mais Te imitar, 
Com humildade e submissão; 
Tua instrução eu quero guardar, 
De Ti preciso mais, 
De Ti preciso mais, 
Da graça eficaz, 
Sei que Tu queres ma conceder, 
De Ti preciso mais! 

Jesus, preciso mais de ouvir 
No meu silêncio a voz de amor, 
Que dá vigor para eu Te servir. 
De Ti preciso mais. 
De Ti preciso mais. 
A Tua voz veraz 
No meu silêncio sempre atender, 
De Ti preciso mais! 

Jesus, preciso mais comunhão. 
Contigo estar em santo Tabor; 
E esplendor, transfiguração; 
De Ti preciso mais. 
De Ti preciso mais. 
Transformação veraz; 
A Tua face eu quero ter, 
De Ti preciso mais!`},
{id:"h424",num:424,title:"Seu Precioso Sangue",category:"harpa",author:"Otto Nelson",lyrics:`esus me salvou com Seu precioso sangue;
Jesus me comprou com Seu precioso sangue, 
Com Seu poder já me curou; 
O meu pecado já cravou na cruz! 
Jesus pra sempre me salvou!`},
{id:"h425",num:425,title:"Perdido Andei",category:"harpa",author:"Domingos Lins",lyrics:`Perdido neste mundo andei, 
Imerso em sua escuridão; 
Em vãs promessas confiei; 
Não tinha Deus, nem salvação. 

Coro:
Perdido andei, mas me salvei, 
Sendo guiado pela luz, 
Que no Calvário avistei 
E me levou ao Rei Jesus!

Sem forças 'stava pra viver, 
Sem nada mais eu esperar; 
Quando uma luz eu pude ver, 
Que veio me iluminar. 

Fitei a luz e logo cri, 
E muito alegre eu fiquei; 
Prazer do céu também senti; 
Quando essa luz eu abracei. 

Confesso com satisfação, 
Que nessa luz me sinto bem; 
A paz entrou no coração, 
Porque vi um abrigo além. 

Nos braços do Senhor Jesus, 
Prazer eu tenho em viver, 
Unido à salvadora luz, 
Que Cristo veio me trazer.`},
{id:"h426",num:426,title:"União Dos Irmãos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quando aqui nos reunimos, 
Ó irmãos, em santo amor, 
Certamente nós fruímos, 
Bênçãos do Consolador! 
Sempre pode Sua presença,
De Jesus testificar;
Com palavras e sentenças
A quem quer o escutar. 

Quando nós nos humilhamos 
Ante o bom Consolador, 
O poder que nós buscamos. 
Nos concede com amor; 
E se vedes, glorioso, 
Em visão, Jesus passar, 
Eis que busca ansioso, 
Uma alma batizar. 

Quando todos nos achamos 
Prontos para escutar, 
Pela unção, ouvir nós vamos 
O bom Deus, a nós falar; 
E no céu, sim, ao chegarmos, 
Oh! Que festa haverá, 
Quando já nos encontrarmos 
No lugar que Deus dará! 

Ó remidos, sempre firmes, 
Esperando com ardor, 
Que em nós Deus mais confirme 
Seu poder Consolador; 
Eia! Avante, a caminho, 
Pela gloriosa luz, 
Pois de nós vai mui vizinho, 
O amado e bom Jesus!`},
{id:"h427",num:427,title:"Vai Orando",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`De pesar estás cercado, 
Es provado pela dor? 
De sofrer estás cansado, 
E também do teu labor? 

Coro:
Vai orando, vai orando, 
Ao soprar do furacão. 
O Senhor está velando, 
Dar-te-á consolação.

Nas doenças, incertezas, 
Que tu'alma passará, 
Só Jesus dará firmeza, 
E também te curará. 

Ao Senhor a voz eleva, 
Ora a Deus com mui fervor, 
Pois as faltas te releva 
E mitiga a tua dor. 

Tarda Deus em consolar-te? 
Vai orando com poder; 
Presto, ajuda pode dar-te, 
Teu pedido responder.`},
{id:"h428",num:428,title:"A estrela da Alva",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Mostra-Te, estrela da manhã, 
Ó bondoso Salvador! 
Sem Tua luz, a vida é vã, 
Sem Tua luz não temos vigor! 
Sem Tua luz não temos vigor! 

Coro:
Ó estrela da alva, estrela que salva 
A perdida alma que vaga sem ter direção!

Cristo Jesus é, do fiel, 
A estrela de fulgor, 
Também o bom Emanuel, 
Que de manhã nos enche de amor, 
Que de manhã nos enche de amor. 

Bendita estrela dos hebreus, 
Que o mundo iluminou. 
E nos mandou os raios Seus, 
Raios d’amor, que já nos salvou, 
Raios d’amor, que já nos salvou.`},
{id:"h429",num:429,title:"Escuta o Evangelho",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O pecador desejoso 
De verdadeiro perdão, 
A voz de Cristo, ditoso, 
Escuta com atenção! 

Coro:
Escuta o Evangelho 
Do Filho de Deus, 
O divinal conselho, 
Que vem dos mais altos céus!

Hoje, com fé e de graça 
Vem aceitar o perdão, 
De Cristo, pois te abraça, 
Dando-te a salvação! 

Cristo Jesus tem vertido 
Seu sangue com grande dor, 
Para salvar-te, perdido, 
E te encher de amor! 

Se tu contrito aceitas 
De Cristo, o Seu perdão, 
Terás então paz perfeita
E gozo da salvação.`},
{id:"h430",num:430,title:"Evangelho da Salvação",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ouves, como o Evangelho 
Nos dá vera salvação. 
E transforma o homem velho 
Numa nova criação? 
Bem algum em mim não via, 
Mas somente corrupção, 
E cansado da porfia 
Em Jesus achei perdão. 

Como a pomba que cansada 
Foi na arca repousar, 
A minh’alma fatigada 
Em Jesus vai descansar; 
Mas o corvo foi s’embora, 
Sobre os mortos foi pousar, 
Isto fazes tu agora? 
Quererás ao mal voltar?

É Jesus a minha arca 
Onde posso repousar, 
E dali, do mal as marcas, 
Nem eu posso avistar! 
Oh! Quão doce a chamada 
Que a mim me fez Jesus! 
“Vem, ó alma tão cansada, 
Vem das trevas para luz’. 

Pecador que estás ouvindo 
A mensagem do Senhor, 
Tu na arca és bem-vindo, 
No refúgio de amor, 
Pois as águas do pecado 
Breve te alcançarão, 
Pela morte despertado, 
Baterás na porta em vão!`},
{id:"h431",num:431,title:"Cristo Chama o Pecador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo chama, chama, chama com muito amor, 
“Hoje vem a Mim, pecador!” 
A Cristo dá teu coração, 
Manchado já por mal atroz; 
Vem, hoje, vem! Bela ocasião! 
Não queres vir a esta voz? 

Coro:
Aceitarás ao Salvador? 
É teu Senhor, e benfeitor; 
Te chama já, vem sem tardar, 
Aceitarás o Salvador? 
Aceitarás o Salvador?

Cristo chama, chama, chama com muito amor; 
“Hoje vem a Mim, pecador!’ 
A t’esperar está Jesus, 
Pois quer te dar amor sem par; 
Não tardes mais, vem para luz, 
Não ouves tu Jesus chamar? 

Cristo chama, chama, chama com muito amor; 
“Hoje vem a Mim, pecador!” 
Oh! Amanhã? Não viverás... 
E por lavar... teu coração? 
Tempo feliz tu perderás 
E não terás mais salvação.`},
{id:"h432",num:432,title:"Consagrado ao Senhor",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Minha vida seja sim, 
Consagrada a Ti, Senhor; 
Possas sempre Tu por mim, 
Operar o Teu amor. 

Coro:
A minh’alma lava Salvador 
No Teu sangue puro, carmezim; 
Minha vida toma para ser, Senhor, 
Tua para sempre, sim.

Que meus pés somente vão 
Onde os santos possam ir; 
Numa eternal canção, 
Minha voz se faça ouvir. 

Seja o meu tempo já, 
Consagrado em Teu labor; 
Que meus lábios, Jeová, 
Falem só do Teu amor. 

Toma, ó Deus, o meu querer, 
Faze-o Teu, ó Salvador, 
Hoje habita no meu ser; 
Enche-me do Teu fervor. 

Ó recebe-me, Senhor, 
Quando venho me prostrar 
A Teus pés, ó Salvador, 
Hoje vem me consagrar.`},
{id:"h433",num:433,title:"Sois Benvindos",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Nossas vozes jubilosas 
Elevamos com fervor, 
Pela vinda amistosa 
Dos obreiros do Senhor. 

Coro:
Sois bem-vindos, 
Sois bem-vindos, 
Campeões de Jeová! 
Parabéns, mas não fingidos, 
A congregação vos dá.

Recebei os lutadores 
Da verdade, do amor, 
Demos a Jesus louvores, 
Que os trouxe com vigor. 

Abraçai os bons soldados 
Das fileiras de Jesus. 
Aos que lutam denodados 
Para difundir a luz. 

Dos fiéis é bem superno 
Trabalhar sem dilação; 
Pra fazer que o Rei eterno 
Reine em cada coração!`},
{id:"h434",num:434,title:"A Teus Pés",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`A Teus pés, ó Jesus Cristo,
Tua face buscarei,
Escutando qual Maria,
As palavras de amor;
A Teus pés, ó Jesus Cristo,
Meu passado esquecerei,
Pois Tua mão fiel e terna,
Tem me salvo do temor.

A Teus pés, ó Jesus Cristo,
Acho terna compaixão,
Para todos meus pesares
Meus conflitos, minha dor;
Livra-me, ó Jesus Cristo,
De cuidados, de aflição,
E concede-me constante
Teu poder consolador!

A Teus pés, ó Jesus Cristo,
Eu desfruto Teu amor,
Em Teus olhos há doçura
Em Teu seio proteção;
Dá-me, ó Cristo, a Tua mente.
Dá-me graça e fervor,
E que o mundo possa sempre
Ver em mim a salvação.

A Teus pés, ó Jesus Cristo,
Tenho um gozo divinal!
A Teus pés encontro abrigo,
Oh! Bondoso Salvador!
Só em Ti, ó Jesus Cristo,
Há consolo sem igual,
Para minh'alma abatida.
Neste mundo de horror.`},
{id:"h435",num:435,title:"Jesus Me Levantou",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O Salvador, por Seu amor, 
Ao mundo vil por nós baixou, 
E dum abismo de horror, 
Minh’alma levantou! 

Coro:
Que salvação me deu Jesus, 
A qual na cruz p’ra mim ganhou, 
Estando em sombra, à plena luz, 
Com seu poder me levantou!

A Sua voz eu resisti! 
Enquanto amante me chamou, 
Mas Sua graça recebi, 
A qual me levantou! 

Oh! Quanta dor sofreu por mim, 
Na cruz pregado, expirou. 
Mas me salvou Jesus assim, 
Ali me levantou! 

Que dom feliz em mim se vê, 
Pois Sua graça me salvou, 
Mas não compreendo eu, por quê 
Jesus me levantou!`},
{id:"h436",num:436,title:"Crentes Cantai!",category:"harpa",author:"José Calazans",lyrics:`Crentes, cantai e entoai louvores 
Ao Senhor, ao nosso Deus, 
Deus de bondade infinita, imensa, 
Criador da terra e céus; 
Que, com poder tão vasto e eficaz, 
Deu-nos salvação e plena paz. 
Glória e louvor ao Deus de amor; 
Com fervor, sinceramente, 
Glória ao Pai onipotente! 

Coro:
Ao nosso Criador, 
Honra e glória tributemos, 
Ao nosso Salvador, 
Mil louvores entoemos; 
E ao bom Consolador, 
Honra e louvor demos também; 
Honra a Trindade para sempre, amém.

Crentes, cantai e entoei louvares 
A Jesus, o Salvador, 
Que nos amou e nos salvou p'ra sempre, 
Do poder do tentador, 
Glória a Jesus, autor da salvação, 
Toda honra, glória e adoração, 
Glória e louvor ao Salvador, 
Com vigor, ardentemente, 
Glória ao Filho onisciente! 

Crentes, cantai e entoei louvores 
Ao divino Preceptor, 
Que nos mandou Cristo, já exaltado, 
Pela dextra do Senhor; 
Hoje louvei ao bom Consolador. 
Que nos enche de fervente amor! 
Glória e louvor ao instruidor, 
Com ardor, e um lindo canto 
Dai ao Espírito Santo!`},
{id:"h437",num:437,title:"O Dom Celeste",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Assim que Deus me batizou, 
A minha alma viu mais luz, 
Pois dom celeste o Pai mandou, 
P’ra dar louvor ao meu Rei Jesus, 
Sou testemunha do meu Senhor, 
E sempre dEle vou falar; 
Também do selo de amor, 
Que o meu cálice faz transbordar. 

Coro:
Louvado seja Jesus, o Cristo, 
Que continua a batizar, 
Com língua estranha, nós temos visto, 
O dom celeste, o Pai mandar!

O bom caminho vou trilhar, 
Se eu quiser obedecer 
Ao Evangelho, à luz sem par, 
Aonde vida vou receber, 
De Jesus Cristo eu falarei, 
que é dos homens Salvador; 
Ó vinde hoje e recebei, 
Divina graça do meu Senhor.`},
{id:"h438",num:438,title:"Voltai-vos Para Mim",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Assim a nós falou Jesus: 
“Voltai-vos pare Mim, 
A salvação. a paz, a luz, 
Encontrareis enfim”. 
Ó esperai o bom Jesus, 
A estrela da manhã. 
Pois Ele ao céu a vós conduz; 
Deixai a vida vã! 

Também ,Jesus vos disse assim: 
“Dá vida, água sou, 
E quem tem sede venha a Mim. 
De graça o dom Lhe dou”. 
E do seu ventre.sairão 
Em glória ao Salvador, 
Torrentes vivas, que serão: 
A paz, a fé, o amor!

Ainda assim falou Jesus 
A todo o pecador: 
"Ó vinde a Mim, Eu sou a luz, 
Que brilha com fulgor”; 
E tu, que jazes, ó mortal, 
Nas trevas de horror, 
Ó vem p'ra luz celestial, 
A Cristo, o Salvador! 

Os que remidos dEle são, 
Seus passos vão seguir; 
A Sua justiça, e Seu perdão, 
De graça vão fruir, 
Jesus é tudo para mim; 
O Rei, e meu Senhor; 
Olhando, eu tenho sim, 
Do céu real vigor!`},
{id:"h439",num:439,title:"Aos Pés de Cristo Prostrados",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`De Cristo ressurgido, 
Aos seus pés nos prostramos; 
Com fé O adoramos, 
Do mundo é o Salvador; 
Nós, crentes redimidos, 
Por sangue já lavados, 
Na graça bem guardados, 
Temos de Deus favor! 

Tudo que nós sofremos, 
Cristo já tem provado, 
Ao pecador cansado, 
Pode, quer ajudar; 
Oh! Quanta dor nós vemos, 
Cristo na cruz sofrendo, 
Com sede ali morrendo, 
Para o mortal salvar!

"Eu tenho sede", exclama 
O divina! Cordeiro, 
Pregado no madeiro, 
Na cruz da maldição; 
Oh! Quanto Cristo ama 
O pecador perdido, 
Pois sangue tem vertido, 
Para lhe dar perdão! 

A nós, que santos somos, 
Dá-nos e vera graça, 
Para que assim se faça, 
Em nós o Teu querer, 
Na cruz achar nós fomos 
Consolo abundante, 
Graça de Deus bastante, 
E divina! poder!`},
{id:"h440",num:440,title:"Faze Já o seu Querer",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em viver pra Cristo firme permanecerás 
E a paz após, tu sempre seguirás? 
E ao pé da cruz os teus cuidados deixarás? 
Faze já o Seu querer! 

Coro:
O Seu poder e Seus dons te dará; 
De gozo, Cristo, sim, te inundará; 
Do coração as manchas limpará 
Fazendo tu, p’ra sempre, Seu querer!

Queres ir após de Cristo e carregar a cruz? 
Queres conhecer a paz que dá Jesus? 
Queres que te guie com a verdadeira luz? 
Faze já o Seu querer! 

Queres lá no céu os teus amigos encontrar? 
Deves preparar tua vida sem tardar, 
Queres pra Jesus a tua vida consagrar? 
Faze já o Seu querer!`},
{id:"h441",num:441,title:"A Chuva do Consolador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Unânimes ao pé da cruz,
Pedimos com fervor,
Nos manda hoje, ó Jesus,
O bom Consolador!

Coro:
Sim, manda outra chuva,
Ó bom salvador!
E com Tua chama
Destrói de nós o mal;
O dá-nos a chuva,
Do Consolador;
Ao povo Teu inflama
Com poder celestial!

Qual vivo fogo ou furacão,
O fá-Lo a nós descer;
E possa cada coração
Um templo dEle ser.

Mediante a fé e a oração,
O céu Tu abrirás,
O óleo santo da unção,
Em nós derramarás!

Pedimos nós, agora a Ti
Ó queima todo mal
E vivifica-nos aqui,
Com fogo celestial!`},
{id:"h442",num:442,title:"Breve Verei o Bom Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Breve no céu, Jesus há de aparecer
Em gloriosa luz; todos O hão de ver
Naquele dia, então, eu hei de receber
De Cristo galardão; oh! que prazer! 

Coro:
Breve verei o bom Jesus, 
E viverei em plena luz; 
No lindo céu eu gozarei... 
De toda a dor, por Deus, livre serei.

Na vinda do Senhor irei eu receber, 
Do Seu eterno amor, repouso e prazer, 
- Disso, meu bom Jesus, tem-me falado já 
E da celeste luz de Jeová! 

Na vinda do Senhor desfrutarei prazer, 
Quando meu Salvador em glória aparecer; 
Eis que Ele breve vem, os santos levará 
Para a mansão de além, donde virá!`},
{id:"h443",num:443,title:"Larga o Mundo!",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Pecador, um convite te queremos dar. 
Um convite divino e consolador; 
Hoje queres à casa paternal voltar, 
Onde Cristo te espera cheio de amor. 

Coro:
Larga o mundo já, vem após Jesus; 
O qual pode agora mesmo te salvar! 
Tudo pronto está, que divina luz! 
Cristo hoje te convida para vir cear!

Quando Cristo sofreu pregado lá na cruz; 
Preparou pra teu ser um divinal manjar; 
E agora te chama para Sua luz; 
Pois tua alma faminta Ele quer fartar! 

Ó aceita o convite que Jesus te faz, 
Que franqueia a entrada na mansão de luz; 
E o gozo divino que te satisfaz, 
Ó aceita o convite do Senhor Jesus! 

Ai do que o convite santo recusar, 
E tiver por profano o sangue de Jesus; 
O banquete celeste não vai desfrutar, 
Quem despreza o convite feito lá na cruz!`},
{id:"h444",num:444,title:"Escuta, Pobre Pecador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Escuta, pobre pecador, 
Em Cristo há perdão; 
Aceita agora o Salvador, 
Pois nEle há salvação! 

Coro:
Vem a Cristo sem tardança, 
Receber perdão, 
E a vida d’esperança 
Fruirás, então!

Pra redimir-te, o Redentor 
Seu sangue derramou! 
Na cruz; sofrendo grande dor, 
Jesus te resgatou! 

Caminho certo é Jesus; 
Achamos nEle paz! 
Caminho santo e de luz, 
Que sempre satisfaz! 

Vem hoje, vem te entregar 
Deixando todo mal, 
Deus quer agora te salvar, 
Ó vem pra luz real!`},
{id:"h445",num:445,title:"Resgatado Com O Sangue de Cristo",category:"harpa",author:"Frida Vingren",lyrics:`Com ouro e prata não fui resgatado, 
Tesouro terrestre, jamais me livrou; 
O preço foi o sangue de Cristo, manado 
Na cruz do Calvário onde a vida raiou! 

Coro:
Por prata e ouro não fui remido, 
Nem por tesouro de mui valor, 
Mas pelo sangue que foi vertido 
Por Jesus, meu Salvador!

O ouro e a prata valor, oh! não tinham 
Pra satisfazer a justiça de Deus. 
Mas Cristo pagou toda a dívida minha; 
Encheu-me de amor e de paz lá do céu. 

Por ouro e por prata não pude chegar-me 
Diante de Deus e o perdão obter; 
Pio sangue de Cristo, eu pude lançar-me 
Na graça divina e o favor receber. 

Por ouro e por prata não fui redimido; 
A entrada do céu não se pode comprar; 
Mas, só pelo sangue de Cristo vertido 
Na cruz, poderemos a glória alcançar.`},
{id:"h446",num:446,title:"Ó Vem Já!",category:"harpa",author:"J.H.M J. Herbert Mellemberg",lyrics:`Vem, ó alma cansada, que sentes dor, 
A teu bom Salvador, a Jesus, 
E confia no sangue do Redentor, 
Derramado, que foi lá na cruz. 

Coro:
Ó vem Já! Ó vem Já! A Jesus vem como estás; 
Não demores pecador aceitar o teu Salvador. 
Ó vem Já! Ó vem Já! A Jesus vem como estás, 
Não demores pecador aceitar o teu Salvador.

Tu que vagas mui longe do Salvador, 
No pecado, no mal preso estás; 
Só Jesus é que vai te livrar da dor. 
Salvação hoje mesmo te dar. 

Cristo chama ainda: "Ó vindes Mim, 
Oprimidos, cansados, sem paz; 
Vida eterna darei para vós, enfim, 
No meu reino de gozo veraz".`},
{id:"h447",num:447,title:"Nascer de Novo",category:"harpa",author:"Eufrosine Kastberg",lyrics:`Nascestes de novo? Andas já com Deus? 
Pertences ao povo, que vai para os céus? 
Tens a lei escrita no teu coração? 
Em ti já habita plena salvação? 

Coro:
Se o caminho é estreito, a porta é também, 
Tudo está feito, não demores, vem! 
No portal da vida Cristo acharás, 
Ao findar a lida lá no céu tu estarás.

Já desceste às águas, passaste o Jordão? 
Tens ainda mágoas no teu coração? 
Foste batizado como foi Jesus? 
Segues a Seu lado para o céu de luz? 

O poder vindouro recebeste já? 
Tens o teu tesouro escondido lá? 
Vida de vitória vives já com Deus? 
Marchas para glória? Andas para os céus? 

Ao ouvir o brado: “Eis que Cristo vem”, 
Tens te preparado pra dizer amém? 
Alvo é teu vestido, clara é tua luz? 
Canta co'os remidos - Vem, Senhor Jesus.`},
{id:"h448",num:448,title:"Crentes, Avançai",category:"harpa",author:"J.H.M J. Herbert Mellemberg",lyrics:`Crentes, avançai, 
Firmes pelejai 
Contra o vício, contra o mal! 
Quem quer triunfar, 
Cristo agradar, 
Vem à luta divinal, 
Nosso guia é Jesus, 
Ele sempre nos conduz; 
A vitória nos dará, 
Cristo sempre vencerá. 

0 celeste lar 
Vamos alcançar, 
Se lutarmos com valor; 
Para o céu marchai, 
Sempre avante andai 
Dando glória ao Redentor. 
O Seu sangue que verteu. 
Salvação a todos deu; 
Quem crê nEle gozará, 
Vida eterna fruirá!`},
{id:"h449",num:449,title:"À Beira da Estrada",category:"harpa",author:"Emílio Conde",lyrics:`À beira da estrada estão 
Muitos que esperam a salvação; 
Podem tais almas sem Deus perecer, 
Ou estás pronto para as socorrer? 

Coro:
Quem hoje dirá: “Eis-me aqui, Senhor, 
Eu quero aos perdidos falar do amor, 
A quantos na senda da vida achar, 
De Cristo eu irei falar"

À beira da estrada estão 
Muitos que buscam do céu o pão; 
Para os famintos, oh! quem falará 
Do Evangelho que lhes saciará? 

Pelo caminho em que vais, 
Existem enfermos espirituais; 
Qual o bom samaritano, farás, 
Ou qual escriba, além passarás? 

Quando a jornada terminar 
E o fim da estrada se aproximar, 
Conhecerás muitos na multidão, 
Que receberam, de Deus, salvação.`},
{id:"h450",num:450,title:"Sol da Justiça",category:"harpa",author:"Emílio Conde",lyrics:`O sol da justiça vamos proclamar 
Sua luz resplandece em qualquer lugar, 
Seu fulgor dourado de amor e paz, 
Salvação completa aos caídos traz. 

Coro:
Resplandece, ó sol verdadeiro! 
Teus celestes raios vamos espalhar; 
Resplandece, ó sol verdadeiro! 
Tão formosos raios vamos proclamar!

Resplendor celeste brilha desde os céus. 
Fala-nos de Cristo, do amor de Deus; 
Com Jesus nós vamos, todos, trabalhar, 
Do céu aos perdidos o esplendor levar. 

Só uns raios fortes deste resplendor, 
Toda a terra podem inundar de amor; 
Podem dum deserto fazer um jardim; 
Resplendor do sol. ó brilha para mim.`},
{id:"h451",num:451,title:"Meu Jesus Vem",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Os testemunhos indicam 
Que breve Cristo virá; 
Já os sinais testificam 
Que Ele vem, não tardará. 
Oh! Dia de grande glória, 
Para os remidos será! 
Dia será de vitória; 
Jesus em breve virá. 

Coro:
Meu Jesus vem, meu Jesus vem; 
Vou encontrá-Lo no céu! 
Os anjos nas harpas tangem, 
Dando louvores a Deus!

Tudo é trevas no mundo, 
A noite chegada está, 
Mas voz de amor mui profundo 
Diz que Jesus voltará. 
Meu corpo já transformado, 
Um céu aberto achará! 
Com anjos mil a Seu lado, 
Jesus em breve virá! 

Tristezas desaparecem 
E dores não haverá; 
Estrelas já resplandecem; 
A festa começará! 
Descanso ali prometido, 
Minh'alma então gozará; 
Ouve a mensagem, perdido; 
Jesus em breve virá!`},
{id:"h452",num:452,title:"Seguirei a Cristo",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Sempre! Sempre! Seguirei a Cristo!
Onde quer que Ele for, O seguirei,
Sempre! Sempre! Seguirei a Cristo!
Onde quer que Ele for, O seguirei!`},
{id:"h453",num:453,title:"Deus é o mesmo",category:"harpa",author:"Emílio Conde",lyrics:`Oh! Como é bom dos tempos primitivos lembrar
E dos avivamentos de que ouvimos falar;
Deus quer nos dar mais fervor espiritual.
Ao Seu povo mandar o poder pentecostal.

Coro:
Nosso Deus é o mesmo hoje como então,
Ele cura, batiza e nos dá salvação.
Abundante é aqui a vida espiritual
Para os que recebem poder pentecostal!

Oh! Como é bom dos crentes primitivos lembrar
As ferventes orações, o seu alegre cantar,
Deus os ouviu e sempre os livrou do mal,
E também os encheu de poder pentecostal!

Alguns dizem: "Mudado tudo hoje está".
Mas eu sei que meu Deus nunca jamais mudará;
Deus permanecerá qual farol eternal,
Enviando ao Seu povo poder pentecostal!`},
{id:"h454",num:454,title:"Alegrai-vos, ó Remidos",category:"harpa",author:"Samuel Nyström",lyrics:`Glorioso é o Cordeiro, 
Ele é digno de louvor; 
É o resgate verdadeiro 
Do pecado e do horror, 
Alegrai-vos, ó remidos; 
Cantai glória ao Redentor! 

Coro:
Aleluia! Aleluia! Cantai glória e dai louvor! 
Aleluia! Aleluia! Cantai glória ao Redentor!

Honra, glória e domínio 
A Jesus, o Rei dos reis! 
Que no santo vaticínio 
É a luz dos Seus fiéis. 
Alegrai-vos, ó remidos: 
Cantai glória, e vencereis!`},
{id:"h455",num:455,title:"O Povo de Deus na Terra",category:"harpa",author:"Bruno Skolimowsky",lyrics:`O povo de Deus, aqui na terra tem um sinal: 
Povo que vive em santa guerra contra o mal; 
Povo que espera a Jesus Cristo, que presto vem 
É pois Ele mesmo, quem nos diz isto: "Vigiei mui bem”. 

A minha paz, sim, não a do mundo, Eu vos darei 
O coração de gozo profundo, Eu encherei; 
Com o Seu braço Ele nos guia, oh! grande amor 
Para os que Lhe pedem, logo envia o Consolador! 

Ó vinde a Mim, Jesus convida, quem sede tem! 
Beber, ó vinde, da água da vida, celeste bem! 
Cristo sacia a alma sedenta do pecador! 
Salva, purifica e alimenta, enche de amor! 

Em Cristo. crendo sempre O seguindo quão doce é 
A paz profunda e o amor sentindo: Tudo por fé 
Feliz o homem que guarde isto, pois vida tem 
Há de reinar sempre com Jesus Cristo na mansão de além.`},
{id:"h456",num:456,title:"A Fonte Transbordante",category:"harpa",author:"Samuel Nyström",lyrics:`Música 01

Música 02

Música 03

Música 04

Oh! Que fonte transbordante!
Mais profunda que o mar.
É de Deus, o amor imenso,
Que Jesus me veio dar.

Coro:
Ele me abriu a porta,
E me reconciliou,
Por Seu sangue derramado;
para Deus me consagrou.

Como a pomba perseguida
E cansada estava eu
Mas Jesus jamais rejeita,
Quem buscar abrigo Seu.

Graça abundantemente
Sobre mim já derramou;
Onde abundou pecado,
Graça superabundou.

Quando alvorecer meu dia.
Com Jesus, irei pro céu;
Eu O exaltarei pra sempre,
Pois salvou um perdido réu.`},
{id:"h457",num:457,title:"O Festim de Glória",category:"harpa",author:"Angelina Eulina",lyrics:`Oh! Que festim de glória para nós há de ser! 
Quando tiver nas nuvens, Cristo de aparecer. 

Coro:
Oh! Nesse evento mui feliz 
e de prazer também, 
Eu hei de ver meu bom Jesus, 
fonte de todo bem.

Nesse glorioso dia, o corpo meu mortal, 
Será como o de anjos, no lar celestial. 

Oh! Que ditosa vinda, a do meu Salvador! 
Eu O estou esperando, mui firme em Seu amor! 

Ó Cristo, apressa o dia em que hás de voltar! 
Para ver Tua face eu ‘stou a esperar.`},
{id:"h458",num:458,title:"Guia Meus Passos",category:"harpa",author:"Severino Silva",lyrics:`Guia meus passos, Senhor Jesus,
Senhor de consolação,
Leva-me à estrada da Tua luz,
A fonte do Teu perdão. 

Coro:
Lá fora, eis a chorar, sem Deus.
sem luz, sem lar.
O pecador... Ouve, Senhor,
a queixa do pecador.

Tuas ovelhas fiéis conduz 
Por vales, vergéis em flor, 
Ao Teu aprisco, Senhor Jesus... 
Jesus, nosso bom Pastor. 

Na larga estrada vai triste e só 
O filho de Belial... 
Triste, faminto, envolto em pó, 
Escravo infeliz do mal. 

Senhor dos simples, Senhor Jesus, 
Oh! Glorioso Deus de amor! 
A ovelha errante atrai, conduz 
Ao Teu redil, bom Pastor.`},
{id:"h459",num:459,title:"As Firmes Promessas",category:"harpa",author:"Samuel Nyström",lyrics:`De Deus mui firmes são as promessas 
Mais firmes que as montanhas são. 
Quando o socorro terrestre cessa, 
Os de Deus não falharão! 

Coro:
De Deus mui firmes são as promessas, 
Falhando tudo, não falharão; 
Se das estrelas o brilho cessa, 
Mas as promessas brilharão!

Se a fé te falta, nos teus apertos, 
Nas Suas promessas descansa em paz. 
Quando és tentado, estou bem certo 
Que Cristo auxílio te traz. 

Se a febre arde, se extingue a vida 
E quer a morte te arrebatar, 
Nas Suas promessas terás guarida 
Bastante pra te abrigar. 

Promessa temos que ao céu de gozo 
Virá levar-nos o Rei Jesus; 
Então ao crente fiel, corajoso, 
Dará coroa de luz.`},
{id:"h460",num:460,title:"Dize-o a Cristo",category:"harpa",author:"J.Car Joel Carlson",lyrics:`Se estás cansado e abatido, 
Dize-o a Cristo; Dize-o a Cristo; 
Se te sentes débil, confundido, 
Dize-o ao teu Salvador. 

Coro:
Dize-o a Cristo; dize-o a Cristo; 
Que é o amigo mais fiel; 
Não há outro amigo como Cristo, 
Dize-o ao Emanuel.

Quando estás de tentação cercado, 
Olha pra Cristo; olha pra Cristo; 
Quando rugem hostes do pecado, 
Olha p'ra teu Salvador. 

Se saíram outros já da senda, 
Segue a Cristo; segue a Cristo; 
Se aumenta em torno a contenda, 
Segue a teu Salvador. 

Ao chegares ao fim da jornada, 
Confia em Cristo; confia em Cristo; 
Dar-te-á no céu feliz entrada, 
Confia em teu Salvador.`},
{id:"h461",num:461,title:"Jesus Chorou Sobre Jerusalém",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jerusalém por Cristo é contemplada.
Com os seus altos que rebrilham lá,
Mas entre as belas torres levantadas;
Vê as do templo onde esteve já; 
Jesus com Seu olhar mui penetrante, 
Não vê somente o lindo exterior, 
Mas sim as almas tristes, vacilantes. 
Que rejeitaram Seu divino amor. 

Jesus chorou: Seu coração rasgado 
Lamenta e sente uma dor sem par, 
Por ver Seu povo indo descuidado, 
Pra perdição eterna caminhar! 
Um som alegre sobe da cidade, 
O povo está em festa a jubilar, 
Mas quando o sol, se escondeu à tarde, 
Jesus ao Cedrom foi pra lamentar. 

Jerusalém, que segues o mau trilho, 
E apedrejas os fiéis de Deus; 
Ó quantas vezes quis juntar teus filhos, 
Como a galinha ajunta os pintos seus; 
Mas para Mim, as portas tu fechaste, 
No dia que Eu vim te dar a paz; 
Por teu pecado cega te tornaste, 
Não aceitando o meu amor veraz! 

Ainda se repete a mesma história, 
Jesus do céu está a contemplar 
Cidades que têm aparente glória, 
E continua sempre a chorar; 
Pois Ele é quem pode dar a vida 
Às multidões que na condenação 
Rejeitam, sim, a graça oferecida, 
A eternal e grande salvação!`},
{id:"h462",num:462,title:"Glória ao Salvador",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Glória! Glória! Aleluia!
Glória! Glória ao nosso Salvador!
Glória a Jesus! Glória a Jesus!
Nosso grande Redentor.`},
{id:"h463",num:463,title:"O Povo de Abraão",category:"harpa",author:"Almeida Sobrinho",lyrics:`Como o povo de Abraão
Para a terra de Sião
Entre os povos inimigos viajou;
Hoje eu cheio de amor,
E de fé no Salvador,
Caminhando para o céu, contente vou. 

Coro:
Lá no céu, lá no céu, 
As tristezas eu jamais conhecerei; 
Ruas áureas brilham lá, 
Na cidade de Jeová; 
Sempre alegre, vou marchando para o céu!

Sustentado pelo amor 
Do bendito Salvador, 
Vigiando, sempre orando, certo vou; 
Dirigido pela luz 
Da presença de Jesus, 
Caminhando para o céu, eu sempre estou. 

Lá no céu eu chegarei, 
Sua glória gozarei 
Com aqueles que servirem ao Senhor; 
Quero sempre trabalhar 
Para O glorificar, 
Pra que todos vejam em mim o Seu amor.`},
{id:"h464",num:464,title:"Plena Graça",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Plena graça para me salvar 
Sangue puro para me lavar, 
E poder pra sempre me guardar, 
Tem meu Senhor.`},
{id:"h465",num:465,title:"Ele Sofreu Por mim",category:"harpa",author:"Anônimo",lyrics:`Eu li que Jesus fora preso; 
De dor a minh'alma vibrou; 
Eu antes assim não sentia, 
Agora isto a mim empolgou, 
Eu li que Ele foi conduzido 
À corte de Jerusalém; 
Ali padeceu grande afronta. 
Foi c'roado de espinhos também. 

Coro:
Eu sei que eu era culpado, 
Mas Ele sofreu já por mim; 
Eu sei que Ele era inocente, 
Padecendo tudo assim.

Eu li que Jesus foi julgado; 
U'a cruz mui pesada levou, 
E nela, por mim expirando, 
Os meus vis pecados tomou; 
Enquanto na cruz, pendurado, 
U'a lança Seu lado furou; 
Na esponja Lhe deram vinagre, 
E Ele, por mim, o tragou

Depois José de Arimatéia 
E outros discípulos também 
Puseram-No, em um sepulcro, 
E os guardas vigiavam bem: 
Enquanto no mundo, Ele disse, 
Que havia de ressuscitar, 
E Deus fez então um milagre. 
Fazendo-O dos mortos tornar! 

Os guardas ainda vigiavam, 
Quando um anjo veio do céu, 
E a pedra que estava na porta, 
Com grande poder removeu; 
Depressa os laços caíram; 
O plano de Deus era assim; 
E a luz e a vida resplendem, 
E isto foi tudo por mim!`},
{id:"h466",num:466,title:"Que Maravilha",category:"harpa",author:"O.S.B O.S. Boyer",lyrics:`Amigo, conheces, também enalteces 
Jesus, o Filho de Deus? 
Tens nEle já crido, e assim recebido 
Jesus, o Filho de Deus? 

Coro:
Que maravilha! Que maravilha! 
Jesus, o Filho de Deus! 
Oh! Eu te adoro! Sim, eu te amo! 
Jesus, o Filho de Deus!

Seguir, quem almeja, e n’alma deseja 
Jesus, o Filho de Deus? 
Quem foi rejeitado por esse adorado 
Jesus, o Filho de Deus? 

Se hoje confiares, também aceitares 
Jesus, o Filho de Deus. 
Irás jubilando, e sempre louvando 
Jesus, o Filho de Deus. 

Dos céus, muito breve, descer pra nós deve, 
Jesus, o Filho de Deusl 
Ó vem, eu te clamo. ó vem, pois te amo, 
Jesus, o filho de Deus.`},
{id:"h467",num:467,title:"Sobre as Ondas do Mar",category:"harpa",author:"Erik Janson",lyrics:`Música

Playback

Oh! Por que duvidar,
Sobre as ondas do mar,
Quando Cristo caminho abriu?
- Quando forçado és, contra as ondas lutar,
Seu amor a ti quer revelar. 

Coro:
Solta o cabo da nau 
Toma os remos na mão, 
E navega com fé em Jesus; 
E então, tu verás que bonança se faz 
Pois com Ele, seguro serás. 

Trevas vêm te assustar, 
Tempestades no mar? 
- Da montanha o Mestre te vê; 
E na tribulação 
Ele vem socorrer, 
Sua mão bem te pode suster. 

Podes tu recordar, 
Maravilhas, sem par? 
- No deserto ao povo fartou; 
E o mesmo poder 
Ele sempre terá, 
Pois não muda e não falhará. 

Quando pedes mais fé, 
Ele ouve, ó crê! 
Mesmo sendo em tribulação; 
Quando a mão de poder o teu "ego” tirar, 
Sobre as ondas poderás andar.`},
{id:"h468",num:468,title:"Cristo Está Chamando",category:"harpa",author:"J.A.S J.A.S",lyrics:`Queres tu seguir a Cristo, 
E andar na Sua luz? 
Queres ser por todos visto 
Carregando a tua cruz? 

Coro:
Jesus Cristo está chamando, 
Quer da morte te livrar; 
Com paciência te esperando, 
Vem, p’ra Ele te salvar.

Queres hoje dar o passo 
E tornares-te cristão? 
Do pecado, rompe o laço 
E terás a salvação.

Por que tens tu resistido, 
Esta voz de compaixão? 
Sê do amor de Deus vencido, 
Vem, recebe a salvação. 

O que pede, aqui recebe, 
O perdão no sangue Seu; 
Quem da água viva bebe, 
Jubilo terá no céu!`},
{id:"h469",num:469,title:"Ao Estrugir a Trombeta",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Quando a angelical trombeta neste mundo estrugir, 
O meu nome ouvirei Jesus chamar; 
Pois eu creio na promessa, e que Deus a vai cumprir 
Quando ouvir Jesus meu nome proclamar! 

Coro:
Glória! Glória! Aleluia! 
O meu nome ouvirei Jesus chamar; 
Glória! Glória! Aleluia! 
Eu espero ouvir Jesus a me chamar.

Quando o céu for enrolado e o sol não der mais luz, 
O meu nome ouvirei Jesus chamar; 
Passarão a terra, o mar, mas permanecerá Jesus, 
Que meu nome vai na glória pronunciar. 

Oh! Que música suave há de ser pra eu ouvir 
O meu nome Jesus Cristo anunciar, 
Oh! Que gozo vai minha alma lá nos altos céus fruir 
Quando o Cristo o meu nome proclamar!`},
{id:"h470",num:470,title:"Batismo",category:"harpa",author:"A.T.G Antônio Torres da Silva",lyrics:`Tua graça. é Deus amado, 
Vem agora conceder, 
Aos que vão ser batizados, 
Dá-lhes o Espírito e poder. 

Coro:
Com o Teu Espírito Santo, 
Estas almas vem selar; 
Dá-lhes vida e novo canto, 
P’ra Tua glória conquistar.

A fim de pra Ti viverem, 
Mortos para o mundo estão; 
Para o Espírito receberem, 
Dá-lhes puro coração.

Com Espírito por Deus dado, 
Vem, ó vem já batizar, 
Os que hoje seus pecados, 
Vêm nas águas, sepultar. 

Já contigo ressurgidos, 
O Teu nome louvarão; 
Em Jerusalém, vestidos; 
Sim, de branco, reinarão!`},
{id:"h471",num:471,title:"Avançai Fiéis",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Avançai, fiéis soldados, 
Contra as hostes infernais; 
Ouve-se de guerra, brados, 
Homens de Gideão sejais; 
Deste mundo, a ilusão, 
O terror da própria morte 
Não nos turba o coração; 
Torna Deus, o fraco - forte. 

Coro:
Pelo sangue do Cordeiro 
Nós vamos, sim, triunfar, 
O Senhor, ao vencedor vai coroar; 
Hei de vencer 
Com Jesus, o verdadeiro, 
Hei de vencer, 
Pelo Seu poder.

Avançai, fiéis soldados, 
A seguir o pavilhão; 
Ei-lo na frente arvorado 
Por Jesus, nosso Capitão; 
Escutemos o clamor 
Dos que foram abatidos; 
Vamos, logo sem temor, 
Em socorro dos feridos. 

Avançai, fiéis soldados, 
Sempre fortes, a lutar, 
E os povos escravizados, 
Ide avante, a libertar, 
Manda Cristo avançar 
A vanguarda dos remidos; 
Galardão hão de alcançar 
Os que forem destemidos!`},
{id:"h472",num:472,title:"Em Meu Lugar",category:"harpa",author:"Frida Vingren",lyrics:`Cristo Jesus lá na cruz já sofre 
Em meu lugar, em meu lugar; 
Tudo por mim Ele ali padeceu, 
Para a minh'alma salvar. 

Glória a Jesus, meu pecado cravou 
Sobre a cruz, sobre a cruz; 
Sangue precioso minh'alma lavou; 
Glória ao bondoso Jesus.`},
{id:"h473",num:473,title:"Outro Bem Não Acharei",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Que outro bem ansioso buscarei? 
Bem melhor, que Jesus não acharei; 
NEle só para sempre, hei de estar, 
E de coração O amar. 

Coro:
Outro bem não procurarei, 
Outro bem eu não acharei; 
Já em mim, ‘stá Jesus, 
NEle só vou confiar. 
Quem aqui pode me saciar, 
Neste mundo enganador? 
Só Jesus, Jesus, só Jesus, Jesus, 
Rei meu e fiei Senhor!

A vaidade do mundo acabará, 
Tudo aqui a seu tempo findará; 
Para sempre somente, há de durar 
Quem na luz de Cristo andar. 

Entre os homens não buscarei a luz; 
Não mais vivo, mais vive em mim Jesus; 
Sua graça é bastante para mim, 
Não terá no céu, mais fim!`},
{id:"h474",num:474,title:"Paz, Doce Paz",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Paz, doce paz! Que brota, lá da cruz; 
Nos trouxe paz o sangue de Jesus. 

Paz, doce paz! Andar no Teu querer, 
De Cristo, a nós a paz vai nos trazer. 

Paz, doce paz! Pra todo o pecador! 
Descanso e paz tereis no Salvador. 

Paz, doce paz! Paz na separação, 
A paz de Cristo dá consolação! 

Paz, doce paz! Enquanto ao meu porvir, 
Jesus, paz, sempre me fará fruir. 

Paz, doce paz! Não temo a morte, a dor, 
Jesus venceu a morte e seu terror. 

Paz, doce paz! Não tardará Jesus, 
E nos dará celeste paz e luz. Amém.`},
{id:"h475",num:475,title:"Em Belém",category:"harpa",author:"Domingos Lins",lyrics:`Lá em Belém nasceu Jesus,
Príncipe excelso da paz;
Amor divino e santa luz,
Para o mundo perdido, Ele traz.

Coro:
Louvemos ao Rei bendito;
Louvemos ao Rei bendito;
Louvemos ao Rei bendito;
O Seu poder é infinito.

Honra e louvor em alta voz,
Demos ao Filho de Deus,
Pois a certeza temos nós,
De herdar os refulgentes céus.

A jubilar os anjos estão,
Por ter nascido o Senhor;
Os magos vêm pra adoração
De Jesus, o veraz Redentor.

Só mesmo o tão profundo amor
Do nosso bendito Deus,
Mandava ao mundo de horror,
O Seu Filho, pra salvar os Seus.`},
{id:"h476",num:476,title:"O Cego de Jericó",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Enquanto para Jericó
O bom Jesus passava,
Um cego, filho de Jacó,
Sem se cansar clamava: 

Coro:
“Jesus, ó Filho de Davi, 
Tem compaixão de mim, Senhor!” 
“Jesus, ó Filho de Davi, 
Atende ao meu clamor!”

A multidão vendo-o clamar, 
- "Sê quieto", lhe dizia; 
Mas ele sem a escutar, 
Mais forte repetia. 

Jesus então mandou chamar 
O cego que gritava, 
Que veio logo, sem tardar, 
Mas “inda assim clamava” 

Jesus pergunta com prazer: 
“Que queres que te faça?" 
"Jesus, eu quero hoje ver, 
Por Teu poder e graça”. 

Então Jesus lhe respondeu: 
“Vai, a tua fé te salvou”. 
E logo viu, o Bartimeu, 
E ao bom Jesus louvou!`},
{id:"h477",num:477,title:"Sede Fortes",category:"harpa",author:"Bruno Skolimowsky",lyrics:`Sede fortes, irmãos na lida, 
E Cristo quem vos conduz; 
Garantindo eterna vida, 
Aos que trilharem na luz. 

Coro:
Sim, andai na luz de Cristo, 
Libertos da eterna dor; 
Buscai, vós que a tendes visto, 
A glória do Redentor!

Sede santos, velai orando, 
Amai com santo fervor; 
Muitos ficarão chorando, 
Na vinda do Salvador. 

Os fiéis adormecidos, 
A voz do anjo ouvirão; 
Transformados os remidos, 
A Cristo encontrarão. 

E vereis naquele dia 
Sua glória em esplendor, 
Fruireis paz e alegria, 
Nos braços do Salvador.`},
{id:"h478",num:478,title:"Eis-me Jesus",category:"harpa",author:"Gunnar Vingren",lyrics:`Eis-me, Jesus, Te louvando, 
Pois Tu padeceste assim; 
O sangue Teu derramando, 
Na dura cruz por mim. 

Coro:
Glória, aleluia! ó Cordeiro, 
Tua vida deu-me paz! 
Dou-Te louvor verdadeiro, 
Por graça tão veraz!

Do Teu amor me encheste, 
Oh! Maravilhoso Jesus; 
Quando o Espírito me deste, 
Trazendo gozo à flux! 

Os Teus discípulos, fizeste 
Em línguas estranhas falar; 
O mesmo a mim concedeste, 
E dás a quem buscar.

Que Teu Espírito desça, 
A fim de Teu povo selar, 
Realizando a promessa 
Naquele que confiar. 

Os dons do Santo Espírito 
São nove, que Cristo nos dá; 
E ao que pede contrito, 
Jesus não os negará. 

É Teu amor, céu e gozo, 
No qual sempre me alegrarei; 
Ao meu Senhor tão bondoso, 
Mil glórias Lhe darei!`},
{id:"h479",num:479,title:"Ao Raiar do Novo Ano",category:"harpa",author:"Domingos Lins",lyrics:`É meia noite, o ano já fenece, 
Nós elevamos os olhos aos céus, 
Todos orando para que comece 
O ano novo na graça de Deus. 

Coro:
As nossas vozes juntas levantemos, 
Com alegria e suave som; 
Em gratidão a Cristo, jubilemos, 
Pelo raiar de mais um ano bom.

Senhor, pedimos nós ardentemente, 
Ouve, por Teu infinito amor; 
Salva da nossa pátria toda gente, 
Pra Tua honra, e pra Teu louvor. 

As nossas almas torna impolutas, 
Não nos deixando em fraqueza cair, 
Nossa oração, Senhor, hoje escuta, 
Para podermos aqui Te servir. 

Graças a Ti, por esse ano findo, 
Pois nos supriste com muito poder; 
Graças a Ti, por esse ano vindo, 
Pois bênçãos mil vamos nós receber.`},
{id:"h480",num:480,title:"Fim do Ano",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Deus eterno, em Tua presença, 
Nossos séculos horas são 
E um segundo a existência 
Da humana geração; 
Mas o homem que ao Teu lado, 
Pela fé quer já voar, 
Neste mundo de pecado, 
Lento o tempo vê passar. 

Outro ano há fenecido, 
Que o viver mais encurtou, 
E o descanso apetecido, 
Algo mais se aproximou. 
Graças mil por Teus favores, 
Tua Igreja, ó Deus, Te dá! 
Aleluias e louvores, 
Teu poder nos susterá! 

Tu proteges as famílias, 
Visitando cada lar; 
Se o Senhor nos auxilia, 
Que nos pode aqui faltar? 
Onde quer que Te ame o homem, 
E Te sirva, andando bem, 
Faze que seja o Teu nome 
Exaltado sempre! Amém! Amém!`},
{id:"h481",num:481,title:"Cristo e Sua Humilhação",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Tu deixaste, Senhor, 
Tua glória, esplendor, 
Quando ao mundo quiseste descer, 
Não puderam achar 
Em Belém um lugar, 
Num presépio Tu foste nascer. 

Coro:
Vem ao meu coração, ó Cristo, 
Nele tenho p’ra Ti um lugar! 
Vem ao meu coração, ó Cristo vem! 
Nele podes p’ra sempre morar!

Hinos de adoração, 
Anjos no céu Te dão, 
Te rendendo excelso louvor. 
Mas humilde o Senhor 
Veio ao mundo de horror, 
Pra dar vida ao mais vil pecador! 

As raposas aqui 
Covas têm para si, 
E seus ninhos as aves do céus, 
Só não teve um lugar 
P’ra cabeça pousar 
Jesus Cristo, o Filho de Deus. 

Do céu vieste Jesus, 
Nos trazendo Tua luz, 
Que nos dá eternal salvação; 
E com ódio e furor 
Te cravaram, Senhor, 
Sobre a cruz, donde deste o perdão! 

Aleluias nos céus, 
Ao Cordeiro de Deus! 
Quando vier o Seu povo buscar; 
Sua voz se ouvirá 
E pra mim, oh! Dirá: 
“Vem, Eu tenho pra ti um lugar”.`},
{id:"h482",num:482,title:"Comunhão",category:"harpa",author:"Anônimo",lyrics:`Bendito Jesus, nós chamamos por Ti, 
Cercamos Tua mesa, Senhor; 
Por Teu Paracleto nos preside aqui; 
Vem encher-nos de santo fervor. 

A grande ternura do Teu coração 
Chamou-nos aqui, oh! Senhor! 
Pra nós celebrarmos em santa união, 
Tua morte, oh! bom Redentor! 

Os pés dos Teus servos lavando, Senhor, 
Quiseste o exemplo nos dar, 
Da Tua humildade, do Teu grande amor, 
Que entre nós deve sempre reinar. 

Abençoaste o pão e o partiste a dizer: 
“Tomai o meu corpo e comei, 
E todas as vezes, pois é o dever, 
Em memória de Mim o fazei”. 

O cálice da Nova Aliança de amor, 
No Teu sangue, ó meigo Jesus, 
Nos encha de graça, de novo vigor, 
Nos anime na senda da luz! 

Queremos, Jesus, neste ato de amor, 
O Teu memorial celebrar; 
Pra nós ele tem um infinito valor, 
Um valor que jamais vai cessar.`},
{id:"h483",num:483,title:"Ora Vem Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Disse Jesus, eis que presto Eu venho, 
Trago comigo, também galardão; 
Venho do céu com a glória que tenho, 
O vigiai firmes na oração! 

Coro:
Ora vem Jesus, gloriosa luz, 
Ainda nós Te esperamos; ora vem Jesus! 
De ver-Te, sedentos bradamos: Oh! Senhor Jesus 
Por Ti velando estamos; ora vem, Jesus!

Disse Jesus, eis que presto Eu venho, 
E os remidos pro céu levarei, 
E em lugar do opróbrio do lenho, 
Uma coroa pra eles darei! 

Disse Jesus, eis que presto Eu venho, 
A minha Igreja vou arrebatar; 
Hoje buscai-Me com todo o empenho, 
Para que Eu possa vos preparar!`},
{id:"h484",num:484,title:"Meus Pecados Levou",category:"harpa",author:"J.T.L José T. De Lima",lyrics:`Música

Playback

Houve Um que morreu por meus crimes na cruz,
'Inda indigno e vil como sou;
Sou feliz, pois Seu sangue verteu meu Jesus
E com este, meus crimes lavou.

Coro:
Meus pecados levou na cruz onde morreu
O sublime e meigo Jesus: os desprezos sofreu,
A minh ‘alma salvou
E mudou minhas trevas em luz.

Ele é terno e amável, não há outro igual!
Pois converte o infiel coração;
E por essa paciência e amor divinal
Estou livre da condenação.

Meu anelo constante é em Cristo viver,
Meu caminho, Seu exemplo marcou;
E pra dar-me a vida, Jesus quis morrer;
Sobre a cruz meus pecados levou.`},
{id:"h485",num:485,title:"Andando Para o Céu",category:"harpa",author:"J.Car Joel Carlson",lyrics:`'Stou andando para o céu
Onde os santos já estão:
'Stou alegre e satisfeito!
Minha pátria é Sião,
Morte lá não entrará;
Que alegria ali será!

Coro:
Oh! Glória! Aleluia!
Meu desejo é estar no céu;
‘Stou alegre é satisfeito;
Oh! Glória! Aleluia!
Meu desejo é estar no céu;
Que alegria ali será!

'Stou andando para o céu,
Onde as ruas de ouro são;
'Stou alegre e satisfeito!
Tenho ali feliz mansão,
Meu Jesus lá estará!
Que alegria ali será!

'Stou andando para o céu,
Onde reina gozo e paz,
‘Stou alegre e satisfeito!
Gozo santo e veraz
Todo o crente ali terá,
Que alegria ali será!

‘Stou andando para o céu,
Para ver meu Salvador;
‘Stou alegre e satisfeito!
Cantarei o Seu louvor,
Pois minh’alma alegre está;
Que alegria ali será!`},
{id:"h486",num:486,title:"Vasos Transbordantes",category:"harpa",author:"Nils Kastberg",lyrics:`Qual vazio vaso 'stá teu coração, 
Para receber de Deus a salvação? 
Só Jesus teu vaso poderá encher, 
De bençãos que dão poder. 

Coro:
Deixa encher teu vaso até transbordar; 
Que Jesus tua vida possa governar, 
Põe teu sacrifício hoje sobre o altar; 
E verás as bênçãos descer sem cessar.

A vida abundante tu receberás, 
E constantemente em Deus te alegrarás, 
Qual ribeiro d’água, o Senhor quer ver 
O deserto florescer 

O Senhor precisa vasos para encher. 
Mas vazios vasos que irão conter 
Toda a Sua graça, brasas do altar, 
Para o fogo espalhar.`},
{id:"h487",num:487,title:"Doxologia",category:"harpa",author:"A.G.F Antônio G. De Figueiredo",lyrics:`Glória! Glória! Glória seja ao grande Deus onipotente 
Ao Teu nome damos glória porque és onisciente; 
Aleluia! Aleluia a Deus Pai onipresente. 

Glória! Glória! Glória a Jesus, o Salvador amado, 
Ao Teu nome damos glória, porque tens nos libertado 
Aleluia! Aleluia a Jesus ressuscitado. 

Glória! Glória! Glória seja dada ao Espírito Santo, 
Ao Teu nome damos glória, entoamos este canto; 
Aleluia! Aleluia ao Deus trino, ao Deus Santo.`},
{id:"h488",num:488,title:"O Áureo Dia",category:"harpa",author:"H.E.N Hedwig Elisabeth Nordlund",lyrics:`Ao ralar do áureo dia, o bom Jesus vem nos buscar 
Pra com Ele, sempre estarmos lá no céu; 
Os milhões purificados pelo sangue de Jesus 
Subirão pra contemplar o amado Seu. 

Coro:
Quando os salvos congregados, 
Dentre os povos e nações, 
Virem Cristo mui amado, 
Oh! Que gozo encherá seus corações.

Lá da Índia vem um povo que Jesus purificou 
E da África, as tribos chegarão, 
Quem de Cristo, a mensagem lhes levou, os conquistou 
Juntos todos, lá no céu se alegrarão. 

Quando os milhões da China, 
todos que Jesus ganhou 
Juntos dos que foram salvos no Brasil, 
Lá no céu unidos, glória derem todos a Jesus, 
Triunfantes estarão no Seu redil. 

Espalhemos a mensagem, que Jesus nos entregou 
Da gloriosa nova que vem lá da cruz; 
Que Seu sangue precioso purifica o pecador, 
Derramando nele gloriosa luz.`},
{id:"h489",num:489,title:"Chegai Para Adorar",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Chegai, pastorzinhos, chegai p'ra adorar 
O Rei do universo, que nasce em Belém, 
Sim, ricos presentes podemos Lhe dar. 
A fé o amor, nossa vida também. 

Um rústico teto abrigo Lhe dá; 
Por casa um presépio, por templo um portal; 
Num leito de palhas deitado está, 
Quem deu às estrelas a luz celestial. 

Seguindo uma estrela que veio O anunciar, 
Os magos do Oriente atrás dEle, vão: 
E diante se prostram do Rei de Judá, 
De incenso, ouro e mirra, tributo Lhe dão. 

Oh! Glória, Aleluia, os salvos Te dão, 
Hosanas os anjos, entoam também. 
Louvai ao Messias, que trouxe perdão; 
A Cristo Jesus, que nasceu em Belém.`},
{id:"h490",num:490,title:"Passando Está",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Vem, fatigado coração,
Cristo está passando;
A Ele estende tua mão,
No Seu amor, confiando.

Coro:
Passando está - passando está...
O amoroso Salvador!
Vem tu a Ele, ó pecador!
Passa aqui - Chama por ti.

Vem, oprimido pecador, 
Cristo está passando; 
Vem receber do Seu amor, 
Que te está ofertando! 

Vem, ó faminto, te fartar! 
Cristo está passando; 
O pão da vida vem tomar; 
Por que estás demorando? 

Vem, pecador, sem demorar, 
Cristo está passando; 
Nos braços Seus vem te lançar, 
Jesus te está chamando.`},
{id:"h491",num:491,title:"Há Poder no Sangue de Jesus",category:"harpa",author:"Anônimo",lyrics:`O teu pecado tu queres deixar?
No sangue há poder, sim, há poder;
Queres do mal a vitória ganhar?
Seu sangue tem este poder!

Coro:
Há poder, sim, força e vigor
Neste sangue de Jesus;
Há poder, sim, no bom Salvador;
Oh! Confia no Cristo da cruz.

Queres os vícios abandonar?
No sangue há poder, sim, há poder;
Confia em Cristo para te curar;
Seu sangue tem este poder!

Oh! Paralítico, queres andar?
No sangue há poder, sim, há poder;
Para fazer-te também caminhar,
Seu sangue tem esse poder!

Queres pureza pra teu coração?
No sangue há poder, sim, há poder;
Mais lealdade, mais consagração,
Seu sangue tem este poder!

Queres de Cristo a mensagem levar?
No sangue há poder, sim, há poder;
Queres co’os anjos, na glória cantar?
Seu sangue tem este poder!`},
{id:"h492",num:492,title:"Jesus Virá do Céu",category:"harpa",author:"H.E.N Hedwig Elisabeth Nordlund",lyrics:`Jesus em breve virá do céu, 
Cumprir o que subindo prometeu, 
Tudo revela que virá presto, 
Com Ele iremos pra o reino Seu. 

Coro:
Jesus com sangue me tem comprado, 
E pelo Espírito me tem selado; 
‘Stou remido, tenho o penhor 
Da minha herança em meu Senhor.

E, pelo mundo sem descansar, 
Os mensageiros 'stão a anunciar 
O Evangelho do Filho amado, 
Que a este mundo quis resgatar! 

Do mundo inteiro já vão chegar! 
Em breve tu não achas mais lugar; 
Se vir desejas, não te demores, 
Mas vem depressa pra te salvar. 

Já vem o dia, clareando está, 
Pois a trombeta em breve soará, 
A Sua Noiva em vestes brancas, 
Jesus pra glória conduzirá.`},
{id:"h493",num:493,title:"Ao Pai Voltai",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ao Pai voltai, vós que chorais, 
Voltai ao lar paterno; 
Pois lá Jesus, em santa luz, 
Vos dá um gozo eterno! 

Coro:
Ao Pai voltai, voltai ao lar eterno; 
A Deus tomai, ao vosso lar paterno.

O Pai está ansioso lá, 
Pois quer vos ver a salvo; 
Tereis então a salvação 
Se Cristo for o alvo! 

O mal deixai e regressei 
Pra o lar do Pai glorioso, 
Então, assim, sereis enfim 
Pra sempre mui ditoso. 

Não recuseis, mas escolhei 
A Cristo, o vero trilho; 
Voltai ao lar, pra lá morar, 
Com Deus e com Seu Filho.`},
{id:"h494",num:494,title:"Jerusalém Celestial",category:"harpa",author:"Samuel Nyström",lyrics:`Jerusalém celestial, 
Mansão de paz tão divinal! 
De jaspe tem muro em redor; 
Onde é a luz, o meu Senhor. 

Coro:
Jerusalém, mansão de luz, 
Jerusalém de meu Jesus! 
Cidade que p’ra nós fez Deus; 
Eterna glória para os filhos seus.

Um rio tem. e qual cristal, 
Cuja água faz ser imortal; 
As árvores lá mui belas são, 
E pra curar oh! servirão. 

Ali não há mais pranto e dor; 
A maldição não tem vigor; 
A noite foi e não vem mais; 
O sol raiou, passaram os "ais". 

Ali verei o meu Senhor, 
Contemplarei seu resplendor, 
E cantarei o seu louvor 
Em gratidão e com fervor.`},
{id:"h495",num:495,title:"Cristo à Porta Está",category:"harpa",author:"J.Car Joel Carlson",lyrics:`Jesus Cristo á porta está;
Bate sempre para entrar;
Se ouvires abre já;
Abre o coração. 

Coro:
Abre o coração! 
Abre o coração! 
Jesus quer te libertar; 
Abre o coração!

Jesus bate ainda lá 
E, se não abrires já, 
Ele triste voltará; 
Abre o coração! 

Jesus bate, abre já, 
Abre, sim, ó pecador! 
O juízo à porta está; 
Abre o coração!`},
{id:"h496",num:496,title:"Jesus me Tirou da Lama",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jazia num lago de fama, de horror, 
Não tinha esperança em mim, pecador, 
Mas tenho clamado a Jesus Salvador, 
Pra fora do lago me tirou o Senhor. 

Coro:
Dum lago horrível Jesus me tirou, 
Sobre a rocha meus pós firmou! 
Um novo canto em mim soou, 
Ao Salvador, Aleluia!

Agora desejo a Cristo seguir, 
Com todo o meu ser eu O quero sentir, 
Pois Ele salvou-me a fim de O servir, 
E para Seu gozo, eu também fruir. 

Somente eu quero servir ao Senhor, 
Com todo prazer e com muito fervor, 
Assim vou andar de valor em valor, 
Na luz gloriosa do Consolador! 

Pra sempre agora eu proclamarei, 
"Foi crendo em Cristo que me libertei, 
E foi no Seu sangue que me lavei, 
Na rocha eterna mais me firmarei!"`},
{id:"h497",num:497,title:"Meu Bom Salvador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Jesus é precioso, meu bom Salvador,
Pra sempre O louvo, pois deu-me a luz;
Se débil me encontro me dá Seu vigor,
Pra mim é precioso Jesus!

Coro:
Precioso é Jesus, meu Jesus!
Precioso é Jesus, minha luz!
Que glória será o Seu rosto mirar!
Pra mim é precioso Jesus!

Andando no mundo, sem Deus, a vagar,
Na senda do mal, que a morte conduz,
Me disse Jesus: “Eu te quero salvar”
Pra mim á precioso Jesus!

Já por Sua graça, eu posso gozar;
Encheu-me de gozo do reino da luz;
Contemplo por fé, meu celeste lugar.
Pra mim é precioso Jesus!

Jesus é precioso, pois me quis salvar,
Morrendo por mim pendurado na cruz,
E mui glorioso virá me buscar,
Pra mim é precioso Jesus!`},
{id:"h498",num:498,title:"Guia-me ó Salvador",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Guia-me, ó Salvador, pela senda divina!, 
Ao Teu lado, sem temor, tenho gozo perenal! 

Coro:
Cristo! Cristo! Não me deixes, ó Senhor; 
Guia-me por Teu amor, e serei um vencedor.

Não me deixes, ó Senhor, neste horrendo e 
forte mar; Leva-me por Teu amor para o meu eterno lar. 

És a minha salvação, meu querido Redentor; 
Da terrível corrupção me salvaste com amor! 

Quero Teu somente ser, Te amar e Te servir, 
Cristo é, para mim, viver e morrer, o céu fruir.`},
{id:"h499",num:499,title:"A Santa Bíblia",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Santa Bíblia, para mim, 
És o meu tesouro, sim; 
Tu conténs a lei de Deus 
E me mostras lindos céus; 
Tu me dizes quem eu sou, 
Donde vim, pra onde vou! 

Tu repreendes meu falar, 
Me exortas sem cessar. 
Alumias os meus pés, 
E me guias, pela fé, 
Para as fontes de amor, 
Do bendito Salvador! 

És a voz dos altos céus, 
Do Espírito de Deus. 
Que vigor pra alma dá, 
Quando em aflição está; 
Me ensinas triunfar 
Dentre os mortos, do pecar! 

Por Tua santa letra sei, 
Que com Cristo reinarei; 
Eu que tão indigno sou, 
Por Tua luz, ao céu eu vou; 
Santa Bíblia para mim, 
És o meu tesouro, sim!`},
{id:"h500",num:500,title:"Quero ver a Jesus Cristo",category:"harpa",author:"A.A.S Antônio Alves dos Santos",lyrics:`Quero ver a Jesus Cristo, meu precioso Salvador, 
Ver a face do meu Mestre, que por mim sofreu na cruz; 
Quero ir ao céu sublime, ver o trono do Senhor, 
Viverei, sim, nessa pátria de eterno gozo e luz. 

Coro:
Quero ver a desejada 
Pátria onde reina eterno amor; 
Quero ter feliz morada, 
Com Jesus, meu Salvador.

Quero dar a Jesus Cristo, sem reserva, meu amor. 
E também viver pra sempre entre o coro angelical; 
Quero ser um mensageiro conduzindo o pecador 
Para a cruz de Jesus Cristo, para a pátria celestial. 

Pela obra redentora de Jesus que me salvou. 
Viverei eternamente p’ra gozar o Seu amor; 
Pelo sangue do Cordeiro, redimido já estou 
Com as hastes redimidas louvarei ao meu Senhor 

Vou morar na minha pátria que Jesus foi preparar, 
Habitar entre os remidos pelo sangue do Senhor; 
Entre os anjos e os arcanjos lá no reino eu vou 
E dar glórias para sempre ao bondoso Salvador.`},
{id:"h501",num:501,title:"Vencendo Com o Bom Capitão",category:"harpa",author:"Emílio Conde",lyrics:`O que serve a Deus de coração, vence o mal; 
Quem vencer terá um galardão eternal; 
Ó não queiras mais desanimar, quando vier a provação; 
Vencerá, quem puro conservar seu coração. 

Coro:
Com todo o fervor, contra o tentador, 
Vencerá então, co’o bom Capitão!

Nada poderá a fé tirar, que dá Deus; 
Pois seu povo sempre vai guiar para os céus; 
Quem a Ele tudo confessar, nunca lutará em vão, 
Vencerá, quem puro conservar seu coração. 

Eis que as armas para combater vêm dos céus, 
São as armas d’eficaz poder do bom Deus; 
Com a espada pode pelejar e vencer a tentação, 
Vencerá, quem puro conservar seu coração.`},
{id:"h502",num:502,title:"Ó Pastor Bendito",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Ó Pastor bendito, escuta 
De Teus filhos a oração, 
Cordeirinhos que, na luta, 
Dão a Ti seu coração. 

Cristo Rei, meu soberano, 
Faze que ao repousar 
Te contemple em brando sono, 
E Te busque ao despertar. 

Graças mil, Pastor amado, 
Hoje Teus cordeiros dão, 
Pois Tuas mãos, oh! nos têm dado 
Que vestir e nosso pão. 

Pequeninos, Te buscamos, 
Esta noite em oração, 
Reverentes esperamos, 
De manhã ua nova unção. Amém.`},
{id:"h503",num:503,title:"Vidas Consagradas ao Trabalho",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo busca corações já puros, 
Que proclamem sempre o perdão da cruz, 
Que aos transgressores mostre os bens futuros, 
Pra voltarem do pecado para luz! 

Coro:
Ide trabalhar além nos campos do Senhor, 
Que para a sega se apresentam brancos Já; 
Depressa ao labor, ordena Jeová, 
Desfrutareis, então, Seu grande amor!

Lábios puros Cristo necessita, 
Que com gozo falem desta salvação; 
Línguas cheias duma graça infinita, 
Que proclamem aos cativos, redenção! 

Cristo busca mãos, mas consagradas, 
Para trabalhar com santa prontidão; 
Pedem vosso auxilio messes já douradas, 
Os trigais maduros breve Cairão! 

Vidas santas Cristo necessita, 
Que aos pecadores mostrem Seu poder, 
Em Jesus firmadas e também contritas, 
Para que por elas, faça Seu querer.`},
{id:"h504",num:504,title:"Momento Solene",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`É solene o momento; 
Já expirando o ano está; 
Presto como o pensamento, 
O que resta passará. 

Débil sopro é a existência, 
Breve, efêmera qual flor; 
Pois somente tem a ciência, 
Quem ao tempo dá valor. 

Nome, fama, império, glória... 
Nada humano fica em pé; 
Pois só firme é a vitória, 
Que se alcança pela fé.

Néscio o homem que atrás corre 
Pra alcançar bens sob os céus; 
Ai do mísero que morre, 
Sem achar a paz de Deus! 

A insondável eternidade 
É bendita por Jesus, 
Que me dá imortalidade, 
Gozo eterno, plena luz!`},
{id:"h505",num:505,title:"As Palavras de Jesus",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Anelo eu ouvir a voz do meu bom Salvador,
Seus ditos um banquete são, banquete de amor
Qual o maná celestial, vigor me dão também,
Me trazem sempre instrução do Mestre de Belém.

Coro:
As palavras do Senhor,
São palavras de vigor,
Me ensinam, me guiam,
Me trazem a luz, as palavras de Jesus.

Só as palavras de Jesus infundem-me valor,
Afastam do meu coração os males e a dor.
A mansidão do Salvador me fazem conhecer,
O gozo divinal do céu me trazem ao meu ser.

Em todo tempo meu Jesus, palavras me dirá,
Nas provas elas são meu bem, sua voz me alentará,
Minh’alma nelas tem a paz, quem pode me turbar,
Jesus me dá real festim me chama pra cear.

Lugar não há. nem haverá no mundo de horror.
Em que o perdido tenha paz a não ser no Senhor
Pois, as palavras que nos diz, são fonte de poder,
Pra todo pobre pecador, que humilhado crer.`},
{id:"h506",num:506,title:"Bíblia Sagrada",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Bíblia Sagrada, de Deus mandada; 
Celeste tocha, de vera luz, 
Torna minh'alma cheia de calma, 
Pois nela ouço a voz de Jesus! 

Bíblia gloriosa, jóia preciosa, 
É meu tesouro do coração. 
Que me enriquece, me fortalece; 
Mostra-me em Cristo a salvação! 

Bíblia bendita, graça infinita, 
De Deus revela, o Seu poder! 
Dom verdadeiro ao mundo inteiro, 
Dela obtenho sumo saber!`},
{id:"h507",num:507,title:"Jesus Salva",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O Salvador te quer salvar, 
Ó pecador, vem sem tardar; 
Recebe no teu coração 
A gloriosa salvação! 

Coro:
Jesus salva, Jesus salva, 
Jesus salva o pecador. 
Ele te ama, hoje te chama, 
Com Sua voz de amor; 
Jesus salva, Jesus salva, 
Jesus salva o pecador. 
Vem tu agora, vem sem demora, 
Te entregar ao Senhor.

O Salvador te chama, vem, 
Recebe logo o sumo bem; 
A salvação, o dom de Deus, 
A Jesus Cristo, o Rei dos céus. 

O Salvador, chorando está, 
Por que não te entregas já? 
Vem hoje mesmo a Jesus. 
Vem receber celeste luz!`},
{id:"h508",num:508,title:"Sua Palavra Revelada",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Justa, explícita e mui pura 
É a lei do meu Senhor; 
Para os tristes dá ventura, 
Libertando-os do temor. 

Sua Palavra revelada 
É caudal de gran poder. 
Donde a alma atribulada, 
Pode a seu sabor beber.

Olha para o céu tão belo 
Onde está teu Redentor; 
Para sempre cesse o duelo; 
Faze a paz com teu Senhor. 

Clama ao Salvador, e a alma 
Lhe entrega, ó pecador! 
Ele paz dará e calma, 
Dando fim à tua dor!`},
{id:"h509",num:509,title:"Ao Passar o Jordão",category:"harpa",author:"Almeida Sobrinho",lyrics:`Quando o Jordão passarmos unidos,
E entrarmos no céu, veremos lá,
Como areia da praia os remidos,
Oh! Que gloriosa vista será!

Coro:
Tantos como a areia da praia!
Tantos como a areia do mar!
Que gozo sentirá
Todo o salvo pois verá,
Sim, tantos como a areia da praia!

Quando virmos os salvos do mundo,
Que a morte jamais alcançará,
Se saudarem com gozo profundo,
Oh! Que gloriosa vista será!

Lá na margem do rio da vida,
Onde paz e justiça haverá,
Nós veremos a terra prometida;
Oh! Que gloriosa vista será!

Quando Cristo Jesus contemplarmos,
Coroado no céu como está,
E prostrado aos Seus pés adorarmos,
Oh! Que gloriosa vista será!`},
{id:"h510",num:510,title:"A Riqueza Divinal",category:"harpa",author:"Anônimo",lyrics:`Um dom real Deus despertou 
Nos seus fiéis - Dom de curar! 
Toda a doença Deus sarou, 
E sara ainda e vai sarar; 
Por Jesus, por Jesus, 
Oh! Não falhou, nem vai falhar! 

Coro:
Oh! Que riqueza divinal, 
Eu gozo já por fé e luz, 
Por visão triunfal, 
Mais gozarei com meu Jesus!

És cego? Crê, que tu verás, 
És mudo? Crê, que vais falar; 
És surdo? Crê que ouvirás, 
És coxo? Crê, que vais andar; 
Fé em Deus, fé em Deus, 
Crê que Jesus te vai curar! 

De que sofreis? Dos rins, pulmões? 
De febre, gripe, ou coração? 
De tosse, nervos, ou lesões? 
De pele, dentes, defluxão? 
Sarareis, sarareis, 
Pelo poder da oração! 

Deixai as capas e vereis, 
As maravilhas do Senhor! 
Tirai a pedra e gozareis 
As grandes bênçãos do amor! 
Fé em Deus, Fé em Deus, 
A quem rendemos o louvor! 

Quando a doença a nós vem ter, 
Em Deus devemos confiar, 
Pois Jesus Cristo tem poder, 
Pra num momento nos curar; 
Glória a Deus, glória a Deus. 
Que é poderoso pra sarar.`},
{id:"h511",num:511,title:"Glorioso Deus",category:"harpa",author:"Samuel Nyström",lyrics:`Glorioso Deus, que está no céu, 
Conselheiro é contra o revés. 
Se aqui trevas há, m'iluminará; 
Na tribulação, nEle os crentes firmados estão. 

Coro:
Oh! Quão bom é nosso Deus! 
Tudo preparou p’ra os Seus, 
Que por Ele, chegarão, 
Satisfeitos à Sua mansão.

Vindo a morte dar golpe em meu lar, 
Então, eu bem sei, onde acharei, 
Paz que satisfaz, pois Jesus me traz 
O que me é mister e o que me possa aqui conter. 

Longe do meu lar, sinto eu pesar, 
Mas o bom Jesus dá-me Sua luz. 
E minh'alma diz: "'Stás em mim feliz, 
‘Stou contigo aqui", estarás, sim, comigo ali. 

Peregrino sou, mas em breve estarei 
Onde ficarei sempre com Sua grei; 
Lá hei de gozar Seu amor sem par; 
Grato cantarei aleluias ao grande Rei.`},
{id:"h512",num:512,title:"O Amor Inesgotável",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`O santo amor de Cristo, que não terá igual; 
A Sua vera graça, sublime e eternal, 
E a misericórdia imensa como o mar, 
A qual ao céu atinge, com gozo, hei de cantar. 

Coro:
Como é inesgotável 
O amor de meu Jesus! 
Rico e Inefável; nada é comparável 
Ao amor de meu Jesus!

Jesus andou no mundo, e o povo O procurou, 
E todas as angústias, sim, aos Seus pés deixou; 
E Seu amor brotava, qual rio divinal. 
Pujante, forte, imenso, sanando todo o mal. 

Também, nos olhos cegos pôs uma nova luz, 
A luz que nos dá vida, que já brilhou na cruz; 
E deu também às almas, a glória de Seu ser, 
Ao implantar Sua graça, e Seu real poder. 

O amor de Jesus Cristo, no mundo, é um fanal, 
Que marca vitorioso a senda do ideal; 
Embora passem os anos, é sempre eficaz, 
Precioso é dar à alma incomparável paz.`},
{id:"h513",num:513,title:"Minha Alma Quer Ter",category:"harpa",author:"J.P.S Julião P. Da Silva",lyrics:`Vem, ó meu bom Jesus, me consolar; 
Vem, leva-me daqui, pra contigo estar. 

Coro:
Minh’alma Te quer, vem ó meu Jesus sem par! 
Vem, leva-me daqui, p’ra contigo estar.

Que sofrimento atroz eu sinto aqui. 
Longe da pátria além, choro eu por Ti. 

Quero descanso ter ao pé de Ti. 
Desejo só partir deste mundo aqui. 

Nada me satisfaz longe do lar, 
Que preparaste ali, para eu morar. 

Que glória, que prazer eu sentirei, 
Quando eu daqui, partir, com o eterno Rei. 

Vem, ora vem, Senhor, é Rei dos céus! 
Vem já me libertar, para estar com Deus.`},
{id:"h514",num:514,title:"Em Glória Esplendente",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Em glória esplendente, na nuvem luzente, 
Ao mundo virá, outra vez, o Senhor; 
O santo Cordeiro, que lá no madeiro, 
Verteu o Seu sangue purificador. 

Coro:
Se Cristo agora voltar, tu’alma irá jubilar? 
Tens lâmpada pronta e as vestes também, 
P’ra ires com Cristo além? 
Não mais te demores, mas vem a Jesus. 
A fim de acender tua luz.

Começando a ira, perece a mentira, 
No dia da vinda de Cristo, o Senhor; 
O mundo, enganado, no vício e pecado, 
Não vai tomar parte nas bodas de amor. 

A graça perfeita, não temendo, aceita, 
Pois breve Jesus há de vir, lá do céu; 
Ó veste tu'alma, com graça e com calma. 
De dia e de noite, orando ao teu Deus.`},
{id:"h515",num:515,title:"Se Cristo Comigo Vai",category:"harpa",author:"Frida Vingren",lyrics:`Se, pelos vales, eu peregrino vou andar
Ou na luz gloriosa de Cristo habitar,
Irei com meu Senhor pra onde Ele for.
Confiando na graça de meu Salvador. 

Coro:
Se Cristo comigo vai, eu irei 
E não temerei, com gozo irei; comigo vai; 
E grato servir a Jesus, levar a cruz; 
Se Cristo comigo vai, eu irei.

Se lá para o deserto Jesus me quer mandar; 
Levando boas novas de salvação sem par; 
Eu lidarei, então, com paz no coração. 
A Cristo seguindo, sem mais dilação. 

Será a minha sorte a dura cruz levar, 
Sua graça e Seu poder, quero sempre aqui contar. 
Contente com Jesus, levando a minha cruz. 
Eu falo de Cristo que é minha luz. 

Ao Salvador Jesus eu desejo obedecer, 
Pois na Sua Palavra encontro o meu saber; 
Fiel a Deus serei, o mundo vencerei, 
Jesus vai comigo, não mais temerei.`},
{id:"h516",num:516,title:"Cristo Meu Vero Amigo",category:"harpa",author:"Frida Vingren",lyrics:`Antes eu não conhecia a Jesus o Salvador; 
Pois vivia em pecados e temor; 
Mas achei que minhas culpas, sobre Si Jesus levou 
E meu gozo nunca mais aqui cessou. 

Coro:
É Jesus Cristo meu vero amigo,
Que minhas culpas perdoou.
É Jesus Cristo meu vero amigo,
Pois a minh’alma libertou.

Antes, eu não conhecia essa purificação 
E o poder que desejava o coração. 
Mas vigor das promessas a minh’a!ma transformou 
E Jesus á fonte viva me levou. 

Pronto estou pra ir com Cristo a mensagem proclamar, 
Pelas vinhas onde vou a trabalhar; 
Bem eu sei que é poderoso; 
Sua graça me dará; E vitória plena me concederá.`},
{id:"h517",num:517,title:"Cura Divina",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo Jesus hoje vai te curar, 
Se podes crer, se podes crer. 
Pois tem virtude e graça sem par, 
Pra curar teu ser! 

Coro:
Vem, Vem, para te curar,
Crê, crê, que hás de ver;
Cura divina se manifestar
No teu fraco ser!

Crendo em Cristo irás receber. 
Cura do céu, cura do céu; 
Pois Ele tem ‘inda o mesmo poder, 
O poder de Deus! 

Mui poderoso é Cristo Jesus, 
Pra te curar, pra te curar. 
Todas as doenças cravou sobre a cruz, 
Para te sarar! 

“Não te hei dito: Se creres em Mim, 
Que hás de ver, que hás de ver; 
Cura divina manando enfim, 
Se puderes crer!”`},
{id:"h518",num:518,title:"Salva-Vidas",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Por seus pecados, 'stá o pecador 
Qual pobre náufrago sem Salvador; 
Que triste sorte, perece no mar, 
Nada, se cansa, e vai afundar. 

Coro:
Orando, joga ao que se afoga, 
O salva-vidas sem demorar; 
Antes que desça - Desapareça 
Nas profundezas do mar.

O salva-vidas não queres lançar 
Ao que s’afoga nas ondas do mar? 
Que morte horrível tem o pecador, 
Que não aceita o bom Salvador! 

É Jesus Cristo, o Filho de Deus; 
O salva-vidas lançado dos céus; 
Cristo te pode salvar hoje até, 
O salva-vidas segura com fé.`},
{id:"h519",num:519,title:"Achei Jesus, Meu Salvador",category:"harpa",author:"Ernesto Wootton",lyrics:`Achei Jesus, o meu Salvador,
De amor fiel, veraz;
Não cessarei de Lhe dar louvor,
Pois tenho a salvação e paz. 

Coro:
Salvo por Cristo sou, 
Salvo por quem me amou! 
Perfeita paz, Ele agora me traz, 
Porque salvo estou!

Vem me guardar Sua forte mão, 
De todo o vício e mal; 
Vencendo vou cada tentação; 
Sustém-me o braço divinal. 

Jesus me achou, tão aflito e mal, 
Sem ter consolação; 
Chamou-me a Si, com amor real; 
Cheguei-me e achei a salvação. 

Da morte eterna me resgatou, 
Da dura escravidão; 
Na rocha eterna seguro estou; 
Cantando vou, com gratidão.`},
{id:"h520",num:520,title:"A Doce e Preciosa Voz",category:"harpa",author:"A.C.B Augusto C. Barbosa",lyrics:`Eu me achei num estado de tristeza e dor, 
Já prevendo da vida o fim; 
Hoje, exulto ao lembrar-me da hora feliz, 
Em que Cristo olhou para mim. 

Coro:
Era só Sua doce e preciosa voz 
Que eu sempre ouvia soar, 
Então, recebia esperança, 
Que Jesus me havia de curar.

Hoje, eu bem alegre testifico a vós, 
Que Jesus, o meu bom Salvador, 
É o meu defensor, o meu guia e luz, 
Meu conforto, na luta, na dor. 

Oh!Que dia ditoso e belo pra mim, 
Em que ouvi a voz de meu Senhor, 
Exortanto-me a nEle eu bem confiar, 
Pois curou-me, por Seu grande amor!`},
{id:"h521",num:521,title:"Vem o Passo Dar!",category:"harpa",author:"Almeida Sobrinho",lyrics:`Com teu pecado vem já pra Jesus. 
Ele te quer perdoar. 
Deixa as trevas, vem já para a luz; 
Vem tua vida salvar. 

Coro:
Vem! Vem! Vem o passo dar! 
Vem teu coração entregar; 
Vem Já dizer: “Jesus me salvou, 
Do meu pecado limpo estou”.

Contra o pecado outra fonte não há, 
Só Jesus pode limpar; 
Dos teus temores e culpas, vem já 
NEle te refugiar. 

Oh! Que oferta por ti fez Jesus, 
Para te purificar! 
Deu o Seu sangue no alto da cruz; 
Vem tua alma lavar! 

Vem dar o passo, sem hesitação, 
Jesus te quer perdoar; 
Agora mesmo toma a salvação 
Vem tua vida salvar.`},
{id:"h522",num:522,title:"Rei da Glória",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`O Rei da glória, quem será, 
Senhor onipotente? 
Só Deus, o Filho, o pode ser. 
Que reina eternamente. 
As chagas que Ele recebeu, 
A morte que na cruz sofreu, 
O provam cabalmente! 

A morte que Ele à morte deu, 
Ganhando a vitória, 
A sepultura que rompeu, 
Subindo à excelsa glória, 
Declaram Seu real poder, 
E ao mundo dão a conhecer, 
Que Cristo é o Rei da glória!

Eis, elevado lá no céu, 
Jesus, o Rei da glória, 
Ali reinando além do véu, 
Com Deus, na eterna glória, 
Onde remida multidão, 
Num êxtase de adoração, 
Dá a Jesus a glória! 

Oh! Quão feliz quem nEle crer, 
Pois vê-Lo-á na glória! 
Sim, todo aquel’que renascer 
Tem o penhor da glória! 
Confessa ser um pecador. 
Confia só no Salvador, 
Jesus, o Rei da glória!`},
{id:"h523",num:523,title:"Cristo, a Fonte Escondida",category:"harpa",author:"P.L.M Paulo Leivas Macalão",lyrics:`Cristo nos deu uma fonte escondida.
Que qualquer sede pode estancar.
E cujas águas repletas de vida,
Sempre de graça nos hão de fartar.

Coro:
Água sairá, viva manará
Da fonte que abriu o Senhor, água correrá!
Se todos quiserem beber, não se esgotará;
Milhares de milhares venham; sempre sairá!

Há muitas fontes de gozo no mundo,
Nelas os homens vão sempre beber,
Mas são cisternas e poços imundos,
Que águas vivas não podem conter.

Já muitos homens gastaram dinheiro,
Sem a fonte de Deus encontrar;
Mas Jesus Cristo é o nosso roteiro,
Que para a fonte, nos há de guiar.

Oh, Aleluia ao bom Pai supremo,
Pelas bênçãos que a todos quer dar,
E pela fonte de paz que nós temos,
Em nosso ser, para nos alegrar!`},
{id:"h524",num:524,title:"Cristo Pensa em Mim",category:"harpa",author:"Antônio Almeida",lyrics:`Através da tempestade 
Em qualquer calamidade, 
Me consola esta verdade: 
Cristo pensa em mim. 

Coro:
Pensa em mim, Jesus 
Lá na excelsa luz; 
Já provaste a cruz, 
Com amor sem fim; 
Satisfeito estou, 
Sem medo vou; 
Cristo pensa em mim. 
Cristo pensa em mim.

Quando conforto eu desejo, 
Força, ousadia almejo, 
Nisto, pois, eu tudo vejo: 
Cristo pensa em mim. 

Se eu receio o inimigo, 
Tendo temor do perigo, 
Em Jesus encontro abrigo: 
Cristo pensa em mim. 

Caso eu vá ausentar-me, 
Dos meus irmãos separar-me, 
Nisto hei de consolar-me: 
Cristo pensa em mim.`},
{id:"h525",num:525,title:"Vencendo Vem Jesus",category:"harpa",author:"J.W.H Júlia Ward Howe",lyrics:`Já refulge a glória eterna 
De Jesus, o Rei dos reis! 
Breve os reinos deste mundo 
Seguirão as suas leis! 
Os sinais da sua vinda 
Mais se mostram cada vez: 
Vencendo vem Jesus! 

Coro:
Glória! glória! Aleluia! 
Glória! glória! Aleluia! 
Glória! glória! Aleluia! 
Vencendo vem Jesus!

O clarim que chama os crentes 
A batalha já soou: 
Cristo, à frente do seu povo, 
Multidões já conquistou. 
O inimigo, em retirada, 
Seu furor já demonstrou: 
Vencendo vem Jesus!

Eis que em glória refulgente 
Sobre as nuvens descerá, 
E as nações e os reis da terra 
Com poder governará. 
Sim, em paz e santidade 
Toda a terra regerá: 
Vencendo vem Jesus! 

E por fim entronizado 
As nações irá julgar: 
Todos, grandes e pequenos, 
O Juiz hão de encarar. 
E os remidos triunfantes, 
Lá no Céu irão cantar: 
- “Venceu o Rei Jesus!” 

Coro:
Glória! glória! Aleluia! 
Glória! glória! Aleluia! 
Glória! glória! Aleluia! 
Venceu o Rei Jesus!`},
{id:"h526",num:526,title:"Grandioso És Tu",category:"harpa",author:"S.K.H Stuart K. Hine",lyrics:`Senhor, meu Deus, quando eu, maravilhado, 
Contemplo a tua imensa criação, 
A terra e o mar e o céu todo estrelado 
Me vêm falar da tua perfeição. 

Coro:
Então minh’alma canta a ti, Senhor: 
- “Grandioso és Tu! - grandioso és Tu!” 
Então minh’aima canta a ti, Senhor: 
- “Grandioso és Tu! - grandioso és Tu!”

Quando as estrelas, tão de mim distantes, 
Vejo a brilhar com vivido esplendor, 
Relembro, oh! Deus, as glórias cintilantes 
Que meu Jesus deixou, por meu amor! 

Olho as florestas murmurando ao vento 
E, ao ver que Tu plantaste cada pé, 
Recordo a cruz, o lenho tão cruento, 
E no teu Filho afirmo a minha fé. 

E quando penso que Tu não poupaste 
Teu Filho amado por amor de mim, 
Meu coração, que nele Tu ganhaste, 
Transborda, oh! Pai, de amor que não tem fim! 

E quando Cristo, o amado meu, voltando, 
Vier dos céus o povo seu buscar, 
No lar eterno quero, jubilando, 
A tua santa face contemplar.`},
{id:"h527",num:527,title:"Dominador É Deus",category:"harpa",author:"Anônimo",lyrics:`Dominador é Deus sem par,
Pois, com potente mão,
A tempestade faz cessar,
E reina paz, então.

Os céus e terra Ele criou;
Seres e mananciais.
Sua vontade Ele ditou,
E vida a todos traz. 

Oh! santos! nele esperai!
Até em aflição;
Pois as promessas do bom Pai
Jamais nos falharão. 

Oh! Jamais duvideis de Deus! 
Devemos confiar. 
Ele abençoa os filhos seus, 
Por muito os amar.`},
{id:"h528",num:528,title:"Eu Te Amo, Ó Deus",category:"harpa",author:"Francisco Xavier",lyrics:`Eu te amo, ó Deus, não só porque
Almejo o Céu fruir,
Nem só porque eu temo aqui
Na morte sucumbir. 

Eu te amo, ó Deus, porque na cruz
Provaste o teu amor:
Jesus desceu e em meu lugar
Morreu, sofrendo a dor. 

Por isso, ó Deus, o meu amor
Eterno há de ser.
Cantar no Céu o teu louvor
Será o meu prazer.`},
{id:"h529",num:529,title:"Em Sua Graça",category:"harpa",author:"K.L.C Kenneth L. Cox",lyrics:`Em sua graça, seu rico amor.
Veio do Céu a Belém meu Senhor.
Que maravilha! Meu Salvador
Por mim na cruz morreu!`},
{id:"h530",num:530,title:"Vivifica a Tua Igreja",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Vivifica a tua igreja,
Ó bendito Salvador!
Sem tua graça, ela murcha
Ficará, e sem vigor. 

Vivifica! - vivifica 
Nossas almas, oh! Senhor! 
Vivifica! - vivifica 
Nossas almas, oh! Senhor!`},
{id:"h531",num:531,title:"Nome Precioso",category:"harpa",author:"Lydia baxter",lyrics:`Leva tu contigo o nome 
De Jesus, o Salvador! 
Este nome dá conforto 
Hoje, sempre e onde for. 

Coro:
Nome bom! - doce à fé 
- A esperança do porvir! 
Nome bom! - doce à fé 
- A esperança do porvir!

Este nome leva sempre 
Para bem te defender: 
Ele é a arma ao teu alcance, 
Quando o mal te aparecer. 

Oh! que nome precioso! 
Gozo traz ao coração! 
Sendo por Jesus aceito, 
Tu terás o seu perdão. 

Santo nome! adorável! 
Tem Jesus, o amado teu: 
- "Rei dos reis”, "Senhor eterno” 
Tu o aclamarás no Céu.`},
{id:"h532",num:532,title:"Santo Nome",category:"harpa",author:"W. Anglin",lyrics:`Este nome santo, 
Nome de Jesus, 
Doce melodia 
Em meu coração produz.`},
{id:"h533",num:533,title:"Honras Sejam ao Cordeiro",category:"harpa",author:"S.E.McN S.E. McNair",lyrics:`Cristo, nosso Salvador, 
Adoramos-te, Senhor! 
Gratos, damos-te louvor, 
Honras sejam ao Cordeiro! 

Ele foi que padeceu, 
Que por nós na cruz morreu! 
E que assim por nós se deu, 
Honras sejam ao Cordeiro! 

Sofredor que ali penou, 
Vencedor que triunfou! 
Salvador que nos amou, 
Honras sejam ao Cordeiro! 

Digno és Tu, Senhor, que a ti 
Demos nosso culto aqui! 
Como os teus, nos céus, ali 
Honras sejam ao Cordeiro!`},
{id:"h534",num:534,title:"Cristo É Real Pra Mim",category:"harpa",author:"R.C.H Raymond C. Helsing",lyrics:`Cristo é real pra mim, 
Cristo é real pra mim. 
Ele vive em meu ser; 
Sua paz posso ter, 
Pois Cristo é real pra mim.`},
{id:"h535",num:535,title:"Tu És Fiel, Senhor",category:"harpa",author:"T.O.C Thomas Obediah Chishom",lyrics:`Música:

Playback:

Tu és fiel, Senhor, meu Pai celeste:
Pleno poder aos teus filhos darás.
Nunca mudaste: tu nunca faltaste:
Tal como eras, tu sempre serás.

Coro:
Tu és fiel, Senhor! Tu és fiel, Senhor!
Dia após dia, com bênçãos sem fim,
Tua mercê me sustenta e me guarda.
Tu és fiel, Senhor, fiel a mim.

Flores e frutos, montanhas e mares,
Sol, Lua, estrelas no céu a brilhar:
Tudo criaste na terra e nos ares.
Todo o Universo vem pois te louvar!

Pleno perdão tu dás: paz, segurança:
Cada momento me guias, Senhor.
E, no porvir, oh! que doce esperança:
Desfrutarei do teu rico favor!`},
{id:"h536",num:536,title:"Amigo Sem Igual",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Amigo sem igual! 
Amigo sem igual! 
Jesus morreu, em meu lugar, 
A fim de me salvar. 
Amigo sem igual! 
Amigo sem igual! 
Seu grande amor não mudará, 
E nunca falhará. 

Amigo sem igual! 
Amigo sem igual! 
Bem perto está e quer salvar 
Quem nele confiar. 
Amigo sem igual! 
Amigo sem igual! 
Convida com imenso amor 
A todo o pecador.`},
{id:"h537",num:537,title:"Sempre Comigo",category:"harpa",author:"W. Anglin",lyrics:`Sempre comigo está Jesus. 
Seja nas trevas, seja na luz; 
Ele protege-me, cuida de mim; 
Eu quero amar a quem me guarda assim.`},
{id:"h538",num:538,title:"Tu, Senhor, És Nosso Amigo",category:"harpa",author:"W. Anglin",lyrics:`Tu, Senhor, és nosso amigo,
Que vieste nos salvar,
Tu, que nos tens sempre amado,
Vives para nos guardar.`},
{id:"h539",num:539,title:"Ao Pensar na Dor Crucial",category:"harpa",author:"Isaac Watts",lyrics:`Ao pensar no sofrer e na dor crucial 
Que na cruz suportou por amor nosso Rei, 
Próprio eu, vida, enfim, e prazer mundanal, 
Coisas vãs aqui nunca mais amarei. 

Destas mãos, destes pés sangue está a jorrar, 
Manancial de poder, e de paz, e de amor. 
Sempre irei nesta cruz do Senhor me gloriar, 
Neste amor sem fim pelo vil pecador. 

Nem do Céu a extensão é capaz de conter 
A amplidão sem igual e o poder deste amor. 
Lá no Céu, pela fé neste amor e poder, 
Estarei aos pés do meu bom Salvador.`},
{id:"h540",num:540,title:"Ao Ver a Cruz",category:"harpa",author:"Isaac Watts",lyrics:`Ao ver morrer na rude cruz, 
Em dor e angústia meu Jesus, 
Compreendo ser um pecador, 
E meu orgulho sem valor. 

As mãos, os pés e a fronte em dor 
Derramam sangue por amor; 
Oh! santa mão! Ferida mão! 
Deseja dar-me salvação. 

Dou graças mil a meu Jesus; 
O amor provado sobre a cruz 
Irá sustar e conduzir 
A minha vida no porvir.`},
{id:"h541",num:541,title:"Calvário, Revelação de Amor",category:"harpa",author:"J.P.C José Pimentel de Carvalho",lyrics:`No Calvário contemplamos 
Nosso meigo Salvador! 
- Oh! revelação de amor! - 
O mistério há tanto oculto, 
Deus em Cristo revelou! 
- Oh! revelação de amor! 

Coro:
Calvário! - Calvário! 
- Oh! grande dor! 
Calvário! - Calvário! 
- Oh! revelação de amor!

Deus amou a este mundo 
E seu Filho ofereceu. 
- Oh! revelação de amor! - 
O Senhor, na cruz morrendo, 
De nós se compadeceu! 
- Oh! revelação de amor! 

Deus, o Pai, olhou o Calvário 
E seu Filho abandonou! 
- Oh! revelação de amor! - 
Mas sofrendo este abandono, 
Cristo deu-nos seu perdão! 
- Oh! revelação de amor!`},
{id:"h542",num:542,title:"História de Cristo",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Conta-me a história de Cristo, 
Grava-a no meu coração, 
A linda história inaudita, 
De graça, paz e perdão! 
Conta como Ele, encarnando, 
Veio no mundo morar, 
E aos pecadores, indignos, 
De Deus o amor revelar! 

Conta como Ele, bondoso, 
Nunca a ninguém rejeitou, 
Como, de mãos estendidas, 
Todos a si convidou! 
Como não pode o bom Mestre, 
Seja a quem for, recusar, 
Se, convencido e contrito, 
O seu convite aceitar. 

Conta-me quando no monte 
Sobre a cidade chorou, 
pois orgulhosa e rebelde 
O seu amor rejeitou! 
Conta como Ele ainda chora 
Sobre os que seguem o mal; 
E, endurecidos, resistem 
Ao seu amor divinal.

Conta também como Cristo, 
Mesmo na cruz, se lembrou 
Dos seus cruéis inimigos, 
E ao Pai por eles rogou! 
Como ao ladrão moribundo 
Tão prontamente escutou, 
E, nesse dia, consigo 
Para o descanso o levou! 

Conta-me as duras afrontas 
Que mansamente sofreu: 
Como, na cruz levantado, 
Ele por ímpios morreu! 
Dá-me o viver na certeza 
De que foi mesmo por mim! 
Que seu amor inefável 
Não tem mudança nem fim!`},
{id:"h543",num:543,title:"Cristo, Meu redentor",category:"harpa",author:"W. Anglin",lyrics:`Cristo, meu Redentor! 
Cristo, meu bom Pastor! 
Tu, que morreste, e teu sangue verteste, 
És meu Salvador!`},
{id:"h544",num:544,title:"Creio, Senhor",category:"harpa",author:"N.L.Z N.L.Z",lyrics:`Cristo Jesus, o sangue teu, 
Teu grande amor e retidão 
São para mim glorioso véu 
A me cobrir com teu perdão. 

Creio, Senhor, na redenção 
Dada na cruz ao pecador, 
Que resgatou da perdição 
Meu pobre ser, por santo amor. 

Creio, Senhor, que nunca mais 
Mal há de entrar no lar do Além, 
Que, pela cruz, os imortais 
Desfrutarão o eterno bem.`},
{id:"h545",num:545,title:"Porque Ele Vive",category:"harpa",author:"Glória Gaither",lyrics:`Deus enviou seu Filho amado 
Pra perdoar, pra me salvar. 
Na cruz morreu por meu pecado, 
Mas ressurgiu e vivo com o Pai está. 

Coro:
Porque Ele vive, posso crer no amanhã. 
Porque Ele vive, temor não há. 
Mas eu bem sei, eu sei, que a minha vida 
Está nas mãos de meu Jesus, que vivo está.

E quando, enfim, chegar a hora 
Em que a morte enfrentarei, 
Sem medo, então, terei vitória: 
Irei à Glória, ao meu Jesus que vivo esta.`},
{id:"h546",num:546,title:"Manhã da Ressurreição",category:"harpa",author:"S.B",lyrics:`Quando, enfim, voltar o Salvador, 
No venturoso alvor, 
Nunca mais serão a morte atroz e a dor. 

Que manhã! feliz ressurreição! 
Queridos lá estão! 
Todos os remidos vida em Deus terão. 

Oh! prazer supremo que seduz! 
Ressuscitar em luz! 
Ver a paz do Céu a contemplar Jesus!`},
{id:"h547",num:547,title:"O Rei Está Voltando",category:"harpa",author:"B.G",lyrics:`Os fiéis são trasladados; seu trabalho aqui findou. 
A carreira desses santos, nesta vida já cessou. 
Do Senhor os bons ceifeiros, terminaram seu labor; 
A colheita completou-se: é a vinda do Senhor! 

Coro:
O Rei está voltando! o Rei está voltando! 
A trombeta está soando, para os santos trasladar. 
Sim, o Rei está voltando! o Rei está voltando! 
Aleluia! Ele vem nos buscar!

Desta Terra estão subindo os remidos para o céu, 
Ao encontro do Deus Filho, que aparece além do véu. 
E o templo está deserto; sua pregação cessou. 
É noticia em toda parte: “Jesus Cristo já voltou!” 

Os remidos vão subindo: é a festa celestial: 
Todo o Céu está se abrindo, num “Bem-vindo!” sem igual, 
Qual o som de muitas águas, nós ouvimos entoar 
Aleluias ao Cordeiro! - vamos indo para o Lar!`},
{id:"h548",num:548,title:"Breve Jesus Há de Vir",category:"harpa",author:"L.W.J Lauretta Wilcox James",lyrics:`Breve Jesus há de vir lá do Céu, buscar-nos para o Lar. 
Devo estar pronto, ao Jesus chegar, e assim vou para o Lar.`},
{id:"h549",num:549,title:"Ora Vem, Senhor Jesus",category:"harpa",author:"D.P.A Dario P. Araújo",lyrics:`Senhor, não mais retardes 
A luz do reino Teu, 
Pois já a vida aqui 
Toda em dor se converteu. 

Por Ti, Jesus, ansiosos 
Estão os corações; 
Oh! vem, sem mais tardar, 
Desfazer as aflições. 

Com fé a Igreja aguarda 
O alvor da tua luz, 
E está a suplicar: 
“Ora vem, Senhor Jesus!”`},
{id:"h550",num:550,title:"Breve Ele Volta",category:"harpa",author:"João Pereira",lyrics:`Breve Ele volta; 
Quando, eu não sei; 
Breve Ele volta; 
Jesus virá outra vez.`},
{id:"h551",num:551,title:"O Santo Espírito",category:"harpa",author:"A.M.N.V Antônio Mardônio Nogueira Vieira",lyrics:`O Santo Espírito, Consolador, 
Já nos encheu de seu eterno amor, 
De sua graça e plena unção, 
Pra anunciarmos a salvação! Amém.`},
{id:"h552",num:552,title:"Quando para o Céu Nós Formos",category:"harpa",author:"E.E.H Elisa E. Hewitt",lyrics:`Canta o grande amor de Cristo, 
Sua graça e compaixão: 
Num lugar tranqüilo e belo 
Faz-nos eternal mansão. 

Coro:
Quando ao Céu nós chegarmos, 
Oh! que dia de júbilo há de ser! 
A Jesus daremos 
Hosanas, cheios de prazer.

Somos hoje peregrinos: 
Nuvens toldam nosso céu, 
Mas um dia - estrada finda - 
Não mais sombras, não mais véu. 

Vamos ser leais, portanto, 
Seja em crer, seja em servir! 
Um relance lá da Glória 
Atração dá ao porvir. 

Eia, ao galardão depressa: 
Vamos logo ao Céu chegar: 
Abrem-se os portais gloriosos: 
Eis Jesus a nos saudar.`},
{id:"h553",num:553,title:"Oh! Pai, o Santo Espírito",category:"harpa",author:"D.P.A Dario P. Araújo",lyrics:`Oh! Pai, o Santo Espírito, 
Pedimos, vem nos dar, 
Pra que Ele venha já 
O seu poder nos outorgar! 

Convença-nos de todo o mal, 
Console os corações, 
Ampare-nos a fé 
Em meio à dor e ás aflições! 

Habite nossos corações 
Pra sermos templos teus, 
Opere conversão 
E redenção, oh! nosso Deus!`},
{id:"h554",num:554,title:"O Evangelho",category:"harpa",author:"Anônimo",lyrics:`O meu Salvador, por seu grande amor, 
Do céu, veio aqui morrer, 
Pra, salvo, levar quem nele confiar 
E ir sempre com Ele viver.`},
{id:"h555",num:555,title:"O Redentor",category:"harpa",author:"A.J.S.N Antônio José dos S. Neves",lyrics:`Sei que vive o Redentor, 
Sei que há vida em seu favor. 
Ele aqui na cruz morreu: 
Reina em glória lá no Céu. 

Vive para interceder 
E nas lutas me valer, 
Vive pra me sustentar, 
E do mal me resguardar.

Deus me livra do temor, 
Minorando a minha dor. 
A tristeza me desfaz, 
Dá-me gozo, vida e paz. 

Vive! Hosanas eu lhe dou! 
Vive! reina! e salvo eu sou! 
Vivo nele, o Redentor, 
Sempre firme em seu amor!`},
{id:"h556",num:556,title:"Lê a Bíblia",category:"harpa",author:"Joanyr d'Oliveira",lyrics:`Se desejas conhecer 
A mensagem do Senhor, 
Tua alma enriquecer 
Na Verdade e no Amor, 

Coro:
Lê a Bíblia! - Teu fervor 
Nela vem alimentar! 
Tua vida redimida 
No Senhor vai exultar. 
Lê a Bíblia - Teu fervor 
Nela vem alimentar! 
Tua vida redimida 
No Senhor vai exultar.

Se almejas alcançar 
As promessas de Jesus 
E pretendes caminhar 
Sob a proteção da Cruz, 

Se em verdade queres ir 
Habitar com o Senhor, 
Junto dele usufruir 
Do mais rico e pleno amor.`},
{id:"h557",num:557,title:"A Palavra da Vida",category:"harpa",author:"S.P.K Sarah Poulton Kalley",lyrics:`Cristo, oh! celeste vida, 
Manifesta o teu poder! 
Vivifica os sem-alento, 
Faze os mortos reviver! 
Vida eterna - vida eterna 
Vem a todos conceder! 
Vem a todos conceder! 

Abre-nos teu santo Livro! 
Brilhe em nós a luz dos céus!. 
Esclarece todo o engano 
E dos erros livra os teus! 
Ilumina! - ilumina 
Nossas almas, Rei dos céus! 
Nossas almas, Rei dos céus!

Na leitura desta Bíblia 
Dá-nos gozo, oh! Senhor! 
Tendo, pelo teu ensino, 
Comunhão em santo amor, 
Exultemos - exultemos 
Entoando o teu louvor! 
Entoando o teu louvor! 

Pelo estudo da Palavra 
Aprendemos oh! Jesus! 
- Deus concede os belos frutos  Que tua instrução produz. 
Desfrutamos - desfrutamos 
Alegria, vida e luz! 
Alegria, vida e luz! Amém.`},
{id:"h558",num:558,title:"Daí-me a Bíblia",category:"harpa",author:"P.J.O Priscilla J. Owens",lyrics:`Dai-me a Bíblia, que eu tanto anelo:
Por seu caminho quero sempre andar.
Por suas palavras são a grata nova
Que Jesus Cristo veio anunciar. 

Coro:
Dai-me a Bíblia, livro tão precioso!
Doutrina Santa: fonte é de luz.
E seus ensinos, qual farol glorioso,
A nós conduzem ao Senhor Jesus.

Dai-me a Bíblia: dela eu preciso,
Pois do pecado a mim vai livrar
E suas palavras são tão poderosas,
Que minha alma podem renovar. 

Dai-me a Bíblia! Que meu guia seja! 
E nesta vida meu caminho e luz! 
E seus ensinos - o roteiro certo -, 
Que me conduzam para o bom Jesus.`},
{id:"h559",num:559,title:"Bíblia Sagrada",category:"harpa",author:"Raimundo Nonato",lyrics:`Bíblia Sagrada, 
És a Palavra de Deus: 
És o mapa da jornada 
Dos que seguem para o Céu. 
És a carta enviada, 
Que o Atalaia tem na mão: 
És as velas da jangada 
Dos que levam a salvação. 

Coro:
Livro de amor, 
Livro que nos dá prazer 
No Salvador, 
No Espírito e no saber. 
Livro bendito! 
Só em ti pode habitar 
A Palavra de amor, 
Que dos lábios do Senhor 
Saiu para em ti falar.

Bíblia Sagrada, 
És o livro de fulgor, 
És a jóia rejeitada 
Pelo vituperador. 
És o livro para a senda, 
Contra o horror da corrução. 
És o livro que nos manda 
Falar desta salvação.

Coro:
Além do véu, 
Estás, livro do Senhor, 
Livro do Céu, 
Que transforma o pecador. 
Livro Sagrado! 
Bem-aventurados são 
Os que cantam o louvor, 
Que registras com amor, 
Pela nossa salvação.

Bíblia Sagrada, 
És a luz do meu Brasil, 
És a lança e a espada 
Deste povo varonil. 
És dos dedos, o brilhante, 
És do jardim, a linda flor, 
És a luz mais radiante 
Que nos mostra o Salvador. 

Coro:
Tu vens de Deus, 
Livro santo de Jesus. 
Dos altos céus, 
Revelaste a nós a Cruz. 
Livro que faia 
Do poder do Salvador, 
Livro que nos revelou 
Como Deus a nós amou, 
Es a voz do Redentor.`},
{id:"h560",num:560,title:"Tenho Paz em Meu Ser",category:"harpa",author:"W.L.M Will L. Murphy",lyrics:`Tenho paz em meu ser, uma perfeita paz, 
Que o mundo não me pode dar. 
E na prova fatal ou na luta mortal 
Tenho paz para me confortar. 

Coro:
Em meu ser habita Cristo, o Senhor. 
Em meu ser habita profundo amor! 
Sim, não me desampara: Ele é fiei: 
Estará comigo, meu Salvador.

Quando eu fui a Jesus, encontrei plena luz, 
De paz a minh’alma inundou. 
Toda noite passou: novo dia raiou, 
Porque Cristo Jesus me salvou. 

Esta paz sem igual, que me livra do mal, 
Sublime, sem par, eternal, 
Não a quero deixar: ela vai me ajudar, 
Té chegar à mansão celestial.`},
{id:"h561",num:561,title:"Que Bênção!",category:"harpa",author:"E.F.C Edson F. Coelho",lyrics:`Que bênção: a lua brilhando no espaço! 
Que bênção: as ondas que rolam no mar! 
Que bênção: as flores brotando nos campos! 
Mas a maior bênção eu vou te contar: 

Coro:
Jesus me salvou, dos pecados meus, 
Que bênção, Jesus! que bênção, meu Deus! 
Jesus me salvou, dos pecados meus, 
Que bênção, Jesus! que bênção, meu Deus!

Que bênção: as aves que cantam e encantam! 
Que bênção: crianças em simples brincar! 
Que bênção: rebanhos pastando entre os rios! 
Mas a maior bênção eu vou te contar: 

Que bênção: amigos que a mim procuram! 
Que bênção: a Pátria, a qual posso amar! 
Que bênção: família, saúde, fartura! 
Mas a maior bênção eu vou te contar:`},
{id:"h562",num:562,title:"Autor da Vida",category:"harpa",author:"R.H.M R.H. Moreton",lyrics:`Autor da vida. Cristo, Deus!
A vida fluis a teu querer.
Perdão por ti nos vem dos céus
E tu nos dás real prazer,
Fazendo em nosso coração
Raiar a luz da salvação. 

Nos deste a vida eterna a nós - 
Outrora mortos para Deus - 
Fizeste ouvir a tua voz 
- A voz que vivifica os teus. 
Pra te render real louvor, 
Estamos juntos, oh! Senhor!`},
{id:"h563",num:563,title:"Sempre Feliz",category:"harpa",author:"Anônimo",lyrics:`Feliz, eu sou feliz, feliz, oh! sempre mui feliz! 
Pois Cristo veio e me salvou, meu coração lavou. 
Feliz, eu sou feliz, oh! sempre mui feliz! 
Feliz, eu sou feliz, feliz, oh! sempre mui feliz!`},
{id:"h564",num:564,title:"Conta as Bênçãos",category:"harpa",author:"E.R.S Eliza rivers Smart",lyrics:`Se da vida as vagas procelosas são, 
Se, com desalento, julgas tudo vão, 
Conta as muitas bênçãos, dize-as duma vez, 
E verás, surpreso, quanto Deus já fez! 

Coro:
Conta as bênçãos! dize quantas são, 
Recebidas da divina mão! 
Vem dizê-las, todas duma vez, 
E verás, surpreso, quanto Deus já fez!

Tens acaso mágoas? Triste é teu lidar? 
E a cruz pesada, que tens de levar? 
Conta as muitas bênçãos, não duvidarás, 
E em canto alegre os dias passarás. 

Quando vires outros com seu ouro e bens, 
Lembra que tesouros prometidos tens! 
Nunca os bens da terra poderão comprar 
A mansão celeste que vais habitar. 

Seja o conflito fraco ou forte aqui, 
Não te desanimes: Deus será por ti, 
Seu divino auxílio, minorando o mal, 
Te dará consolo, e galardão final.`},
{id:"h565",num:565,title:"Tu És Meu",category:"harpa",author:"S.E.McN S.E. McNair",lyrics:`Jesus, eu sei que tu és meu, 
O Dom que Deus, o Pai, me deu. 
Teus feitos majestosos são 
O gozo do meu coração. 

Tudo o que tens, é para mim. 
O meu prazer está em ti. 
Tomaste aqui o meu lugar, 
Pra eu estar no santo lar. 

Por mim estás nos céus. Jesus. 
Que eu mostre aqui a tua luz! 
Revele sempre o teu amor! 
Até que venhas, meu Senhor!`},
{id:"h566",num:566,title:"Paz Perfeita, Sim, Busquei",category:"harpa",author:"R.H.M R.H. Moreton",lyrics:`Paz perfeita, sim, busquei, 
E jamais a encontrei, 
Pois o preço não queria eu pagar. 
Longe de Deus a vagar, 
Sua promessa a rejeitar. 
Do pecado não querendo me apartar. 

Coro:
Mas agora estou vivendo pra Jesus, 
Esconder-me quero junto à sua Cruz. 
Inda que sofrendo dor, 
Quero estar com meu Jesus: 
Encontrei por fim a vida em meu Senhor.

Eu estava em oração, 
Deus tocou meu coração 
E me disse: “Põe tua vida no altar 
Para eu santificar!” 
O pecado então deixei: 
Minha vida a Deus eu logo dediquei. 

Com seu sangue me comprou, 
O meu ser purificou. 
- Uma vida de -vitória encontrei. 
“Teus pecados perdoei 
Pelo muito que te amei” 
Ternamente me falou o Grande Rei.`},
{id:"h567",num:567,title:"Sou Feliz",category:"harpa",author:"J.I.O J.I.O",lyrics:`Sou feliz, feliz, feliz no meu viver! 
Sou feliz, pois tenho um grande Salvador. 
Desde quando me salvou com o seu poder, 
Vivo alegre, mui feliz no seu amor.`},
{id:"h568",num:568,title:"Manso e Suave",category:"harpa",author:"Bruno Skolimowsky",lyrics:`Manso e suave, é Cristo chamando: 
Chama por ti e por mim. 
Eis que Ele às portas espera velando: 
Vela por ti e por mim, 

Coro:
Vem já! vem já! alma cansada, vem já! 
Manso e suave, Jesus convidando, 
Chama: - “Vem, pecador, vem!”

Com paciência, Ele está esperando, 
Hoje, por ti e por mim. 
Oh! não desprezes a quem, convidando, 
Chama por ti e por mim. 

Correm os dias, as horas se passam, 
Passam por ti e por mim. 
Transes de morte, por fim, vão chegando, 
Tanto por ti e por mim. 

Oh! quanto amor que Jesus nos tem dado! 
Tudo por ti e por mim! 
Seu sangue foi sobre a Cruz derramado, 
Sim, foi por ti e por mim.`},
{id:"h569",num:569,title:"Morri na cruz por Ti",category:"harpa",author:"D.M.H D.M. Hazlett",lyrics:`“Morri na cruz por ti: 
Morri pra te livrar! 
Meu sangue, ali, verti, 
E posso te salvar.” 

Coro:
“Morri! morri na cruz por ti: 
- Que fazes tu por mim? 
Morri! morri na cruz por ti: 
- Que fazes tu por mim?”

“Vivi assim por ti, 
Em dor, em dissabor, 
E tudo fiz aqui 
Pra ser teu Salvador.” 

"Sofri na cruz por ti, - 
A fim de te salvar. 
A vida consegui, 
Que tu irás gozar.” 

Eu trouxe a salvação, 
Dos altos céus louvor. 
É certo meu perdão, 
É grande o meu amor!”`},
{id:"h570",num:570,title:"A Última Hora",category:"harpa",author:"João Dieners",lyrics:`Música

Instrumental

- Ao findar o labor desta vida
Quando a morte a teu lado chegar,
Que destino há de ter a tua alma?
Qual será no futuro teu lar?

Coro:
Meu amigo, hoje tu tens a escolha:
- Vida ou morte - qual vais aceitar?
Amanhã pode ser muito tarde:
Hoje Cristo te quer libertar.

Tu procuras a paz neste mundo,
Em prazeres que passam em vão.
Mas, na última hora da vida,
Eles não mais te satisfarão.

- Por acaso tu riste, ó amigo,
Quando ouviste falar de Jesus?
Mas somente Jesus pode dar-te
Salvação pela morte na cruz.

Tens manchada tua alma e não podes
Contemplar o semblante de Deus:
Só os crentes de corações limpos
Poderão ter o gozo nos céus.

Se decides deixar teus pecados,
E entregar tua vida a Jesus,
Trilharás, sim, na última hora
Um caminho brilhante de luz.`},
{id:"h571",num:571,title:"Rende o Coração",category:"harpa",author:"J.I.F J.I.Freire",lyrics:`Rende o coração agora a Jesus, 
Pois está á tua espera, com amor. 
Quem se entrega a Cristo goza paz e luz; 
Oh! Vem ao Salvador!`},
{id:"h572",num:572,title:"A Porta Sou",category:"harpa",author:"W. Anglin",lyrics:`"A porta sou eu”. diz o Senhor, 
“Alguém entrando por mim, por mim, 
Salvo será, salvo será; salvar-se-á”.`},
{id:"h573",num:573,title:"A Graça de Nosso Senhor",category:"harpa",author:"J.G.R João G. Da Rocha",lyrics:`A graça de nosso Senhor, 
E o amor de Deus, 
E a comunhão do Espírito Santo, 
Sejam conosco. Amém, Amém.`},
{id:"h574",num:574,title:"Ó Pai Bondoso",category:"harpa",author:"Anônimo",lyrics:`Ó Pai bondoso, vem nos guiar! 
No novo ano vem nos guardar!`},
{id:"h575",num:575,title:"Espero em Ti",category:"harpa",author:"Ray Palmer",lyrics:`Eu só espero em ti, 
Cordeiro, que por mim, 
Foste à cruz. 
Ouve minha oração. 
Dá-me a tua mão, 
Enche meu coração 
Com santa luz! 

Dá-me consolação, 
Guarda meu coração! 
Teu grande amor, 
Teu sangue carmesim, 
Deste na cruz por mim. 
Que eu viva para ti, 
Com muito ardor!

A trilha seguirei, 
E provas eu terei. 
Meu guia sê. 
Do mal vem me livrar: 
Puro me conservar! 
Pra sempre vou cantar 
O teu louvor.`},
{id:"h576",num:576,title:"Assim como estou",category:"harpa",author:"R.R.K R.R. Kalley",lyrics:`Assim como estou: sem nada dizer, 
Senão que por mim vieste a morrer. 
E me convidaste a ti recorrer: 
Bendito Jesus, me chego a ti! 

Assim como estou: sem mais demorar, 
Minha alma do mal querendo limpar, 
A ti, que de tudo me podes lavar: 
Bendito Jesus, me chego a ti! 

Assim como estou: em grande aflição. 
Tão digno de morte e da perdição, 
Rogando-te vida, com paz e perdão: 
Bendito Jesus, me chego a ti! 

Assim como estou: o teu grande amor 
Me vence: e crendo em ti, sem temor, 
Eu quero servir-te, divino Senhor! 
- Bendito Jesus, me chego a ti!`},
{id:"h577",num:577,title:"Em Fervente Oração",category:"harpa",author:"Anônimo",lyrics:`Em fervente oração, vem o teu coração 
Na presença de Deus derramar! 
Mas só podes fruir o que estás a pedir, 
Quando tudo deixares no Altar. 

Coro:
Quando tudo perante o Senhor estiver, 
E todo o teu ser Ele controlar, 
Só, então, hás de ver que o Senhor tem poder, 
Quando tudo deixares no Altar. 

Maravilhas de amor te fará o Senhor. 
Atendendo à oração que aceitar. 
Seu imenso poder, te virá socorrer, 
Quando tudo deixares no Altar. 

Se orares, porém, sem o teu coração 
Ter a paz que o Senhor pode dar, 
Foi por Deus não Sentir que tua alma se abriu, 
Tudo, tudo, deixando no Altar.`},
{id:"h578",num:578,title:"Sossegai!",category:"harpa",author:"M.A.B Mary Ann Baker",lyrics:`— Ó Mestre! O mar se revolta:
As ondas nos dão pavor:
O céu se reveste de trevas:
Não temos um Salvador!
Não se te dá que morramos?
Podes assim dormir.
Se a cada momento nos vemos,
Sim, prestes a submergir?

Coro:
— “As ondas atendem ao meu mandar:
Sossegai!
Seja o encapelado mar
A ira dos homens, o gênio do mal:
Tais águas não podem a nau tragar,
Que leva o Senhor, Rei do Céu e mar,
Pois todos ouvem o meu mandar:
Sossegai! — sossegai!
Convosco estou para vos salvar:
Sim, sossegai!”

— Mestre, na minha tristeza
Estou quase a sucumbir:
A dor que perturba minha alma,
Oh! Peço-te, vem banir!
De ondas do mal que me encobrem,
Quem me fará sair?
Pereço, sem ti, oh! meu Mestre!
Vem logo, vem me acudir!

— Mestre, chegou a bonança,
Em paz eis o céu e o mar!
O meu coração goza calma
Que não poderá findar.
Fica comigo, oh! meu Mestre,
Dono da Terra e Céu,
E assim chegarei bem seguro
Ao porto, destino meu.`},
{id:"h579",num:579,title:"Porque te Afliges?",category:"harpa",author:"Ernst Gebhardt",lyrics:`Oh! por que te afliges, pobre coração? 
Pois o teu Jesus quer dar consolação. 
São demais as cargas? É cruel a dor? 
Olha para o céu e vê teu lar de amor. 

Pesa na consciência teu pecado vil? 
Olha para a cruz, Jesus é tão gentil! 
Seu precioso sangue Ele já verteu 
Para dar perdão e abrir caminho ao céu. 

Quando te comprimem garras de temor, 
Quando em aflições, confia no Senhor. 
Ele te protege, triste coração! 
Ele te conduz ao céu com sua mão!`},
{id:"h580",num:580,title:"Salmo 121",category:"harpa",author:"A.D",lyrics:`Ergo os meus olhos para os altos montes: 
O meu socorro, de onde me virá? 
O meu socorro vem do Deus eterno 
Que fez a terra, fez o céu e o mar. 

Ele te guarda se teu pé vacila: 
Teu guarda nunca tosquenejará. 
É tua sombra: nem de noite a lua 
Nem o sol de dia te molestarão. 

Todos os males Ele é quem afasta, 
Pois tua alma Ela guardará. 
Guarda a saída, guarda a tua entrada, 
Sim, desde agora, para sempre, amém.`},
{id:"h581",num:581,title:"Castelo Forte",category:"harpa",author:"Martin Luther",lyrics:`Castelo forte é nosso Deus, 
Amparo e fortaleza: 
Com seu poder defende os seus 
Na luta e na fraqueza. 
Nos tenta Satanás, 
Com fúria pertinaz, 
Com artimanhas tais 
E astúcias tão cruéis, 
Que iguais não há na Terra. 

A nossa força nada faz: 
Estamos, sim, perdidos. 
Mas nosso Deus socorro traz 
E somos protegidos. 
Defende-nos Jesus, 
O que venceu na cruz 
O Senhor dos altos céus. 
E sendo também Deus, 
Triunfa na batalha.

Se nos quisessem devorar 
Demônios não contados, 
Não nos podiam assustar, 
Nem somos derrotados. 
O grande acusador 
Dos servos do Senhor 
Já condenado está: 
Vencido cairá 
Por uma só palavra. 

Que Deus a luta vencerá, 
Sabemos com certeza, 
E nada nos assustará 
Com Cristo por defesa. 
Se temos de perder 
Família, bens, poder, 
E, embora a vida vá, 
Por nós Jesus está, 
E dar-nos-á seu reino`},
{id:"h582",num:582,title:"A Barca da Vida",category:"harpa",author:"A.H.S Alfredo H. Da Silva",lyrics:`Eu tenho de andar neste mundo 
Qual barca vogando no mar, 
Mas sei o segredo profundo 
De nele jamais naufragar: 

Coro:
Cristo é o Piloto para me guiar, 
Da vida a barca, até no Céu chegar.

A luz que ao Céu me dirige, 
A Santa Palavra de Deus, 
Desvios e faltas corrige, 
Mostrando o caminho dos céus. 

O mar tormentoso da vida 
Rugindo, me busca perder, 
Mas sempre por Cristo mantida, 
Minh’alma bonança há de ter. 

Assim eu não temo perigo: 
Não vou naufragar neste mar. 
Se Cristo Jesus vai comigo, 
No céu, sim, eu hei de entrar.`},
{id:"h583",num:583,title:"Sê Tu Meu Guia",category:"harpa",author:"F.J.C Fanny Jane Crosby",lyrics:`Sê tu meu Guia, ó Cristo: estou medroso 
De andar sozinho pela solidão! 
Sê tu meu Guia, e o ermo pavoroso 
Já não será lugar de escuridão! 

Sê tu meu Guia, leva-me a teu lado, 
Pois, junto a ti desejo estar, Senhor! 
Pois por teu braço, estando assim firmado, 
Não hei de tropeçar nem ter temor. 

Sê tu meu Guia, em tempo radiante, 
Ou na bonança, ou mesmo em temporal! 
Sê tu meu Guia, que eu prossiga avante, 
Sem me afastar do rumo divina!. 

Sê tu meu Guia, até que tenha entrada 
na casa paternal, no Céu além; 
Ali, enfim. minha alma descansada 
Terá contigo seu eterno bem.`},
{id:"h584",num:584,title:"O Piloto",category:"harpa",author:"E.H",lyrics:`Guia, Cristo, minha nau 
Sobre o revoltoso mar, 
Tão enfurecido e mau, 
Quer fazê-la naufragar. 
Vem Jesus, oh! vem guiar, 
Minha nau vem pilotar! 

Como sabe serenar 
Boa mãe o filho seu. 
Vem, acalma, assim, o mar 
Que se eleva até o céu. 
Vem Jesus, oh! vem guiar, 
Minha nau vem pilotar!

Se, no porto quando entrar, 
Mais o mar se enfurecer, 
Que me possa deleitar 
Em ouvir Jesus dizer: 
"Entra, pobre viajor, 
No descanso do Senhor.”`},
{id:"h585",num:585,title:"Jesus me Satisfaz",category:"harpa",author:"W. Anglin",lyrics:`Jesus me satisfaz. 
E gozo sua paz; 
Com Ele vou, 
Contente estou: 
- Jesus me satisfaz.`},
{id:"h586",num:586,title:"Gozo e Vida Tenho",category:"harpa",author:"D.H.J D.H.J",lyrics:`Gozo e vida tenho no meu coração, 
Desde que Jesus Cristo deu-me seu perdão.`},
{id:"h587",num:587,title:"Neste Lenho me Glorio",category:"harpa",author:"John Bowring",lyrics:`Neste lenho me glorio,
Manancial de resplendor;
Brilha intenso o suplício
Do divino Redentor. 

Quando temos caridade,
Mansidão, perfeito amor,
Uma intensa claridade
Mostra ao mundo seu fulgor. 

Que suprema dor e angústia
Suportou o Salvador!
Sim, por morte tão terrível
Redimiu-nos com amor.`},
{id:"h588",num:588,title:"Sou Mui Feliz",category:"harpa",author:"D.P.A Dario P. Araújo",lyrics:`Fui pecador, perverso e mau,
Longe de Ti vaguei!
Mas, mui feliz eu hoje sou,
Jesus, meu Deus e Rei. 

Eu percebi a tua voz
A me chamar: "Oh, vem!
Vem, filho meu! Eu dar-te-ei
O meu perdão! Sim, vem!” 

Logo a teus pés, humilde, vim,
E me prostrei, Senhor!
Oh! sou feliz, porque senti
O teu benigno amor!`},
{id:"h589",num:589,title:"Quádruplo Amém",category:"harpa",author:"Joseph Scriven",lyrics:`Amém, Amém, Amém, Amém!`},
{id:"h590",num:590,title:"Contentamento",category:"harpa",author:"J.C.B Jane Catherine Bonar",lyrics:`Eu já contente estou: Tenho Jesus! 
Com alegria vou: Tenho Jesus! 
Gozo que o mundo traz, bem cedo se desfaz: 
Tenho perfeita paz, paz em Jesus. 

Eu posso envelhecer, nunca Jesus! 
Eu posso empobrecer, nunca Jesus! 
Tudo me suprirá, sempre me valerá, 
Nada me faltará, tendo Jesus. 

Vai tudo aqui findar, menos Jesus! 
Quando o Juiz chegar: é meu Jesus! 
Bem grato me há de ser quando meu Rei descer. 
Certo Ele irá dizer: “Sou teu Jesus!”`},
{id:"h591",num:591,title:"Pura, Sim, Mais Pura",category:"harpa",author:"J.G.R João G. Da Rocha",lyrics:`Pura, sim, mais pura quero a mente ter! 
Gozo, sim, mais gozo possa eu conhecer! 
Oh! Jesus Bendito, ouve esta oração, 
Pois a ti pertence o meu coração. 

Calmo, sim, mais calmo sempre quero estar. 
Firme, sim, mais firme possa eu sempre andar! 
Nunca me esmoreça este coração, 
Pois em Cristo tenho toda a perfeição. 

Alto, sim, mais alto que as estrelas vou. 
Perto, sim, mais perto de Jesus estou. 
Cristo é meu modelo, sempre o seguirei: 
Tudo quanto anelo nele encontrarei.`},
{id:"h592",num:592,title:"O Lugar de Bênção e Paz",category:"harpa",author:"S.P.K Sarah Poulton Kalley",lyrics:`Eu estou no lugar onde há bênção e paz, 
Onde sinto comigo Jesus. 
Aos humildes seu sangue assegura perdão: 
Seu Espírito os enche de luz. 

Coro:
Estou no lugar onde há bênção e paz, 
Onde Cristo nos mostra afeição. 
Descansai! exulta!! confessai-o! 
- Publicai que nele há salvação.

Que alegria estar onde há bênção e paz! 
Que riqueza de amor sem igual: 
O cansado recebe alimento e vigor: 
Para o triste há consolo real! 

Que ternura estar onde há bênção e paz, 
E perdão de inefável valor! 
Mas somente os fiéis é que podem contar 
Esta graça do bom Salvador. 

Há louvor sem igual onde há bênção e paz! 
E eis que os anjos desejam cantar 
Com os homens, em coro, a bendita mercê 
De Jesus, que nos veio salvar!`},
{id:"h593",num:593,title:"Estou Seguro",category:"harpa",author:"J.I.F J.I.Freire",lyrics:`Oh! Jesus, meu Salvador, 
Estou seguro em teu amor, 
E por ti sou vencedor, 
Pois estás comigo!`},
{id:"h594",num:594,title:"Fé Persistente",category:"harpa",author:"W.H.B William Hiley bathurst",lyrics:`Almejo a fé que forte é 
Diante do terror, 
Que, calma, não recuará 
Do mundo aterrador. 

A fé que não me faz queixar 
Na dor da correção, 
Mas quanto o fogo mais arder, 
Mais firma o coração. 

A fé que sempre brilha mais 
No negro furacão, 
Que no perigo sente paz, 
Audaz na escuridão. 

Ó Deus, me dá tamanha fé, 
Que venha o que vier! 
Então na lide provarei 
Celestial prazer.`},
{id:"h595",num:595,title:"Somente a Ti!",category:"harpa",author:"K.L.C Kenneth L. Cox",lyrics:`Quem tenho, ó Deus, no céu aí 
Senão a ti - somente a ti! 
E mais ninguém adoro aqui 
Além de ti, somente a ti! 

A Rocha deste coração 
És tu, Senhor, e meu quinhão. 
Com teu olhar guiar-me-ás 
E em glória me receberás.`},
{id:"h596",num:596,title:"Gratidão",category:"harpa",author:"V.R.S Venâncio R. Santos",lyrics:`Eu te agradeço, Jesus, meu Senhor, 
As tuas bênçãos a flux. 
Eu me enlevo por teu grande amor 
Manifestado na cruz! 
Ao lado estou das riquezas dos céus, 
Fluídas de tuas mãos. 
Quero cantar mil cantares! 
- Oferta profunda do meu coração! ;

Coro:
Louvemos, pois, o nosso Rei Jesus, 
Que por amor morreu na dura cruz! 
Só Ele nos dá paz, 
Sua graça satisfaz: 
Louvemos, pois, o nosso Rei Jesus!

Tua bondade é sublime e real, 
Eternamente pra mim. 
Aceita agora o meu voto leal 
Por tua graça sem fim! 
Tu nos provês da fartura dos céus, 
Com tuas divinas mãos. 
Por isto canto mil cantos, 
Que jorram de dentro do meu coração! 

Mui amoroso és, Cristo Jesus, 
Desde o Calvário de dor. 
Onde abriu-se a fonte da Luz 
Que sara o sofredor. 
Por gratidão, quero sempre cantar 
Louvores de salvação, 
Quero cantar mil cantares 
Com gozo imenso do meu coração!`},
{id:"h597",num:597,title:"Graça Dou",category:"harpa",author:"A.O.D Alice O Denyszcuk",lyrics:`Graças dou por esta vida: pelo bem que revelou. 
Graças dou pelo futuro, e por tudo que passou. 
Pelas bênçãos derramadas, pela dor, pela aflição, 
Pela graça revelada! - graças dou pelo perdão. 

Graças pelo azul celeste e por nuvens que há também, 
Pelas rosas do caminho, por espinhos que elas têm, 
Pela escuridão da noite, pela estrela que brilhou, 
Pela prece respondida, pelo sonho que falhou. 

Pela cruz e o sofrimento e por toda provação, 
Pelo amor que é sem medida, pela paz no coração, 
Pela lágrima vertida, pelo alivio que é sem par. 
Pelo dom da eterna vida, sempre graças hei de dar!`},
{id:"h598",num:598,title:"Riquezas do Céu",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Oh! buscai, não as riquezas 
Deste mundo de incertezas! 
As do Céu não têm tristezas: 
Oh! buscai-as, sim, buscai! 

Oh! buscai. não as loucuras 
Que só trazem amarguras. 
Mas as eternais venturas: 
Oh! buscai-as, sim. buscai! 

Oh! buscai Jesus primeiro, 
Ao real, fiel Cordeiro! 
Nele há gozo verdadeiro: 
Oh! buscai-o, sim, buscai! 

Sim, buscai Jesus bendito, 
Seu amor é infinito, 
Inefável, inaudito: 
Oh! buscai-o, sim, buscai!

Oh! buscai a santidade, 
A pureza, a caridade! 
Com temor, com humildade, 
Oh! buscai-as! sim, buscai! 

De Jesus imitadores, 
Sede bons trabalhadores! 
E buscai os pecadores: 
Oh! buscai-os, sim, buscai! 

Com amor, a convidá-los. 
Ide agora procurá-los, 
Pois Jesus manda chamá-los: 
Oh! buscai-os, sim, buscai!`},
{id:"h599",num:599,title:"Herdeiro do Reino",category:"harpa",author:"Anônimo",lyrics:`Ó tu, herdeiro do reino celeste, 
Não, não dormites, o fim vai chegar; 
Oh! cinge as armas e põe-te na luta, 
Pois a vitória desejas ganhar. 

Não te detenham prazeres terrenos, 
Pois bem depressa terão de passar; 
Oh! deixa a vida que ao mundo te prende, 
Vem, vem a Cristo que te há de salvar! 

Eis as potências dispostas à luta; 
Sê fervoroso, fiel, bom cristão; 
Já no horizonte refulgem as glórias 
Oh! nobre herdeiro, prorrompe em canção!`},
{id:"h600",num:600,title:"Mãos ao Trabalho",category:"harpa",author:"A.L.W.C A.L.W.C",lyrics:`Mãos ao trabalho, crentes, 
Vai já passando o alvor. 
Vamos, enquanto temos 
Nossa vida em flor! 
Vamos, enquanto é dia, 
Com força trabalhar: 
Eia que em vindo a noite, 
Já não há lidar! 

Mãos ao trabalho, crentes, 
Andai, enquanto há luz: 
Eia, que, agora é tempo 
De servir Jesus! 
Ide o vigor da vida 
Todos ao bem votar. 
Eia, que em vindo a noite, 
Já não há lidar!

Mãos ao trabalho, crentes, 
Breve nos chega o fim. 
Firmes, enquanto a morte 
Não tocar clarim! 
Vamos, irmãos, à obra, 
Por Cristo trabalhar: 
Eia, que em vindo a noite, 
Vamos descansar!`},
{id:"h601",num:601,title:"A Seara está Madura",category:"harpa",author:"F.W.S F. W. Sulfield",lyrics:`A seara está madura; 
Há trabalho pra fazer. 
Ouve a voz de Deus chamando 
Para à ceifa te trazer! 

Coro:
Do teu labor o fruto aumenta, 
Quando vives sempre a orar. 
Terás Justa recompensa, 
Se tu fores trabalhar.

Bem-aventurado o servo 
Que viveu a trabalhar. 
Ao fiel o Pai declara: 
"No meu gozo vais entrar."`},
{id:"h602",num:602,title:"Juntos Trabalhamos",category:"harpa",author:"William Shaw",lyrics:`Juntos trabalhamos pelo nosso Rei;
Frutos mostraremos quando aqui voltar.
Homens maus buscamos para a sua grei,
Pois o nosso Rei também os quer salvar.

Mesmo em nossa casa nosso derredor,
Vamos trabalhando pelo Salvador..
Nossa recompensa há de ser maior,
Sendo-lhe fiéis e ao seu supremo amor.

Temos a mensagem para proclamar.
Tempos perigosos são os atuais;
Cristo em breve volta, temos que lugar;
Sempre avante, assim - Retroceder, jamais!`},
{id:"h603",num:603,title:"Método de Deus",category:"harpa",author:"John Josey",lyrics:`É bom falar com alguém 
De Cristo, de Cristo, 
É bom falar com alguém 
De Cristo. 

Vai hoje e traze alguém 
A Cristo, a Cristo, 
Sim, vai e traze alguém 
A Cristo. 

Vai hoje orar por alguém 
A Cristo. a Cristo. 
Sim, vai orar por alguém 
A Cristo. 

Alguém assim salvarás 
Por Cristo, por Cristo. 
E grande gozo terás 
Em Cristo.`},
{id:"h604",num:604,title:"Senhor, os Mensageiros Teus",category:"harpa",author:"M.C.G Mary C. Gates",lyrics:`Senhor, os mensageiros teus 
Irão levar por onde for 
A luz da graça ao mundo mau, 
E a fé no Salvador. 

Senhor, envia obreiros bons, 
De fé, coragem, zelo e amor; 
Fiéis a Ti e ao seu dever, 
Leais ao Redentor. 

Senhor, possamos todos nós 
Aqui do teu perdão falar; 
A quem do mal cativo está, 
Até Jesus voltar.`},
{id:"h605",num:605,title:"Quero te Servir",category:"harpa",author:"N.J.L Nicodemos José Loureiro",lyrics:`Quero, Jesus, fazer o teu querer; 
Quero servir-te, sim. 
Tua palavra sempre obedecer, 
Pois tens amado a mim. 

Coro:
Quero Te servir 
Oh! meu Salvador 
Quero Te servir, 
Pois és o meu Pastor.

Nesta jornada sempre confiarei 
No teu grandioso amor. 
Tua mensagem sempre levarei 
Aos que padecem dor. 

Um dia, aqui, as lutas findarão; 
Contigo estarei. 
Alegre irei, sim, à feliz Sião, 
Com tua santa grei.`},
{id:"h606",num:606,title:"Triunfo",category:"harpa",author:"H.M.W H. Maxwell Wrigth",lyrics:`Eu triunfarei pelo sangue de Jesus; 
Sim, triunfarei pela sua cruz.`},
{id:"h607",num:607,title:"Luz após Trevas",category:"harpa",author:"F.R.H Frances Ridley Hevergal",lyrics:`Luz após trevas, glória após luz, 
Ganho após perda, trono após cruz, 
Paz após luta, fruto após flor, 
Riso após pranto, gozo após dor. 

Crente após ímpio, justo após réu, 
Graça após ira, vista após véu, 
Sol após chuva, mel após sal, 
Lar após lida, bem após mal. 

Perto após longe, Cristo após eu, 
Vida após tumba, terra após Céu, 
Glória, paz, vida, fé, trono e luz 
Tudo isso eu tenho, crendo em Jesus.`},
{id:"h608",num:608,title:"Se em Teu Caminho",category:"harpa",author:"A.R.S Annie R. Smith",lyrics:`Se em teu caminho aqui 
A escuridão e as sombras vêm, 
E se nenhum fulgor sorri, 
Trazendo luz do vasto além, 
Terás a luz do Céu. 

Se em teu viver aqui 
Perseguição trouxera dor, 
Trouxer o sofrimento a ti, 
Oh, sim então, em teu favor 
Virás paz do Céu. 

Mas oh! se o teu sofrer 
E a luta atroz findar aqui, 
E a paz, enfim, puderes ter. 
Quão calmo e bom, quão doce a ti 
Serão lar do Céu.`},
{id:"h609",num:609,title:"Vitória Deus Dará a Mim",category:"harpa",author:"Anônimo",lyrics:`Vitória Deus dará a mim, eu sei,
Vitória Deus dará a mim, eu sei.
Se eu andar em plena luz,
Confiar só em Jesus,
Vitória Deus dará a mim, eu sei.`},
{id:"h610",num:610,title:"Fé É a Vitória",category:"harpa",author:"J.H.Y John H. Yates",lyrics:`Fé é a vitória,
Sim, fé sempre tem poder.
Fé é a vitória:
Ao mundo irá vencer.`},
{id:"h611",num:611,title:"Cristo, Comandante",category:"harpa",author:"F.A.B F.A. Blackmer",lyrics:`Sempre avante! manda o General; 
Sempre avante! guerra contra o mal! 
Firmes, fortes, nunca vacilar! 
Pois os seus fiéis irão ganhar.`},
{id:"h612",num:612,title:"Ó Pai Eterno",category:"harpa",author:"K.L.B Katharine L. Bates",lyrics:`Ó Pai eterno que no Céu habitas, 
Nós, os teus filhos, vimos te pedir 
Que nos amparem tuas mãos benditas. 
Em nossas lutas hoje e no porvir. 

Não nos impute nossos vis pecados. 
Teus, nós sejamos, sempre mais e mais; 
Pois, confiantes, somos vigorados 
Em teus paternos braços divinais. 

Ó Pai, transforma nossa natureza, 
Vem ensinar-nos a fazer o bem. 
Em nossa mente dá-nos mais pureza, 
Mais santidade, por Jesus. Amém.`},
{id:"h613",num:613,title:"Vitória Final",category:"harpa",author:"L.E.C Lucy E. Campbell",lyrics:`Quando chegar ao fim da jornada, 
Finda a luta e ao Céu eu for; 
Doce será. sim, gozar o repouso 
E as boas vindas de Cristo, Senhor.`},
{id:"h614",num:614,title:"Terra Feliz",category:"harpa",author:"S.F.B Sanford Filmore Bennett",lyrics:`Eu avisto uma terra feliz, 
Onde irei para sempre morar: 
Há mansões nesse lindo país, 
Que Jesus foi pra mim preparar. 

Coro:
Vou morar! - vou morar 
Nessa terra celeste porvir! 
Vou morar! - vou morar! 
Nessa terra celeste porvir!

Cantarei nesse lindo país 
Belos hinos ao meu Salvador. 
Pois ali viverei bem feliz, 
Sem angústias, tristezas, nem dor. 

Coro:
Vou cantar! - vou cantar 
Nessa terra celeste porvir! 
Vou cantar! vou cantar 
Nessa terra celeste porvir!

Deixarei este mundo, afinal, 
Para ir a Jesus adorar. 
Nessa linda cidade real, 
Em venturas sem fim vou estar. 

Coro:
Vou estar! - vou estar 
Nessa terra celeste porvir! 
Vou estar! - vou estar 
Nessa terra celeste porvir!`},
{id:"h615",num:615,title:"Vou Rumo ao Meu Lar",category:"harpa",author:"William Cowper",lyrics:`Vou rumo ao meu lar, meu lar celestial;
Vou rumo ao meu lar e a Cristo;
Lá, não mais pesar, tristezas ou dor;
Vou rumo ao meu lar e a Cristo.`},
{id:"h616",num:616,title:"Quanto Almejo!",category:"harpa",author:"D.P.A Dario P. Araújo",lyrics:`Quanto almejo, lar celeste,
Tua glória ver!
Vestes brancas, perenais,
De Deus receber! 

Quanto almejo junto aos coros
Minha voz erguer!
Com meu Mestre caminhar,
Será meu prazer! 

Quanto almejo sua volta, 
Vê-lo vir em luz, 
Para em breve desfrutar 
A paz com Jesus!`},
{id:"h617",num:617,title:"Quanto Anelo",category:"harpa",author:"Anônimo",lyrics:`Quanto anelo contemplar a Cristo;
Quanto anelo seu divino rosto ver!
'Stou cansado de andar qual peregrino triste aqui;
Quanto anelo eu a Cristo ter.`},
{id:"h618",num:618,title:"É Nosso o Lar",category:"harpa",author:"Richard Olden",lyrics:`É nosso lar dos céus, no qual não entra o mal, 
Morada, junto ao santo Deus, na glória divinal. 

mão do amante Pai conduz-nos para o lar: 
Bendito lar que sempre foi de Deus o seu lugar. 

O sangue de Jesus já no-lo assegurou; 
A sua morte sobre a cruz, o título firmou. 

E o bom Consolador, penhor da redenção. 
Pra o céu nos leva com amor, paz e satisfação. 

Consolador sem par aqui será pra nós, 
Até ouvirmos nesse lar de Cristo a terna voz. 

Eternamente, então, folgando no Senhor, 
No lar faremos, em canção, soar o seu louvor.`},
{id:"h619",num:619,title:"Meu Lar, Jerusalém",category:"harpa",author:"John Bowring",lyrics:`Feliz Jerusalém, meu lar!
Em ti almejo estar!
Sentir a calma em glória ali,
E teu prazer gozar. 

Oh! lar feliz de amor e paz! 
Jardim sem outro igual! 
O teu fulgor de glória e luz, 
Jamais o viu mortal. 

Jesus em breve irá voltar, 
E a paz do lar de além 
Irá, então, em ti reinar, 
Meu lar - Jerusalém`},
{id:"h620",num:620,title:"Na Jornada Para Jerusalém",category:"harpa",author:"J.P.C José Pimentel de Carvalho",lyrics:`Na jornada para o Céu, 
Vivo sempre a meditar. 
Muito alegre vou cantando 
E seguindo pro meu lar. 
Muito alegre vou cantando 
E seguindo pro meu lar. 

Coro:
Sei que é certa a vitória, 
Que Jesus me garantiu: 
Eu vou chegar à Glória (bis) 
Que o mortal inda não viu.

Caminhando com Jesus, 
Meu prazer sempre aumentou: 
Revelou-me o amor da cruz, 
Que meus crimes perdoou 
Revelou-me o amor da cruz, 
Que meus crimes perdoou. 

Um clarão da luz do Céu 
Minha alma iluminou 
Então vi o abismo eterno 
Do qual Deus já me salvou. 
Então vi o abismo eterno 
Do qual Deus já me salvou. 

Nesta senda gloriosa, 
Me ajude o meu Rei: 
Tenho paz, e mui ditosa, 
E mais paz no Céu terei. 
Tenho paz, e mui ditosa. 
E mais paz no Céu terei.`},
{id:"h621",num:621,title:"Juntos, no Céu",category:"harpa",author:"Anônimo",lyrics:`Iremos juntos viver no Céu; 
Felizes vamos ser. 
Felizes lá no Céu, 
Iremos juntos viver no Céu: 
Jesus e eu!`},
{id:"h622",num:622,title:"Tão Grato me é Lembrar",category:"harpa",author:"Phoebe Cary",lyrics:`Tão grato me é lembrar
Que cada dia estou
Mais perto do celeste lar,
Em que morar eu vou!

Coro:
Cada vez mais perto do lar,
Perto do meu eterno lar,
Em que morar eu vou.

Em breve vou partir
Pra onde não há dor. 
Delícias no céu vou fruir 
Naquele lar de amor.

O Mestre, que leal
Eu seja sempre aqui!
Pois quero junto aos salvos mil
Contigo estar ai.`},
{id:"h623",num:623,title:"Oh, Sim, Bem Sei",category:"harpa",author:"H.I.D Harold I. Donnelly",lyrics:`Oh, sim, bem sei que o Redentor
Nos altos céus está;
Que vê-lo-ei ao regressar,
E a vida me dará. 

À plena luz dos olhos meus
Verei o Salvador;
Em carne, sim, verei a Deus,
Na paz do céu de amor. 

Oh, sim, bem sei, bem certo estou
Que vive, além, meu Rei;
E pelo seu eterno amor,
Com Ele viverei.`},
{id:"h624",num:624,title:"Anseio um Lugar de Amor",category:"harpa",author:"J.G.W John G. Whittier",lyrics:`Anseio a paz, um lugar de amor!
Saudoso estou deste lar feliz;
Subir em vestes de fulgor
Ao sempiterno, bom pais. 

Jamais virão os pecados vis 
A penetrar nos portais de luz;
Será no centro do pais 
O trono eterno de Jesus.

Ali fruir infindáveis paz,
Ali viver são os sonhos meus;
E o doce enlevo que me traz,
Real se torne, queira Deus!`},
{id:"h625",num:625,title:"Glória Indizível",category:"harpa",author:"J.B.A Jonathan Bush Atchinson",lyrics:`Tenho lido da bela cidade
Situada no Reino de Deus,
Amurada de jaspe luzente,
E juncada com áureos troféus.
Bem no meio da praça eis o rio
Da vida e vigor eternal;
Mas metade da glória celeste
Jamais se contou ao mortal.

Coro:
Jamais se contou ao mortal!
Jamais se contou ao mortal!
Metade da glória celeste
Jamais se contou ao mortal!

Tenho lido dos belos palácios,
Que Jesus foi no Céu preparar,
Onde os santos fiéis, para sempre,
Mui felizes irão habitar;
Nem tristeza, nem dor, nem velhice
Veremos no lar paternal;
Mas metade da glória celeste
Jamais se contou ao mortal.

Tenho lido das vestes brilhantes,
Das coroas que os crentes terão,
Quando o Pai os chamar proclamando:
- “Recebei eternal galardão!”
Tenho lido que os santos na glória
Tem gozo e prazer perenal.
Mas metade da glória celeste
Jamais se contou ao mortal.

Tenho lido da história bendita
De Jesus, o fiel Redentor,
Que por nós padeceu no Calvário
E recebe ao mais vil pecador.
Tenho lido do sangue vertido
Que a todos redime do mal;
Mas metade da glória celeste
Jamais se contou ao mortal.`},
{id:"h626",num:626,title:"Tríplice Amém",category:"harpa",author:"M.L.Y M.L.Y",lyrics:`Amém, Amém, Amém!`},
{id:"h627",num:627,title:"Finda-se Minha Prisão",category:"harpa",author:"F.J.C Fanny Jane Crosby",lyrics:`Lá, eu verei meu Salvador, 
Coros de anjos quero ouvir;
Junto também hei de cantar 
Que meu Jesus me quis remir.`},
{id:"h628",num:628,title:"Além do céu Azul",category:"harpa",author:"A.B.S Alfred B. Smith",lyrics:`Além do céu azul, 
Foi Jesus preparar
Um lar pra dar a quem
A vitória alcançar. 
Por Ele consegui
A vida do porvir,
Com fé no meu Senhor Jesus. 

Bem sei que eu de mim 
Nada tenho pra dar
Mas sei que meu Jesus
Já me veio salvar. 
Por Ele livre estou,
Seguindo a Ele vou,
Até seu rosto ver além.`},
{id:"h629",num:629,title:"Conversaremos Ali no Céu",category:"harpa",author:"I.S",lyrics:`Conversaremos ali no Céu, 
Conversaremos: Jesus e eu.
Dirá o porquê do meu sofrer. 
Naquele dia eu entenderei.`},
{id:"h630",num:630,title:"Não Há Separação na Glória",category:"harpa",author:"J.R.R John R. Rice",lyrics:`Não há separação na glória; 
Na alvorada, nas alturas.
Não há separação na glória, 
Quando estivermos lá no Céu!`},
{id:"h631",num:631,title:"Neste Lugar",category:"harpa",author:"Joanyr d'Oliveira",lyrics:`Eis plantada neste dia,
Qual semente singular,
Esta pedra - que alegria
Faz o povo aqui cantar!

Coro:
Ouvi, oh! Terra e toda gente,
O louvor, a gratidão
A Jesus e ao Pai somente
Pelas almas que virão!

Tantas vidas tão vazias
Ou repletas de aflição,
Neste templo, novos dias
No Senhor desfrutarão!

Quantos jovens sem futuro
A esta Casa hão de chegar
-E desfeito o negro muro
Paz e amor vão respirar!

Mães e esposas suspirosas
A clamar, aqui virão;
Logo após. vitoriosas,
Glória e glória ao Rei darão!

Muitos seres quebrantados,
Nesta Casa de Oração,
Pelo Espírito visitados,
“Aleluia!” exclamarão.`},
{id:"h632",num:632,title:"Mais um Templo",category:"harpa",author:"M.A.S Manuel Avelino de Souza",lyrics:`Hoje, inaugura-se aqui, santo Deus,
Mais um padrão de teu amor:
Um novo templo, fanal para os céus,
Causa de mais louvor!

Coro:
Glória a Deus! - glória a Deus
Cantem os filhos teus!
Glória a Deus! - glória a Deus!
Glória nos altos céus!

Casa de cultos e fonte de luz,
Onde, Senhor, dás salvação
Pelo Evangelho que trouxe Jesus,
Com tanta compaixão!

Marco sublime da proclamação
Do teu amor - do teu querer:
Os pecadores aqui ouvirão
Qual é o seu dever.

Seja esta casa lugar de oração,
Habitação tua, oh! Deus!
E porta do Céu, lugar de perdão,
Vida de paz nos céus!`},
{id:"h633",num:633,title:"Meu Brasil",category:"harpa",author:"A. Mignão",lyrics:`Meu Brasil, nação gigante e mui sublime,
Creio ver-te muito breve bem maior,
Combatendo a iniqüidade, o vicio, o crime,
Redimido aos pés de Cristo, o Salvador.

Coro:
Meu Brasil! - meu Brasil!
Abre o largo peito e deixa a luz raiar!
Meu Brasil! - meu Brasil!
O Evangelho de Jesus te quer salvar!

Debelar a escuridão minh'alma anseia
Do teu meio, onde o Evangelho prega a paz.
Espalhando livros santos a mancheia,
A vitória, meu Brasil, alcançarás.

Não te peço, meu Senhor, poder, riqueza, 
Nem as glórias que oferece o mundo vil: 
Dá que eu possa ver fulgindo de beleza,
Na coroa de Jesus - o meu Brasil.`},
{id:"h634",num:634,title:"Oração pela Pátria",category:"harpa",author:"W.E.E William Edwin Entzminger",lyrics:`Minha Pátria para Cristo! 
- Eis a minha petição.
- Minha Pátria tão querida,
Eu te dei meu coração. 
Lar prezado, lar formoso,
É por ti o meu amor.
Que o meu Deus de excelsa graça 
Te dispense seu favor!

Coro:
Salve Deus a minha Pátria, 
Minha Pátria varonil!
Salve Deus a minha terra,
Esta terra do Brasil!

Quero, pois, com alegria,
Ver feliz a mãe gentil, 
Por vencer o Evangelho
Nesta terra do Brasil.
Brava gente brasileira.
Longe vá temor servil; 
Ou ficar a Pátria salva, 
Ou morrer pelo Brasil.`},
{id:"h635",num:635,title:"Eis o Brasil em Tuas Mãos",category:"harpa",author:"D.P.A Dario P. Araújo",lyrics:`Ó nosso Rei e Redentor,
Vem atender-nos a oração;
Sê o supremo Protetor,
Eis o Brasil em tua mão.

Dá compreensão e bênçãos mil
Aos que dirigem a nação; 
Põe neles zelo mais febril 
Por tua Lei e retidão. 

Pai, quando, enfim, voltar Jesus,
Vier para dar-nos galardão,
Com os remidos lá na luz,
Dá ao Brasil a salvação.`},
{id:"h636",num:636,title:"Por nossa Pátria Oramos",category:"harpa",author:"J.G.R João G. Da Rocha",lyrics:`Por nossa Pátria oramos
A ti, supremo Deus!
Por nosso lar clamamos
A ti, ó Rei dos céus!
Bendize a vida pastoril,
Governa o brio senhoril,
Modera a lida mercantil!
- Deus salve a Pátria!

Da Pátria, que nos deste,
Desvie tua mão
Desgraças, fome e peste,
Perfídia e sedição!
Sustenta a ordem nacional,
O bom governo imparcial,
E dá-nos graça divinal!
- Deus salve a Pátria!

Dá-nos real civismo,
Fiel, constante, audaz!
Promove o cristianismo
Do Príncipe da paz!
Da Pátria afasta crenças vás,
Derrama bênçãos temporãs!
Dominem só. doutrinas sãs!
- Deus salve a Pátria!

A tua Igreja inflama
Com zelo e terno amor,
E seja o seu programa
Cumprido com vigor!
Então, os salvos de Jesus,
Lutando firmes pela Cruz,
Difundirão de Cristo a luz
Por toda a Pátria! Amém.`},
{id:"h637",num:637,title:"Hino à Bandeira Nacional",category:"harpa",author:"Olavo Bilac",lyrics:`Salve lindo pendão da esperança! 
Salve, símbolo augusto da paz!
Tua nobre presença à lembrança 
A grandeza da Pátria nos traz. 

Coro:
Recebe o afeto que se encerra
Em nosso peito juvenil,
Querido símbolo da terra, 
Da amada terra do Brasil!

Em teu seio formoso retratas
Este céu de puríssimo azul, 
A verdura sem-par destas matas,
E o esplendor do Cruzeiro do Sul.

Contemplando teu vulto sagrado,
Compreendemos o nosso dever,
E o Brasil. por seus filhos amado,
Poderoso e feliz há de ser.

Sobre a imensa nação brasileira,
Nos momentos de festa ou de dor,
Paira sempre, sagrada bandeira,
Pavilhão da justiça e do amor!`},
{id:"h638",num:638,title:"Hino Nacional Brasileiro",category:"harpa",author:"J.O.D.E Joaquim Osório Duque Estrada",lyrics:`Ouviram do Ipiranga as margens plácidas 
De um povo heróico o brado retumbante, 
E o sol da liberdade, em raios fúlgidos, 
Brilhou no céu da Pátria nesse instante. 
Se o penhor dessa igualdade
Conseguimos conquistar com braço forte, 
Em teu seio, ó liberdade, 
Desafia o nosso peito á própria morte! 
O Pátria amada, idolatrada, salve! salve!
Brasil, um sonho intenso, um raio vívido 
De amor e de esperança à terra desce, 
Se em teu formoso céu, risonho e límpido, 
A imagem do Cruzeiro resplandece.
Gigante pela própria natureza, 
És belo, és forte, impávido, colosso,
E o teu futuro espelha essa grandeza.

Coro:
Terra adorada, entre outras mil és tu, Brasil, 
Ó Pátria amada! 
Dos filhos deste solo és mãe gentil, 
Pátria amada, Brasil!

Deitado eternamente em berço esplêndido, 
Ao som do mar e à luz do céu profundo, 
Fulguras, ó Brasil, florão da América, 
Iluminado ao sol do Novo Mundo!
Do que a terra mais garrida 
Teus risonhos, lindos campos têm mais flores, 
“Nossos bosques têm mais vida, 
Nossa vida”, no teu seio, “mais amores”. 
Ó Pátria amada, idolatrada, salve! salve!
Brasil, de amor eterno seja símbolo 
O lábaro que ostentas estrelado,
E diga o verde louro desta flâmula: 
“Paz no futuro e glória no passado". 
Mas, se ergues da justiça a clava forte, 
Verás que um filho teu não foge à luta, 
Nem teme, quem te adora, a própria morte.`},
{id:"h639",num:639,title:"Hino da Independência",category:"harpa",author:"Evaristo da Veiga",lyrics:`Já podeis da Pátria filhos
Ver contente a mãe gentil,
Já raiou a liberdade
No horizonte do Brasil!
Já raiou a liberdade
Já raiou a liberdade
No horizonte do Brasil.

Coro:
Brava gente brasileira
Longe vá temor servil 
Ou ficar a Pátria livre 
Ou morrer pelo Brasil
Ou ficar a Pátria livre 
Ou morrer pelo Brasil

Mal soou na serra ao longe
Nosso grito varonil;
Nos imensos ombros, logo,
A cabeça ergue o Brasil! 
Nos imensos ombros, logo,
Nos imensos ombros, logo,
A cabeça ergue o Brasil.

Os grilhões que nos forjava 
Da perfídia astuto ardil 
Houve mão mais poderosa 
Zombou deles o Brasil.
Houve mão mais poderosa 
Houve mão mais poderosa 
Zombou deles o Brasil! 

Parabéns, ó brasileiros 
Já com garbo juvenil 
Do Universo entre as nações 
Resplandece a do Brasil.
Do Universo entre as nações 
Do Universo entre as nações 
Resplandece a do Brasil.`},
{id:"h640",num:640,title:"Hino da Proclamação da República do Brasil",category:"harpa",author:"J.J.C.C.M. J.J.C.C.M.A",lyrics:`Seja um pálio de luz desdobrado 
Sob a larga amplidão destes céus 
Este canto rebel, que o passado
Vem remir dos mais torpes labéus! 
Seja um hino de glória que fale 
De esperanças de um novo porvir! 
Com visões de triunfos embale 
Quem por ele lutando surgir!

Coro:
Liberdade! Liberdade!
Abre as asas sobre nós! 
Das lutas na tempestade
Dá que ouçamos tua voz!

Nós nem cremos que escravos outrora 
Tenha havido em tão nobre pais... 
Hoje, o rubro lampejo da Aurora
Acha irmãos, não tiranos hostis. 
Somos todos iguais! Ao futuro
Saberemos, unidos, levar
Nosso augusto estandarte que, puro,
Brilha, ovante, da Pátria no altar! 

Se é mister que de pertos valentes 
Haja sangue no nosso pendão, 
Sangue vivo do herói Tiradentes 
Batizou este audaz pavilhão! 
Mensageiros da paz, paz queremos,
E de amor nossa força e poder, 
Mas da guerra nos transes supramos
Heis de ver-nos lutar e vencer! 

Do Ipiranga é preciso que o brado 
Seja um grito soberbo de fé! 
O Brasil já surgiu libertado,
Sobre as púrpuras régias de pé! 
Eia, pois, brasileiros, avante!
Verdes louros colhamos louçãos! 
Seja o nosso pais, triunfante,
Livre terra de livres irmãos!`}
];

// ── Corinhos Evangélicos — Assembleia de Deus ──────────────
// tag: visitantes | inicio | adoracao | louvor | avivamento | oracao | despedida
const CORINHOS_DATA = [

// ── VISITANTES ───────────────────────────────────────────
{id:"cor001",num:1,title:"Visitante, Seja Bem-Vindo",category:"corinhos",tag:"visitantes",author:"Anônimo",lyrics:`Visitante, seja bem-vindo
Sua presença é um prazer
Com Jesus estamos dizendo
Que esta igreja ama você

Deus te ama, e eu te amo
E assim devemos viver
Esperamos que você volte
Para juntos Cristo louvar
E assim estaremos unidos
Pelo amor que Ele nos dá`},

{id:"cor002",num:2,title:"Você É Bem-Vindo Aqui",category:"corinhos",tag:"visitantes",author:"Anônimo",lyrics:`Você é bem-vindo, seja bem-vindo
Nessa casa do Senhor
Você é bem-vindo, seja bem-vindo
Venha adorar ao Senhor

Jesus te ama, Jesus te ama
E esta igreja também
Jesus te ama, Jesus te ama
E a esta casa te detém`},

{id:"cor003",num:3,title:"Aqui Há Amor",category:"corinhos",tag:"visitantes",author:"Anônimo",lyrics:`Aqui há amor, aqui há paz
Aqui há gozo que o mundo não dá
Aqui há amor, aqui há paz
Jesus está aqui e isso basta

Entra, irmão, entra, irmã
Nesta casa de louvor
Aqui há amor, aqui há paz
E a presença do Senhor`},

// ── INÍCIO DE CULTO ──────────────────────────────────────
{id:"cor004",num:4,title:"Bom Estarmos Aqui",category:"corinhos",tag:"inicio",author:"Silas Furtado",lyrics:`Bom estarmos aqui
Bom estarmos aqui
Para adorar ao Senhor
Bom estarmos aqui

É bom louvar, é bom cantar
É bom ao Senhor exaltar
É bom estarmos aqui
Bom estarmos aqui`},

{id:"cor005",num:5,title:"Deus Está Aqui",category:"corinhos",tag:"inicio",author:"Eli Soares / Ravel Fabiano",lyrics:`Deus está aqui, aleluia
Tão certo como o ar que eu respiro
Tão certo como o amanhã que se levanta
Tão certo como eu te falo e podes me ouvir

Deus está aqui, aleluia
Deus está aqui`},

{id:"cor006",num:6,title:"O Culto Hoje Vai Ser Maravilhoso",category:"corinhos",tag:"inicio",author:"Anônimo",lyrics:`O culto hoje vai ser maravilhoso
Pelo poder do meu Jesus
O culto hoje vai ser maravilhoso
Pelo poder do meu Jesus

Glória, glória, glória
Glória ao nome de Jesus
Glória, glória, glória
Glória ao nome de Jesus`},

{id:"cor007",num:7,title:"Nós Somos Filhos do Rei",category:"corinhos",tag:"inicio",author:"Anônimo",lyrics:`Nós somos filhos do Rei
Nós somos filhos do Rei
Com alegria e louvor
Nós somos filhos do Rei

Cantemos ao Senhor
Louvemos ao Senhor
Com alegria e louvor
Nós somos filhos do Rei`},

{id:"cor008",num:8,title:"Reunidos em Teu Nome",category:"corinhos",tag:"inicio",author:"Anônimo",lyrics:`Reunidos em Teu nome
Senhor Jesus
Reunidos em Teu nome
Senhor Jesus

Aqui estamos para Te louvar
Aqui estamos para Te adorar
Reunidos em Teu nome
Senhor Jesus`},

{id:"cor009",num:9,title:"Vem, Espírito de Deus",category:"corinhos",tag:"inicio",author:"Anônimo",lyrics:`Vem, Espírito de Deus
Enche o nosso coração
Vem, Espírito de Deus
Enche o nosso coração

De amor, de paz e alegria
De amor, de paz e alegria
Vem, Espírito de Deus
Enche o nosso coração`},

{id:"cor010",num:10,title:"Alegres Cantemos ao Senhor",category:"corinhos",tag:"inicio",author:"Anônimo",lyrics:`Alegres, cantemos ao Senhor
Com júbilo e louvor
Alegres, cantemos ao Senhor
Com júbilo e louvor

Glória, glória, glória a Deus
Glória, glória, glória
Alegres, cantemos ao Senhor
Com júbilo e louvor`},

// ── ADORAÇÃO ─────────────────────────────────────────────
{id:"cor011",num:11,title:"Em Espírito e em Verdade",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Em Espírito e em verdade
Te adoramos, ó Senhor
Em Espírito e em verdade
Te adoramos, ó Senhor

Aleluia, aleluia
Te adoramos, ó Senhor
Aleluia, aleluia
Te adoramos, ó Senhor`},

{id:"cor012",num:12,title:"Santo, Santo, Santo é o Senhor",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Santo, santo, santo
Santo é o Senhor
Santo, santo, santo
O Deus do amor

Toda a terra está repleta
Da Tua glória, ó Senhor
Santo, santo, santo
O Deus do amor`},

{id:"cor013",num:13,title:"Ao Único que É Digno",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Ao único que é digno
De toda honra e glória
Ao único que é digno
De todo louvor

Cantamos, cantamos
A Deus cantamos
Ao único que é digno
De todo louvor`},

{id:"cor014",num:14,title:"Em Adoração",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Em adoração me prostro a Ti
Rendido aos Teus pés, Senhor
Minha vida inteira oferto aqui
Ao Rei dos reis, ao meu Senhor

Aleluia, aleluia
Glória ao nome de Jesus
Aleluia, aleluia
Glória, glória a Jesus`},

{id:"cor015",num:15,title:"Digno É o Cordeiro",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Digno, digno, digno é o Cordeiro
Digno, digno, digno de louvor
Digno, digno, digno é o Cordeiro
Que morreu e ressuscitou

Aleluia, aleluia
Digno é o Cordeiro
Aleluia, aleluia
Digno de louvor`},

{id:"cor016",num:16,title:"Rendido Estou a Ti",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Rendido estou, Senhor, a Ti
Todo o meu ser entrego aqui
Leva minha vida, usa minha vida
Rendido estou, Senhor, a Ti

Usa-me, Senhor, usa-me
Para a Tua glória, Senhor
Rendido estou, Senhor, a Ti
Todo o meu ser entrego aqui`},

{id:"cor017",num:17,title:"Quão Grande és Tu",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Quão grande és Tu, quão grande és Tu
Quando penso em Teus milagres
Quão grande és Tu, quão grande és Tu
Tua glória enche o universo

Aleluia, aleluia
Quão grande és Tu, Senhor
Aleluia, aleluia
Quão grande és Tu`},

{id:"cor018",num:18,title:"Eu Me Rendo ao Teu Amor",category:"corinhos",tag:"adoracao",author:"Anônimo",lyrics:`Eu me rendo ao Teu amor
Eu me rendo ao Teu poder
Senhor Jesus, toma o controle
Da minha vida inteira, Senhor

Toma o controle, toma o controle
Senhor Jesus, toma o controle
Toma o controle, toma o controle
Da minha vida, Senhor`},

// ── LOUVOR ───────────────────────────────────────────────
{id:"cor019",num:19,title:"A Alegria Está no Coração",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`A alegria está no coração
De quem ama a Jesus
A alegria está no coração
De quem serve ao Senhor

É alegria, é alegria
É alegria de Jesus
É alegria, é alegria
É alegria de Jesus`},

{id:"cor020",num:20,title:"Celebrai com Júbilo ao Senhor",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Celebrai com júbilo ao Senhor
Celebrai com júbilo ao Senhor
Com alegria, cantai com alegria
Celebrai com júbilo ao Senhor

Com palmas e louvores
A Deus cantai louvores
Com alegria, cantai com alegria
Celebrai com júbilo ao Senhor`},

{id:"cor021",num:21,title:"O Senhor Reina",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`O Senhor reina em Seu povo
Com poder e majestade
O Senhor reina em Seu povo
Com poder e majestade

Aleluia, aleluia
O Senhor, o Senhor reina
Aleluia, aleluia
O Senhor, o Senhor reina`},

{id:"cor022",num:22,title:"Jesus Cristo Mudou Meu Viver",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Jesus Cristo mudou meu viver
Me deu um novo amanhecer
Com alegria hoje posso dizer
Jesus mudou meu viver

Aleluia, aleluia
Jesus mudou meu viver
Aleluia, aleluia
Jesus mudou meu viver`},

{id:"cor023",num:23,title:"Aleluia, Glória a Deus",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Aleluia, aleluia
Glória a Deus, glória a Deus
Aleluia, aleluia
Glória a Deus no alto

Louvemos ao Senhor
Com todo o coração
Louvemos ao Senhor
Com toda a nação`},

{id:"cor024",num:24,title:"Glória ao Nome de Jesus",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Glória, glória, glória
Ao nome de Jesus
Glória, glória, glória
Ao nome de Jesus

Esse nome tem poder
Esse nome tem poder
Glória, glória, glória
Ao nome de Jesus`},

{id:"cor025",num:25,title:"Sou Salvo, Sou Salvo",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Sou salvo, sou salvo
Pela graça de Jesus
Sou salvo, sou salvo
Louvado seja Deus

Aleluia, aleluia
Louvado seja Deus
Aleluia, aleluia
Louvado seja Deus`},

{id:"cor026",num:26,title:"O Povo que Deus Libertou",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`O povo que Deus libertou
Está aqui, está aqui
O povo que Deus libertou
Está aqui para louvar

Somos livres, somos livres
Pela graça do Senhor
Somos livres, somos livres
Para louvar ao Senhor`},

{id:"cor027",num:27,title:"Caminhando Eu Vou para Canaã",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Caminhando eu vou para Canaã
Jesus Cristo vem me guiar
Caminhando eu vou para Canaã
Rumo ao reino celestial

Aleluia, aleluia
Glória a Deus, glória a Deus
Aleluia, aleluia
Glória ao Rei dos reis`},

{id:"cor028",num:28,title:"Eu Tenho um Amigo que É Jesus",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Eu tenho um amigo que é Jesus
Que me ama com todo o Seu amor
Que morreu na cruz por mim
Para me salvar do pecado e do mal

Esse amigo é Jesus
Esse amigo é Jesus
Que me ama, que me salva
Esse amigo é Jesus`},

{id:"cor029",num:29,title:"Há Poder no Sangue de Jesus",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Há poder, há poder
No sangue de Jesus
Há poder, há poder
No sangue do Senhor

Esse sangue me limpou
Esse sangue me salvou
Há poder, há poder
No sangue de Jesus`},

{id:"cor030",num:30,title:"Deus É Bom, Aleluia",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Deus é bom, aleluia
Deus é bom, aleluia
Deus é bom, aleluia
Deus é bom

À minha alma Ele restaurou
Da perdição Ele me salvou
Deus é bom, aleluia
Deus é bom`},

{id:"cor031",num:31,title:"Vou pro Céu",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Vou pro céu, vou pro céu
Para viver na casa de Deus
Vou pro céu, vou pro céu
Para adorar a Jesus

Aleluia, aleluia
Para adorar a Jesus
Aleluia, aleluia
Para adorar a Jesus`},

{id:"cor032",num:32,title:"Minhas Mãos Estão Cheias",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Minhas mãos estão cheias
Das bênçãos de Deus
Minhas mãos estão cheias
Das bênçãos do Senhor

Ele me abençoou, me abençoou
Ele me abençoou, aleluia
Ele me abençoou, me abençoou
Glória a Deus no alto`},

{id:"cor033",num:33,title:"Cristo Ressurgiu, Aleluia",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Cristo ressurgiu, aleluia
Cristo ressurgiu, aleluia
Ele vive para sempre
Cristo ressurgiu, aleluia

Morte, onde está a tua vitória?
Sepulcro, onde está o teu aguilhão?
Cristo ressurgiu, aleluia
Aleluia ao Senhor`},

{id:"cor034",num:34,title:"O Leão da Tribo de Judá",category:"corinhos",tag:"louvor",author:"Anônimo",lyrics:`Ele é o leão da tribo de Judá
Raiz de Davi, a estrela da manhã
Ele é o santo, o Deus forte e poderoso
Aleluia, glória a Deus, aleluia

Aleluia, aleluia, aleluia
Glória a Deus, aleluia
Aleluia, aleluia, aleluia
Glória ao Rei dos reis`},

// ── AVIVAMENTO / ESPÍRITO SANTO ──────────────────────────
{id:"cor035",num:35,title:"Espírito Santo, Entra Aqui",category:"corinhos",tag:"avivamento",author:"Anônimo",lyrics:`Espírito Santo, entra aqui
Enche a nossa vida de bênção
Espírito Santo, entra aqui
Enche a nossa vida de bênção

Entra, Santo Espírito, entra
Enche, Santo Espírito, enche
Aviva, Santo Espírito, aviva
Restaura o Teu povo, Senhor`},

{id:"cor036",num:36,title:"Fogo do Teu Espírito",category:"corinhos",tag:"avivamento",author:"Anônimo",lyrics:`Fogo, fogo, fogo do Teu Espírito
Fogo, fogo, fogo do Teu Espírito
Que o fogo desça, que o fogo desça
O fogo do Espírito Santo

Que o fogo desça, que o fogo desça
O fogo do Teu Espírito`},

{id:"cor037",num:37,title:"Espírito, Enche a Minha Vida",category:"corinhos",tag:"avivamento",author:"Anônimo",lyrics:`Espírito, enche a minha vida
Enche de Ti, Senhor
Espírito, enche a minha vida
Enche de Ti, Senhor

Com o Teu poder, Senhor
Com o Teu amor, Senhor
Espírito, enche a minha vida
Enche de Ti, Senhor`},

{id:"cor038",num:38,title:"Derrama Teu Espírito",category:"corinhos",tag:"avivamento",author:"Anônimo",lyrics:`Derrama Teu Espírito, Senhor
Derrama Teu Espírito, Senhor
Sobre mim, sobre nós
Derrama Teu Espírito, Senhor

Aviva-nos, aviva-nos
Aviva-nos, Senhor
Aviva-nos, aviva-nos
Aviva-nos, Senhor`},

{id:"cor039",num:39,title:"Tapete de Fogo",category:"corinhos",tag:"avivamento",author:"Anônimo",lyrics:`O Senhor estendeu um tapete de fogo
Do céu até esta casa do Senhor
O Senhor estendeu um tapete de fogo
Para que o Espírito Santo descesse aqui

Desce, Espírito Santo, desce
Desce com poder, Senhor
Desce, Espírito Santo, desce
Enche-nos com Teu amor`},

{id:"cor040",num:40,title:"Manda o Fogo, Senhor",category:"corinhos",tag:"avivamento",author:"Anônimo",lyrics:`Manda o fogo, Senhor
Manda o fogo, Senhor
Manda o fogo do Teu Espírito
Manda o fogo, Senhor

Que o fogo desça aqui
Que o fogo desça aqui
Que o fogo do Espírito Santo
Desça aqui, Senhor`},

// ── ORAÇÃO ───────────────────────────────────────────────
{id:"cor041",num:41,title:"Senhor, Ouve a Nossa Oração",category:"corinhos",tag:"oracao",author:"Anônimo",lyrics:`Senhor, ouve a nossa oração
Senhor, ouve a nossa voz
Senhor, ouve a nossa oração
E nos abençoa, Senhor

Ouve, Senhor, ouve Senhor
A nossa oração, Senhor
Ouve, Senhor, ouve Senhor
E nos abençoa`},

{id:"cor042",num:42,title:"Amado Pai",category:"corinhos",tag:"oracao",author:"Anônimo",lyrics:`Amado Pai, Tu és tão bom
Amado Pai, Tu és tão bom
Amado Pai, amado Pai
Tu és tão bom, Senhor

És bom, és bom, és bom, Senhor
És bom, és bom, és bom, Senhor
Amado Pai, amado Pai
Tu és tão bom, Senhor`},

{id:"cor043",num:43,title:"Eu Marquei um Encontro com Deus",category:"corinhos",tag:"oracao",author:"Anônimo",lyrics:`Eu marquei um encontro com Deus
Num lugar santo, num lugar santo
Eu marquei um encontro com Deus
Para adorar ao Senhor

Ajoelhado aos Seus pés
Busco Tua face, ó Deus
Eu marquei um encontro com Deus
Para adorar ao Senhor`},

{id:"cor044",num:44,title:"Bate na Porta de Deus",category:"corinhos",tag:"oracao",author:"Anônimo",lyrics:`Bate, bate, bate na porta de Deus
Bate, bate, bate na porta de Deus
Ele vai abrir, Ele vai abrir
Bate na porta de Deus

Busca, busca, busca a face de Deus
Busca, busca, busca a face de Deus
Ele vai aparecer, Ele vai aparecer
Busca a face de Deus`},

{id:"cor045",num:45,title:"Senhor, Fala, Teu Servo Ouve",category:"corinhos",tag:"oracao",author:"Anônimo",lyrics:`Senhor, fala, Teu servo ouve
Senhor, fala, Teu servo ouve
Senhor, fala, Teu servo ouve
Teu servo ouve, Senhor

Fala, Senhor, fala Senhor
Fala, Senhor, ao meu coração
Fala, Senhor, fala Senhor
Fala ao meu coração`},

{id:"cor046",num:46,title:"Mão Poderosa do Senhor",category:"corinhos",tag:"oracao",author:"Anônimo",lyrics:`Mão poderosa do Senhor
Mão poderosa do Senhor
Alcança-me, Senhor
Mão poderosa do Senhor

Toca-me, Senhor
Cura-me, Senhor
Mão poderosa do Senhor
Alcança-me, Senhor`},

// ── ENCERRAMENTO ─────────────────────────────────────────
{id:"cor047",num:47,title:"Ide por Todo o Mundo",category:"corinhos",tag:"despedida",author:"Anônimo",lyrics:`Ide por todo o mundo, pregai o evangelho
A toda criatura de toda nação
Ide por todo o mundo, pregai o evangelho
Levai a boa nova da salvação

Ide, ide, ide
Pregai o evangelho
Ide, ide, ide
A toda nação`},

{id:"cor048",num:48,title:"Até Logo, Até Logo",category:"corinhos",tag:"despedida",author:"Anônimo",lyrics:`Até logo, até logo
Nos veremos no Senhor
Até logo, até logo
Nos veremos no Senhor

Com amor, com amor
Deus nos une no Seu amor
Com amor, com amor
Deus nos une no Senhor`},

{id:"cor049",num:49,title:"Vá em Paz",category:"corinhos",tag:"despedida",author:"Anônimo",lyrics:`Vá em paz, vá em paz
Vá em paz, irmão
Vá em paz, vá em paz
Deus vai te abençoar

Que o Senhor te guarde
Que o Senhor te guie
Vá em paz, vá em paz
Deus vai te abençoar`},

{id:"cor050",num:50,title:"A Bênção de Aarão",category:"corinhos",tag:"despedida",author:"Anônimo",lyrics:`O Senhor te abençoe e te guarde
O Senhor faça resplandecer o Seu rosto sobre ti
O Senhor levante o Seu rosto sobre ti
E te dê a paz

Amém, amém, amém
Amém, amém, amém
O Senhor te abençoe
E te dê a paz`}
];

const CANTICOS_DATA = [];

const ARQUIVO_DATA = [
{id:"arq001",num:1,title:"Identidade",category:"arquivo",author:"",lyrics:`Não vou negar quem sou, não há máscara em mim
Desde quando Te entreguei meu coração
Não vale a pena Te negar em troca de viver
Se morrer por Ti, pra mim significa viver

Nada vai interromper minha adoração
Babilônia não habita no meu coração
Nem o fogo vai fazer
A aliança que eu tenho com o Senhor se romper

Coro:
Minha identidade é servo do Senhor
Dentro da fornalha vou mostrar quem És
Sendo quem eu sou, fiel adorador
Nem a morte vai nos separar, Senhor

Sadraque, Mesaque e Abedenego
Jovens demais pra morrerem cedo
Negaram o pedido de um rei
O decreto era que adorassem à imagem que ele fez
E quem não adorasse seria lançado
Dentro da fornalha ardente de fogo
E foi dessa forma que aconteceu
Mas a verdade é que o rei enlouqueceu

Pois havia um quarto homem e com eles passeava
No meio do fogo, mas o fogo não queimava
O rei reconheceu que não havia outro Deus
E O adorou! E O adorou!

Coro:
Minha identidade é servo do Senhor
Dentro da fornalha vou mostrar quem És
Sendo quem eu sou, fiel adorador
Nem a morte vai nos separar, Senhor

Minha identidade é servo do Senhor`},
{id:"arq002",num:2,title:"Vou Seguir",category:"arquivo",author:"",lyrics:`Se você já pensou em desistir
Tenha fé, e não pare de sorrir
Você vai ver que o inimigo não vai entender
Que o crente até mesmo chorando ele canta porque

Se chorar, chora nos pés do Senhor
Tem Jesus como o teu consolador
Teu sofrer, uma noite até pode durar
Mas o crente sabe que a vitória vem pela manhã
Então cante assim...

Coro:
Vou seguir os passos de Jesus
Vou levar comigo a minha cruz
Se espinhos ferem os meus pés
Eu vou descansar nos braços de Jesus

Quando o crente está firme nos pés do Senhor
Ele passa pela prova cantando louvor
O inimigo se levanta, mas tem que cair
O crente não deixa a cruz mas leva até o fim
Se cair mil do seu lado ele não cede não
Sempre está protegido por um batalhão
Deus dá ordens aos seus Anjos para proteger
Bem guardado desse jeito, desistir por quê?`},
{id:"arq003",num:3,title:"Te Louvarei",category:"arquivo",author:"",lyrics:`Perto quero estar
Junto aos teus pés
Pois prazer maior não há
Em me render e te adorar
Tudo que há em mim quero te ofertar
Mais ainda é pouco eu sei
Se comparado ao que ganhei
Não sou apenas servo teu amigo me tornei

Coro:
Te louvarei, não importam as circunstâncias
Adorarei somente a ti Jesus`},
{id:"arq004",num:4,title:"Segundo Teu Coração",category:"arquivo",author:"",lyrics:`Edifica em mim, Senhor
Uma morada para ti
Vem repousar Tua graça em mim
Os meus princípios vou rever
A minha vida refazer
Quero purificar o meu viver
Vem me renovar, quero enxergar
Os Teus planos pra mim
Venho me humilhar e mais uma vez:

Coro:
Quero Tua unção quero o Teu perdão
Que a Tua mão esteja sobre mim
Quero me prostrar diante do altar
E ser segundo o Teu coração`},
{id:"arq005",num:5,title:"Te Adorar É o Meu Prazer",category:"arquivo",author:"",lyrics:`Senhor, quero viver pra teu louvor
Te entregar tudo que sou
Com o meu viver te exaltarei, amado Rei dos Reis
Senhor, tua verdade viverei
Em santidade servirei
Minha herança está em ti...

Coro:
Te adorar, Senhor, é o meu prazer
Te entronizar, Senhor, te bendizer
Minha paixão está em Ti...
Meu coração está em Ti...
Te adorar, Senhor, é o meu prazer
Te entronizar, Senhor, te bendizer
Minha paixão está em Ti, meu coração está em Ti... Senhor`},
{id:"arq006",num:6,title:"Ressuscita",category:"arquivo",author:"",lyrics:`O que posso ver
Senão um vale de ossos secos?
O que posso dizer
Se já se foi a esperança?
Nossa vergonha está exposta
Debaixo do sol há muito tempo
Se foi a alegria, não há Espírito
Não há palavra

Filho do homem, mude a história
Com tua boca, profetiza
Volte a alegria, venha, Espírito
Haja palavra

Coro:
Ressuscita!
Oh, terra que estava morta
Oh, vale de ossos secos
Volte a respirar
Posso ouvir
O som do avivamento
A morte tornando vida, é sobre a tua vida
Ressuscita!

Vida, eu profetizo
Sobre ti a vida
Receba sobre ti a vida
Vida de Deus

Coro:
Ressuscita!
Oh, terra que estava morta
Oh, vale de ossos secos
Volte a respirar
Posso ouvir
O som do avivamento
A morte tornando vida, é sobre a tua vida
Ressuscita!`},
{id:"arq007",num:7,title:"Ressuscita-me",category:"arquivo",author:"",lyrics:`O que posso ver
Senão um vale de ossos secos?
O que posso dizer
Se já se foi a esperança?
Nossa vergonha está exposta
Debaixo do sol há muito tempo
Se foi a alegria, não há Espírito
Não há palavra

Filho do homem, mude a história
Com tua boca, profetiza
Volte a alegria, venha, Espírito
Haja palavra

Coro:
Ressuscita!
Oh, terra que estava morta
Oh, vale de ossos secos
Volte a respirar
Posso ouvir
O som do avivamento
A morte tornando vida, é sobre a tua vida
Ressuscita!

Vida, eu profetizo
Sobre ti a vida
Receba sobre ti a vida
Vida de Deus

Coro:
Ressuscita!
Oh, terra que estava morta
Oh, vale de ossos secos
Volte a respirar
Posso ouvir
O som do avivamento
A morte tornando vida, é sobre a tua vida
Ressuscita!`},
{id:"arq008",num:8,title:"Soberano Deus",category:"arquivo",author:"",lyrics:`Vou lhe falar de um Deus
Que não se pode comparar
O Deus que tudo vê, e ao homem pode transformar
Tão grande é o seu poder
Abre caminho onde não há
E se ele ordenar, o morto faz ressuscitar

Deus poderoso, incomparável
Infinito, excelente, inexplicável, é o seu poder
Ninguém pode impedir o seu agir

Quebra o arco, corta a lança e acalma a tempestade
Abre cadeias e algemas são quebradas
No deserto, água viva faz brotar
Cinco pães e dois peixinhos
Alimentam cinco mil
Soberano é este Deus

Vou lhe falar de um Deus
Que libertou a Israel na cova dos leões
Livrou o servo Daniel
Que na fornalha entrou, e exaltou os filhos seus
E com David lutou
E o gigante ali venceu...

Coro:
Glória, à majestade santa
Glória, ao Deus dos deuses
Glória, onipotente Senhor
Glória, dono do nosso louvor
Glória, seu nome é santo, Santo dos santos
Incomparável é, glória ao soberano Deus`},
{id:"arq009",num:9,title:"Aqui Eu Vim Dizer",category:"arquivo",author:"",lyrics:`Aqui eu vim para dizer que quero mais Te conhecer
Minha alma tem sede de Ti
Oh! Espírito de Deus estou aqui

Coro:
Vem Espírito de Deus!
O meu coração é o Teu altar

Flui Espírito de Deus, flui aqui neste lugar
Flui em mim, ministra o Teu propósito
O meu coração é o Teu altar`},
{id:"arq010",num:10,title:"Pra Que Temer",category:"arquivo",author:"",lyrics:`Problemas vêm pra me atingir
Só pra me fazer parar
Chego até me enfraquecer
Sem forças para caminhar
Até que então me desespero
Me ajoelho e clamo a Deus
Sinto sua presença do meu lado
Me dizendo assim:

Coro:
Eu estou contigo pra que temer
Se estás cansado, eu te dou poder
Pra caminhar pra se erguer
Para dizer sou vencedor
Não tem barreiras que possa impedir
Quando estou na frente o mal tem que sair
Eu sou seu Deus, eu te escolhi
Vem servo meu estou aqui

Se estás na prova eu estou contigo
Eu sou providência sou o teu amigo
Tudo que me pedes eu tenho a resposta
Sou a solução para todas as horas
Hoje eu decreto a vitória não duvides nesta hora
Eu estou aqui, eu estou aqui... estou aqui

Meu irmão erga o teu rosto
Não deixe o mal te amedrontar
Jesus é Rei, é poderoso
E ao teu lado está
Se pensas que não tem mais jeito
Jesus tem pra você saída
Creia, tenhas fé agora
E tu vencerás`},
{id:"arq011",num:11,title:"A Colheita",category:"arquivo",author:"",lyrics:`Voz do que clama em meio ao deserto
Prepara o caminho do meu Salvador
Grita nas praças nas ruas nos campos
Prepara o caminho do meu Salvador

Toca a trombeta em Sião
Não despreze as feridas das suas mãos

Coro:
Este é o tempo de lançarmos a rede
Pregar a palavra viver o evangelho
Este é o tempo de quebrantamento
A colheita chegou, a hora é chegada
O tempo é este
Ele vem

Voz do que clama em meio ao deserto
Prepara o caminho do meu Salvador
Grita nas praças nas ruas nos campos
Prepara o caminho do meu Salvador

Coro:
Este é o tempo de lançarmos a rede
Pregar a palavra viver o evangelho
Este é o tempo de quebrantamento
A colheita chegou, a hora é chegada
O tempo é este
Ele vem

Ele vem, Ele vem, Ele vem
O Espírito e a noiva dizem: Vem
Ele vem, Ele vem

Ide, fazei discípulos de todas as nações
Porque Ele vem
O Espírito e a noiva dizem: Vem
Ide, fazei discípulos de todas as nações
Porque Ele vem`},
{id:"arq012",num:12,title:"Não Vou Desistir",category:"arquivo",author:"",lyrics:`Passa o tempo e eu estou aqui
Situações difíceis vêm pra me impedir de caminhar
Muitos tentam me abater
Fazendo acusações, impedindo o meu crescer

A multidão está ao meu redor
Tantas lutas e provações
Tantos medos vejo em mim
Não vejo mais saída, o vento está tão forte
Vem me socorrer, Senhor

Coro:
Eu não vou parar, vou continuar
Se com Cristo estou
Podem dizer o que for
Eu não vou desistir
Não vou desistir

Caminharei, o melhor é o fim
Pra aqueles que estão no Senhor
Vitória terei, pois Ele é fiel
Cumpriu suas promessas em mim

Coro:
Eu não vou parar, vou continuar
Se com Cristo estou
Podem dizer o que for
Eu não vou desistir
Não vou desistir`},
{id:"arq013",num:13,title:"Pra Tua Glória",category:"arquivo",author:"",lyrics:`Diante do Teu trono eu estou
A tua face eu quero ver
Sei que não sou merecedor
Mas Teu amor me resgatou
Me sustentou até aqui

Me rendo a Ti, Senhor
Reconheço que nada sou sem Ti
A Tua mão me alcançou
Me fez voltar ao jardim da adoração

Coro:
Jesus, Jesus!
És o meu amor, minha força pra viver
És o meu pastor, me guias onde for
Eu só quero te adorar, quero me prostrar
Te oferecer o meu melhor
Toma minha vida em Tuas mãos
E vem me restaurar, me colocar de pé

Move as águas e abre o céu
Faz descer sobre nós uma grande chuva
De renovo, de glória e de unção
Vem, inunda ó Deus, cada coração
Vento do Espírito de Deus vem soprar
Sobre o vale de ossos secos e faz levantar
Um exército que marche em meio ao grande mar
Um coral que vai te adorar

Coro:
Jesus, Jesus!
És o meu amor, minha força pra viver
És o meu pastor, me guias onde eu for
Eu só quero te adorar, quero me prostrar
Te oferecer o meu melhor
Toma minha vida em Tuas mãos
E vem me restaurar, me colocar de pé

Pra Tua glória, somente pra Tua glória...`},
{id:"arq014",num:14,title:"Renovo",category:"arquivo",author:"",lyrics:`Pai, me dá disposição para aprender de Ti
Me dá disposição pra mergulhar
No mar da oração, mais uma vez

Pai, eu quero ser levado por Tua direção
Ouvir Tua palavra e entender
Com suprema exatidão o que quer de mim

Eu não vim aqui pedir mais um milagre
Eu não vim aqui apenas de passagem
Hoje eu vim aqui pra Te servir melhor

Coro:
Renovo, o que eu quero é renovo
Pra Te sentir de novo, de novo
Renovo, o que eu quero é renovo
Pra ter um brilho no rosto, de novo

Eu não vim aqui pedir mais um milagre
Eu não vim aqui apenas de passagem
Hoje eu vim aqui pra Te servir melhor

Coro:
Renovo, o que eu quero é renovo
Pra Te sentir de novo, de novo
Renovo, o que eu quero é renovo
Pra ter um brilho no rosto, de novo

Toca-me, toca-me
Nem mais um passo darei
Nada farei sem Ti!

Tem renovo na casa, tem
Tem renovo na casa, tem
Tem, tem, tem
Tem renovo na casa, tem
Tem renovo na casa, tem
Renovo tem

Coro:
Renovo, o que eu quero é renovo
Pra Te sentir de novo, de novo
Renovo, o que eu quero é renovo
Pra ter o brilho no rosto, de novo`},
{id:"arq015",num:15,title:"Canção do Apocalipse",category:"arquivo",author:"",lyrics:`Digno é o Cordeiro que foi morto
Santo, Santo Ele é
Um novo cântico ao que se assenta
Sobre o trono do Céu

Coro:
Santo, Santo, Santo
Deus Todo Poderoso
Que era, e é, e há de vir
Com a criação, eu canto
Louvores ao Rei dos reis
És tudo para mim, e eu Te adorarei

Está vestido do arco-íris
Sons de trovão, luzes, relâmpagos
Louvores, honra e glória
Força e poder pra sempre
Ao único Rei eternamente

Coro:
Santo, Santo, Santo
Deus Todo Poderoso
Que era, e é, e há de vir
Com a criação, eu canto
Louvores ao Rei dos reis
És tudo para mim, e eu Te adorarei

Maravilhado, extasiado
Eu fico ao ouvir Teu nome
Maravilhado, extasiado
Eu fico ao ouvir Teu nome
Jesus, Teu nome é força
É fôlego de vida, misteriosa água viva

Coro:
Santo, Santo, Santo
Deus Todo Poderoso
Que era, e é, e há de vir
Com a criação, eu canto
Louvores ao Rei dos reis
És tudo para mim, e eu Te adorarei`},
{id:"arq016",num:16,title:"Estou Contigo",category:"arquivo",author:"",lyrics:`A noite chegou, eu estou a clamar
O medo chegou, eu estou a chorar
Mas Tua palavra diz:
"Que o choro pode uma noite durar, e pela manhã a alegria virá"

Mas, Senhor, a noite é longa
E demora a passar
E os meus inimigos estão a zombar de mim
Porém, olho para o céu, de onde me virá o socorro
Então, ouço a Tua doce voz a me acalmar:

Coro:
Eu estou contigo, não te deixarei
Durante a noite, Tua voz ouvirei
Passo a noite contigo pra te guardar
E, pela manhã, minha promessa em tua vida se cumprirá

Eu sou o Deus do dia, o Deus da noite e da madrugada
Eu sou o teu abrigo, estou contigo
Não te deixarei`},
{id:"arq017",num:17,title:"Faça Morada",category:"arquivo",author:"",lyrics:`Eis-me aqui, tantas fraquezas diante da Tua grandeza
O que se vê o coração sente
O corpo responde, minh'alma não mente

Sonda agora este coração
Veja, Senhor, se não tenho razão
Mas eu não quero ser tão racional
Espírito Santo pode se achegar

Coro:
E fazer morada, e fazer morada
Espírito Santo, mora em mim
O meu coração é o Teu lugar, faça morada
Eu te convido a nunca mais me deixar aqui

Faça morada em mim
Faça morada em mim
Faça morada em mim

Vem fazer morada em mim...`},
{id:"arq018",num:18,title:"Eis-me Aqui",category:"arquivo",author:"",lyrics:`Um Deus rodeado de Glória
És adorado 24 horas
Os serafins cantam: Santo, Santo
Incansavelmente, Santo, Santo

E eu, um homem tão falho
E de impuros lábios
O que um Deus tão grande assim
Viu de importante em mim?

Então me toca com essas brasas do altar
E me transforma, vem me purificar
Então me toca com essas brasas do altar
E me transforma, vem me purificar

Coro:
Eis-me aqui, estou disponível
Então usa-me, me fiz exclusivo só pra Te servir
Meu Deus, envia-me, oh!

E como dizer não para o Teu chamado
Se me deste unção para ser usado
Pra Tua glória, oh, somente pra Tua glória

Então me toca com essas brasas do altar
E me transforma, vem me purificar
Então me toca com essas brasas do altar
E me transforma, vem me purificar

Coro:
Eis-me aqui, estou disponível
Então usa-me, me fiz exclusivo só pra Te servir
Meu Deus, envia-me

Como eu poderia dizer não?
Como dizer não para o Teu chamado
Se me deste, me revestiste de unção para ser usado
Pra Tua glória, pra Tua glória
Meu Deus, oh, somente pra Tua glória

Geração eleita, eis-me aqui
Sacerdócio real, eis-me aqui
Povo exclusivo de Deus, eis-me aqui
Nação santa

Eis-me aqui, estou disponível
Então usa-me, me fiz exclusivo só pra Te servir
Envia-me, eu estou aqui, eu estou aqui pra Ti

Como dizer não para o Teu chamado
Se me deste unção para ser usado
Pra Tua glória, somente pra Tua glória
Somente pra Tua glória`},
{id:"arq019",num:19,title:"Todo Poderoso",category:"arquivo",author:"",lyrics:`Feche os teus olhos neste lugar
E eleve o pensamento nas alturas
E pela fé toque em Jesus
Mas pra isso é preciso o romper da multidão

A tua cura acontecerá
Quanto tempo esperou, não pare agora
Apenas um toque irá mudar
O destino de tua vida, a tua história

Jesus o Filho de Davi está passando aqui
Até a orla do vestido Dele faz curar
Pois há virtude e há unção
Toque agora, estenda a mão

Coro:
O Todo Poderoso está aqui
Cristo já está passando aqui
Rompe a multidão e toque Nele
Virtude sairá

O Todo Poderoso está aqui
Cristo já está passando aqui
Estenda a tua mão e toque Nele
Ele vai te curar

Um certo dia uma mulher
Já não tinha esperança, ela chorava
Ouviu falar o nome de Jesus
Esse nome poderoso que curava
A esperança nela voltou
Pois naquela hora ali Jesus passava
Mas existia uma multidão
Ela rompeu, tocou Nele e foi curada`},
{id:"arq020",num:20,title:"O Que Tua Glória Fez Comigo",category:"arquivo",author:"",lyrics:`Eu me rasgo por inteiro
Faço tudo, mas vem novamente
Eu mergulho na mirra ardente
Mas peço que Tua presença aumente

E se eu passar pelo fogo, não temerei
Na Tua fumaça de glória eu entrarei
Longe do Santo dos Santos não sei mais viver

Quem já pisou no Santo dos Santos
Em outro lugar não sabe viver
E onde estiver, clamar pela glória
A glória de Deus

Coro:
Glória, Glória
Glória, Glória

Santo, Santo
Santo, Santo`},
{id:"arq021",num:21,title:"Jesus Meu Guia É",category:"arquivo",author:"",lyrics:`Jesus meu guia é
Amigo e protetor
Ele é o meu bom Pastor
E quando eu sentir temor

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor

Jesus meu guia é
Amigo e protetor
Ele é o meu bom Pastor
E quando eu sentir temor

Nele confiarei (Jesus meu guia é)
Nele confiarei (amigo e protetor)
Fraco sou, mas Deus me dá (Ele é o meu bom Pastor)
Seu poder, Seu amor (e quando eu sentir temor)

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor

Jesus meu guia é
Amigo e protetor
Ele é o meu bom Pastor
E quando eu sentir temor

Nele confiarei (Jesus meu guia é)
Nele confiarei (amigo e protetor)
Fraco sou, mas Deus me dá (Ele é o meu bom Pastor)
Seu poder, Seu amor (e quando eu sentir temor)

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor

Nele confiarei
Nele confiarei
Fraco sou, mas Deus me dá
Seu poder, Seu amor`},
{id:"arq022",num:22,title:"Tem Ciúmes de Mim",category:"arquivo",author:"",lyrics:`O Seu amor é como um furacão
E eu me rendo ao vento de Sua misericórdia
Então, de repente não vejo mais minhas aflições
Eu só vejo a glória
E percebo quão maravilhoso Ele é...
E o tanto que Ele me quer

Oh, Ele me amou
Oh, Ele me ama
Ele me amou...

Coro:
Me ama
Ele me ama
Ele me ama
Ele me ama

Somos Sua herança
E Ele o nosso galardão
Seu olhar de graça nos atrai à redenção
Se a graça é um oceano, estamos afogando
O céu se une à terra como um beijo apaixonado
Meu coração dispara em meu peito acelerado
Não tenho tempo pra perder com ressentimentos
Quando penso que Ele

Coro:
Me ama
Ele me ama
Ele me ama
Ele me ama`},
{id:"arq023",num:23,title:"Eu Me Rendo",category:"arquivo",author:"",lyrics:`A Ti eu vou clamar
Pois tudo vem de Ti
E tudo está em Ti
Por Ti vou caminhar
Tu és a direção
O Sol a me guiar

Tudo pode passar
Teu amor jamais me deixará
Sempre há de existir novo amanhã
Preparado pra mim
Preparado pra mim

Coro:
Eu me rendo aos Teus pés
És tudo que eu preciso pra viver
Eu me lanço aos Teus braços
Onde encontro meu refúgio

Jesus
Eis-me aqui
Jesus
Eis-me aqui`},
{id:"arq024",num:24,title:"Meu Milagre",category:"arquivo",author:"",lyrics:`Quanto tempo te esperei, Senhor
Já bati em tantas portas em vão
Sei que só o Teu poder
Pode acabar com minha dor de uma vez

Mesmo que eu tenha que enfrentar a multidão
Eu irei, eu vou seguir a minha fé
Tenho a certeza da vitória
Fonte de virtude que faz o milagre acontecer

Coro:
Quem vai calar o meu coração?
Eu vou romper a multidão
Me prostrarei pra te alcançar
O meu milagre vai chegar

O meu milagre vai chegar
O meu milagre... vai chegar...`},
{id:"arq025",num:25,title:"Pode Morar Aqui",category:"arquivo",author:"",lyrics:`Minhas lamparinas estão acesas
Só estou esperando
O barulho dos Teus passos
Em direção à porta

É só bater que eu vou abrir
Pra Você entrar
É só bater que eu vou abrir
Pra Você entrar

Eu já coloquei as minhas vestes brancas
Estou só Te esperando

Coro:
Vem, vamos cantar
Maranata, maranata

Tem fogo nos olhos
Eu não imaginava
Que era lindo assim
Que era lindo assim

Meu Noivo esperado
Eu abro a minha casa
Pode morar aqui
Pode morar aqui

Eu já coloquei as minhas vestes brancas
Estou só Te esperando

Vem, vamos cantar
Maranata, maranata`},
{id:"arq026",num:26,title:"Reascende a Chama",category:"arquivo",author:"Sued Silva",lyrics:`Muitos confiam em carros
E outros, em seus cavaleiros
Muitos Te louvam com lábios
E o coração dividido

Perdidos dentro da casa do Pai
Já não se lembram que o Céu é real
Tão ocupados com coisas banais
Abra os nossos olhos espirituais

Por que pararam de falar do Céu?
Acham que Cristo não vai mais voltar?
Já não se fala tanto em oração
E santificação não querem mais pregar

Por que pararam de falar do Céu?
E só se fala em bens materiais
Mas eu sei que dentro da igreja
Existe uma igreja espiritual

Coro:
Levanta essa geração
Desperta, igreja, em oração
Faz arder de novo, reacende o fogo
Levanta essa geração
Traz de volta a visão, onde tudo começou
De volta ao primeiro amor

Reacende a chama, vem nos restaurar
Como em Atos 2, desce aqui nesse lugar
Reacende a chama
Vem nos restaurar, vem, Deus
Como em Atos 2
Desce aqui nesse lugar`},
{id:"arq027",num:27,title:"Santo",category:"arquivo",author:"",lyrics:`Coro:
Santo, santo, santo, santo És
Santo, santo, santo, santo És
Tão perfeito, incomparável És
Meu Jesus tão adorado

Que abriu a porta da eternidade
Se entregou pra se cumprir toda verdade
Humilhado foi e não revidou
Foi traído e mesmo assim Ele perdoou

Foi crucificado e morto lá na rude cruz
Mas ao terceiro dia provou que era Jesus
O Filho de Deus, o Messias prometido
Verdadeiro, justo, mais que excelente

Toda a pureza está selada no Seu coração
Autor da vida, autor da salvação
A fonte de água viva que jorra a vida
Unção que cura, que nos lava e purifica

Coro:
Santo, santo, santo, santo És
Santo, santo, santo, santo És
Tão perfeito, incomparável És
Meu Jesus tão adorado`},
{id:"arq028",num:28,title:"Abra Os Meus Olhos",category:"arquivo",author:"",lyrics:`Queria tanto olhar pro céu
Contemplar a grandeza do meu Deus
Diferente da atitude de Tomé
Quero ver porque em você eu tenho fé

Queria tanto receber
A cura, o milagre eu quero ver
Gritarei o Seu nome com muita fé
E Ele me atenderá, me colocará de pé

Preciso tanto de uma chance
Sei que o chão não é o meu lugar
Estou cansado desta escuridão
É por isso que eu Te espero
E por isso que eu Te clamo, Filho de Davi

Coro:
Abra, abra os meus olhos
Dá-me a visão
Eu preciso ver, eu quero ver
Aquele sol que faz milagre

Abra, abra os meus olhos
Dá-me a visão
Eu preciso ver, eu quero ver
Aquele que faz o milagre

Toca, toca em meus olhos
Abra os meus olhos
Quero olhar em Tua face, esse é o meu sonho
Ver a Tua glória, viver a Tua glória
Esse é o meu sonho
Atenda-me

Essa é a minha chance...`},
{id:"arq029",num:29,title:"Vem Me Buscar",category:"arquivo",author:"",lyrics:`És adorado entre nós
Tão desejado aqui
Mas nada se comparará
Com a glória que há de vir, oh

Eu não sou daqui, pra casa voltarei
Ele vem me buscar e com Ele eu irei
Eu não sou daqui, pra casa voltarei
Ele vem me buscar e com Ele eu irei

Coro:
Yeshua
O Messias aguardado, Ele vem me buscar
Yeshua
O Messias aguardado, Ele vem me buscar

És adorado entre nós
Tão desejado aqui
Mas nada se comparará
Com a glória que há de vir, oh

Eu não sou daqui, pra casa voltarei
Ele vem me buscar e com Ele eu irei
Eu não sou daqui, pra casa voltarei
Ele vem me buscar e com Ele eu irei

Coro:
Yeshua
O Messias aguardado, Ele vem me buscar
Yeshua
O Messias aguardado, Ele vem me buscar

Em breve Jesus no céu vai aparecer
E todo joelho se dobrará
E toda língua confessará
Mas a igreja será arrebatada
Num piscar de olhos acontecerá

Yeshua
O Messias aguardado, Ele vem me buscar
Yeshua
O Messias aguardado, Ele vem me buscar`},
{id:"arq030",num:30,title:"Poderosamente Vivo",category:"arquivo",author:"",lyrics:`Mesmo sem merecer morreu pra eu viver
Na rude cruz tamanha dor sofreu por mim
Foi por amor, o Cordeiro calado
Por mim se fez pecado
Na Sexta-feira faleceu, mas ao terceiro dia reviveu

Ele está vivo! Vivo! Vivo! Vivo!
O Filho de Davi, autor da minha fé
Estrela da manhã, Homem de Nazaré
Cabeça da igreja, Conselheiro fiel
Videira verdadeira, Caminho do céu
Rei dos reis, Noivo amado, Senhor dos senhores, meu Advogado
O Todo-Poderoso, a Verdadeira luz
Venceu na cruz, Teu nome é Jesus

Coro:
Ele está vivo, poderosamente vivo! Jesus está vivo!
Já não sou eu quem vivo, quem vive em mim é Cristo!
Poderosamente vivo, Jesus está vivo!
Já não sou eu quem vivo, Ele vive em mim!

Era quase meio-dia, a terra inteira escureceu
O véu do santuário por inteiro se rompeu
Está consumado, em alta voz Jesus bradou
Entregou Seu Espírito ao Pai e expirou

Maria se aproxima do sepulcro a chorar
Viu o Jardineiro e logo foi lhe questionar
Será que você sabe onde está o meu Senhor?
Maria reconheceu que era Cristo quando Ele pelo nome a chamou
Rabboni!

Coro:
Ele está vivo, poderosamente vivo! Jesus está vivo!
Já não sou eu quem vivo, quem vive em mim é Cristo!
Poderosamente vivo, Jesus está vivo!
Já não sou eu quem vivo, Ele vive em mim!

Porque Ele vive, posso crer no amanhã
Porque Ele vive, temor não há
Mas eu bem sei, eu sei que a minha vida
Está nas mãos do meu Jesus que vivo está
Poderosamente vivo! Poderosamente vivo!`},
{id:"arq031",num:31,title:"Jesus, Filho de Deus",category:"arquivo",author:"",lyrics:`Deixou os céus para me encontrar
Aqui não é o Seu lugar
Um amor assim o mundo não conheceu

Naquela cruz se entregou
O Teu perdão me alcançou
Um amor assim o mundo não conheceu

No altar de adoração
Seja sempre exaltado

Coro:
Jesus, Filho de Deus
Deixou Sua glória, morreu em meu lugar
Jesus, Filho de Deus
Tu és Jesus, Filho de Deus

Levou sobre si pecado e dor
Venceu a morte e ressuscitou
Um amor assim o mundo não conheceu

Levou sobre si pecado e dor
Venceu a morte e ressuscitou
Um amor assim o mundo não conheceu

Seja exaltado, engrandecido
Seu nome é Santo, Poderoso é
E não há nada que apague o Seu amor
A cruz me libertou
A cruz me libertou

Coro:
Jesus, Filho de Deus
Deixou Sua glória, morreu em meu lugar
Jesus, Filho de Deus
Tu és Jesus, Filho de Deus`},
{id:"arq032",num:32,title:"Dias de Elias",category:"arquivo",author:"",lyrics:`Estes são os dias de Elias
Pregando a palavra de Deus
E estes são os dias de Moisés
Justiça reinando outra vez
E estes são os dias de hoje
O mundo vive em escravidão
Mas nós somos os pregadores
Anunciando a volta do Rei

Coro:
Não há Deus como Jeová

Estes são os dias de Ezequiel
Os ossos voltaram a viver
E estes são os dias de Davi
Erguendo um templo de louvor
E estes são os dias da ceifa
Os campos já brancos estão
E nós somos trabalhadores
Realizando a colheita final

Coro:
Não há Deus como Jeová

Ele vem, brilhando como o sol
Voando sobre as nuvens
A trombeta eu posso ouvir
E um grande coral
Cantando uma canção
Dizendo que já vem à salvação`},
{id:"arq033",num:33,title:"Usa-me, Senhor",category:"arquivo",author:"",lyrics:`Sonda-me, Senhor, e me conhece
Quebranta o meu coração
Transforma-me conforme a Tua palavra
E enche-me até que em mim se ache só a Ti
Então, usa-me, Senhor, usa-me

Como um farol que brilha à noite
Como ponte sobre as águas
Como abrigo no deserto
Como flecha que acerta o alvo
Eu quero ser usada, da maneira que Te agrade
Em qualquer hora e em qualquer lugar
Eis aqui a minha vida
Usa-me, Senhor, usa-me

Sonda-me, quebranta-me
Transforma-me, enche-me
E usa-me, Senhor`},
{id:"arq034",num:34,title:"Medley",category:"arquivo",author:"",lyrics:`Meu orgulho me tirou do jardim
Tua humildade colocou o jardim em mim
E se eu vendesse tudo o que tenho
Em troca do amor, eu falharia

Pois o amor não se compra, nem se merece
O amor se ganha
De graça o recebe

Eu quero conhecer Jesus
Quero conhecer Jesus
Eu quero conhecer Jesus
Eu quero conhecer Jesus

Meu amado é o mais belo
Entre milhares e milhares
Meu amado é o mais belo
Entre milhares e milhares

Yeshua, Yeshua

O que é que os anjos veem
Que os fazem se prostrar?
O que é que os anjos veem
Que os fazem cantar:

Santo, santo
É o Senhor Deus Poderoso
Digno de louvor, digno de louvor
Tu és santo, santo
É o Senhor Deus Poderoso
Digno de louvor, digno de louvor
Amém`},
{id:"arq035",num:35,title:"Eu Falo Jesus",category:"arquivo",author:"",lyrics:`Jesus, só quero falar o Seu nome
Sobre cada mente e coração
Porque eu sei que há paz em Tua presença
Eu falo: Jesus

Jesus, só quero falar o Seu nome
Até ver todo o vício se quebrar
Declarando que há esperança e liberdade
Eu falo: Jesus

Coro:
Seu nome é poder
Seu nome é cura
Seu nome é vida
Quebra as fortalezas
Queima como fogo
Vem Tua luz brilhar

Jesus, só quero falar o Seu nome
Sobre toda ansiedade e depressão
Para cada alma que esteja cativa
Eu falo: Jesus

Coro:
Seu nome é poder
Seu nome é cura
Seu nome é vida
Quebra as fortalezas
Queima como fogo
Vem Tua luz brilhar

Grite: Jesus, das montanhas
Grite nas ruas: Jesus
Jesus, sobre os inimigos
Jesus, sobre a escuridão
Jesus, pela minha família
Eu clamo Teu santo nome: Jesus

Coro:
Seu nome é poder
Seu nome é cura
Seu nome é vida
Quebra as fortalezas
Queima como fogo
Vem Tua luz brilhar`},
{id:"arq036",num:36,title:"Santo Espírito",category:"arquivo",author:"",lyrics:`Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Não há nada igual
Não há nada melhor
A que se comparar à esperança viva
Tua presença

Eu provei e vi
O mais doce amor
Que liberta o meu ser
E a vergonha desfaz
Tua presença

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor

Vamos provar o quão real é Tua presença
Vamos provar da Tua glória e bondade

Santo Espírito, és bem-vindo aqui
Vem inundar, encher esse lugar
É o desejo do meu coração
Sermos inundados por Tua glória, Senhor`},
{id:"arq037",num:37,title:"Creio Que Tu És a Cura",category:"arquivo",author:"",lyrics:`Me escutas quando clamo
E acalma o meu pensar
Me levas pelo fogo
Curando todo meu ser
Confio em Ti, confio em Ti

Coro:
Creio que Tu és a cura
Creio que És tudo para mim
Creio que Tu és a vida
Creio que não há outro igual a Ti
Jesus, eu preciso de Ti

Me escutas quando clamo
E acalma o meu pensar
Me levas pelo fogo
Curando todo meu ser
Confio em Ti, confio em Ti

Nada é impossível para Ti
Nada é impossível
Nada é impossível para Ti
Tens o meu mundo em Tuas mãos

Coro:
Creio que Tu és a cura
Creio que És tudo para mim
Creio que Tu és a vida
Creio que não há outro igual a Ti
Jesus, eu preciso de Ti
Não há outro igual a Ti
Jesus, eu preciso de Ti...`},
{id:"arq038",num:38,title:"Ao Olhar Pra Cruz",category:"arquivo",author:"",lyrics:`Andei tão cego, sem rumo certo
Buscando a paz e descanso
Eu procurei por tantos meios
Justificar meus erros

Mas ao clamar, meus olhos abri

Coro:
E ao olhar pra cruz eu entendo o amor
Derramado ali por mim
Sacrifício de sangue por um pecador
Não sou merecedor, Tua graça me alcançou

E ao ver Tua glória, naquele dia
Me alegrarei em gratidão
Tocarei as marcas, marcas de vitória
Vencido é o pecado
Perante Ti me prostrarei

Coro:
E ao olhar pra cruz eu entendo o amor
Derramado ali por mim
Sacrifício de sangue por um pecador
Não sou merecedor, Tua graça me alcançou

E ao olhar pra cruz eu entendo o amor
Derramado ali por mim
Sacrifício de sangue por um pecador
Não sou merecedor
Não sou merecedor
Não sou merecedor
Tua graça me alcançou`},
{id:"arq039",num:39,title:"A Igreja Vem",category:"arquivo",author:"",lyrics:`Quebrando cativeiros pra salvar alguém
A Igreja vem

O Noivo vem aí
A Igreja está se preparando
Pra cantar no coral
Junto com os anjos — Glória

O Noivo vem aí, rompendo em Glória
Ele está te convidando, de Glória em Glória
Pra cantar no coral, reflete a Glória
Junto com os anjos

A Igreja vem com Aquele que brilha mais que a luz do sol
Dissipando as trevas, destruindo o mal
A Sua face é um refletor de glória, o céu derrama a glória
Porque a Igreja vem, arrebentando com as portas do inferno
Com barulho de milagre, levantando um exército de vidas
É a Igreja Santa

A Igreja vem com Aquele que brilha mais que a luz do sol
Dissipando as trevas, destruindo o mal
A Sua face é um refletor de glória, o céu derrama a glória
Porque a Igreja vem, arrebentando com as portas do inferno
Com barulho de milagre, levantando um exército de vidas
É a Igreja Santa, aqui perseguida`}
];

// ── Cifras do Arquivo ─────────────────────────────────────────
const ARQUIVO_CHORDS = {
  arq001:`Tom: Em

Verso:
[Em]Não vou negar quem [C]sou, não há máscara em [D]mim
[Am]Desde quando Te entreguei meu cora[Em]ção
[Em]Não vale a pena Te [C]negar em troca de [D]viver
[Am]Se morrer por Ti, pra mim significa [D]viver

Coro:
[Em]Nada vai interromper minha ado[C]ração
[G]Nada vai me impedir de Te a[D]mar
[Em]Nada vai me fazer parar de Te se[C]guir
[Bm]Cristo, meu Se[D]nhor`,

  arq002:`Tom: G

Verso:
[G]Se você já pensou em desis[C]tir
[Am]Tenha fé, e não pare de sor[D]rir
[G]Você vai ver que o inimigo não vai enten[C]der
[Am]Que o crente até mesmo chorando ele canta por[D]que

Coro:
[G]Se chorar, chora nos pés do Se[C]nhor
[Em]Tem Jesus do seu lado, e mais nada [D]mais
[G]Se sofrer, sofre nos braços de [C]Deus
[Em]Você vai ver que o amor Dele vai te susten[D]tar`,

  arq003:`Tom: D

Verso:
[D]Perto quero es[A]tar
[Bm]Junto aos teus [G]pés
[D]Pois prazer maior não [A]há
[Bm]Em me render e te ado[G]rar

Coro:
[D]Te louva[A]rei
[Bm]Te louva[G]rei
[D]Com tudo que sou, com tudo que [A]tenho
[Bm]Te louva[G]rei`,

  arq004:`Tom: G

Verso:
[G]Edifica em mim, Se[D]nhor
[Em]Uma morada para [C]ti
[G]Vem repousar Tua graça em [D]mim
[Em]Os meus princípios vou re[C]ver

Coro:
[G]Segundo Teu cora[D]ção
[Em]Segundo Teu cora[C]ção
[G]Refaz em mim a Tua von[D]tade, Se[Em]nhor
[C]Segundo Teu cora[G]ção`,

  arq005:`Tom: E

Verso:
[E]Senhor, quero viver pra Teu lou[B]vor
[C#m]Te entregar tudo que [A]sou
[E]Com o meu viver Te exalta[B]rei
[C#m]Amado Rei dos [A]Reis

Coro:
[E]Te ado[B]rar é o meu pra[C#m]zer
[A]Te louvar é o meu de[E]ver
[B]Minha vida toda a[C#m]qui entrego a [A]Ti
[E]Te ado[B]rar é o meu pra[C#m]zer`,

  arq006:`Tom: D

Verso:
[Bm]O que posso [A]ver
[D]Senão um vale de ossos [G]secos?
[Bm]O que posso [A]dizer
[D]Se já se foi a espe[G]rança?

Ponte:
[Bm]Ressus[A]cita
[D]Ressus[G]cita
[Bm]Faz o Teu povo cla[A]mar
[D]Ressus[G]cita

Coro:
[Em]Só Deus pode reno[G]var
[D]Só Deus pode res[A]taurar
[Em]Ressuscita, Se[G]nhor
[D]Ressuscita, Se[A]nhor`,

  arq007:`Tom: D

Verso:
[D]O que posso [A]ver
[Bm]Senão um vale de ossos [G]secos?
[D]O que posso [A]dizer
[Bm]Se já se foi a espe[G]rança?

Coro:
[D]Ressus[A]cita-[Bm]me
[G]Ressus[D]cita-[A]me
[Bm]Vem ao meu vale de ossos [G]secos
[D]Ressus[A]cita-[Bm]me`,

  arq008:`Tom: G

Verso:
[G]Vou lhe falar de um [D]Deus
[Em]Que não se pode compa[C]rar
[G]O Deus que tudo vê, e ao homem pode transfor[D]mar
[Em]Tão grande é o seu po[C]der

Coro:
[G]Sobe[D]rano [Em]Deus
[C]Sobe[G]rano [D]Deus
[Em]O Deus que faz maravi[C]lhas
[G]Sobe[D]rano [Em]Deus`,

  arq009:`Tom: G

Verso:
[G]Aqui eu vim para di[C]zer
[Em]Que quero mais Te conhe[D]cer
[G]Minha alma tem sede de [C]Ti
[Em]Oh! Espírito de Deus, estou a[D]qui

Coro:
[G]Vem, Espírito de [C]Deus!
[Em]O meu coração é o Teu al[D]tar
[G]Flui, Espírito de [C]Deus
[Em]Flui aqui no meu ser e me [D]transforma`,

  arq010:`Tom: D

Verso:
[D]Problemas vêm pra me atin[A]gir
[G]Só pra me fazer pa[D]rar
[D]Chego até me enfraque[A]cer
[G]Sem forças para cami[D]nhar

Coro:
[G]Pra que te[A]mer?
[D]Pra que cho[Bm]rar?
[Em]Se Deus está no contro[A]le
[D]De tudo que vier me atin[A]gir`,

  arq011:`Tom: C

Verso:
[C]Voz do que clama em meio ao desar[G]to
[Am]Prepara o caminho do meu Salva[F]dor
[C]Grita nas praças, nas ruas, nos cam[G]pos
[Am]Prepara o caminho do meu Salva[F]dor

Coro:
[C]Toca a trombeta em Si[G]ão
[Am]A colheita chegou com furor, com fu[F]ror
[C]Vamos colher, vamos colher, vamos co[G]lher
[Am]É tempo de co[F]lher`,

  arq012:`Tom: G

Verso:
[G]Passa o tempo e eu estou a[C]qui
[Am]Situações difíceis vêm pra me impe[D]dir
[G]Muitos tentam me aba[C]ter
[Am]Fazendo acusações, impedindo o meu cres[D]cer

Coro:
[Em]Não vou desis[C]tir
[G]Não vou me can[D]sar
[Em]De lutar, de confiar no Se[C]nhor
[G]Não vou desis[D]tir`,

  arq013:`Tom: A

Verso:
[F#m]Diante do Teu trono eu es[D]tou
[A]A Tua face eu quero [E]ver
[F#m]Sei que não sou merece[D]dor
[A]Mas Teu amor me resga[E]tou

Coro:
[A]Pra Tua gló[E]ria
[F#m]Pra Tua gló[D]ria
[A]Tudo farei, tudo entre[E]garei
[F#m]Pra Tua gló[D]ria`,

  arq014:`Tom: A

Verso:
[A]Pai, me dá disposição para aprender de [E]Ti
[F#m]Me dá disposição pra mergu[D]lhar
[A]No mar da oração, mais uma [E]vez
[F#m]Me dá disposi[D]ção

Coro:
[A]Reno[E]vo
[F#m]Me reno[D]va, Se[A]nhor
[E]Que a Tua glória en[F#m]cha minha vi[D]da
[A]Me reno[E]va`,

  arq015:`Tom: G

Verso:
[Am]Digno é o Cordeiro que foi [C]morto
[G]Santo, Santo Ele [D]é
[Am]Um novo cântico ao que se as[C]senta
[G]Sobre o trono do [D]Céu

Coro:
[D]Santo, Santo, [Am]Santo
[C]Deus Todo Pode[G]roso
[D]Que era, e é, e há de [Am]vir
[C]Com a criação, eu canto a [G]Ti`,

  arq016:`Tom: A

Verso:
[A]A noite chegou, eu estou a cla[D]mar
[F#m]O medo chegou, eu estou a cho[E]rar
[A]Mas Tua palavra [D]diz:
[Bm]Que o choro pode uma noite du[E]rar

Coro:
[A]Estou conti[D]go
[C#m]Não temas, não te[F#m]mas
[D]Segura a minha [E]mão
[A]Eu estou conti[D]go`,

  arq017:`Tom: C

Verso:
[C]Eis-me aqui, tantas fraquezas
Diante da Tua [G]grandeza
[Am]O que se vê o coração [F]sente
O corpo responde, minh'alma não [C]mente

Coro:
[C]Faça mora[G]da
[Am]Faça mora[F]da
[C]No mais íntimo do meu [G]ser
[Am]Faça mora[F]da`,

  arq018:`Tom: Bm

Verso:
[Bm]Um Deus rodeado de Gló[A]ria
[D]És adorado 24 ho[G]ras
[Bm]Os serafins cantam: Santo, [A]Santo
[D]Incansavelmente, Santo, [G]Santo

Coro:
[D]Eis-me aqui, Se[A]nhor
[Bm]Envia-me, Se[G]nhor
[D]Aqui estou, toma a minha vi[A]da
[Bm]Eis-me a[G]qui`,

  arq019:`Tom: Dm

Verso:
[Dm]Feche os teus olhos neste lu[A]gar
[F]E eleve o pensamento nas al[Gm]turas
[Dm]E pela fé toque em Je[A]sus
[F]Mas pra isso é preciso romper a multi[Gm]dão

Coro:
[Dm]Todo Pode[A]roso
[F]Santo e mara[Gm]vilhoso
[Dm]Todo Pode[A]roso
[F]O meu Senhor Je[Gm]sus`,

  arq020:`Tom: Dm

Verso:
[Bb]Eu me rasgo por in[Gm]teiro
[Am]Faço tudo, mas vem nova[Dm]mente
[Bb]Eu mergulho na mirra ar[Gm]dente
[Am]Mas peço que Tua presença au[Dm]mente

Coro:
[F]O que Tua glória fez comi[Bb]go
[C]Não tem como descre[Am]ver
[F]O que Tua glória fez comi[Bb]go
[C]Só o coração pode enten[Dm]der`,

  arq021:`Tom: Am

Verso:
[Am]Jesus meu guia [Dm]é
[G]Amigo e prote[C]tor
[F]Ele é o meu bom [Dm]Pastor
[E]E quando eu sentir te[E7]mor

Refrão:
[F]Nele confia[G]rei
[C]Nele confia[F]rei
[Dm]Fraco sou, mas Deus me [E]dá
[Am]Seu poder, Seu a[E7]mor

Contraponto:
[F]Nele confiarei (Jesus meu guia [G]é)
[C]Nele confiarei (amigo e prote[F]tor)
[Dm]Fraco sou, mas Deus me dá (Ele é o meu bom [E]Pastor)
[Am]Seu poder, Seu amor (e quando eu sentir te[E7]mor)`,

  arq022:`Tom: A

Verso:
[A]O Seu amor é como um furaca[D]ão
[E]E eu me rendo ao vento de Sua misericór[A]dia
[A]Então, de repente não vejo mais minhas afli[D]ções
[E]Eu só vejo a gló[A]ria

Coro:
[A]Ele tem ciúmes de [D]mim
[E]Deus tem ciúmes de [A]mim
[A]E eu me rendo ao amor insano d[D]Ele
[E]Ele tem ciúmes de [A]mim`,

  arq023:`Tom: G

Verso:
[G]A Ti eu vou cla[C]mar
[G]Pois tudo vem de [C]Ti
[G]E tudo está em [D]Ti
[Em]Por Ti vou cami[C]nhar

Coro:
[G]Eu me ren[D]do
[Em]Eu me ren[C]do a Ti
[G]Toma minha vida intei[D]ra
[Em]Eu me ren[C]do`,

  arq024:`Tom: Cm

Verso:
[Cm]Quanto tempo Te esperei, Se[Ab]nhor
[Eb]Já bati em tantas portas em [Bb]vão
[Cm]Sei que só o Teu po[Ab]der
[Eb]Pode acabar com minha dor de uma [Bb]vez

Coro:
[Cm]Meu mila[Ab]gre
[Eb]Acontecerá hoje a[Bb]qui
[Cm]Meu mila[Ab]gre
[Eb]Eu creio, Senhor, em [Bb]Ti`,

  arq025:`Tom: C (Capo 3 → Eb)

Verso:
[C]Minhas lamparinas estão ace[Am]sas
[F]Só estou espe[G]rando
[C]O barulho dos Teus pas[Am]sos
[F]Em direção à [G]porta

Coro:
[C]Pode morar a[Am]qui
[F]Pode morar a[G]qui
[C]Venha, Espírito San[Am]to
[F]Pode morar a[G]qui`,

  arq026:`Tom: C#m

Verso:
[C#m]Muitos confiam em car[B]ros
[A]E outros, em seus cavale[E]iros
[C#m]Muitos Te louvam com lá[B]bios
[A]E o coração dividi[E]do

Coro:
[A]Reascende a cha[B]ma
[C#m]No meu cora[F#m]ção
[A]Reascende a cha[B]ma
[G#m]Do Teu amor, Se[C#m]nhor`,

  arq027:`Tom: D

Coro:
[Bm]Santo, santo, santo, santo [Em]És
[D]Santo, santo, santo, santo [F#m]És
[Bm]Tão perfeito, incomparável [Em]És
[D]Meu Jesus tão ado[F#m]rado

Verso:
[Bm]Que abriu a porta da eterni[Em]dade
[D]Se entregou pra se cumprir toda ver[F#m]dade
[Bm]Humilhado, mas Rei da glória és [Em]Tu
[D]Santo és [F#m]Tu`,

  arq028:`Tom: Am

Verso:
[Am]Queria tanto olhar pro [F]céu
[C]Contemplar a grandeza do meu [G]Deus
[Am]Diferente da atitude de To[Dm]mé
[E]Quero ver porque em Você eu tenho [Am]fé

Coro:
[Am]Abre os meus o[F]lhos, Se[G]nhor
[Dm]Quero ver a Tua gló[Am]ria
[G]Abre os meus o[E]lhos
[F]Revela-Te a [Am]mim`,

  arq029:`Tom: Bm

Verso:
[Bm]És adorado entre [A]nós
[G]Tão desejado a[Em]qui
[Bm]Mas nada se compara[A]rá
[G]Com a glória que há de [Em]vir

Coro:
[G]Vem me bus[A]car
[G]Vem me bus[A]car
[G]Eu não sou da[A]qui
[Bm]Pra casa volta[A]rei`,

  arq030:`Tom: Dm

Verso:
[Dm]Mesmo sem merecer morreu pra eu vi[Gm]ver
[A]Na rude cruz tamanha dor sofreu por [Dm]mim
[Dm]Foi por amor, o Cordeiro cala[Gm]do
[A]Por mim se fez peca[Dm]do

Coro:
[Em]Ele está vi[D]vo!
[C]Poderosamente vi[G]vo!
[Em]Ele está vi[D]vo!
[Am]Aleluia, glória a [B]Deus!`,

  arq031:`Tom: B

Verso:
[B]Deixou os céus para me encon[E]trar
[G#m]Aqui não é o Seu lu[E]gar
[B]Um amor assim o mundo não conhe[E]ceu
[G#m]Naquela cruz se entre[B]gou

Coro:
[B]Jesus, Filho de [F#]Deus
[G#m]Cordeiro imola[E]do
[B]Jesus, Filho de [F#]Deus
[G#m]Por mim entre[B]gado`,

  arq032:`Tom: G

Verso:
[G]Estes são os dias de E[C]lias
[D]Pregando a palavra de [G]Deus
[G]E estes são os dias de Moi[C]sés
[D]Justiça reinando outra [G]vez

Coro:
[G]Hosana! [C]Hosana!
[D]Hosana nas altu[G]ras!
[G]Hosana! [C]Hosana!
[D]Hosana nas al[G]turas!

Refrão:
[G]Eis que Ele vem, cavalei[C]ro nas nuvens
[Bm]Brilhante como o sol, alevanta-[Em]se
[Am]Eis que vem, cheio de gló[D]ria
[G]Queimando como [D]fogo`,

  arq033:`Tom: C

Verso:
[F]Sonda-me, Senhor, e me conhe[C]ce
[Am]Quebranta o meu cora[G]ção
[F]Transforma-me conforme a Tua pala[C]vra
[Am]E enche-me até que em mim se ache só a [G]Ti

Coro:
[F]Usa-me, Se[C]nhor
[Am]Usa-me, Se[G]nhor
[F]Como um instrumento do Teu a[C]mor
[Am]Usa-me, Se[G]nhor`,

  arq034:`Tom: G

[G]Meu orgulho me tirou do jar[D]dim
[Em]Tua humildade colocou o jardim em [C]mim
[G]E se eu vendesse tudo o que tenho
[D]Em troca do amor, eu falha[Em]ria

[C]Pois o amor não se compra, nem se mere[G]ce
[D]O amor se ga[Em]nha
[C]De graça recebi, de graça da[G]rei`,

  arq035:`Tom: C (Capo 5 → F)

Verso:
[C]Jesus, só quero falar o Seu no[Am]me
[F]Sobre cada mente e cora[G]ção
[C]Porque eu sei que há paz em Tua presen[Am]ça
[F]Eu falo: Je[C]sus

Coro:
[G]Jesus, Je[Am]sus
[F]Jesus, há poder no Seu no[G]me
[C]Jesus, Je[Am]sus
[F]Só Jesus, Jesus, Je[C]sus`,

  arq036:`Tom: F

Verso:
[F]Santo Espírito, és bem-vindo a[Am]qui
[Dm]Vem inundar, encher esse lu[Bb]gar
[F]É o desejo do meu cora[C]ção
[Dm]Sermos inundados por Tua gló[Bb]ria, Senhor

Ponte:
[Bb]Não há nada i[Dm]gual
[C]Não há nada me[Gm]lhor
[Bb]A que se comparar à espe[Dm]rança viva
[C]No Espírito e a[F]mor

Coro:
[Bb]Santo Espí[C]rito
[F]Vem, Santo Espí[Am]rito
[Bb]Enche a nossa vi[C]da
[F]Santo Espí[Am]rito`,

  arq037:`Tom: E (Capo 2 → F#)

Verso:
[E]Me escutas quando cla[A]mo
[C#m]E acalma o meu pen[A]sar
[E]Me levas pelo fo[A]go
[C#m]Curando todo meu [B]ser

Coro:
[E]Creio que Tu és a cu[A]ra
[C#m]Creio que és tudo para [B]mim
[E]Creio que Tu és a vi[A]da
[C#m]Creio que és tudo para [B]mim`,

  arq038:`Tom: C

Verso:
[C]Andei tão cego, sem rumo cer[G]to
[Am]Buscando a paz e descan[F]so
[C]Eu procurei por tantos mei[G]os
[Am]Justificar meus er[F]ros

Coro:
[Am]E ao olhar pra cruz eu entendo o a[F]mor
[C]Derramado ali por [G]mim
[Am]E ao olhar pra cruz eu encontrei o per[Dm]dão
[C]E a vida que há em [G]Ti`,

  arq039:`Tom: G

Verso:
[G]Quebrando cativeiros pra salvar al[C]guém
[Em]A Igreja [C]vem
[G]O Noivo vem a[D]í
[Am]A Igreja está se preparan[D]do

Coro:
[G]A Igreja [C]vem
[Em]A Igreja [C]vem
[G]Preparada, gloriosa, sem man[D]cha
[Bm]A Igreja [Am]vem`
}

// ── Cifras dos Corinhos ─────────────────────────────────────
const CORINHOS_CHORDS = {
  cor001:`Tom: G

[G]Visitante, seja bem-[D]vindo
[Em]Sua presença é um pra[C]zer
[G]Com Jesus estamos di[D]zendo
[Em]Que esta igreja ama vo[C]cê

[G]Deus te ama, e eu te [D]amo
[Em]E assim devemos vi[C]ver
[G]Esperamos que você vol[D]te
[Em]Para juntos Cristo lou[C]var`,
  cor002:`Tom: C

[C]Você é bem-vindo, seja bem-[G]vindo
[Am]Nessa casa do Se[F]nhor
[C]Você é bem-vindo, seja bem-[G]vindo
[Am]Venha adorar ao Se[F]nhor

[C]Jesus te ama, Jesus te [G]ama
[Am]E esta igreja tam[F]bém
[C]Jesus te ama, Jesus te [G]ama
[Am]E a esta casa te de[F]tém`,
  cor003:`Tom: G

[G]Aqui há amor, aqui há [D]paz
[Em]Aqui há gozo que o mundo não [C]dá
[G]Aqui há amor, aqui há [D]paz
[Em]Jesus está aqui e isso bas[C]ta

[G]Entra, irmão, entra, ir[D]mã
[Em]Nesta casa de lou[C]vor
[G]Aqui há amor, aqui há [D]paz
[Em]E a presença do Se[C]nhor`,
  cor004:`Tom: G

[G]Bom estarmos a[D]qui
[Em]Bom estarmos a[C]qui
[G]Para adorar ao Se[D]nhor
[Em]Bom estarmos a[C]qui

[G]É bom louvar, é bom can[D]tar
[Em]É bom ao Senhor exal[C]tar
[G]É bom estarmos a[D]qui
[Em]Bom estarmos a[C]qui`,
  cor005:`Tom: G

[G]Deus está aqui, alelu[D]ia
[Em]Tão certo como o ar que eu respi[C]ro
[G]Tão certo como o amanhã que se le[D]vanta
[Em]Tão certo como eu te falo e podes me ou[C]vir

[G]Deus está aqui, alelu[D]ia
[Em]Deus está a[C]qui`,
  cor006:`Tom: G

[G]O culto hoje vai ser maravi[D]lhoso
[Em]Pelo poder do meu Je[C]sus
[G]O culto hoje vai ser maravi[D]lhoso
[Em]Pelo poder do meu Je[C]sus

[G]Glória, glória, gló[D]ria
[Em]Glória ao nome de Je[C]sus
[G]Glória, glória, gló[D]ria
[Em]Glória ao nome de Je[C]sus`,
  cor007:`Tom: G

[G]Nós somos filhos do [D]Rei
[Em]Nós somos filhos do [C]Rei
[G]Com alegria e lou[D]vor
[Em]Nós somos filhos do [C]Rei

[G]Cantemos ao Se[D]nhor
[Em]Louvemos ao Se[C]nhor
[G]Com alegria e lou[D]vor
[Em]Nós somos filhos do [C]Rei`,
  cor008:`Tom: G

[G]Reunidos em Teu no[D]me
[Em]Senhor Je[C]sus
[G]Reunidos em Teu no[D]me
[Em]Senhor Je[C]sus

[G]Aqui estamos para Te lou[D]var
[Em]Aqui estamos para Te ado[C]rar
[G]Reunidos em Teu no[D]me
[Em]Senhor Je[C]sus`,
  cor009:`Tom: G

[G]Vem, Espírito de [Em]Deus
[C]Enche o nosso cora[D]ção
[G]Vem, Espírito de [Em]Deus
[C]Enche o nosso cora[D]ção

[G]De amor, de paz e ale[Em]gria
[C]De amor, de paz e ale[D]gria
[G]Vem, Espírito de [Em]Deus
[C]Enche o nosso cora[D]ção`,
  cor010:`Tom: G

[G]Alegres, cantemos ao Se[D]nhor
[Em]Com júbilo e lou[C]vor
[G]Alegres, cantemos ao Se[D]nhor
[Em]Com júbilo e lou[C]vor

[G]Glória, glória, glória a [D]Deus
[Em]Glória, glória, gló[C]ria
[G]Alegres, cantemos ao Se[D]nhor
[Em]Com júbilo e lou[C]vor`,
  cor011:`Tom: G

[G]Em Espírito e em verda[D]de
[Em]Te adoramos, ó Se[C]nhor
[G]Em Espírito e em verda[D]de
[Em]Te adoramos, ó Se[C]nhor

[G]Aleluia, alelu[D]ia
[Em]Te adoramos, ó Se[C]nhor
[G]Aleluia, alelu[D]ia
[Em]Te adoramos, ó Se[C]nhor`,
  cor012:`Tom: D

[D]Santo, santo, san[A]to
[Bm]Santo é o Se[G]nhor
[D]Santo, santo, san[A]to
[Bm]O Deus do a[G]mor

[D]Toda a terra está rep[A]leta
[Bm]Da Tua glória, ó Se[G]nhor
[D]Santo, santo, san[A]to
[Bm]O Deus do a[G]mor`,
  cor013:`Tom: G

[G]Ao único que é dig[D]no
[Em]De toda honra e gló[C]ria
[G]Ao único que é dig[D]no
[Em]De todo lou[C]vor

[G]Cantamos, canta[D]mos
[Em]A Deus canta[C]mos
[G]Ao único que é dig[D]no
[Em]De todo lou[C]vor`,
  cor014:`Tom: G

[G]Em adoração me prostro a [D]Ti
[Em]Rendido aos Teus pés, Se[C]nhor
[G]Minha vida inteira oferto a[D]qui
[Em]Ao Rei dos reis, ao meu Se[C]nhor

[G]Aleluia, alelu[D]ia
[Em]Glória ao nome de Je[C]sus
[G]Aleluia, alelu[D]ia
[Em]Glória, glória a Je[C]sus`,
  cor015:`Tom: D

[D]Digno, digno, dig[A]no é o Cordeiro
[Bm]Digno, digno, digno de lou[G]vor
[D]Digno, digno, dig[A]no é o Cordeiro
[Bm]Que morreu e ressusci[G]tou

[D]Aleluia, alelu[A]ia
[Bm]Digno é o Cordei[G]ro
[D]Aleluia, alelu[A]ia
[Bm]Digno de lou[G]vor`,
  cor016:`Tom: G

[G]Rendido estou, Senhor, a [D]Ti
[Em]Todo o meu ser entrego a[C]qui
[G]Leva minha vida, usa minha vi[D]da
[Em]Rendido estou, Senhor, a [C]Ti

[G]Usa-me, Senhor, usa-[D]me
[Em]Para a Tua glória, Se[C]nhor
[G]Rendido estou, Senhor, a [D]Ti
[Em]Todo o meu ser entrego a[C]qui`,
  cor017:`Tom: G

[G]Quão grande és Tu, quão grande és [D]Tu
[Em]Quando penso em Teus mila[C]gres
[G]Quão grande és Tu, quão grande és [D]Tu
[Em]Tua glória enche o univer[C]so

[G]Aleluia, alelu[D]ia
[Em]Quão grande és Tu, Se[C]nhor
[G]Aleluia, alelu[D]ia
[Em]Quão grande és [C]Tu`,
  cor018:`Tom: G

[G]Eu me rendo ao Teu a[Em]mor
[C]Eu me rendo ao Teu po[D]der
[G]Senhor Jesus, toma o contro[Em]le
[C]Da minha vida inteira, Se[D]nhor

[G]Toma o controle, toma o contro[Em]le
[C]Senhor Jesus, toma o contro[D]le
[G]Toma o controle, toma o contro[Em]le
[C]Da minha vida, Se[D]nhor`,
  cor019:`Tom: G

[G]A alegria está no cora[D]ção
[Em]De quem ama a Je[C]sus
[G]A alegria está no cora[D]ção
[Em]De quem serve ao Se[C]nhor

[G]É alegria, é ale[D]gria
[Em]É alegria de Je[C]sus
[G]É alegria, é ale[D]gria
[Em]É alegria de Je[C]sus`,
  cor020:`Tom: G

[G]Celebrai com júbilo ao Se[D]nhor
[Em]Celebrai com júbilo ao Se[C]nhor
[G]Com alegria, cantai com ale[D]gria
[Em]Celebrai com júbilo ao Se[C]nhor

[G]Com palmas e louvores, a Deus cantai louvores
[D]Com alegria, cantai com ale[Em]gria
[C]Celebrai com júbilo ao Se[G]nhor`,
  cor021:`Tom: G

[G]O Senhor reina em Seu po[D]vo
[Em]Com poder e majesta[C]de
[G]O Senhor reina em Seu po[D]vo
[Em]Com poder e majesta[C]de

[G]Aleluia, alelu[D]ia
[Em]O Senhor, o Senhor rei[C]na
[G]Aleluia, alelu[D]ia
[Em]O Senhor, o Senhor rei[C]na`,
  cor022:`Tom: G

[G]Jesus Cristo mudou meu vi[Em]ver
[C]Me deu um novo amanha[D]cer
[G]Com alegria hoje posso di[Em]zer
[C]Jesus mudou meu vi[D]ver

[G]Aleluia, alelu[Em]ia
[C]Jesus mudou meu vi[D]ver
[G]Aleluia, alelu[Em]ia
[C]Jesus mudou meu vi[D]ver`,
  cor023:`Tom: G

[G]Aleluia, alelu[D]ia
[Em]Glória a Deus, glória a [C]Deus
[G]Aleluia, alelu[D]ia
[Em]Glória a Deus no al[C]to

[G]Louvemos ao Se[D]nhor
[Em]Com todo o cora[C]ção
[G]Louvemos ao Se[D]nhor
[Em]Com toda a na[C]ção`,
  cor024:`Tom: G

[G]Glória, glória, gló[D]ria
[Em]Ao nome de Je[C]sus
[G]Glória, glória, gló[D]ria
[Em]Ao nome de Je[C]sus

[G]Esse nome tem po[D]der
[Em]Esse nome tem po[C]der
[G]Glória, glória, gló[D]ria
[Em]Ao nome de Je[C]sus`,
  cor025:`Tom: G

[G]Sou salvo, sou sal[D]vo
[Em]Pela graça de Je[C]sus
[G]Sou salvo, sou sal[D]vo
[Em]Louvado seja [C]Deus

[G]Aleluia, alelu[D]ia
[Em]Louvado seja [C]Deus
[G]Aleluia, alelu[D]ia
[Em]Louvado seja [C]Deus`,
  cor026:`Tom: C

[C]O povo que Deus liber[G]tou
[Am]Está aqui, está a[F]qui
[C]O povo que Deus liber[G]tou
[Am]Está aqui para lou[F]var

[C]Somos livres, somos li[G]vres
[Am]Pela graça do Se[F]nhor
[C]Somos livres, somos li[G]vres
[Am]Para louvar ao Se[F]nhor`,
  cor027:`Tom: G

[G]Caminhando eu vou para Ca[D]naã
[Em]Jesus Cristo vem me gui[C]ar
[G]Caminhando eu vou para Ca[D]naã
[Em]Rumo ao reino celes[C]tial

[G]Aleluia, alelu[D]ia
[Em]Glória a Deus, glória a [C]Deus
[G]Aleluia, alelu[D]ia
[Em]Glória ao Rei dos [C]reis`,
  cor028:`Tom: G

[G]Eu tenho um amigo que é Je[D]sus
[Em]Que me ama com todo o Seu a[C]mor
[G]Que morreu na cruz por [D]mim
[Em]Para me salvar do pecado e do [C]mal

[G]Esse amigo é Je[D]sus
[Em]Esse amigo é Je[C]sus
[G]Que me ama, que me sal[D]va
[Em]Esse amigo é Je[C]sus`,
  cor029:`Tom: G

[G]Há poder, há po[Em]der
[C]No sangue de Je[D]sus
[G]Há poder, há po[Em]der
[C]No sangue do Se[D]nhor

[G]Esse sangue me lim[Em]pou
[C]Esse sangue me sal[D]vou
[G]Há poder, há po[Em]der
[C]No sangue de Je[D]sus`,
  cor030:`Tom: G

[G]Deus é bom, alelu[D]ia
[Em]Deus é bom, alelu[C]ia
[G]Deus é bom, alelu[D]ia
[Em]Deus é [C]bom

[G]À minha alma Ele restau[D]rou
[Em]Da perdição Ele me sal[C]vou
[G]Deus é bom, alelu[D]ia
[Em]Deus é [C]bom`,
  cor031:`Tom: G

[G]Vou pro céu, vou pro [D]céu
[Em]Para viver na casa de [C]Deus
[G]Vou pro céu, vou pro [D]céu
[Em]Para adorar a Je[C]sus

[G]Aleluia, alelu[D]ia
[Em]Para adorar a Je[C]sus
[G]Aleluia, alelu[D]ia
[Em]Para adorar a Je[C]sus`,
  cor032:`Tom: G

[G]Minhas mãos estão che[D]ias
[Em]Das bênçãos de [C]Deus
[G]Minhas mãos estão che[D]ias
[Em]Das bênçãos do Se[C]nhor

[G]Ele me abençoou, me abençoo[D]u
[Em]Ele me abençoou, alelu[C]ia
[G]Ele me abençoou, me abençoo[D]u
[Em]Glória a Deus no al[C]to`,
  cor033:`Tom: G

[G]Cristo ressurgiu, alelu[D]ia
[Em]Cristo ressurgiu, alelu[C]ia
[G]Ele vive para sem[D]pre
[Em]Cristo ressurgiu, alelu[C]ia

[G]Morte, onde está a tua vitó[D]ria?
[Em]Sepulcro, onde está o teu agui[C]lhão?
[G]Cristo ressurgiu, alelu[D]ia
[Em]Aleluia ao Se[C]nhor`,
  cor034:`Tom: G

[G]Ele é o leão da tribo de Ju[D]dá
[Em]Raiz de Davi, a estrela da man[C]hã
[G]Ele é o santo, o Deus forte e pode[D]roso
[Em]Aleluia, glória a Deus, alelu[C]ia

[G]Aleluia, aleluia, alelu[D]ia
[Em]Glória a Deus, alelu[C]ia
[G]Aleluia, aleluia, alelu[D]ia
[Em]Glória ao Rei dos [C]reis`,
  cor035:`Tom: G

[G]Espírito Santo, entra a[D]qui
[Em]Enche a nossa vida de bên[C]ção
[G]Espírito Santo, entra a[D]qui
[Em]Enche a nossa vida de bên[C]ção

[G]Entra, Santo Espírito, en[D]tra
[Em]Enche, Santo Espírito, en[C]che
[G]Aviva, Santo Espírito, avi[D]va
[Em]Restaura o Teu povo, Se[C]nhor`,
  cor036:`Tom: G

[G]Fogo, fogo, fogo do Teu Espí[D]rito
[Em]Fogo, fogo, fogo do Teu Espí[C]rito
[G]Que o fogo desça, que o fogo des[D]ça
[Em]O fogo do Espírito San[C]to

[G]Que o fogo desça, que o fogo des[D]ça
[Em]O fogo do Teu Espí[C]rito`,
  cor037:`Tom: G

[G]Espírito, enche a minha vi[Em]da
[C]Enche de Ti, Se[D]nhor
[G]Espírito, enche a minha vi[Em]da
[C]Enche de Ti, Se[D]nhor

[G]Com o Teu poder, Se[Em]nhor
[C]Com o Teu amor, Se[D]nhor
[G]Espírito, enche a minha vi[Em]da
[C]Enche de Ti, Se[D]nhor`,
  cor038:`Tom: G

[G]Derrama Teu Espírito, Se[D]nhor
[Em]Derrama Teu Espírito, Se[C]nhor
[G]Sobre mim, sobre [D]nós
[Em]Derrama Teu Espírito, Se[C]nhor

[G]Aviva-nos, aviva-[D]nos
[Em]Aviva-nos, Se[C]nhor
[G]Aviva-nos, aviva-[D]nos
[Em]Aviva-nos, Se[C]nhor`,
  cor039:`Tom: G

[G]O Senhor estendeu um tapete de fo[D]go
[Em]Do céu até esta casa do Se[C]nhor
[G]O Senhor estendeu um tapete de fo[D]go
[Em]Para que o Espírito Santo descesse a[C]qui

[G]Desce, Espírito Santo, des[D]ce
[Em]Desce com poder, Se[C]nhor
[G]Desce, Espírito Santo, des[D]ce
[Em]Enche-nos com Teu a[C]mor`,
  cor040:`Tom: G

[G]Manda o fogo, Se[D]nhor
[Em]Manda o fogo, Se[C]nhor
[G]Manda o fogo do Teu Espí[D]rito
[Em]Manda o fogo, Se[C]nhor

[G]Que o fogo desça a[D]qui
[Em]Que o fogo desça a[C]qui
[G]Que o fogo do Espírito San[D]to
[Em]Desça aqui, Se[C]nhor`,
  cor041:`Tom: G

[G]Senhor, ouve a nossa ora[D]ção
[Em]Senhor, ouve a nossa [C]voz
[G]Senhor, ouve a nossa ora[D]ção
[Em]E nos abençoa, Se[C]nhor

[G]Ouve, Senhor, ouve Se[D]nhor
[Em]A nossa oração, Se[C]nhor
[G]Ouve, Senhor, ouve Se[D]nhor
[Em]E nos abençoa`,
  cor042:`Tom: G

[G]Amado Pai, Tu és tão [D]bom
[Em]Amado Pai, Tu és tão [C]bom
[G]Amado Pai, amado [D]Pai
[Em]Tu és tão bom, Se[C]nhor

[G]És bom, és bom, és bom, Se[D]nhor
[Em]És bom, és bom, és bom, Se[C]nhor
[G]Amado Pai, amado [D]Pai
[Em]Tu és tão bom, Se[C]nhor`,
  cor043:`Tom: D

[D]Eu marquei um encontro com [A]Deus
[Bm]Num lugar santo, num lugar san[G]to
[D]Eu marquei um encontro com [A]Deus
[Bm]Para adorar ao Se[G]nhor

[D]Ajoelhado aos Seus [A]pés
[Bm]Busco Tua face, ó [G]Deus
[D]Eu marquei um encontro com [A]Deus
[Bm]Para adorar ao Se[G]nhor`,
  cor044:`Tom: G

[G]Bate, bate, bate na porta de [D]Deus
[Em]Bate, bate, bate na porta de [C]Deus
[G]Ele vai abrir, Ele vai abrir
[D]Bate na porta de [Em]Deus

[G]Busca, busca, busca a face de [D]Deus
[Em]Busca, busca, busca a face de [C]Deus
[G]Ele vai aparecer, Ele vai aparecer
[D]Busca a face de [Em]Deus`,
  cor045:`Tom: D

[D]Senhor, fala, Teu servo [A]ouve
[Bm]Senhor, fala, Teu servo [G]ouve
[D]Senhor, fala, Teu servo [A]ouve
[Bm]Teu servo ouve, Se[G]nhor

[D]Fala, Senhor, fala Se[A]nhor
[Bm]Fala, Senhor, ao meu cora[G]ção
[D]Fala, Senhor, fala Se[A]nhor
[Bm]Fala ao meu cora[G]ção`,
  cor046:`Tom: G

[G]Mão poderosa do Se[Em]nhor
[C]Mão poderosa do Se[D]nhor
[G]Alcança-me, Se[Em]nhor
[C]Mão poderosa do Se[D]nhor

[G]Toca-me, Se[Em]nhor
[C]Cura-me, Se[D]nhor
[G]Mão poderosa do Se[Em]nhor
[C]Alcança-me, Se[D]nhor`,
  cor047:`Tom: G

[G]Ide por todo o mundo, pregai o evan[D]gelho
[Em]A toda criatura de toda na[C]ção
[G]Ide por todo o mundo, pregai o evan[D]gelho
[Em]Levai a boa nova da salva[C]ção

[G]Ide, ide, i[D]de
[Em]Pregai o evan[C]gelho
[G]Ide, ide, i[D]de
[Em]A toda na[C]ção`,
  cor048:`Tom: G

[G]Até logo, até lo[D]go
[Em]Nos veremos no Se[C]nhor
[G]Até logo, até lo[D]go
[Em]Nos veremos no Se[C]nhor

[G]Com amor, com a[D]mor
[Em]Deus nos une no Seu a[C]mor
[G]Com amor, com a[D]mor
[Em]Deus nos une no Se[C]nhor`,
  cor049:`Tom: G

[G]Vá em paz, vá em [D]paz
[Em]Vá em paz, ir[C]mão
[G]Vá em paz, vá em [D]paz
[Em]Deus vai te abençoar

[G]Que o Senhor te guar[D]de
[Em]Que o Senhor te gui[C]e
[G]Vá em paz, vá em [D]paz
[Em]Deus vai te abençoar`,
  cor050:`Tom: D

[D]O Senhor te abençoe e te guar[A]de
[Bm]O Senhor faça resplandecer o Seu rosto sobre [G]ti
[D]O Senhor levante o Seu rosto sobre [A]ti
[Bm]E te dê a [G]paz

[D]Amém, amém, a[A]mém
[Bm]Amém, amém, a[G]mém
[D]O Senhor te abençoe
[A]E te dê a [D]paz`,
};

// ── Cifras da Harpa Cristã ──────────────────────────────────
const HARPA_CHORDS = {
  h001:`Tom: A

Verso:
[A]Deus prometeu com certeza
Chuvas de gra[E]ça enviar
[F#m]Sobre a plantação que espera
Às [D]terras que esperam a chuva do [A]cu

Coro:
[A]Chuvas, chuvas de gra[E]ça
[F#m]Chuvas de graça pedim[D]os
[A]Manda, Senhor, chuvas sobre [E]nós
[F#m]Chuvas de graça, a[A]mém`,
  h009:`Tom: G

Verso:
[G]Marchai, soldados de Cristo [D]Jesus
[Em]Marchai na fé, debaixo da [C]sua luz
[G]Eis o pendão da cruz que devemos er[D]guer
[Em]Marchemos firmes ao pós d[C]Ele sempre ir

Coro:
[G]Marchai, soldados de Cristo Je[D]sus
[Em]Marchai na fé, debaixo da Sua [C]luz`,
  h010:`Tom: C

Verso:
[C]Glória a Deus, o Pai Eter[G]no
[Am]Glória a Deus o Filho a[F]mado
[C]Glória ao Santo Consola[G]dor
[Am]Trindade Santa, Deus ado[F]rado

Coro:
[C]Eu Te Louvando Esta[G]rei
[Am]Sempre Teu nome Can[F]tarei`,
  h017:`Tom: D

Verso:
[D]Nas horas que passo pensando em [A]Jesus
[Bm]Me enche de amor celestial [G]mais e mais
[D]E quando me lembro de Seu pre[A]cioso
[Bm]Sinto que a paz do Senhor não se vai

Coro:
[D]Pensando em [A]Jesus
[Bm]Pensando em Jesus, o Rei dos [G]reis
[D]Meu coração transborda de pra[A]zer
[Bm]Pensando em Jesus, o meu a[G]mor`,
  h025:`Tom: G

Verso:
[G]Meu Jesus, Tu és [D]bom
[Em]Mais do que posso ex[C]pressar
[G]Jesus, Tu és [D]bom
[Em]Para sempre te hei de a[C]mar`,
  h029:`Tom: G

Verso:
[G]Oh! que precioso san[D]gue
[Em]De Jesus o Senhor [C]
[G]Em mim faz tão grande muda[D]nça
[Em]Me redime do peca[C]do

Coro:
[G]Pelo sangue da cru[D]z
[Em]Sou remido pelo san[C]gue
[G]Do Cordeiro Cristo Je[D]sus
[Em]Precioso san[C]gue`,
  h037:`Tom: G

Verso:
[G]Oh! que descanso em Jesus encontrei[D]
[Em]Oh! que bênção no seu amor gozei[C]
[G]Do pecado, da dor, me livrou o Senhor[D]
[Em]Cristo Jesus para mim é o meu Se[C]nhor

Coro:
[G]Cristo pra [D]mim
[Em]Oh! que Salvador[C]
[G]Cristo pra [D]mim
[Em]Precioso a[C]mor`,
  h039:`Tom: D

Verso:
[D]Bendito seja o Cordei[A]ro
[Bm]Alvo mais que a ne[G]ve
[D]O Seu precioso sangue me lim[A]pou
[Bm]Alvo mais que a ne[G]ve

Coro:
[D]Alvo mais que a neve! Alvo mais que a [A]neve!
[Bm]Lava-me, Senhor, e fica[G]rei alvo
[D]Alvo mais que a [A]neve
[Bm]Alvo mais que a ne[G]ve
[D]No sangue do Cordeiro lava[A]do
[Bm]Alvo mais que a ne[G]ve`,
  h041:`Tom: G

Verso:
[G]A Cristo coroai! Que por nós encar[D]nou
[Em]A Cristo coroai! Que nos reden[C]iu
[G]A Cristo coroai! Que no céu domi[D]na
[Em]Ao Filho Redentor, gloria, canta[C]i!

Coro:
[G]Coroa-lhe! Coroa-lhe! Coroa-lhe! Coroa-[D]lhe!
[Em]Rei do univer[C]so
[G]Coroa-lhe! Coroa-lhe! Coroa-lhe! Coroa-[D]lhe!
[Em]Rei dos rei[C]s`,
  h047:`Tom: G

Verso:
[G]Rocha eterna, meu Je[D]sus
[Em]Fico na Tua som[C]bra
[G]Não há mérito em mi[D]m
[Em]Para o teu amor cum[C]prir
Dupla cura necessito — salva-me do crime e da impureza também

Coro:
[G]Na tua rocha me a[D]briga[Em]rei
[C]Sob a Tua asa me refu[G]giarei`,
  h052:`Tom: Eb

Verso:
[Eb]Pelo amor de Deus bendi[Bb]to
[Cm]Tudo está bem, tudo está [Ab]bem
[Eb]Oh! minha alma se alegrou a[Bb]gora
[Cm]Tudo está bem, tudo está [Ab]bem

Coro:
[Eb]Tudo está bem, tudo está [Bb]bem
[Cm]Com minh'alma, tudo está [Ab]bem
[Eb]Tudo está bem, tudo está [Bb]bem
[Cm]Com minh'alma, tudo está [Ab]bem`,
  h060:`Tom: C

Verso:
[C]Vinde, cantai e entoai o canto do Se[G]nhor
[Am]Com toda a congregação clamemos com fer[F]vor
[C]Louvemos a Jesus o grande Protetor[G]
[Am]Jesus nosso bemfeitor, nosso Sal[F]vador

Coro:
[C]Me amparo em Cristo Je[G]sus
[Am]Descansando, descansando[F]
[C]No seio do Senhor Je[G]sus
[Am]Descansando, descansando, descansando no Seu a[F]mor`,
  h062:`Tom: A

Verso:
[A]Achei Jesus, achei Je[E]sus
[F#m]Oh! minha alma está feli[D]z
[A]Já todo o mal se foi por [E]Ele
[F#m]E é para mim uma ra[D]iz

Coro:
[A]Achei Je[E]sus
[F#m]Achei Jesus meu Salva[D]dor
[A]Achei Je[E]sus
[F#m]E Nele há amor e feli[D]z`,
  h069:`Tom: G

Verso:
[G]Jesus quebrou os meus grilhões[D]
[Em]Que me prendiam ao peca[C]do
[G]Hoje vivo em comunh[D]ão
[Em]Com o Senhor ressusci[C]tado

Coro:
[G]Aleluia! Glória a [D]Deus
[Em]Jesus quebrou os meus grilhões[C]
[G]Aleluia! Glória a [D]Deus
[Em]Me libertou das pris[C]ões`,
  h071:`Tom: D

Verso:
[D]Santo! Santo! Grande eterno [A]Deus
[Bm]Senhor Deus dos exérci[G]tos
[D]Toda a terra, de glória e poder Seu es[A]tá cheia
[Bm]Cheia da Tua glória, [G]ó Deus

Coro:
[D]Santo és Tu, Se[A]nhor
[Bm]Santo és Tu, Se[G]nhor
[D]Toda a terra está cheia da Tua gló[A]ria
[Bm]Santo és Tu, Se[G]nhor`,
  h079:`Tom: Bb

Verso:
[Bb]Quando me sinto fraco, não tenho mais vi[F]gor
[Gm]Clamo ao Senhor Jesus com todo o cora[Eb]ção
[Bb]Ele me diz: Minha graça te basta, não te[F]mas
[Gm]Pois o meu poder na fraqueza se aperfei[Eb]çoa

Coro:
[Bb]Sua graça me ba[F]sta
[Gm]Sua força é suficien[Eb]te
[Bb]Quando sou fraco sou for[F]te
[Gm]Pela graça do Onipo[Eb]tente`,
  h090:`Tom: G

Verso:
[G]Há paz e alegria no reino da [D]luz
[Em]Na senda que ilumina o San[C]to Deus
[G]Cada dia aqui mais e mais o amor de Cris[D]to
[Em]Enche minh'alma de celeste a[C]mor

Coro:
[G]Há paz e ale[D]gria
[Em]Há luz e salva[C]ção
[G]No reino de Je[D]sus
[Em]Há paz e ale[C]gria`,
  h099:`Tom: G

Verso:
[G]Eis o dia a declinar, as trevas v[D]êm descendo
[Em]Abide with me, perto de Ti, Se[C]nhor
[G]Quando as trevas vêm sobre [D]mim
[Em]Perto de Ti, Senhor Je[C]sus

Coro:
[G]Fica comigo, fica comi[D]go
[Em]Quando a noite vier[C]
[G]Fica comigo, fica comi[D]go
[Em]Perto de Ti quier[C]o`,
  h107:`Tom: G

Verso:
[G]Firmes nas promessas de Cristo o Se[D]nhor
[Em]Ligados Nele pelas graças de Deus[C]
[G]Nas promessas eternas que nos fez o Senho[D]r
[Em]Firmes nas promessas estare[C]mos

Coro:
[G]Firmes, firmes, firmes nas promessas de [D]Deus
[Em]Firmes, firmes, firmes nas promessas d[C]Ele
[G]Firmes nas promessas do Seu Sa[D]nto Amor
[Em]Firmes nas promessas de Cris[C]to o Senhor`,
  h118:`Tom: G

Verso:
[G]Face a face, face a face
Com meu rei adorad[D]o
[Em]Face a face com Je[C]sus
[G]Face a face, quando Jesus vi[D]er
[Em]Verei Seu rosto encanta[C]dor

Coro:
[G]Face a face verei a Je[D]sus
[Em]Na celeste Jerusa[C]lém
[G]Face a face com o Rei dos [D]reis
[Em]Face a face, verei Je[C]sus`,
  h120:`Tom: A

Verso:
[A]Noite de paz, noite de a[E]mor
[F#m]Todo o mundo em redor [D]
[A]Ouve em nosso redor a a[E]legria do Senhor
[F#m]Cristo Redentor, Cristo Salva[D]dor`,
  h141:`Tom: A

Verso:
[A]Guia-me sempre, meu Se[E]nhor
[F#m]Na jornada da vi[D]da
[A]Necessito do Teu a[E]mor
[F#m]Em toda a minha vi[D]da

Coro:
[A]Guia-me, Senhor Je[E]sus
[F#m]Em Tua graça e a[D]mor
[A]Guia-me, meu Je[E]sus
[F#m]Guia-me, meu Se[D]nhor`,
  h154:`Tom: C

Verso:
[C]Jesus! Jesus! Doce no[G]me!
[Am]Jesus! de paz e a[F]mor
[C]Jesus! Jesus! Nome su[G]blime
[Am]Jesus! glorioso Se[F]nhor

Coro:
[C]Doce no[G]me
[Am]Jesus, doce no[F]me
[C]Acima de todo ou[G]tro nome
[Am]Jesus, doce no[F]me`,
  h169:`Tom: G

Verso:
[G]Oh! Jesus me ama, sim, eu [D]sei
[Em]Porque a Bíblia assim me [C]diz
[G]Os pequeninos Nele têm [D]abrigo
[Em]A todos Ele faz feli[C]z

Coro:
[G]Sim, Jesus me a[D]ma
[Em]Sim, Jesus me a[C]ma
[G]Sim, Jesus me a[D]ma
[Em]A Bíblia assim me diz`,
  h183:`Tom: G

Verso:
[G]Ressuscitou! Ressuscitou!
E morte e túmulo ven[D]ceu
[Em]Ressuscitou! Ressuscitou!
O Filho de Deus v[C]enceu

Coro:
[G]Aleluia! Cristo ressusci[D]tou!
[Em]Vitória! Vitória! O Salvador tri[C]unfou!
[G]Aleluia! Aleluia!
[D]Venceu a morte e o tumulo venceu [Em]Ele
[C]Ressuscitou, ressusci[G]tou!`,
  h187:`Tom: G

Verso:
[G]Mais perto, meu Deus, de Ti!
Mais perto de [D]Ti!
[Em]Ainda que a cruz seja minha por[C]ção
[G]Mais perto, meu Deus, de [D]Ti
[Em]Mais perto de [C]Ti

Coro:
[G]Mais perto, meu Deus, de [D]Ti
[Em]Mais perto de [C]Ti
[G]Esta é a minha ora[D]ção
[Em]Mais perto de [C]Ti`,
  h205:`Tom: G

Verso:
[G]Graça, graça, Deus dá gra[D]ça
[Em]Graça que flui para sal[C]var
[G]Oh! graça maravilhosa e livre
[D]Graça que supera o peca[Em]do

Coro:
[G]Graça, graça, Deus dá gra[D]ça
[Em]Graça que flui para sal[C]var
[G]Graça, graça, infinita gra[D]ça
[Em]Graça de Deus para todo pe[C]cador`,
  h227:`Tom: D

Verso:
[D]Deus amou de tal maneira este mundo peca[A]dor
[Bm]Que entregou o Seu Filho único por a[G]mor
[D]Todo aquele que N'Ele crer não perece[A]rá
[Bm]Mas a vida eterna ele rece[G]berá

Coro:
[D]Deus amou, Deus a[A]mou
[Bm]De tal maneira Deus a[G]mou
[D]Que entregou Seu Filho único por n[A]ós
[Bm]Deus amou, Deus a[G]mou`,
  h240:`Tom: G

Verso:
[G]Oh dia alegre! Oh que dia de a[D]legria
[Em]Quando a Jesus eu entronizei!
[C]Oh dia a[G]legre! Oh dia de a[D]legria
[Em]Quando a Jesus eu entronizei[C]!

Coro:
[G]Cantai, cantai, canta[D]i, cantai
[Em]Minha alma se alegrou no [C]Senhor
[G]Cantai, cantai, canta[D]i, cantai
[Em]Minha alma se alegrou no Se[C]nhor`,
  h243:`Tom: G

[G]Ao abrir o culto, eis-nos a[D]qui
[Em]Reunidos em Teu nome, Se[C]nhor
[G]Vem, Senhor Jesus, visitar-nos ho[D]je
[Em]Abençoa a nós, Senhor Je[C]sus`,
  h254:`Tom: A

Verso:
[A]Mais perto de Jesus, procuro sempre eu che[E]gar
[F#m]Mais perto, mais perto, só quero andar[D]
[A]Mais perto de Jesus, é meu maior pra[E]zer
[F#m]Mais perto de Jesus, quero sem[D]pre ser

Coro:
[A]Mais perto, mais perto, mais perto de [E]Ti
[F#m]Mais perto, mais perto, junto de [D]Ti
[A]Mais perto de Jesus, é o meu maior pra[E]zer
[F#m]Mais perto de Jesus quero sem[D]pre ser`,
  h263:`Tom: G

[G]Ao fim do culto, vamos ao Se[D]nhor
[Em]Que abençoe a cada um com o Seu a[C]mor
[G]Vai em paz, vai em paz, filho de [D]Deus
[Em]O Senhor está contigo em todos os cam[C]inhos`,
  h296:`Tom: G

Verso:
[G]Eu moro no jardim com Jesus meu Se[D]nhor
[Em]Dentro da silêncio da manhã
[G]E a voz que eu ouço, enquanto o orvalho se vai
[D]É o Filho de Deus que me fa[Em]la

Coro:
[G]Ele anda comigo, Ele fala comi[D]go
[Em]Me diz que sou Seu
[C]E o prazer que desfrutamos
[G]Enquanto ali [D]estamos
[Em]Nenhum outro jamais conhe[C]ceu`,
  h308:`Tom: G

Verso:
[G]Só o sangue de Jesus me [D]salva
[Em]Só o sangue de Jesus me [C]cura
[G]Só o sangue de Jesus me [D]limpa
[Em]O sangue de Jesus me [C]salva

Coro:
[G]Há um poder maravi[D]lhoso
[Em]No sangue do Cordei[C]ro
[G]Há um poder maravi[D]lhoso
[Em]No sangue de Je[C]sus`,
  h345:`Tom: G

Verso:
[G]Oh! tenho gozo, tenho gozo
No meu coração do [D]Senhor
[Em]Oh! tenho gozo, tenho gozo
Uma fonte de a[C]mor

Coro:
[G]Oh, gozo, gozo, go[D]zo
[Em]No meu coração do Se[C]nhor
[G]Oh, gozo, gozo, go[D]zo
[Em]Uma fonte de a[C]mor`,
  h364:`Tom: G

Verso:
[G]Oh, que paz! Que dom ines[D]timável
[Em]Paz que Deus me dá por Seu a[C]mor
[G]Oh, que paz! Que dom ines[D]timável
[Em]Paz de Deus que vem do Salva[C]dor

Coro:
[G]Oh, que [D]paz!
[Em]Que paz divina tenho eu em Je[C]sus
[G]Oh, que [D]paz!
[Em]Que Jesus me dá com o Seu a[C]mor`,
  h369:`Tom: G

Verso:
[G]Sob as asas de Deus vivo a[D]qui
[Em]Seus cuidados a mim envolve[C]ram
[G]Na tormenta com fé clamo a E[D]le
[Em]E Ele me livra do ma[C]l

Coro:
[G]Sob as asas de [D]Deus
[Em]Estou seguro a[C]qui
[G]Sob as asas de [D]Deus
[Em]Seguro estou eu a[C]qui`,
  h395:`Tom: Bb

Verso:
[Bb]Ide por todo o mundo, pregai o evan[F]gelho
[Gm]A toda criatura de toda na[Eb]ção
[Bb]Ide por todo o mundo, pregai o evan[F]gelho
[Gm]Pregai, pregai a salva[Eb]ção

Coro:
[Bb]Ide, ide, ide por todo o mun[F]do
[Gm]A toda criatura o evangelho preg[Eb]ai
[Bb]Ide, ide, ide por todo o mun[F]do
[Gm]Pregai, pregai, prega[Eb]i`,
  h408:`Tom: Fm

Verso:
[F]Abre os meus olhos, ó Je[C]sus
[Dm]Para eu Te ver Senhor[Bb]
[F]Toca os meus olhos, ó Je[C]sus
[Dm]Para eu ver o Teu a[Bb]mor

Coro:
[F]Abre os meus olhos, Se[C]nhor
[Dm]Abre os meus olhos para Te[Bb]ver
[F]Abre os meus olhos, Se[C]nhor
[Dm]Para a Tua glória eu po[Bb]der ver`,
  h427:`Tom: G

Verso:
[G]Vai orando, vai orando
Não te canses de ora[D]r
[Em]O Senhor nos tem prometido
Que vai sempre nos ouvi[C]r

Coro:
[G]Vai orando, vai oran[D]do
[Em]Não te canses de ora[C]r
[G]Deus te ouve, Deus te a[D]ma
[Em]Vai orando e confiar[C]`,
  h432:`Tom: C

Verso:
[C]Consagrado ao Senhor Jesus, vou segui-[G]Lo
[Am]Em todo o meu proceder e no meu a[F]mar
[C]Consagrado ao Salvador, vou segui-[G]Lo
[Am]Em santidade e na fe irei cami[F]nhar

Coro:
[C]Consagrado, consagra[G]do
[Am]Consagrado ao Senho[F]r
[C]Consagrado, consagra[G]do
[Am]Consagrado ao Salva[F]dor`,
  h460:`Tom: G

Verso:
[G]Dize-o a Cristo tudo que tens
Tudo que és, tudo que[D]
[Em]Dize-o a Cristo tudo que tens
Tudo o que te faz sofrer[C]

Coro:
[G]Dize-o a Cris[D]to
[Em]Dize tudo a Ele falar[C]
[G]Dize-o a Cris[D]to
[Em]Ele te pode aju[C]dar`,
  h474:`Tom: Am

Verso:
[A]Paz, doce paz, dom sublime de [E]Deus
[F#m]Em meu coração transbordando es[D]tá
[A]Paz, doce paz, que desceu lá dos céus[E]
[F#m]Desta doce paz posso a todos fala[D]r

Coro:
[A]Paz, doce pa[E]z
[F#m]Paz que excede todo enten[D]der
[A]Paz, doce pa[E]z
[F#m]No coração de quem ama a Je[D]sus`,
  h491:`Tom: G

Verso:
[G]Há poder, há poder, poder maravi[D]lhoso
[Em]No sangue do Cordeiro do Se[C]nhor
[G]Há poder, há poder, milagroso, pode[D]roso
[Em]No precioso sangue do Senho[C]r

Coro:
[G]Há poder, poder, maravi[D]lhoso poder
[Em]No sangue do Cordeiro do Se[C]nhor
[G]Há poder, poder, maravi[D]lhoso poder
[Em]No precioso sangue do Senho[C]r`,
  h507:`Tom: Db

Verso:
[Db]Jesus salva! Jesus salva!
Proclamai em todo lu[Ab]gar
[Bbm]Jesus salva! Jesus salva!
Fazei este grito soa[Gb]r

Coro:
[Db]Jesus salva, Jesus salva!
[Ab]Jesus salva, Jesus sal[Bbm]va!
[Gb]Jesus salva, Jesus [Db]salva!
Proclamai em todo lu[Ab]gar`,
  h526:`Tom: G

Verso:
[G]Senhor, meu Deus, ao contemplar os céus[D]
[Em]O firmamento e as estrel[C]as mil
[G]Ao ouvir Teu trovão, o poderos[D]o mar
[Em]Minha alma canta a Ti, ó [C]Deus

Coro:
[G]Como é grande o meu [D]Deus
[Em]Cantarei com fervor[C]
[G]Como é grande o meu [D]Deus
[Em]E ecoará em meu cora[C]ção`,
  h537:`Tom: G

Verso:
[G]Sempre comigo Jesus prometeu es[D]tar
[Em]Nunca me deixar, nunca me abandonar[C]
[G]Guiando-me com Sua mão pode[D]rosa
[Em]Sempre comigo, sempre conosco, meu Je[C]sus

Coro:
[G]Sempre comi[D]go
[Em]Jesus prometeu ficar[C]
[G]Sempre comi[D]go
[Em]Nunca me abandonar[C]`,
  h545:`Tom: C

Verso:
[C]Deus enviou Seu Filho, amado e bom
Para morrer, e eu vou vi[G]ver
[Am]Porque Ele vive, posso a[F]nhelar
[C]Amanhã por causa Dele vi[G]verei

Coro:
[C]Porque Ele vi[G]ve
[Am]Posso encarar o ama[F]nhã
[C]Porque Ele vi[G]ve
[Am]Todo o medo se foi para trás
Sei que segura o futuro[F]
[C]E a vida vale a pe[G]na viver
Porque Ele [Am]vive`,
  h563:`Tom: G

Verso:
[G]Sempre feliz, sim, sempre feliz
No amor de Jesus viver[D]
[Em]Sempre feliz, sim, sempre feliz
Amado por Ele ser[C]

Coro:
[G]Sempre fe[D]liz
[Em]No amor de Jesus vi[C]ver
[G]Sempre fe[D]liz
[Em]Amado por Ele ser[C]`,
  h564:`Tom: Eb

Verso:
[Eb]Conta as bênçãos, nomeia-as uma a u[Bb]ma
[Cm]Conta as bênçãos, verás o que Deus fez[Ab]
[Eb]Conta as bênçãos, nomeia-as uma a u[Bb]ma
[Cm]Conta as bênçãos de Deus outra ve[Ab]z

Coro:
[Eb]Conta as bênçãos, nomeia-as uma a u[Bb]ma
[Cm]Conta as bênçãos, verás o que Deus fez[Ab]
[Eb]Conta as bênçãos, nomeia-as uma a u[Bb]ma
[Cm]Conta as bênçãos de Deus outra ve[Ab]z`,
  h567:`Tom: G

Verso:
[G]Sou feliz porque Deus me li[D]vrou
[Em]Do caminho do mal e do peca[C]do
[G]Sou feliz porque Deus me sal[D]vou
[Em]E me deu um lugar abençoa[C]do

Coro:
[G]Sou fe[D]liz
[Em]No amor de Jesus[C]
[G]Sou fe[D]liz
[Em]No caminho da cru[C]z`,
  h576:`Tom: G

Verso:
[G]Assim como estou, sem nada a[D]durir
[Em]Porque o Teu sangue por mim fluiu[C]
[G]E Tua chamada me faz defi[D]nir
[Em]A Ti me entrego, ó Deus, a [C]Ti

Coro:
[G]Assim como es[D]tou
[Em]A Ti venho, Se[C]nhor
[G]Assim como es[D]tou
[Em]Aceita-me, Senhor Je[C]sus`,
  h581:`Tom: G

Verso:
[G]Castelo forte é nosso Deus
Escudo e bom amparo[D]
[Em]Com Seu poder nos livra a Deus
Na luta é nosso paro[C]

Coro:
[G]Um forte auxílio sem par
[D]Nosso Deus que pode ajudar[Em]
[C]Castelo forte é nosso Deus
[G]E nos salva do mal`,
  h596:`Tom: G

Verso:
[G]Obrigado, Senhor, por Teu a[D]mor
[Em]Obrigado por Tua graça e favor[C]
[G]Obrigado pelas bênçãos que envias[D]
[Em]Em cada amanhecer de novos di[C]as

Coro:
[G]Gratidd[D]ão
[Em]Gratidão ao Senho[C]r
[G]Gratidd[D]ão
[Em]Glória e louvor ao Cria[C]dor`,
  h606:`Tom: G

Verso:
[G]Triunfo, triunfo, em Cristo Jesus
Tenho a vitória pelo San[D]gue
[Em]Triunfo, triunfo, triunfo em Jesus
Venci pelo San[C]gue da Cruz

Coro:
[G]Triunfo, triun[D]fo
[Em]Em Cristo Jesus triun[C]fo
[G]Triunfo, triun[D]fo
[Em]Pela fé em Je[C]sus`,
  h610:`Tom: G

Verso:
[G]A fé é a vitória que ven[D]ce
O mundo e toda a sua ilusão[Em]
[C]A fé é a vitória, sim, ven[G]ce
Em Jesus há sa[D]lvação

Coro:
[G]Fé é a vitó[D]ria
[Em]Fé é a vitória que ven[C]ce
[G]Fé é a vitó[D]ria
[Em]Jesus é o nosso campe[C]ão`,
  h638:`Tom: G

[G]Ouviram do Ipiranga as margens plácidas
De um povo [D]heróico o brado reten[Em]te
[C]E o sol da liberdade, em raios fúlgidos,
Brilhou no [G]céu da pátria nesse ins[D]tante

[G]Se o penhor dessa igualdade conseguimos
Conquistar [D]com braço forte[Em]
[C]Em teu seio, ó liberdade,
Desafia o nosso peito a própria [G]morte!

Coro:
[G]Pátria amada, Brasil!
Pátria amada, Bra[D]sil!
[Em]Salve! Salve![C]
[G]Brasil, um sonho intenso, um raio vívido,
De amor e de [D]esperança à terra [Em]desce,
[C]Se em teu formoso céu, risonho e lím[G]pido,
A imagem do Cruzeiro res[D]plende`,
  h002:`Tom: C

Verso:
[C]Oh! que saudosa [G]lembrança
[Am]Tenho de ti, ó [F]Sião,
[C]Terra que eu tanto [G]amo,
[Am]Pois és do meu [F]coração.
[C]Eu para ti voarei,
[Am]Quando o Senhor meu [F]voltar;
[C]Pois Ele foi para o [G]céu,
[Am]E breve vem me [F]buscar.

Coro:
[C]Sim, eu porfiarei por essa terra de [G]além;
[Am]E lá terminarei as muitas lutas de [F]aquém;
[C]Lá está meu bom Senhor, ao qual eu desejo [G]ver;
[Am]Ele é tudo p’ra mim, e sem Ele não posso [F]viver.`,
  h003:`Tom: D

Verso:
[D]Plena paz e santo [A]gozo,
[Bm]Tenho em ti, ó meu [G]Jesus!
[D]Pois eu cri em Tua morte sobre a [A]cruz;
[Bm]No Senhor só [G]confiando
[D]Neste mundo [A]viverei,
[Bm]Entoando aleluias ao meu [G]Rei!

Coro:
[D]Oh! glória ao meu [A]Jesus!
[Bm]Pois é digno de [G]louvor;
[D]É meu Rei, meu bom [A]Pastor,
[Bm]E meu Senhor.
[D]Como os anjos, que O [A]louvam,
[Bm]Eu também O [G]louvarei,
[D]Entoando aleluias ao meu [A]Rei!`,
  h004:`Tom: G

Verso:
[G]Não desanimes, Deus [D]proverá;
[Em]Deus velará por ti;
[G]Sob Suas asas te [D]acolherá;
[Em]Deus velará por ti.

Coro:
[G]Deus cuidará de ti
[Em]No teu viver, no teu [C]sofrer;
[G]Seu olhar te [D]acompanhará;
[Em]Deus velará por ti.`,
  h005:`Tom: G

Verso:
[G]Espírito, alma e [D]corpo,
[Em]Oferto a Ti, [C]Senhor,
[G]Como hóstia [D]verdadeira,
[Em]Em oblação de amor.

Coro:
[G]Eu tudo a Deus [D]consagro
[Em]Em Cristo, o vivo [C]altar;
[G]Ó desce, fogo [D]santo,
[Em]Do céu vem tu [C]selar!`,
  h006:`Tom: D

Verso:
[D]Tu. na maldição da [A]cruz,
[Bm]Elevaste o Teu [G]amor,
[D]Em rogar, Senhor [A]Jesus:
[Bm]“Pai, perdoa ao [G]transgressor".

Coro:
[D]Queres, queres, com [A]vigor,
[Bm]Muitas almas [G]despertar;
[D]Queres, queres, ó [A]Senhor!
[Bm]Transformar, remir, [G]curar;
[D]Oh! Sim! Oh! Sim!
[Bm]Queres todos [G]renovar.`,
  h007:`Tom: G

Verso:
[G]Contra os males deste [D]mundo,
[Em]Deus nos vale só;
[G]Não há mal que Deus não [D]cure,
[Em]Pois de nós tem dó.

Coro:
[G]Cristo cura, sim,
[Em]Cristo cura, sim.
[G]Seu amor por nós é [D]Imenso;
[Em]Ele cura, sim!`,
  h008:`Tom: G

Verso:
[G]Cristo Jesus é fiel [D]amigo,
[Em]Ele só, Ele só.
[G]E nas fraquezas está [D]comigo,
[Em]Ele só, Ele só.

Coro:
[G]E nas lutas de cada [D]dia,
[Em]Cristo nunca me deixa [C]só;
[G]Pois Ele é meu seguro [D]guia,
[Em]Ele só, Ele só.`,
  h011:`Tom: C

Verso:
[C]Ó Cristãos, eia avante, eia [G]avante!
[Am]Por Jesus e Sua Igreja a [F]lutar;
[C]Co'a Palavra, essa espada [G]flamante,
[Am]Vamos, vamos, irmãos, [F]pelejar.

Coro:
[C]Ó Cristão, sempre avante na [G]lida!
[Am]O Evangelho com fé a [F]pregar;
[C]Ao trabalho o Senhor nos [G]convida,
[Am]Vamos, pois, com Jesus [F]pelejar.`,
  h012:`Tom: G

Verso:
[G]Pecador, vê a luz, brilha para [D]ti,
[Em]Lá da cruz do [C]Salvador,
[G]Onde a vida deu;
[Em]e do lado Seu Corre sangue [C]redentor.

Coro:
[G]Ó vem Já, como [D]estás!
[Em]Vem agora, ao [C]Salvador;
[G]Sua vida deu, tudo [D]padeceu;
[Em]Não demores! Vem Já, [C]pecador!`,
  h013:`Tom: G

Verso:
[G]Jesus comprou-me do mundo [D]aqui,
[Em]Palavras doces são para [C]mim;
[G]Jesus comprou-me e vai me [D]dar
[Em]Eterno gozo, celeste [C]lar.
[G]Jesus comprou-me e vai me [D]dar
[Em]Eterno gozo, celeste [C]lar.`,
  h014:`Tom: Ab

Verso:
[Ab]Oh! que gozo sinto em [Eb]Jesus,
[Fm]Que por mim expirou na [Db]cruz;
[Ab]A minh’alma deu divina [Eb]luz,
[Fm]Glória a meu Jesus!

Coro:
[Ab]Quanta glória vejo em [Eb]Jesus,
[Fm]Gozo santo e bendita [Db]luz,
[Ab]Cujos raios brilham lá na [Eb]cruz,
[Fm]Na qual ,morreu [Db]Jesus.
[Ab]Sempre avante quero eu [Eb]andar,
[Fm]Té no céu chegar.`,
  h015:`Tom: F

Verso:
[F]Oh! quão cego andei e perdido [C]vaguei,
[Dm]Longe, longe do meu [Bb]Salvador!
[F]Mas do céu Ele desceu, e Seu sangue [C]verteu
[Dm]Pra salvar um tão pobre [Bb]pecador.

Coro:
[F]Foi na cruz, foi na [C]cruz,
[Dm]onde um dia eu vi
[F]Meu pecado castigado em [C]Jesus;
[Dm]Foi ali, pela fé, que os olhos [Bb]abri,
[F]E agora me alegro em Sua [C]luz`,
  h016:`Tom: G

Verso:
[G]Posso tendo as mãos [D]vazias,
[Em]Com Jesus eu me [C]encontrar?
[G]Nada fiz, e vão-se os [D]dias,
[Em]Que Lhe posso [C]apresentar?

Coro:
[G]Posso tendo as mãos [D]vazias,
[Em]Com Jesus, eu me [C]encontrar?
[G]Quantas almas [D]poderia
[Em]Ao Senhor [C]apresentar?`,
  h018:`Tom: F

Verso:
[F]Grata nova Deus [C]proclama
[Dm]Hoje, ao mundo [Bb]pecador!
[F]Doce nova revelada,
[Dm]Lá na cruz do [Bb]Salvador;
[F]Cego e desviado, o [C]homem,
[Dm]Dos caminhos do [Bb]Senhor,
[F]Desconhece e [C]desconfia
[Dm]Deste Deus, o Deus de [Bb]amor.

Coro:
[F]Grata nova, doce [C]nova,
[Dm]Vem dos lábios do [Bb]Senhor;
[F]Escutai com [C]alegria:
[Dm]“Deus é luz, Deus é [Bb]amor”.`,
  h019:`Tom: G

Verso:
[G]Eis, a voz de Cristo [D]clama,
[Em]Sobre o revoltoso [C]mar
[G]Desta vida [D]perigosa:
[Em]"Vinde em Mim vos [C]abrigar".`,
  h020:`Tom: G

Verso:
[G]Livres de pecado vós quereis [D]ficar?
[Em]Olhai p'ra o Cordeiro de [C]Deus!
[G]Ele morto foi na cruz, p'ra vos [D]salvar;
[Em]Olhai p'ra o Cordeiro de [C]Deus!

Coro:
[G]Olhai p’ra o Cordeiro de [D]Deus,
[Em]Olhai p’ra o cordeiro de [C]Deus,
[G]Porque só Ele vos pode [D]salvar.
[Em]Olhai p’ra o Cordeiro de [C]Deus!`,
  h021:`Tom: D

Verso:
[D]A gloriosa aurora [A]vem,
[Bm]Do dia em que lá em [G]Belém
[D]Nasceu de Deus, o [A]Filho;
[Bm]Que belo dia e de [G]luz,
[D]No qual p'ra nós desceu [A]Jesus,
[Bm]Do céu mostrando o [G]trilho.
[D]Quantos santos hoje [A]lembram,
[Bm]E relembram a [G]história
[D]De Jesus, o Rei da [A]Glória!`,
  h022:`Tom: F

Verso:
[F]Em nossa alma nós [C]tomamos.
[Dm]O Teu corpo, ó [Bb]Jesus!
[F]Como oferta [C]voluntária,
[Dm]Que nos deste lá na [Bb]cruz.

Coro:
[F]Como pão do céu [C]desceste,
[Dm]Vamos a Ti receber;
[F]Pois unidos ao Teu [C]corpo,
[Dm]Nós queremos, sim, [Bb]viver.`,
  h023:`Tom: G

Verso:
[G]Cantam os santos com [D]fervor,
[Em]A quem por mim foi [C]imolado,
[G]Na cruz, sofrendo o meu [D]pecado.

Coro:
[G]Glória a Jesus!
[Em]Glória a Jesus!
[G]Glória a Jesus, o [D]Salvador!`,
  h024:`Tom: G

Verso:
[G]No Pentecostes [D]sucedeu
[Em]O que Jesus falou,
[G]Pois de repente lá do [D]céu
[Em]Um vento assoprou,
[G]Que veio a casa toda [D]encher
[Em]E os corações com mui [C]poder.

Coro:
[G]Poder, poder, poder [D]pentecostal.
[Em]Ó vem nos Inflamar,
[G]Também nos renovar;
[Em]Ó vem, sim, vem, ó chama [C]divinal,
[G]Teus servos [D]batizar.`,
  h027:`Tom: Fm

Verso:
[F]Amor, que por amor [C]desceste!
[Dm]Amor, que por amor [Bb]morreste!
[F]Ah! quanta dor não [C]padeceste,
[Dm]Meu coração p'ra [Bb]conquistar,
[F]E meu amor ganhar!`,
  h028:`Tom: G

Verso:
[G]Andas carregado de tristeza e [D]dor,
[Em]Sem nenhum auxílio, nem um [C]Salvador?
[G]Ouve a mensagem de teu bom [D]Jesus,
[Em]E tem mais coragem, leva a tua [C]cruz.

Coro:
[G]Deus vai te guiar com Sua forte [D]mão;
[Em]Podes descansar na [C]tribulação;
[G]Seja tua vida livre de [D]pesar;
[Em]Em tristeza e lida Deus vai te [C]guiar.`,
  h030:`Tom: G

Verso:
[G]Não sou meu! Por Cristo [D]salvo,
[Em]Que por mim morreu na [C]cruz,
[G]Eu confesso [D]alegremente,
[Em]Que pertenço ao bom [C]Jesus.

Coro:
[G]Não sou meu! Oh! Não sou [D]meu!
[Em]Bom Jesus, sou todo [C]Teu!
[G]Hoje mesmo e para [D]sempre,
[Em]Bom Jesus, sou todo [C]Teu!`,
  h031:`Tom: G

Verso:
[G]Por mim sofreu o [D]Salvador,
[Em]Glória! Glória ao meu [C]Jesus!
[G]Louvai, comigo, ao [D]Redentor!
[Em]Glória! Glória ao meu [C]Jesus!

Coro:
[G]Jesus! Jesus! Ó [D]Salvador;
[Em]É doce o nome do [C]Senhor;
[G]Abrasa -me com santo [D]amor;
[Em]Glória! Glória ao meu [C]Senhor.`,
  h032:`Tom: G

Verso:
[G]Quem do céu por mim [D]desceu,
[Em]Tudo em meu lugar [C]sofreu,
[G]E por mim na cruz [D]morreu?
[Em]Foi Cristo! Foi [C]Cristo!

Coro:
[G]Os meus pecados [D]expiou:
[Em]De toda a pena me [C]livrou!
[G]Da maldição me [D]resgatou,
[Em]Meu Cristo! Meu [C]Cristo!`,
  h033:`Tom: F

Verso:
[F]Com Tua mão, segura bem a [C]minha,
[Dm]Pois eu tão fraco sou, ó [Bb]Salvador!
[F]Que não me atrevo a dar nem um só [C]passo
[Dm]Sem Teu amparo, meu Jesus [Bb]Senhor!`,
  h034:`Tom: E

Verso:
[E]Milhares de milhares em refulgente [B]luz!
[C#m]Eis os guerreiros santos, milícia de [A]Jesus!
[E]Completa, sim, completa sua longa luta [B]aqui,
[C#m]Com Cristo, seu Senhora Rei, vão descansar [A]ali;`,
  h035:`Tom: G

Verso:
[G]O grande amor de meu [D]Jesus
[Em]Por mim morrendo sobre a [C]cruz,
[G]Da perdição, pra me [D]salvar;
[Em]Quem poderá contar?

Coro:
[G]Quem pode o Seu amor [D]contar?
[Em]Quem pode o Seu amor [C]contar?
[G]O grande amor do [D]Salvador,
[Em]Quem poderá contar?`,
  h038:`Tom: D

Verso:
[D]Proclamei a todo o mundo que o Senhor é [A]Rei!
[Bm]Proclamai! Proclamai!
[D]Proclamei que suave e doce é Sua santa [A]lei!
[Bm]Proclamai! Proclamai!
[D]Proclamai como Ele se chama Salvador [A]Jesus,
[Bm]Como Ele por nós morreu na ensangüentada [G]cruz,
[D]Como Ele - o Cordeiro - sobre o trono [A]está
[Bm]O Deus de toda graça, que de graça tudo [G]dá.

Coro:
[D]Proclama! a todo o [A]mundo
[Bm]que o Senhor é Rei!
[D]Proclamai! Proclamai!
[Bm]Proclama! que suave e [G]doce
[D]é Sua santa lei!
[Bm]Proclamai! Proclamai!`,
  h040:`Tom: G

Verso:
[G]Que se diz dos teus [D]encantos,
[Em]Ó cidade do bom [C]Deus!
[G]Que soberba te [D]levantas
[Em]Entre as glórias desses [C]céus,
[G]Desde o mundo [D]preparada
[Em]Para Cristo e para os [C]Seus.`,
  h042:`Tom: Ab

Verso:
[Ab]Saudai o nome de [Eb]Jesus!
[Fm]Arcanjos, vos [Db]prostrai;
[Ab]Arcanjos, vos [Eb]prostrai;
[Fm]Ao Filho do eterno [Db]Deus,
[Ab]Com glória, glória,
[Fm]Glória, glória,
[Ab]Com glória, coroai!`,
  h043:`Tom: Eb

Verso:
[Eb]Na pátria celeste, de Deus o doce [Bb]lar,
[Cm]Prepara Jesus, para os Seus, um [Ab]lugar,
[Eb]Pois longe do mal, do pecado e da [Bb]dor,
[Cm]Consigo p'ra sempre os quer ter seu [Ab]Senhor.

Coro:
[Eb]Oh! Doce, doce lar!
[Cm]Ali, com Jesus, vou para sempre [Ab]descansar`,
  h044:`Tom: D

Verso:
[D]Meu Senhor, que me [A]salvaste,
[Bm]Teu, e Teu somente, eu [G]sou;
[D]Com Teu sangue me [A]saraste;
[Bm]Glória, glória a Ti Te [G]dou.

Coro:
[D]Oh! Que glória! Oh! Que [A]glória!
[Bm]Gozo em meu [G]coração!
[D]Eu confio em Jesus,
[Bm]E, crendo, tenho [G]salvação.
[D]Oh! Que glória! Oh! Que [A]glória!
[Bm]Gozo em meu [G]coração!
[D]Eu confio em Jesus,
[Bm]E em Seu sangue achei [G]perdão.`,
  h045:`Tom: C

Verso:
[C]Redentor onipotente,
[Am]Poderoso Salvador,
[C]Advogado onisciente
[Am]É Jesus, meu bom [F]Senhor.

Coro:
[C]Ó Amante da [G]minh’alma,
[Am]Tu és tudo para [F]mim!
[C]Tudo quanto eu [G]careço
[Am]Acho, Jesus, só em [F]Ti.`,
  h046:`Tom: G

Verso:
[G]Um pendão real vos entregou o [D]Rei
[Em]A vós, soldados [C]Seus;
[G]Corajosos, pois, em tudo o [D]defendei,
[Em]Marchando para os [C]céus.

Coro:
[G]Com valor! Sem [D]temor!
[Em]Por Cristo prontos a [C]sofrer!
[G]Bem alto erguei o Seu [D]pendão,
[Em]Firmes sempre, até [C]morrer!`,
  h048:`Tom: G

Verso:
[G]Quando lá do céu [D]descendo,
[Em]para os Seus, Jesus [C]voltar,
[G]E o clarim de Deus a todos [D]proclamar,
[Em]Que chegou o grande dia do triunfar do meu [C]Rei,
[G]Eu, por Sua imensa graça, lá [D]estarei.

Coro:
[G]Quando enfim, chegar o [D]dia
[Em]Do triunfar do meu [C]Rei,
[G]Quando enfim, chegar o [D]dia,
[Em]Pela graça de Jesus eu lá [C]estarei!`,
  h049:`Tom: G

Verso:
[G]Deus tem prometido a salvação [D]dar.
[Em]A quem em Seu Filho Jesus [C]confiar.

Coro:
[G]Aleluia! Já creio em Cr!sto [D]Jesus.
[Em]E salvo já estou, pelo sangue da [C]cruz!`,
  h050:`Tom: Ab

Verso:
[Ab]Sempre fiéis, sim, a Ti, nós [Eb]seremos,
[Fm]Por Tua graça, ó Cristo, [Db]Senhor!
[Ab]Sempre fiéis, sim, por Ti [Eb]lutaremos.
[Fm]Sob Teu pendão, ó Jesus, [Db]Salvador!

Coro:
[Ab]Sempre fiéis, irmãos! Irmãos [Eb]sejamos.
[Fm]Sempre fiéis a Cristo [Db]Jesus.
[Ab]Que até à morte, por nós [Eb]prosseguiu,
[Fm]E libertou-nos, morrendo na [Db]cruz!`,
  h051:`Tom: D

Verso:
[D]Ó minh'alma, sem [A]demora,
[Bm]Ergue-te para [G]entoar,
[D]Os louvores do teu [A]Cristo,
[Bm]E Seu nome [G]celebrar!
[D]P'ra remir-te, p'ra [A]remir-te,
[Bm]Sua vida Ele quis [G]dar!`,
  h053:`Tom: G

Verso:
[G]Até que volte o [D]Salvador,
[Em]Cercando a mesa do [C]Senhor,
[G]A Ceia vimos [D]celebrar,
[Em]De Cristo, a morte [C]anunciar,
[G]E com humilde [D]devoção,
[Em]Render a Deus [C]adoração.`,
  h054:`Tom: G

Verso:
[G]Minh’alma, louva ao [D]Redentor
[Em]Jesus, teu Rei, teu [C]Salvador,
[G]Que sobre a cruz, em teu [D]lugar,
[Em]Seu sangue deu p'ra te [C]salvar!

Coro:
[G]Sim, sobre a cruz, em meu [D]lugar,
[Em]Jesus morreu p’ra me [C]salvar!
[G]Salvo e seguro nEle [D]estou,
[Em]Pois com Seu sangue me [C]livrou.`,
  h055:`Tom: D

Verso:
[D]Meu Senhor, sou Teu - Tua voz [A]ouvi
[Bm]A chamar-me, com [G]amor;
[D]Mais, de Ti, mais perto eu quero [A]estar,
[Bm]Ó bendito Salvador!

Coro:
[D]Mais perto, perto da Tua [A]cruz
[Bm]Quero estar, ó [G]Salvador!
[D]Mais perto, perto, perto da Tua [A]cruz
[Bm]Leva-me, ó meu [G]Senhor!`,
  h056:`Tom: D

Verso:
[D]Dantes, trabalhava sempre com [A]temor,
[Bm]Mas descanso, agora em meu [G]Salvador;
[D]Dantes "esperava"; hoje, “bem o [A]sei”
[Bm]Que estou salvo em Cristo, meu bendito [G]Rei.

Coro:
[D]Tudo! Tudo em [A]Cristo’
[Bm]Que por mim morreu.
[D]Tudo! Tudo em [A]Cristo!
[Bm]Cristo é todo meu.`,
  h057:`Tom: Ab

Verso:
[Ab]Deus presente está [Eb]conosco.
[Fm]Pronto todos a [Db]salvar;
[Ab]Sobre as almas [Eb]sequiosas,
[Fm]Quer Sua bênção [Db]derramar.

Coro:
[Ab]Manda, ó manda as ricas [Eb]chuvas
[Fm]Da Tua bênção, [Db]Salvador!
[Ab]Imploramos! Esperamos!
[Fm]Viviflca-nos, Senhor!`,
  h058:`Tom: C

Verso:
[C]“Não temas! Contigo, Eu sempre [G]estarei!
[Am]Oh! rica promessa do bondoso [F]Rei;
[C]Qual estrela que brilha, lá na [G]escuridão,
[Am]Esta linda promessa brilha no meu [F]coração.

Coro:
[C]Comigo estar! Comigo [G]estar!
[Am]Sim, Jesus me [F]promete,
[C]Sempre comigo [G]estar.
[Am]Comigo estar! Comigo [F]estar!
[C]Sim, Jesus me [G]promete,
[Am]Sempre comigo [F]estar.`,
  h059:`Tom: G

Verso:
[G]Te conhecer o amor sem [D]fim,
[Em]Um pecador fui eu;
[G]Em o meu pensar não houve [D]lugar
[Em]Para Cristo e o [C]céu.

Coro:
[G]Eu creio, sim, Já creio, [D]sim,
[Em]Jesus morreu por [C]mim;
[G]Pelo sangue Seu, que Ele [D]verteu,
[Em]Libertado fui por [C]fim.`,
  h061:`Tom: G

Verso:
[G]Em todo o tempo, irmão, o [D]Senhor
[Em]Tomará conta de ti.
[G]Cristo, que fala de vida e [D]amor,
[Em]Tomará conta de ti.

Coro:
[G]Deus tomará conta de [D]ti,
[Em]Deus tomará conta de [C]ti,
[G]NEle descansa, sempre [D]aqui,
[Em]Pois tem cuidado Deus, de [C]ti.`,
  h063:`Tom: G

Verso:
[G]Eis marchamos para aquele bom [D]país,
[Em]Onde o crente (sim, é Cristo quem o [C]diz),
[G]Com seu Salvador pra sempre ali [D]feliz,
[Em]Vai com Ele [C]descansar.
[G]Trabalhemos, pois, com zelo e com [D]vigor,
[Em]Constrangidos pelo Seu imenso [C]amor;
[G]Trabalhemos pelo nosso [D]Salvador:
[Em]Eis que a vida vai [C]findar!

Coro:
[G]Acordai! Acordai! Despertai! [D]Despertai!
[Em]E cantai! Sim, cantai! O Senhor não [C]tardará.
[G]Eis marchamos para aquele bom [D]país,
[Em]Onde o crente (sim, é Cristo quem o [C]diz),
[G]Com seu Salvador, p’ra sempre ali [D]feliz,
[Em]Vai com Ele [C]descansar.`,
  h064:`Tom: G

Verso:
[G]De todo o mundo, eis-nos [D]aqui
[Em]Em Ti só confiando,
[G]Permanecendo em Teu [D]amor,
[Em]Teu reino só [C]buscando,
[G]As nossas vidas, nosso [D]amor,
[Em]A Ti trazemos, [C]Salvador,
[G]Cantando: “Aleluia!"`,
  h065:`Tom: G

Verso:
[G]Eis os milhões, que em trevas tão [D]medonhas
[Em]Jazem perdidos, sem o [C]Salvador!
[G]Quem, quem irá as novas [D]proclamando,
[Em]Que Deus, em Cristo, salva o [C]pecador?

Coro:
[G]“Todo o poder o Pai me [D]deu,
[Em]Na terra, como lá no [C]céu!
[G]Ide, pois, anunciar o [D]Evangelho,
[Em]E eis-me convosco [C]Sempre!”`,
  h066:`Tom: G

Verso:
[G]Todo o que crê no Filho de [D]Deus,
[Em]Que, p'ra nos remir, desceu dos [C]céus;
[G]Todo o que, contrito, a Deus se [D]chegar,
[Em]Jesus está pronto, agora, a [C]salvar.

Coro:
[G]Sim, Jesus te chama, ó meu [D]Irmão!
[Em]A ti Ele oferece pleno [C]perdão;
[G]Seu sangue verteu para te [D]resgatar,
[Em]E Ele é quem quer e pode [C]salvar.`,
  h067:`Tom: G

Verso:
[G]Quem quer hoje mesmo a Jesus [D]seguir?
[Em]Seu pendão alçando, ao combate [C]ir?
[G]Quem quer, humilhado, sempre O [D]servir,
[Em]E obedecê-Lo. Seu querer [C]cumprir?

Coro:
[G]Quem quer ir com Cristo, quem [D]responderá,
[Em]Presto, sem demora, “eu, Senhor, [C]irei”?
[G]Onde for o Mestre, tu também [D]irás?
[Em]Quem dirá agora: “eu Te [C]seguirei”?`,
  h068:`Tom: Fm

Verso:
[F]Podes receber a doce paz de [C]Deus,
[Dm]Crendo em Jesus, que já desceu dos [Bb]céus:
[F]Toma, hoje, tua [C]cruz,
[Dm]Vem das trevas para a [Bb]luz,
[F]E, assim, mui gozo te dará [C]Jesus!

Coro:
[F]Gozo de ter [C]salvação,
[Dm]Gozo no teu [Bb]coração.
[F]Alegria fruirás,
[Dm]Quando desfrutares [Bb]paz,
[F]Que te trouxa Cristo, na cruenta [C]cruz!`,
  h070:`Tom: G

Verso:
[G]Nós Aleluia daremos a [D]Cristo,
[Em]Quando O virmos nas nuvens [C]voltar,
[G]De esplendor e de glória [D]vestido,
[Em]Seus escolhidos vai [C]arrebatar.

Coro:
[G]Cristo Jesus logo vai [D]voltar,
[Em]Vai voltar, vai [C]voltar,
[G]Seu povo vem, sim, [D]arrebatar;
[Em]Jesus breve [C]regressará!`,
  h072:`Tom: G

Verso:
[G]Rasgou-se o véu, franca ficou a [D]entrada:
[Em]Confiança temos, para ali [C]entrar,
[G]Onde a divina glória [D]revelada,
[Em]Outrora, não podíamos [C]mirar;
[G]Por Cristo, entrando, nada ali [D]tememos;
[Em]A glória brilha, sem nos [C]ofuscar;
[G]Na luz estamos e [D]permanecemos
[Em]Firmes, tranqüilos, sem mais [C]vacilar.`,
  h073:`Tom: G

Verso:
[G]Pecador escuta a voz do [D]Senhor:
[Em]"Se estás cansado, ó vem [C]descansar;
[G]Vem, não te detenhas; sem nenhum [D]temor,
[Em]Deixa o teu fardo e vem [C]repousar”.

Coro:
[G]Vem, vem a Mim e [D]descansarás;
[Em]Toma o Meu Jugo e Te [C]guiarei;
[G]Sou humilde, manso, dou-Te minha [D]paz;
[Em]Ó vem, hoJe mesmo, e Te [C]salvarei.`,
  h074:`Tom: G

Verso:
[G]Talvez Cristo venha ao romper da [D]aurora,
[Em]Com santos arcanjos, e com voz [C]sonora;
[G]Os mortos porá dos sepulcros p'ra [D]fora;
[Em]Jesus, breve, vem nos [C]buscar.

Coro:
[G]Cristo, que há de vir, [D]virá!
[Em]Ele não tardara, sim, Jesus [C]vem;
[G]Aleluia! Aleluia! Amém! Aleluia! [D]Amém!`,
  h075:`Tom: G

Verso:
[G]Tentado, não cedas, ceder é [D]pecar,
[Em]Melhor e mais nobre, será [C]triunfar,
[G]Coragem, ó crente, domina o teu [D]mal.
[Em]Deus pode livrar-te de queda [C]fatal.

Coro:
[G]Em Jesus tens a [D]palma
[Em]Da vitória, [C]minh’alma;
[G]E também doce calma
[Em]Pelo sangue da [C]cruz!`,
  h076:`Tom: G

Verso:
[G]Vem, ó pródigo, vem sem tardar, te chama [D]Deus,
[Em]Ouve-O chamando, sim, chamando a [C]ti;
[G]Tu, que vagas errante escuta a voz dos [D]céus,
[Em]Ó escuta a voz de [C]amor.

Coro:
[G]Deus espera por ti. perdido, pródigo, [D]vem;
[Em]Deus espera por ti, perdido, pródigo, [C]vem`,
  h078:`Tom: G

Verso:
[G]Vagando eu em grande [D]escuridão,
[Em]O Salvador me [C]encontrou,
[G]Perdido, mesmo, sem ter [D]salvação;
[Em]A minh’alma Seu sangue [C]lavou.

Coro:
[G]Jesus é o meu forte [D]Redentor;
[Em]Ele é meu grande [C]Salvador,
[G]Que me libertou na cruz, com mui [D]amor,
[Em]Cristo é meu Rei e meu [C]Senhor.`,
  h080:`Tom: G

Verso:
[G]Cristo te chama, a ti. [D]pecador,
[Em]Te chama a ti, com voz de [C]amor;
[G]Deixa os pecados, e vem ao [D]Senhor.
[Em]Cristo te chama a [C]til

Coro:
[G]Cristo te chama, te chama a [D]ti!
[Em]Cristo te chama, ó vem [C]pecador!
[G]Cristo te chama com voz de [D]amor.
[Em]Cristo te chama a [C]ti!`,
  h081:`Tom: A

Verso:
[A]Somente em Cristo [E]podemos
[F#m]A salvação receber;
[A]Novo concerto nós [E]temos
[F#m]Em quem na cruz quis [D]morrer.

Coro:
[A]Pode salvar, pode [E]salvar,
[F#m]Tira os pecados, e quer vos [D]salvar,
[A]Pode salvar, pode [E]salvar,
[F#m]Tira os pecados, e quer vos [D]salvar.`,
  h082:`Tom: Em

Verso:
[E]Um Salvador meigo eu [B]tenho,
[C#m]A quem antes não [A]conheci;
[E]Agora, alegre, eu [B]venho
[C#m]Contando a todos que O [A]vi.

Coro:
[E]Todos, todos verão,
[C#m]Todos, todos verão;
[E]Jesus glorioso e [B]bondoso,
[C#m]Sim, todos, todos [A]verão.`,
  h083:`Tom: G

Verso:
[G]Mais perto de Jesus, procuro sempre eu [D]chegar,
[Em]Mais belo que o ouro do sol nado é a Ti [C]mirar.
[G]Em pensamento, sonhos, tanta glória nunca [D]vi;
[Em]Pois Ele é mais belo do que eu jamais [C]previ!

Coro:
[G]Não posso explicar
[Em]Quão meigo é Jesus;
[G]Mas, face a face, no Teu [D]lar,
[Em]Eu Te verei, Jesus!`,
  h084:`Tom: D

Verso:
[D]Não perturbeis o [A]coração,
[Bm]Porque Eu sempre sou [G]fie!;
[D]Eu fecho a boca do [A]"leão",
[Bm]Na cova estou com [G]Daniel.

Coro:
[D]Sou Eu aquele, o grande “EU [A]SOU”
[Bm]E, onde estais, também [G]estou;
[D]Não disse, Eu, há muito [A]já:
[Bm]“Pedi, pedi... [G]dar-se-voa-á”?
[D]Pedi com fé e com [A]fervor
[Bm]E vos darei o [G]Consolador.`,
  h085:`Tom: G

Verso:
[G]Do Santo Espírito, está [D]escrito,
[Em]Que sois o templo, sim, templo de [C]Deus;
[G]Já recebestes, depois que [D]crestes,
[Em]O dom glorioso descido do [C]céu?

Coro:
[G]Deixai entrar, para [D]morar,
[Em]O Espírito de Deus;
[G]Dom prometido, já [D]concedido,
[Em]Bendito dom dos altos [C]céus.`,
  h086:`Tom: G

Verso:
[G]Oh! 'stou satisfeito com [D]Cristo,
[Em]Porque Ele minh’alma [C]salvou;
[G]E sobre o madeiro, [D]sofrendo,
[Em]O Seu grande amor [C]revelou.

Coro:
[G]Oh! 'stou satisfeito com [D]Cristo,
[Em]Confesso-O por meu [C]Salvador:
[G]Embora de nada ser [D]digno,
[Em]Desfruto do Seu grande [C]amor.`,
  h087:`Tom: F

Verso:
[F]Justificado estou;
[Dm]Cristo Jesus me [Bb]livrou;
[F]Ele é meu Mediador,
[Dm]Também, meu bom [Bb]Salvador.

Coro:
[F]Jesus, sou Teu, e Tu és [C]meu;
[Dm]Me guiarás para o [Bb]céu;
[F]Com graça e paz me [C]satisfaz
[Dm]Cristo, meu Mestre [Bb]veraz.`,
  h088:`Tom: G

Verso:
[G]Jesus, meu Rei, Mestre e [D]Senhor,
[Em]O Teu amor revela a [C]mim,
[G]Enquanto eu aqui [D]viver,
[Em]Até eu ver da vida o [C]fim.

Coro:
[G]Revela a nós, Senhor Jesus, meu [D]Salvador,
[Em]As maravilhas mil do Teu divino [C]amor;
[G]E com veraz louvor, fervente [D]gratidão;
[Em]Eleva a TI, Jesus Senhor, o nosso [C]coração.`,
  h089:`Tom: G

Verso:
[G]Conta-me, sim, de [D]Jesus,
[Em]Para na mente, eu [C]gravar
[G]Como foi que [D]padeceu
[Em]Na cruz, pra me [C]libertar:
[G]A Sua paixão e [D]morte,
[Em]A começar no [C]jardim,
[G]Não houve mais quem [D]tivesse
[Em]Um sofrimento [C]assim!

Coro:
[G]Só amor! Só amor!
[Em]Só amor! Sublime e grande [C]amor!`,
  h091:`Tom: G

Verso:
[G]Jesus, eu almejo a pureza do [D]céu,
[Em]Tua linda presença no coração [C]meu
[G]Os ídolos quebro, me toma [D]Jesus;
[Em]Ó dá-me a pureza da nívea [C]luz.

Coro:
[G]Nívea luz, a nívea [D]luz,
[Em]Ó dá-me a pureza da nívea [C]luz.`,
  h092:`Tom: G

Verso:
[G]Meu bondoso [D]Salvador
[Em]Meus pecados [C]carregou;
[G]Foi Jesus, o [D]Redentor,
[Em]Que da morte me [C]livrou.

Coro:
[G]Oh! Que Salvador eu [D]tenho!
[Em]O Seu sangue me [C]remiu,
[G]Quando, sobre o rude [D]lenho,
[Em]Meu castigo Ele [C]cumpriu.`,
  h093:`Tom: G

Verso:
[G]Há trabalho pronto para ti, [D]cristão;
[Em]Que demanda toda a tua [C]devoção;
[G]Vem, alegremente, a Cristo [D]obedecer,
[Em]Pois só tu, ó crente, o poderás [C]fazer!

Coro:
[G]Por Jesus a [D]trabalhar,
[Em]Prontamente, fielmente, [C]trabalhar!
[G]Em Servi-Lo, que [D]prazer!
[Em]E só tu, ó crente, o poderás [C]fazer.`,
  h094:`Tom: G

Verso:
[G]Quando a luta desta [D]vida
[Em]Trabalhosa se [C]findar,
[G]O adeus a este mundo vamos [D]dar;
[Em]Para o céu então [C]iremos,
[G]Com Jesus nos [D]encontrar
[Em]Na Jerusalém de [C]Deus.

Coro:
[G]Oh! que gozo e [D]alegria,
[Em]Quando o povo ali [C]chegar,
[G]Em Jerusalém! Em [D]Jerusalém!
[Em]Sempre ali cantando [C]hosanas,
[G]Pois o Rei no trono [D]esta,
[Em]Na Jerusalém de [C]Deus.`,
  h095:`Tom: G

Verso:
[G]Ouve, ouve, ó [D]pecador!
[Em]Ouve bem, presta [C]atenção
[G]A Jesus, o [D]Salvador,
[Em]Que do céu trouxe o [C]perdão;
[G]Ouve a Sua meiga [D]voz;
[Em]Digna é de [C]aceitação.`,
  h096:`Tom: G

Verso:
[G]Se ao inimigo temes [D]combater,
[Em]Se estás em trevas e não tens [C]poder,
[G]Que a formosa luz de Deus fulgure em [D]ti;
[Em]E serás feliz [C]assim.

Coro:
[G]Deixa penetrar a [D]luz!
[Em]Deixa penetrar a [C]luz!
[G]Que a formosa luz de Deus fulgure em [D]ti;
[Em]E serás felIz [C]assim.`,
  h097:`Tom: G

Verso:
[G]Há um caminho santo, ao céu de plena [D]luz,
[Em]As vezes espinhoso, à glória nos [C]conduz;
[G]E o caminho certo pra todo [D]pecador;
[Em]Jesus é o Salvador, Jesus é o [C]Salvador.`,
  h098:`Tom: G

Verso:
[G]Estarás tu vigiando, quando Jesus [D]Vier?
[Em]Ansioso, esperando, quando Jesus [C]vier?

Coro:
[G]Oh! Que noite! Solene [D]noite!
[Em]Brilhará a tua luz, quando Jesus [C]vier?
[G]Ó, sê pronto, ó, sê [D]pronto!
[Em]Ó, sê pronto, quando Jesus [C]vier.
[G]Ó, sê pronto, ó sê [D]pronto!
[Em]Ó sê pronto, quando Jesus [C]vier!`,
  h100:`Tom: G

Verso:
[G]Quem quer ir, por Jesus, a nova [D]proclamar
[Em]Nos antros de aflição, misérias, mal e [C]dor?
[G]Cristãos, anunciai que o Pai quer [D]derramar
[Em]O bom Consolador.

Coro:
[G]O bom Consolador, o bom [D]Consolador
[Em]Que Deus nos prometeu, ao mundo Já [C]desceu;
[G]Ó Ide proclamar, que Deus quer [D]derramar
[Em]O bom Consolador.`,
  h101:`Tom: G

Verso:
[G]Qual órfãos não nos deixou o [D]Senhor,
[Em]Mas como nos [C]prometeu,
[G]Mandou-nos o bom [D]Consolador,
[Em]Que nos encheu do poder do [C]céu,
[G]Do Seu divinal [D]amor!

Coro:
[G]Recebestes já a unção [D]real
[Em]Do Espírito [C]Consolador?
[G]Deus quer te usar para outros [D]salvar,
[Em]Se recebes o [C]Consolador.`,
  h102:`Tom: E

Verso:
[E]Hoje, Jesus pode te [B]salvar;
[C#m]Somente crê na [A]promessa;
[E]Dos teus pecados [B]purificar;
[C#m]Somente crê na [A]promessa.

Coro:
[E]Crê na promessa de [B]Jesus,
[C#m]Somente crê na [A]promessa;
[E]Bênção dos céus, vida à [B]flux!
[C#m]Somente crê na [A]promessa.`,
  h103:`Tom: C

Verso:
[C]Há uma luz, bendita [G]luz,
[Am]Que vem a nós dos [F]céus;
[C]A face do Senhor [G]Jesus
[Am]Reflete o amor de [F]Deus.

Coro:
[C]Caminhemos na luz
[Am]Caminhemos na luz de [F]Deus.
[C]Caminhemos na luz
[Am]Caminhemos na luz de [F]Deus.`,
  h104:`Tom: G

Verso:
[G]Eis Jesus a procurara ovelha, que a [D]vagar
[Em]Desgarrou-se do aprisco do [C]Senhor;
[G]Pelos montes a sofrer, faça sol ou a [D]chover,
[Em]Cristo busca Sua ovelha, com [C]amor.

Coro:
[G]Com amor.., o [D]Pastor...
[Em]Eis que chama Sua ovelha, sem [C]cessar;
[G]Possa hoje, o [D]pecador
[Em]escutar a voz do [C]amor,
[G]De Jesus, que procura p’ra [D]salvar.`,
  h105:`Tom: E

Verso:
[E]Possuis em ti, ó [B]pecador,
[C#m]A gloriosa [A]esperança?
[E]E Cristo tua [B]confiança,
[C#m]Que te sustenta com [A]vigor?
[E]A minha é Jesus, á Jesus, é [B]Jesus,
[C#m]A minha é Jesus,
[E]Que me concede [B]segurança.`,
  h106:`Tom: G

Verso:
[G]Viva Cristo, eternal [D]riqueza,
[Em]Meu escudo, vida e [C]firmeza,
[G]Sua graça - Oh! me [D]faça
[Em]Reluzir no Seu [C]amor.`,
  h108:`Tom: G

Verso:
[G]Por Jesus vamos [D]pelejar,
[Em]Prosseguindo o nosso [C]andar;
[G]E com Ele, então, no [D]céu,
[Em]Nós iremos a paz [C]gozar.

Coro:
[G]Lutemos todos contra o [D]mal,
[Em]E vamos a Jesus [C]seguir;
[G]Ele é o nosso [D]General
[Em]E a glória do [C]porvir!`,
  h109:`Tom: G

Verso:
[G]Se alguém deseja, venha a [D]Jesus,
[Em]Água e pão da vida, Ele te [C]conduz.
[G]A mão Lhe estende, pede-Lhe a [D]luz,
[Em]Se alguém deseja, [C]venha.

Coro:
[G]Se alguém deseja, se alguém [D]deseja,
[Em]Venha hoje mesmo receber [C]perdão,
[G]Pois Jesus te chama, ó, não chama em [D]vão,
[Em]Se alguém deseja, [C]venha!`,
  h110:`Tom: G

Verso:
[G]Ó clama na tribulação: Jesus, [D]Jesus.
[Em]De todo o teu coração: Jesus, [C]Jesus,
[G]Por certo, te socorrerá: Jesus, [D]Jesus,
[Em]E gozo e paz te dará: Jesus, [C]Jesus.`,
  h111:`Tom: D

Verso:
[D]Que mudança em mim fez o meu bom [A]Jesus,
[Bm]Vindo Ele ao meu [G]coração
[D]Deu-me paz divinal, deu-me gozo e [A]luz,
[Bm]Entrando Ele no meu [G]coração.

Coro:
[D]Entrando no meu [A]coração!
[Bm]Entrando no meu [G]coração!
[D]Que mudança em mim
[Bm]Fez o meu bom [G]Jesus,
[D]Vindo Ele ao meu [A]coração.`,
  h112:`Tom: D

Verso:
[D]Não há na terra e céu [A]também,
[Bm]Um nome com doçura,
[D]Como este a quem louvor [A]convém,
[Bm]De toda a criatura.

Coro:
[D]Jesus, a luz és Tu do [A]céu!
[Bm]Jesus, o nosso [G]amado)
[D]Jesus, o verdadeiro [A]Deus,
[Bm]Por todos exaltado!`,
  h113:`Tom: G

Verso:
[G]Dia a dia vem [D]guiar-me
[Em]Meu Jesus e meu [C]Senhor!
[G]Não sou meu, pois me [D]compraste
[Em]Com Teu sangue [C]redentor;
[G]Quero a Ti viver [D]unido,
[Em]Pela vida até ao [C]fim;
[G]Que se torne assim [D]verdade,
[Em]“Não mais eu, mas Cristo em [C]mim”.
[G]Que se torne assim [D]verdade.
[Em]“Não mais eu, mas Cristo em [C]mim”.`,
  h114:`Tom: G

Verso:
[G]Se tu cansado já estás de [D]pecar,
[Em]Aceita o perdão de [C]Jesus.
[G]Se vida nova quiseres [D]achar,
[Em]Aceita o perdão de [C]Jesus,

Coro:
[G]Vem a Jesus, [D]pecador.
[Em]Por ti morreu lá na [C]cruz.
[G]É tempo, vem sem [D]temor;
[Em]Aceite o perdão de [C]Jesus.`,
  h115:`Tom: G

Verso:
[G]Eu quero trabalhar pra meu [D]Senhor,
[Em]Levando a Palavra com [C]amor;
[G]Quero eu cantar e [D]orar,
[Em]E ocupado quero [C]estar,
[G]Sim, na vinha do [D]Senhor.

Coro:
[G]Trabalhai e orai.
[Em]Na seara e na vinha do [C]Senhor;
[G]Meu desejo é orar,
[Em]E ocupado quero [C]estar
[G]Sim, na vinha do [D]Senhor.`,
  h116:`Tom: C

Verso:
[C]Eu vagava pela senda de [G]horror,
[Am]Oprimido pelo pecado e [F]temor.
[C]Quando o Salvador eu [G]vi,
[Am]Sua terna voz ouvi,
[C]Meu Jesus me libertou por Seu [G]amor.

Coro:
[C]Livre estou! Livre [G]estou!
[Am]Pela graça de Jesus livre [F]estou;
[C]Livre estou! Livre [G]estou!
[Am]Aleluia! Pela fé, livre [F]estou!`,
  h117:`Tom: G

Verso:
[G]Aleluia! O Senhor Salva a todo [D]pecador!
[Em]Salvação! Salvação!
[G]Jesus Cristo tem poder para todo o mal [D]vencer,
[Em]Salvação! Salvação!

Coro:
[G]Salvação e [D]redenção!
[Em]Aleluia! Cristo já me amou e me [C]salvou.
[G]Glória dou e aleluia, a Jesus que me [D]salvou.`,
  h119:`Tom: G

Verso:
[G]Seja louvado o bom [D]Salvador
[Em]Livre é Seu amor, livre é Seu [C]amor.
[G]Há preparado para o [D]pecador,
[Em]Fonte preciosa de [C]amor;
[G]E, se em Cristo queres [D]confiar,
[Em]Livre é Seu amor, livre é Seu [C]amor;
[G]A vida eterna tu irás [D]gozar,
[Em]Inesgotável é Seu [C]amor.

Coro:
[G]Terno, te chama Jesus: queres [D]ir?
[Em]Ó pecador, ó [C]pecador!
[G]Ele deixou para nós, ao [D]subir,
[Em]Fonte preciosa de [C]amor.`,
  h121:`Tom: G

Verso:
[G]Maravilhoso é [D]Jesus,
[Em]Da minha vida a [C]luz,
[G]Pois me salvando, me [D]perdoando,
[Em]Para Sião me [C]conduz.

Coro:
[G]Maravilhoso, sim, [D]maravilhoso!
[Em]É Cristo, pois salvou-me a [C]mim!
[G]Maravilhoso e mui [D]glorioso,
[Em]É Cristo, que vive em [C]mim.`,
  h122:`Tom: G

Verso:
[G]Fogo divino, clamamos por [D]ti;
[Em]Vem lá do alto, vem, desce [C]aqui;
[G]Ó vem despertar-nos com teu [D]fulgor;
[Em]Vem inflamar-nos com teu [C]calor.

Coro:
[G]Desce do alto, bendito [D]fogo,
[Em]Desce poder [C]celestial!
[G]Desce do alto, bendito [D]fogo,
[Em]Vem, chama [C]pentecostal!`,
  h123:`Tom: D

Verso:
[D]Um dia, Cristo [A]voltará;
[Bm]Ao ascender, o [G]prometeu;
[D]Do modo que subiu [A]virá;
[Bm]Há de ver o Rei Jesus, o povo [G]Seu.

Coro:
[D]Mui breve sim, Jesus [A]virá,
[Bm]Alegre O verá Seu [G]povo;
[D]Velando, todos devem sempre [A]estar,
[Bm]A fim de vê-Lo [G]voltar.`,
  h124:`Tom: D

Verso:
[D]Adorai o Rei do [A]Universo!
[Bm]Terra e céus, cantai o Seu [G]louvor!
[D]Todo o ser no grande mar [A]submerso,
[Bm]Louve ao Dominador!

Coro:
[D]Todos juntos O [A]louvemos!
[Bm]Grande Salvador e [G]Redentor!
[D]Todos O louvemos!
[Bm]Régio Dominador!`,
  h125:`Tom: G

Verso:
[G]Vem, outra vez, nosso [D]Salvador;
[Em]Quem dera hoje vir!
[G]Para reinar com poder e [D]amor!
[Em]Quem dera hoje vir!
[G]Já por Sua Esposa, vem esta [D]vez;
[Em]Que O espera em [C]oração;
[G]Fora do mundo de [D]entremez;
[Em]Quem dera hoje vir!

Coro:
[G]Glória, glória, gozo sem fim, [D]trará;
[Em]Glória, glória, ao coroar o [C]fiei;
[G]Glória, glória, nos [D]arrebatará;
[Em]Glória, glória! Cristo vem Outra [C]vez!`,
  h126:`Tom: G

Verso:
[G]Bem-aventurado o que [D]confia
[Em]No Senhor, como fez [C]Abraão;
[G]Ele creu, ainda que não [D]via,
[Em]E, assim, a fé não foi em [C]vão.
[G]É feliz quem segue, [D]fielmente,
[Em]Nos caminhos santos do [C]Senhor,
[G]Na tribulação é [D]paciente,
[Em]Esperando no seu [C]Salvador.`,
  h127:`Tom: G

Verso:
[G]O Senhor da ceifa está [D]chamando:
[Em]“Quem quer ir por Mim a [C]procurar
[G]Almas que no mundo, vão [D]chorando;
[Em]Sem da salvação [C]participar?”

Coro:
[G]Fala Deus! Fala [D]Deus!
[Em]Toca-me com brasa do [C]altar;
[G]Fala Deus! Fala [D]Deus!
[Em]Sim, alegre, atendo ao Teu [C]mandar.`,
  h128:`Tom: G

Verso:
[G]Ó alma triste, [D]perdida,
[Em]Que vagas sem ter [C]direção!
[G]Aceita de Deus a [D]vida,
[Em]Entrega teu [C]coração!

Coro:
[G]Dá, hoje, a Cristo,
[Em]Teu coração, teu [C]coração.
[G]Pois nEle acharás a paz, o [D]perdão,
[Em]Entrega teu [C]coração.
[G]Dá, hoje, a Cristo,
[Em]Teu coração, teu [C]coração.
[G]Pois nEle acharia a paz, o [D]perdão,
[Em]Entrega teu [C]coração.`,
  h129:`Tom: G

Verso:
[G]Ó pecador, vem à [D]fonte,
[Em]Com o teu fardo de [C]dor,
[G]Vem Sepultá-lo nas [D]águas;
[Em]Paz acharás no [C]Senhor.

Coro:
[G]Depressa vem, depressa [D]vem!
[Em]Um só instante não queiras [C]perder;
[G]Jesus espera [D]salvar-te;
[Em]Mercê p’ra ti, Ele [C]tem.`,
  h130:`Tom: G

Verso:
[G]Manso Pastor já no mundo viveu e Ele é [D]meu,
[Em]Nos dando a vida, por nós padeceu e Ele é [C]meu;
[G]Graça tão vasta não posso sondar, mas Ele é [D]meu.
[Em]Sou perdoado já posso cantar, que Ele é [C]meu.

Coro:
[G]Cristo é meu! Cristo é [D]meu!
[Em]Maravilhoso, mas certo é [C]dizer:
[G]Jesus é meu!`,
  h131:`Tom: G

Verso:
[G]Só em Ti, meu Senhor eu desejo [D]estar,
[Em]E também receber Tua [C]luz;
[G]De valor em valor só por Ti [D]avançar,
[Em]Ó me traz junto a Ti, meu [C]Jesus.

Coro:
[G]Eu desejo, ó Deus, em Jesus [D]habitar;
[Em]Pois minh’alma suspira por [C]Ti;
[G]De valor em valor, e na fé [D]aumentar,
[Em]Para que vejam Cristo em [C]mim.`,
  h132:`Tom: G

Verso:
[G]Somos obreiros do [D]Senhor,
[Em]À messe vamos, com [C]amor,
[G]A proclamar a [D]salvação
[Em]De Cristo e o Seu [C]perdão;
[G]Pois trabalhemos por [D]amor
[Em]De Cristo, nosso [C]Salvador,
[G]Que por nós o sangue [D]derramou,
[Em]E no Calvário [C]expirou.

Coro:
[G]À colheita vinde já, pois Jesus vos [D]chama;
[Em]“Todos devem trabalhar”, o Senhor [C]proclama,
[G]Breve, tudo findará, não se poderá [D]segar;
[Em]Vinde crentes, vinde [C]trabalhar.`,
  h133:`Tom: G

Verso:
[G]Teu nome, por inteiro, escrito está nos [D]céus
[Em]No livro do Cordeiro, no livro do bom [C]Deus,
[G]Teremos a vitória, olhando no [D]Senhor;
[Em]Por isso, damos glórias e gran [C]louvor.

Coro:
[G]Teu nome escrito, irmão, está por [D]Deus,
[Em]No livro da vida, no rol dos filhos [C]Seus,
[G]Teu nome escrito, irmão, está nos [D]céus;
[Em]Oh! glória, aleluia! [C]Amém.`,
  h134:`Tom: G

Verso:
[G]Quem está batendo [D]assim,
[Em]Que enche-me de [C]comoção?
[G]Quem procurará por [D]mim?
[Em]Sinto bater no [C]coração.

Coro:
[G]Quem bate, diz com [D]mansidão:
[Em]Eu sou Jesus, te vim [C]salvar;
[G]Abre, duro coração,
[Em]Dentro de ti quero [C]cear.`,
  h135:`Tom: G

Verso:
[G]Teu nome é precioso, amado [D]Salvador,
[Em]E grande, glorioso, nos enche de [C]amor,
[G]Nós todos Te adoramos com verdadeira [D]fé,
[Em]Também nos humilhamos, aos Teus santos [C]pés.

Coro:
[G]Quantas bênçãos [D]prometidas
[Em]No Teu nome, ó [C]Salvador!
[G]Hoje tenho vida. Graça é [D]concedida,
[Em]No Teu nome, ó [C]Salvador!`,
  h136:`Tom: G

Verso:
[G]Em nosso socorro vem, ó vem, [D]Jesus!
[Em]Pois grande tristeza nos ofusca a [C]luz;
[G]A Ti recorremos, vem nos dar [D]vigor,
[Em]Reveste-nos todos do Teu grande [C]amor!`,
  h137:`Tom: G

Verso:
[G]Em Babilônia, em [D]prisão,
[Em]Estava Israel,
[G]O povo santo de [D]Sião,
[Em]Sofrendo dor cruel.

Coro:
[G]Mas, um dia, se [D]ouviu,
[Em]Que do rei a voz [C]saiu
[G]P’ra voltarem da [D]escravidão.
[Em]Todo povo a [C]Jubilar,
[G]Com as harpas a [D]cantar,
[Em]Foi em busca de [C]Sião.`,
  h138:`Tom: G

Verso:
[G]Se da morte tens [D]horror,
[Em]E salvação desejas,
[G]Volta aos braços do [D]Senhor,
[Em]Para que salvo tu [C]sejas;
[G]Abre bem teu [D]coração,
[Em]E recebe salvação,
[G]Sem nenhuma [D]turbação;
[Em]Quem bate é Jesus [C]Cristo.

Coro:
[G]Deves-Lhe dar [D]abrigo.
[Em]Não há nenhum [C]perigo;
[G]Cristo quer só te [D]salvar;
[Em]Na mesa, cear [C]contigo.`,
  h139:`Tom: G

Verso:
[G]Já o Filho de Deus é descido do [D]céu;
[Em]A obra perfeita na cruz [C]consumou;
[G]E ali Sua carne, rasgada qual [D]véu,
[Em]Vivo caminho para o céu nos [C]consagrou.

Coro:
[G]Jesus é meu eterno [D]Redentor!
[Em]Por Seu sangue lá remido [C]estou;
[G]Deu-me paz, poder [D]consolador;
[Em]Vivo contente, pois Ele me [C]amou.`,
  h140:`Tom: G

Verso:
[G]De mal nenhum eu [D]temerei,
[Em]Em mim está Jesus:
[G]Jamais perturbação [D]terei,
[Em]Pois vivo já na [C]luz.

Coro:
[G]Sinto paz mui profunda [D]enfim,
[Em]Sinto paz proveniente da [C]cruz,
[G]Pela fé sinto viver em [D]mim,
[Em]Meu Jesus, meu [C]Jesus.`,
  h142:`Tom: A

Verso:
[A]Ó Sião celeste, repouso dos [E]santos,
[F#m]O teu arquiteto se chama o [D]SENHOR;
[A]Em ti entraremos, com gozo e [E]canto,
[F#m]Com os que adoram o bom [D]Salvador,
[A]Em bela planície estás [E]situada,
[F#m]E que majestosa rainha és [D]tu!
[A]De pedras preciosas estás [E]adornada;
[F#m]Demonstras a glória de Cristo [D]Jesus.
[A]De Cristo Jesus. de Cristo [E]Jesus.
[F#m]Demonstras a glória de Cristo [D]Jesus.`,
  h143:`Tom: G

Verso:
[G]Tu és pra mim o verdadeiro [D]amigo,
[Em]Só em Ti, meu Redentor, vou [C]confiar,
[G]Defende-me do mundo, do [D]perigo;
[Em]Ansioso, eu Te quero [C]encontrar.

Coro:
[G]Vem levar me para [D]perto
[Em]Do Teu grande e bondoso [C]coração;
[G]Sempre avante e bem [D]certo,
[Em]Com Jesus, eu vou andando p'ra [C]Sião.`,
  h144:`Tom: G

Verso:
[G]À Assembléia de Deus, vem [D]comigo,
[Em]Ouvir a Palavra de [C]Deus;
[G]E terás a certeza, [D]contigo,
[Em]Que Jesus é o caminho dos [C]céus.

Coro:
[G]Ó vem, vem, vem, [D]vem!
[Em]Vem à Assembléia e [C]louvemos
[G]Ao nosso bom Deus [D]Redentor,
[Em]Pois maior alegria não [C]temos,
[G]Que fruir Seu imenso [D]amor.`,
  h145:`Tom: G

Verso:
[G]A minha alma Te ama, ó [D]Senhor!
[Em]E desfalece sedenta de [C]amor;
[G]meu consolo na [D]aflição,
[Em]E luz perfeIta na [C]escuridão;
[G]Meu verdadeiro pão.

Coro:
[G]A minha alma ama-Te; [D]Senhor,
[Em]De Ti só recebe vida e [C]amor!`,
  h146:`Tom: G

Verso:
[G]Por um caminho brilhante [D]vou,
[Em]De majestosa luz;
[G]Pelo caminho que já [D]trilhou,
[Em]Nossa Senhor Jesus;
[G]Sem me lembrar do que se [D]passou,
[Em]Bem feliz canto, [C]sim,
[G]Pois filho do Rei do~ reis eu [D]sou:
[Em]Cristo é meu, por [C]fim;

Coro:
[G]Meu, por fim; meu, por [D]fim!
[Em]Cristo da morte livrou-me, [C]sim!
[G]Me ouviu, me remiu,
[Em]Cristo é meu, por [C]fim!`,
  h147:`Tom: G

Verso:
[G]Quero eu servir-Te, ó meu Rei [D]Jesus,
[Em]E contigo sempre caminhar na [C]luz,
[G]Tendo com o povo de Deus [D]comunhão
[Em]E dos meus pecados [C]purificação.

Coro:
[G]Sim, ó meu Senhor;
[Em]Quero seguir-Te, ó Deus de [C]amor.
[G]Sempre Te servindo,
[Em]E também dando a Ti [C]louvor.`,
  h148:`Tom: G

Verso:
[G]Louvarei meu Guia [D]sábio,
[Em]Louvarei, louvarei;
[G]Bendirei, com alma e [D]lábios,
[Em]Bendirei Jesus.

Coro:
[G]Aleluia! Louvo a [D]Jesus!
[Em]Deu-me salvação na [C]cruz!
[G]Aleluia a quem me [D]conduz!
[Em]Glória a meu Jesus!`,
  h149:`Tom: A

Verso:
[A]No meu barco a [E]remar.
[F#m]Sobre as ondas, pelo [D]mar,
[A]Mesmo na bonança ou no [E]furacão
[F#m]Não desejo mais [D]parar;
[A]Com a rede vou [E]pescar,
[F#m]Muitos peixes para o reino de [D]Sião,

Coro:
[A]Vou pescar os pecadores para [E]Crlsto,
[F#m]Neste mundo cheio de [D]horror;
[A]Não mais [E]desanimarei;
[F#m]Minha rede [D]lançarei;
[A]Muitos peixes apanhando p’ra o [E]Senhor.`,
  h151:`Tom: G

Verso:
[G]Fala, Jesus querido; fala-me, hoje [D]sim!
[Em]Fala com Tua bondade; fica ao pé de [C]mim;
[G]Meu coração aberto 'stá p'ra Tua voz [D]ouvir;
[Em]Enche-me de louvores e gozo p’ra Te [C]servir.

Coro:
[G]Fala-me suavemente! Fala, com muito [D]amor!
[Em]Vencedor para sempre, livre te hei de [C]por,
[G]Fala-me cada dia, sempre em terno [D]tom;
[Em]Ouvir Tua voz eu quero e neste mesmo [C]som.`,
  h152:`Tom: Ab

Verso:
[Ab]Ao Calvário, só Jesus se [Eb]transportou
[Fm]Levando pesada [Db]cruz,
[Ab]E morrendo, lá p'ra o mortal [Eb]deixou,
[Fm]Um fanal de gloriosa [Db]luz.

Coro:
[Ab]Pela cruz ao céu [Eb]irei;
[Fm]Pela cruz eu [Db]seguirei
[Ab]Pare o lar de paz e eterno [Eb]amor
[Fm]Pela cruz ao céu [Db]irei.`,
  h153:`Tom: Am

Verso:
[A]Soldados de Cristo que entrastes na [E]lida.
[F#m]Lutai sem desmaio, lutai com [D]valor;
[A]E o inimigo levai de [E]vencida,
[F#m]Dizendo que Cristo é nosso [D]Senhor.

Coro:
[A]Soldados de Cristo, marchei sempre [E]avante,
[F#m]Levando à destra as armas da [D]luz;
[A]As almas perdidas buscai [E]triunfantes
[F#m]E prestes, levai-as a Cristo [D]Jesus.`,
  h155:`Tom: G

Verso:
[G]Imploramos, nosso [D]Salvador,
[Em]Teu poder; Teu poder, Teu [C]poder,
[G]Divinal, poder [D]renovador,
[Em]Teu poder, Teu poder, Teu [C]poder.
[G]Bendita promessa [D]paternal!
[Em]Vem encher-nos de real [C]valor,
[G]Do pleno poder [D]celestial,
[Em]Teu poder, Teu poder, Teu [C]poder.`,
  h156:`Tom: A

Verso:
[A]O bom Pastor [E]buscou-me
[F#m]Já longe do redil,
[A]E com ternura [E]achou-me,
[F#m]Caído, triste, vil!
[A]As chagas com amor [E]pensou,
[F#m]E ao lar nos braços me [D]levou.

Coro:
[A]Sim, Jesus amou-me,
[F#m]Com amor buscou-me,
[A]Ele mesmo restaurou-me a [E]Deus;
[F#m]Por Seu sangue, restaurou-me a [D]Deus.`,
  h157:`Tom: D

Verso:
[D]O dia vem, a [A]clarear,
[Bm]Já fugiu a noite, brilha a luz [G]dalém;
[D]Um grito soa: [A]aprontar!
[Bm]Cristo, em breve, [G]vem!

Coro:
[D]Qual forte vendaval, rugindo Sobre o [A]mar,
[Bm]Escuta-se a mensagem, que do céu [G]provém;
[D]Ouvi a grande nova, que alegria [A]traz;
[Bm]“Cristo, em breve, [G]vem!”`,
  h158:`Tom: Bm

Verso:
[B]Diante de Pilatos 'stá [F#]Jesus,
[G#m]Por todos deixado em [E]aflição,
[B]O qual pergunta à [F#]multidão...
[G#m]-"Que farei de Jesus [E]Cristo?"

Coro:
[B]Que farás de Jesus [F#]Cristo?
[G#m]Responde, hoje, [E]sim;
[B]Diria um dia ao [F#]vê-Lo:
[G#m]“Que fará Ele de [E]mim?`,
  h159:`Tom: G

Verso:
[G]Cantai, ó peregrinos, na lida não [D]canseis
[Em]A vossa fé crescendo, as harpas já [C]tocai
[G]Eu sobre o monte santo e glorioso [D]estou,
[Em]E para a minha pátria celestial já [C]vou.

Coro:
[G]Cantai, continuamente,
[Em]louvai p’ra todo o [C]sempre;
[G]Meu coração transborda com divinal [D]louvor.
[Em]Cantai, continuamente,
[G]Louvai p’ra todo o [D]sempre;
[Em]Meu coração transborda com divinal [C]louvor.`,
  h160:`Tom: G

Verso:
[G]Irmãos, unidos, vamos [D]publicar
[Em]Que Deus nos quis [C]salvar,
[G]Que Deus nos quis [D]salvar,
[Em]Com o precioso sangue de [C]Jesus,
[G]Vertido lá na cruz.

Coro:
[G]Que Deus nos quis [D]salvar,
[Em]Que Deus nos quis [C]salvar,
[G]Co’o sangue do Senhor [D]Jesus;
[Em]Ó irmãos, devemos [C]avançar,
[G]Olhando para a cruz`,
  h161:`Tom: G

Verso:
[G]Pra terra celeste meu barco [D]andará,
[Em]Ali, onde os santos já [C]estão;
[G]Findando a noite, manhã [D]romperá;
[Em]Então, os remidos [C]entrarão.

Coro:
[G]Sim, vou pelas terras, pelos mares [D]também,
[Em]Alerta, Jesus me guiará; Ele prometeu a [C]mim,
[G]Nunca deixar-me no mundo, [D]porém,
[Em]Sim, levar-me ao porto, co’alegria sem [C]fim.`,
  h162:`Tom: Dm

Verso:
[D]Da verdade, levantemos o [A]estandarte,
[Bm]Arvoremos o estandarte de [G]Jesus.
[D]Proclamemos, com valor, por toda [A]parte,
[Bm]A mensagem soleníssima da [G]cruz.

Coro:
[D]O mundo está sem luz, sem [A]paz;
[Bm]Levemos paz, [G]consolação,
[D]A quem, na dor, no luto [A]faz,
[Bm]Sem luz, sem paz, sem [G]salvação.`,
  h163:`Tom: F

Verso:
[F]Do Calvário, pela [C]senda,
[Dm]O Senhor Jesus [Bb]subiu,
[F]E na cruz, em dor [C]horrenda,
[Dm]Obra de amor [Bb]cumpriu!

Coro:
[F]Sobre a cruz, sobre a [C]cruz,
[Dm]Cristo Jesus morreu por [Bb]mim;
[F]Sobre a cruz, sobre a [C]cruz,
[Dm]Cristo Jesus morreu por [Bb]ti.`,
  h164:`Tom: G

Verso:
[G]Recebi de graça, abundante [D]paz
[Em]Por Deus concedida, que me [C]satisfaz;
[G]Queres recebê-la no teu [D]coração?
[Em]Busca o Senhor e a Sua [C]salvação,
[G]Mais de Sua paz, mais de Sua [D]paz,
[Em]Quero receber de Deus, que é [C]veraz.
[G]Mais de Sua paz, mais de Sua [D]paz,
[Em]Quero receber de Deus, que é [C]veraz.`,
  h165:`Tom: G

Verso:
[G]Ao bom Combate vamos, repletos de [D]amor,
[Em]Vestidos de justiça, ferventes no [C]Senhor;
[G]Co’os lombos bem cingidos de verdadeira [D]luz,
[Em]Calçados do Evangelho do Salvador [C]Jesus.

Coro:
[G]De Deus, a armadura - de Cristo, o [D]valor,
[Em]irmão meu, segura - p’ra seres [C]vencedor.`,
  h166:`Tom: G

Verso:
[G]Ouves tu? Jesus te [D]chama
[Em]Sim, te chama, ó [C]pecador!
[G]A Jesus, que salva e [D]ama,
[Em]Vem agora, sem [C]temor.

Coro:
[G]Deixa entrar o Rei da [D]glória
[Em]Em ti mesmo, ó [C]pecador;
[G]Quem é este Rei da [D]glória?
[Em]É Jesus o teu [C]Senhor`,
  h167:`Tom: G

Verso:
[G]Ó companheiros desta causa [D]santa
[Em]Anunciai que Cristo é [C]Salvador,
[G]E boa nova que o perdido [D]salva
[Em]E do escravo faz um [C]vencedor;
[G]Do Amazonas, até ao Rio [D]Grande,
[Em]O Evangelho, ousados, [C]proclamai,
[G]E a mensagem, que da paz nos [D]fala;
[Em]Eterna glória vos dará do [C]Pai.`,
  h168:`Tom: G

Verso:
[G]Meus irmãos, nos [D]jubilemos
[Em]Em Jesus, o Rei da [C]glória,
[G]Nesta fé que [D]recebemos,
[Em]Nesta paz, que dá [C]vitória,
[G]No Consolador [D]divino,
[Em]Que aviva a [C]memória,
[G]E em nós entoa hinos a [D]Jesus.

Coro:
[G]Meus Irmãos, nos [D]jubilemos
[Em]Em Jesus, por Sua [C]bênção;
[G]Pois, assim, nós sempre [D]temos
[Em]Salvação.`,
  h170:`Tom: D

Verso:
[D]Como havia trevas no meu [A]coração,
[Bm]Quando Jesus Cristo me [G]salvou;
[D]Pela luz divina, com a Sua [A]mão,
[Bm]Todas as minhas trevas [G]dissipou!

Coro:
[D]Ao Calvário de horror, subiu [A]Jesus,
[Bm]Levando a cruz, levando a [G]cruz;
[D]Ao Calvário de horror, subiu [A]Jesus,
[Bm]Levando a minha [G]cruz!`,
  h171:`Tom: G

Verso:
[G]Era um pecador, andava sem [D]Jesus,
[Em]Não tinha esperança, nem divina [C]luz;
[G]Hoje sou remido, Cristo me [D]salvou,
[Em]Co’o Seu sangue me [C]lavou!

Coro:
[G]Que amor me concedeu [D]Jesus,
[Em]Gozo santo e celeste [C]luz;
[G]Cristo, breve, do céu [D]descerá,
[Em]E consigo, então, me [C]levará.`,
  h172:`Tom: G

Verso:
[G]Ó pecador, cansado e [D]abatido,
[Em]que neste mundo vagas, sem [C]consolação!
[G]Se queres ser, de graça, [D]revestido,
[Em]Aceita Cristo, e Sua [C]salvação.

Coro:
[G]Ó vem te entregar
[Em]Ao grande Salvador,
[G]Que veio te salvar,
[Em]E te espera, cheio de [C]amor.`,
  h173:`Tom: G

Verso:
[G]Pronto 'stamos p’ra louvar Jesus, o [D]Salvador,
[Em]Glória a Jesus e [C]aleluia!
[G]E havemos de cantar ao nosso [D]Redentor,
[Em]Glória a Jesus e [C]aleluia!

Coro:
[G]Têm os santos do [D]Senhor
[Em]O direito de cantar
[G]Que Jesus, com grande [D]amor,
[Em]Veio à terra p ‘ra [C]salvar;
[G]Nossa alma [D]resgatou,
[Em]Com Seu sangue nos [C]lavou;
[G]Glória a Jesus e [D]aleluia!`,
  h174:`Tom: G

Verso:
[G]Tenho gozo em dar [D]louvor,
[Em]Glória, aleluia, [C]glória!
[G]A Jesus, meu [D]Salvador,
[Em]Glória, aleluia, [C]glória!

Coro:
[G]Glória a Deus, Jesus me [D]salvou!
[Em]Glória a Deus, Jesus me [C]livrou!
[G]Glória a Deus, que eu salvo [D]estou!
[Em]Glória, aleluia, [C]glória!`,
  h175:`Tom: G

Verso:
[G]Irmãos amados - E [D]resgatados,
[Em]Segui avante - E [C]triunfantes,
[G]Combateremos - E [D]venceremos,
[Em]No nome santo de [C]Jesus!

Coro:
[G]No nome santo - alegre [D]canto:
[Em]Eu fui lavado - [C]Santificado;
[G]Vivi perdido - Mas sou [D]remido.
[Em]No nome santo de [C]Jesus!`,
  h176:`Tom: G

Verso:
[G]Ao Senhor que nos tem [D]feito
[Em]Sacerdotes verdadeiros,
[G]Demos-Lhe louvor e glória, sem [D]cessar;
[Em]Pois Seu sangue é [C]perfeito,
[G]Regenera por [D]inteiro,
[Em]Toda a alma, que quer se [C]salvar.

Coro:
[G]Todos, tendo a mesma [D]mente,
[Em]Jubilosos e [C]contentes,
[G]Demos glória, suma honra ao [D]Redentor:
[Em]Sobre a cruz foi [C]traspassado;
[G]Com Seu sangue [D]derramado,
[Em]Resgatou-nos o bom [C]Salvador.`,
  h177:`Tom: G

Verso:
[G]Salvo estou, Jesus [D]comprou-me
[Em]Do pecado e [C]perdição;
[G]Com Seu 'spírito já [D]selou-me
[Em]Deu-me paz no [C]coração.

Coro:
[G]Glória, glória, [D]aleluia,
[Em]Já acheis salvação;
[G]Glória, glória, [D]aleluia,
[Em]Cristo deu-me [C]redenção.`,
  h178:`Tom: D

Verso:
[D]Crendo em Cristo Jesus vim [A]obter
[Bm]Gloriosa paz, perfeita [G]paz:
[D]Inda que dores açoitem meu [A]ser,
[Bm]Tenho doce paz!

Coro:
[D]Paz, paz, gloriosa [A]paz;
[Bm]Paz, paz, perfeita [G]paz;
[D]Desde que Cristo minh’alma [A]salvou,
[Bm]Tenho doce paz!`,
  h179:`Tom: G

Verso:
[G]Redentor formoso e [D]belo,
[Em]Que habitas em [C]alvor;
[G]Na minh'alma eu [D]anelo
[Em]De ser como és Tu, [C]Senhor

Coro:
[G]Té que um dia vá, [D]remido,
[Em]No céu eu ver o [C]Redentor!
[G]Depois que eu tiver [D]cumprido
[Em]O Seu querer, por Seu [C]amor.`,
  h180:`Tom: G

Verso:
[G]Aonde fruirmos a paz, o [D]amor?
[Em]Em Cristo, somente em [C]Cristo;
[G]Aonde nós temos poder e [D]vigor?
[Em]Em Cristo, somente em [C]Cristo.

Coro:
[G]Em Cristo, em [D]Cristo,
[Em]Eu sinto em mim um gozo, sem [C]fim;
[G]É Inexplicável mas é [D]agradável
[Em]Estar no amor de [C]Cristo.`,
  h181:`Tom: G

Verso:
[G]Vem, Senhor, do bem a [D]fonte,
[Em]Vem, celeste [C]Redentor.
[G]Ajudar-me a [D]entoar-te
[Em]Dignos hinos de [C]louvor;
[G]Tu, Jesus, por mim [D]morreste,
[Em]Quero só pra Ti [C]viver;
[G]Quero em todos os [D]momentos
[Em]Tua bênção receber.`,
  h182:`Tom: A

Verso:
[A]Jesus no Getsêmane foi [E]ligado,
[F#m]E pelos ímpios foi [D]arrastado
[A]A corte, onde foi muito [E]insultado,
[F#m]E atingido, por meu [D]pecado;
[A]E a sentença da turba foi o [E]brado:
[F#m]"Que seja Cristo [D]crucificado."
[A]Vituperado e [E]flagelado
[F#m]Jesus sofreu o meu [D]pecado.
[A]Vituperado e [E]flagelado
[F#m]Jesus sofreu o meu [D]pecado.`,
  h184:`Tom: G

Verso:
[G]De meu terno [D]Salvador,
[Em]Cantarei o imenso [C]amor,
[G]Dando glória e louvor a [D]Jesus,
[Em]Pois das trevas me [C]chamou,
[G]De cadeias me [D]livrou,
[Em]E da morte me salvou meu [C]Jesus!

Coro:
[G]Meu Jesus! Meu [D]Jesus!
[Em]Que precioso é o nome de [C]Jesus!
[G]Com Seu sangue me [D]limpou;
[Em]De Seu gozo me [C]fartou;
[G]Oh! que graça me mandou, meu [D]Jesus.`,
  h185:`Tom: G

Verso:
[G]Vem Tu, ó Rei dos [D]reis.
[Em]Guiar os teus fiéis p’ra Te [C]louvar.
[G]Grande e glorioso Ser, Pai de todo o [D]poder,
[Em]Vem sobre nós reger, oh! Deus sem [C]par!`,
  h186:`Tom: Ab

Verso:
[Ab]Pela fé que uma vez me foi [Eb]dada,
[Fm]Pra seguir o Cordeiro de [Db]Deus,
[Ab]Pela graça de Deus [Eb]enviada,
[Fm]Andarei, com valor, para os [Db]céus.

Coro:
[Ab]Quero andar de valor em [Eb]valor
[Fm]E seguir a Jesus, meu [Db]Senhor;
[Ab]Té que um dia receba no [Eb]céu
[Fm]A coroa, que me dará [Db]Deus.`,
  h188:`Tom: G

Verso:
[G]Bem sei, muitos não podem [D]compreender
[Em]Porque feliz é o meu [C]viver;
[G]Entrar na Canaã de santo [D]prazer,
[Em]É gozo do céu para [C]mim.
[G]É gozo do céu para [D]mim;
[Em]Sim, gozo do céu para [C]mim;
[G]Entrar na Canaã de santo [D]prazer,
[Em]É gozo do céu para [C]mim.`,
  h189:`Tom: G

Verso:
[G]Chegado à cruz do meu bom [D]Senhor,
[Em]Prostrado aos pés do [C]Redentor,
[G]Ele ouviu todo meu [D]clamor
[Em]Glória ao Salvador.

Coro:
[G]Glória ao Salvador!
[Em]Glória ao Salvador
[G]Agora sei que Ele me [D]salvou
[Em]Glória ao Salvador!`,
  h190:`Tom: G

Verso:
[G]Oh! quanto fez Jesus por [D]mim!
[Em]Salvou-me do [C]pecado!
[G]Até à morte (triste [D]fim),
[Em]Amou-me o bem [C]amado.
[G]Com Deus, o Pai, agora [D]está
[Em]Jesus, meu [C]Advogado;
[G]Morada me concederá
[Em]Na glória, com o [C]amado.

Coro:
[G]Cristo! meu Cristo!
[Em]Teu nome é doce, [C]amado!
[G]Desejo ver-te, face a [D]face
[Em]meu Cristo bem [C]amado.`,
  h191:`Tom: G

Verso:
[G]O meu Jesus, por mim, [D]morreu
[Em]Na cruz, com dor [C]horrenda;
[G]Ali em meu lugar [D]sofreu,
[Em]Angustia mui [C]tremenda!
[G]Quem poderei no mundo [D]achar.
[Em]Que a meu Jesus vá [C]comparar?
[G]Jesus. Jesus, somente vou [D]amar!`,
  h192:`Tom: G

Verso:
[G]Pelo mundo brilha a [D]luz,
[Em]Desde que morreu [C]Jesus.
[G]Pendurado lá na cruz do [D]Calvário!
[Em]Os pecados carregou
[G]E de culpa nos [D]livrou,
[Em]Com o sangue que manou, no [C]Calvário!

Coro:
[G]Pelo sangue, pelo [D]sangue,
[Em]Somos redimidos, [C]sim
[G]Pelo sangue [D]carmesim;
[Em]Pelo sangue, pelo [C]sangue.
[G]Pelo sangue de Jesus, no [D]Calvário!`,
  h193:`Tom: E

Verso:
[E]Se tu, minh'alma, a Deus [B]suplicas,
[C#m]E não recebes, confiando [A]fica
[E]Em Suas promessas, que são mui [B]ricas,
[C#m]E infalíveis pra te [A]valer.

Coro:
[E]Por que te abates, ó minha [B]alma?
[C#m]E te comoves, perdendo a [A]calma?
[E]Não tenhas medo, em Deus [B]espera,
[C#m]Porque bem cedo, Jesus [A]virá.`,
  h194:`Tom: G

Verso:
[G]Há quem vele as [D]pisadas
[Em]Que eu dou na sombra ou [C]luz,
[G]Pelas sendas [D]escarpadas,
[Em]Velará por mim [C]Jesus;
[G]Pelos vales, pelos [D]montes,
[Em]Me conduz a Sua [C]mão;
[G]Vejo já os [D]horizontes
[Em]Duma perene mansão.

Coro:
[G]Há quem vele as [D]pisadas,
[Em]Minha senda [C]traçará;
[G]Para as célicas [D]moradas,
[Em]Sim, Jesus me [C]guiará`,
  h195:`Tom: D

Verso:
[D]Benigno Salvador! Com Tua [A]aprovação,
[Bm]Consagra em doce amor esta feliz [G]união,
[D]E sobre os noivos faz [A]descer
[Bm]A graça que lhes é [G]mister.`,
  h196:`Tom: G

Verso:
[G]Já achei uma flor [D]gloriosa,
[Em]E quem deseja a mesma [C]terá;
[G]A rosa de Saron [D]preciosa
[Em]Entre mil mais beleza [C]terá;
[G]No vale de sombra e [D]morte,
[Em]Nas alturas de glória e [C]luz,
[G]Esta rosa será a minha [D]sorte,
[Em]Precioso p’ra mim é [C]Jesus!

Coro:
[G]Precioso p’ra mim é [D]Jesus!
[Em]Precioso p?a mim é [C]Jesus!
[G]Eu confesso na vida e na [D]morte
[Em]Que tudo p’ra mim é [C]Jesus!`,
  h197:`Tom: G

Verso:
[G]No céu foi Jesus preparar-nos [D]lugar.
[Em]Na glória.
[G]E breve, mui breve Ele há de [D]voltar,
[Em]Em glória.

Coro:
[G]Eu sal, eu sei, eu tenho um lar na [D]glória!
[Em]Oh! eu sei, eu sei, um lar no [C]céu!`,
  h198:`Tom: F

Verso:
[F]Achei um bom amigo,
[Dm]Jesus, o Salvador,
[F]O escolhido dos milhares para [C]mim;
[Dm]Dos vales é o lírio; é o forte [Bb]Mediador,
[F]Que me purifica e guarde para [C]Si,
[Dm]Consolador amado, meu protetor do [Bb]mal,
[F]Solicitude minha toma a [C]Si.

Coro:
[F]Dos vales é o lírio, a estrela da [C]manhã,
[Dm]O escolhido dos milhares para [Bb]mim.
[F]Consolador amado, meu protetor do [C]mal,
[Dm]Solicitude minha toma a [Bb]Si,
[F]Dos vales é o lírio, a estrela da [C]manhã,
[Dm]O escolhido dos milhares para [Bb]mim.`,
  h199:`Tom: G

Verso:
[G]Senhor, reunidos [D]aqui
[Em]A fim da Tua morte [C]lembrar;
[G]Partindo este pão nos lembramos de [D]Ti,
[Em]Até que nos venhas [C]buscar.`,
  h200:`Tom: G

Verso:
[G]Quão, bondoso amigo é [D]Cristo!
[Em]Carregou co’a nossa [C]dor,
[G]E nos manda que [D]levemos
[Em]Os cuidados ao [C]Senhor.
[G]Falta ao coração [D]dorido
[Em]Gozo, paz, [C]consolação?
[G]Isso é porque não [D]levamos
[Em]Tudo a Deus em [C]oração.`,
  h201:`Tom: G

Verso:
[G]Oh! Dia alegre! Eu [D]abracei
[Em]Jesus, e nEle [C]salvação!
[G]O gozo deste [D]coração
[Em]Eu mais e mais [C]publicarei.

Coro:
[G]Dia feliz! Dia [D]feliz!
[Em]Quando em Jesus me [C]satisfiz!
[G]Jesus me ensina a [D]vigiar.
[Em]E confiante nEle, [C]orar,
[G]Dia feliz! Dia [D]feliz!
[Em]Quando em Jesus me [C]satisfiz!`,
  h202:`Tom: G

Verso:
[G]Junto ao trono de Deus [D]preparado
[Em]Há, cristão, um lugar para [C]ti;
[G]Há perfumes, há gozo [D]exaltado.
[Em]Há delicias profusas [C]ali;
[G]Sim, ali; sim, ali,
[Em]De Seus anjos fiéis [C]rodeado,
[G]Numa esfera de glória e de [D]luz,
[Em]Junto a Deus nos espera [C]Jesus.`,
  h203:`Tom: G

Verso:
[G]O mundo de ilusão [D]deixei,
[Em]A senda de pecado e [C]dor,
[G]Pra ir ao meu glorioso [D]lar;
[Em]Ali há gozo, paz e [C]amor.

Coro:
[G]No mundo não está meu [D]lar,
[Em]Aqui não posso [C]descansar;
[G]Mas quero sempre [D]avançar:
[Em]No céu em breve hei de [C]entrar.`,
  h204:`Tom: G

Verso:
[G]Sou peregrino na [D]terra
[Em]E longe estou do meu [C]lar,
[G]Mlnh'alma anelante [D]espera
[Em]Que Cristo a venha [C]buscar;
[G]Aqui só há [D]descrença,
[Em]As lutas não têm [C]fim,
[G]Mas de Jesus, a [D]presença,
[Em]Glória será para [C]mim!

Coro:
[G]No céu de luz vou [D]descansar,
[Em]Com meu Jesus hei de [C]morar.`,
  h206:`Tom: G

Verso:
[G]O clarim já nos [D]alerta,
[Em]Nosso coração [C]desperta,
[G]Pois a vinda é bem certa de [D]Jesus;
[Em]De mil anjos [C]rodeado,
[G]Para o crente [D]preparado,
[Em]Cristo volta coroado. [C]Aleluia!

Coro:
[G]Ó irmão por Deus [D]liberto,
[Em]Pelo sangue estás [C]coberto;
[G]Tens o teu perdão bem certo, salvo [D]estás;
[Em]Voz de júbilo [C]ouviremos
[G]E no céu nós [D]cantaremos,
[Em]Cristo breve nós veremos. [C]Aleluia!`,
  h207:`Tom: G

Verso:
[G]Jerusalém divina
[Em]Visão de paz [C]ditosa,
[G]De Cristo, santa [D]esposa,
[Em]Radiante de [C]esplendor;
[G]Tens fontes [D]cristalinas,
[Em]São vivos teus [C]altares
[G]E os anjos, aos [D]milhares,
[Em]Te cingem ao redor.`,
  h208:`Tom: G

Verso:
[G]Hoje queres te entregar p'ra Jesus [D]Cristo,
[Em]Ó cansado e triste [C]pecador?
[G]Para aquele, que, no Gólgota. foi [D]visto
[Em]Padecendo nossa culpa, nossa [C]dor?

Coro:
[G]Vem a Cristo, vem a [D]Cristo,
[Em]Que te chama com amor [C]celestial;
[G]Vem a Cristo, vem a [D]Cristo,
[Em]Pois Jesus é o rochedo [C]divinal.`,
  h209:`Tom: G

Verso:
[G]Escuta a voz do bom [D]Pastor
[Em]Em esplendorosa [C]solidão,
[G]Chama ao cordeiro que em [D]temor
[Em]Vaga na densa [C]escuridão.

Coro:
[G]Hoje vem a Jesus,
[Em]Ao bondoso [C]Salvador,
[G]Receber Sua luz.
[Em]Vem a Cristo, o bom [C]Pastor.`,
  h210:`Tom: F

Verso:
[F]Fala, fala, Senhor, nesta [C]hora,
[Dm]Que ansioso te quero [Bb]ouvir;
[F]Teu falar dá valor e [C]restaura,
[Dm]E mais sábio me faz no [Bb]porvir.

Coro:
[F]Oh! Bendito o Teu nome em [C]eterno,
[Dm]Que Tu falas a quem [Bb]escutar,
[F]De saúde e repouso [C]superno,
[Dm]De alegria e paz [Bb]eternal.`,
  h211:`Tom: G

Verso:
[G]Vem, enquanto Deus te [D]chama
[Em]E tu sentes Seu [C]amor,
[G]Pois do céu poder [D]derrama
[Em]Pra salvar o [C]pecador!

Coro:
[G]Vem a Deus, a [D]Jesus,
[Em]entregar teu [C]coração;
[G]E terás Sua luz...
[Em]A perfeita [C]salvação!`,
  h212:`Tom: Bb

Verso:
[Bb]Os guerreiros se preparam para a grande [F]luta
[Gm]É Jesus, o Capitão, que avante os [Eb]levará.
[Bb]A mílicia dos remidos marcha [F]impoluta;
[Gm]Certa que vitória [Eb]alcançará!

Coro:
[Bb]Eu quero estar com [F]Cristo,
[Gm]Onde a luta se [Eb]travar,
[Bb]No lance imprevisto
[Gm]Na frente [Eb]m’encontrar.
[Bb]Até que O possa ver na [F]glória,
[Gm]Se alegrando da [Eb]vitória,
[Bb]Onde Deus vai me [F]coroar!`,
  h213:`Tom: G

Verso:
[G]Sobre a terra vou [D]andando,
[Em]Bem alegre para o [C]céu,
[G]Satisfeito e [D]salmodiando
[Em]Ao bondoso Deus;
[G]Com ferozes [D]inimigos
[Em]Pelejando sempre [C]estou,
[G]Mas conservo paz [D]comigo,
[Em]Pois amado sou.`,
  h214:`Tom: G

Verso:
[G]Nosso Redentor foi [D]preparar
[Em]Um lugar de repouso e [C]esplendor;
[G]Brevemente chamará para a casa a [D]descansar,
[Em]Nós, os salvos, do mundo [C]enganador.

Coro:
[G]Desejamos Ir lá,
[Em]Desejamos Ir lá;
[G]Que alegria será,
[Em]Quando nós nos encontrarmos [C]lá.`,
  h215:`Tom: G

Verso:
[G]Neste mundo a vera [D]Igreja,
[Em]Peregrina vai [C]andar,
[G]Anelando que esteja
[Em]No seu verdadeiro [C]lar.

Coro:
[G]Ver-nos-emos, ver-nos-emos,
[Em]Ver-nos-emos na terra [C]divinal;
[G]Ver-nos-emos, ver-nos-emos,
[Em]Ver-nos-emos junto ao rio sem [C]igual.`,
  h216:`Tom: G

Verso:
[G]Louvai a Deus, com júbilo, [D]cantando,
[Em]E Seu amor ao mundo [C]anunciai!
[G]De Cristo. as glórias, juntos [D]celebrando;
[Em]Do Salvador, a fama [C]publicai.

Coro:
[G]Os prodígios [D]cantaremos
[Em]De Jesus, o [C]Redentor;
[G]Força, vida, bens [D]daremos
[Em]P’ra falar do Seu [C]amor!`,
  h217:`Tom: G

Verso:
[G]Cristo com voz [D]amorosa
[Em]Chama-te pra Sua [C]luz,
[G]Torna tua alma [D]ditosa
[Em]Se carregares a [C]cruz.

Coro:
[G]Ouve Sua voz a [D]chamar!
[Em]Cristo te quer [C]libertar;
[G]Fala com voz [D]amorosa:
[Em]“Paz hoje quero te [C]dar”.`,
  h218:`Tom: G

Verso:
[G]Só em Jesus, queres tu [D]descansar?
[Em]Dá teu fardo a [C]Jesus.
[G]Paz e socorro não podes [D]achar?
[Em]Dá teu fardo a [C]Jesus.

Coro:
[G]Dá teu fardo a [D]Jesus,
[Em]As trevas fará em [C]luz.
[G]Em Cristo um abrigo, terás no [D]perigo,
[Em]Ó, dá teu fardo a [C]Jesus.`,
  h219:`Tom: D

Verso:
[D]Os raios do amor de [A]Deus,
[Bm]Brilharam na [G]minh’alma,
[D]E o fim eu vi dos dias [A]meus,
[Bm]Também Um que me [G]salva;
[D]Eu tenho já do céu a [A]luz.
[Bm]Das trevas fui [G]liberto,
[D]Agora Cristo me [A]conduz
[Bm]Nas plagas do [G]deserto!

Coro:
[D]O Teu amor, ó [A]Criador,
[Bm]Se revelou ali na [G]cruz.
[D]Quando expirou em meu [A]lugar
[Bm]Quem me salvou: - o meu [G]Jesus.`,
  h220:`Tom: A

Verso:
[A]Para os campos a [E]segar,
[F#m]Eis o trigo a [D]lourejar,
[A]Ide ceifar, ide [E]segar;
[F#m]Todo dia trabalhai
[A]E só de Jesus [E]falai;
[F#m]Ide ceifar, ide [D]pregar!

Coro:
[A]Ide segar, ide [E]ceifar!
[F#m]Sim, trabalhai, e [D]proclamai!
[A]Eis que o amor do [E]Salvador
[F#m]Vos impele ao Seu [D]labor
[A]Sem demorar, ide [E]segar.`,
  h221:`Tom: D

Verso:
[D]Eis-me a Teus pés, Senhor, opera em [A]mim!
[Bm]Espero mais vigor, opera em [G]mim!
[D]Eu gozo vou fruir, se Tua lei [A]cumprir:
[Bm]O dá-me Teu amor: opera em [G]mim!`,
  h222:`Tom: G

Verso:
[G]Vem a Jesus; ó [D]perdido,
[Em]Vem a Jesus como [C]estás;
[G]O sangue na cruz [D]vertido,.
[Em]Dar-te-á graça e [C]paz.

Coro:
[G]Vem a Jesus, sem [D]demora;
[Em]ó crê no Filho de [C]Deus!
[G]Ele te salva agora,
[Em]Quer te guiar para o [C]céu.`,
  h223:`Tom: G

Verso:
[G]Em escuridão, sem Jesus, me [D]vi,
[Em]Com mil penas e grande [C]dor;
[G]Mas Jesus chamou: "Vem, sim, vem a [D]Mim,
[Em]Quero ser teu [C]Salvador".

Coro:
[G]Na minh ‘alma reina [D]paz;
[Em]Desde que vim a [C]Jesus;
[G]Tenho sempre paz
[Em]E gozo mui veraz.
[G]Pois avistei de Deus, a [D]luz!`,
  h224:`Tom: G

Verso:
[G]É o tempo de segar e tu sem [D]vacilar,
[Em]Declaraste sem temor: “Não posso [C]trabalhar?”
[G]Vem, enquanto Cristo, o Mestre, está a te [D]chamar:
[Em]"Jovem, jovem, ó vem [C]trabalhar!"

Coro:
[G]Vem e vê os campos brancos já [D]estão
[Em]Aguardando braços que os [C]segarão;
[G]Jovem, desperta, faz-te pronto e [D]alerta!
[Em]Queiras logo responder: “Eis-me aqui, [C]Senhor”
[G]Olha que a seara bem madura [D]está;
[Em]Que colheita gloriosa não [C]será!
[G]Jovem, desperta. Faz-te pronto e [D]alerta!
[Em]Poucos dias são que restam para o [C]segador!`,
  h225:`Tom: G

Verso:
[G]Na batalha contra o mal, sê [D]valente!
[Em]Segue em marcha triunfal, sê [C]valente!
[G]Olha o alvo que á [D]Jesus,
[Em]Que à vitória te [C]conduz;
[G]Ó não deixes tua [D]cruz,
[Em]Sê valente!

Coro:
[G]Sê valente! Pelejando por [D]Jesus,
[Em]Sê valente! Nunca rejeitando a [C]cruz!
[G]Firme sempre no [D]amor,
[Em]Com indômito valor,
[G]Cheio do [D]Consolador,
[Em]Sê valente!`,
  h226:`Tom: D

Verso:
[D]Cristo, Teu Santo amor deste para [A]mim
[Bm]Nada pra Ti, Senhor, negarei [G]aqui;
[D]Me prostro em [A]gratidão,
[Bm]Cumpro com [G]prontidão,
[D]Me guia Tua mão, oh! me rendo a [A]Ti.`,
  h228:`Tom: G

Verso:
[G]Este mundo não [D]compreende.
[Em]Quão alegre é o meu [C]viver,
[G]Mas a Cristo quem [D]atende,
[Em]Do céu pode o gozo [C]ter.

Coro:
[G]Mesmo quando em [D]aflição,
[Em]Gozo a paz de Deus;
[G]Cristo ao meu [D]coração,
[Em]Gozo traz dos céus,
[G]Se com Cristo aqui [D]viver,
[Em]Tão glorioso é,
[G]Maior glória hei de [D]ter,
[Em]Se eu guardar sempre a [C]fé.`,
  h229:`Tom: G

Verso:
[G]Jesus, á meigo [D]Salvador,
[Em]Do céu, à terra és [C]vindo,
[G]E nos Teus braços com [D]dulçor,
[Em]Oh! vai-me [C]conduzindo;
[G]Assim eu vou [D]seguindo
[Em]Na Tua luz [C]perfeita,
[G]Que sempre me [D]deleita;
[Em]Tua Palavra, oh, [C]Senhor!`,
  h230:`Tom: G

Verso:
[G]Nós vogamos, o mar [D]vencemos,
[Em]Nesta nau que nos [C]conduz,
[G]Um naufrágio não [D]tememos,
[Em]Pois ao leme vai [C]Jesus.

Coro:
[G]Vem amigo, pois te [D]amamos,
[Em]Sem tardar, que nós Já [C]vamos;
[G]A tormenta não [D]olhamos
[Em]E rumamos para o [C]céu.
[G]A tormenta não [D]olhamos
[Em]E rumamos para o [C]céu.`,
  h231:`Tom: A

Verso:
[A]Nós, os salvos do [E]Senhor,
[F#m]Caminhemos com [D]valor;
[A]Ele guarda o [E]coração,
[F#m]Cristo é a nossa [D]salvação.

Coro:
[A]Não foi com ouro que nos comprou [E]Jesus,
[F#m]Mas com Seu sangue vertido lá na [D]cruz;
[A]Nós, que somos salvos, vamos sem [E]temer,
[F#m]Sempre por Seu sangue o mal [D]vencer.`,
  h232:`Tom: G

Verso:
[G]Bem-aventurados são
[Em]Os de limpo [C]coração,
[G]Que não buscam as riquezas para [D]si;
[Em]A tranqüilidade e [C]paz,
[G]Que desfrutam, oh, [D]jamais,
[Em]Poderão discriminadas ser por [C]mim!

Coro:
[G]Oh, Cantemos [D]aleluia!
[Em]Jubilosos, com [C]poder!
[G]Bem Alegres, com [D]fervor,
[Em]Demos a Jesus [C]louvor,
[G]E mais gozo vamos dEle [D]receber!`,
  h233:`Tom: G

Verso:
[G]Ó Jesus Cristo, aqui [D]estamos
[Em]Unidos todos em um [C]lugar,
[G]Pra Tua morte nós [D]relembrarmos,
[Em]Que Tu quiseste por nós [C]provar.`,
  h234:`Tom: G

Verso:
[G]O gozo dos santos é o amor de [D]Jesus.
[Em]Grande é este amor que paz nos [C]produz!
[G]A fonte da vida, que nos dá [D]vigor,
[Em]É o sangue de Cristo vertido em [C]dor!

Coro:
[G]Oh! Vê ali na cruz a graça de [D]Jesus,
[Em]Amor potente, que gozo [C]produz!`,
  h235:`Tom: G

Verso:
[G]Comprado com sangue de [D]Cristo,
[Em]Alegre ao céu, sim eu [C]vou;
[G]Liberto do vício [D]maldito,
[Em]Já sei que de Deus, filho [C]sou.

Coro:
[G]Já sei, já sei,
[Em]Comprado com sangue eu [C]sou;
[G]Já sei, já sei,
[Em]Com Cristo ao céu, sim eu [C]vou.`,
  h236:`Tom: D

Verso:
[D]Sobre a cruz o bom [A]Cordeiro,
[Bm]Dura morte já [G]provou,
[D]Por nós todos no [A]madeiro,
[Bm]Para Deus Pai nos [G]comprou;
[D]Com Seu sangue tem [A]lavado
[Bm]Nossa alma imortal,
[D]E também nos [A]resgatado
[Bm]Do poder do mal.

Coro:
[D]Já nos lavou, Já nos [A]lavou,
[Bm]Com Seu precioso sangue, Jesus, [G]Salvador.
[D]Nos libertou, nos [A]libertou,
[Bm]Com Seu precioso sangue do vil [G]tentador.`,
  h237:`Tom: G

Verso:
[G]O Noivo estamos prontos pra [D]encontrar,
[Em]Eis que do céu [C]virá.
[G]Com nossas luzes vamos [D]esperar,
[Em]Jesus não tardará!

Coro:
[G]Oh! que gozo preparado [D]está,
[Em]Para os servos do Senhor [C]Jesus;
[G]Breve Cristo do céu [D]voltará
[Em]Em gloriosa luz!`,
  h238:`Tom: G

Verso:
[G]Ó pecador [D]desalentado
[Em]Vem a Jesus, teu [C]Salvador;
[G]Por que viver [D]atribulado?
[Em]Vem a Jesus, teu [C]Salvador;
[G]Eis o Cristo te [D]chamando,
[Em]Pois quer te dar Seu grande [C]amor,
[G]Vem nos Seus braços te [D]lançando
[Em]Vem a Jesus, o teu [C]Salvador.`,
  h239:`Tom: G

Verso:
[G]Vem á Senhor, e [D]completa
[Em]A obra Tua em mim:
[G]Torna a minha alma [D]dileta,
[Em]Enchendo-me de Ti.

Coro:
[G]Ó manda agora,
[Em]O bom Consolador;
[G]Minh’alma Te [D]implora,
[Em]O meu amado Senhor!`,
  h241:`Tom: C

Verso:
[C]P'ra Sião marchamos sem algum [G]temor,
[Am]Por fé nos chamamos filhos do [F]Senhor;
[C]Presto caminhamos, sem pra trás [G]olhar,
[Am]Com Jesus nós vamos, não podemos [F]errar.

Coro:
[C]Marchemos sem temor, repletos de [G]valor,
[Am]Marchemos nas pisadas do bom [F]Redentor;
[C]Depressa, sem tardar, até no céu [G]entrar;
[Am]Por Jesus podemos sempre [F]triunfar.`,
  h242:`Tom: C

Verso:
[C]Música

Coro:
[C]Que eterna glória vou no céu [G]gozar!
[Am]Com Jesus, que do pecado me [F]salvou;
[C]Santa paz e alegria lá no céu vou [G]desfrutar;
[Am]Eterna glória Cristo me [F]comprou!`,
  h244:`Tom: G

Verso:
[G]Louvai a Jesus, [D]amoroso;
[Em]Na cruz os pecados [C]levou,
[G]Que nos enche de Santo [D]gozo;
[Em]Com sangue o céu nos [C]ganhou.

Coro:
[G]Ao meu Senhor,
[Em]Que tenho no meu [C]coração,
[G]Eu dou louvor,
[Em]Pois Ele me deu [C]salvação.`,
  h245:`Tom: G

Verso:
[G]A paz e gozo Jesus já me [D]deu,
[Em]Ele pra isso ao mundo [C]baixou;
[G]Para salvar-me, Seu sangue [D]verteu,
[Em]Quando por mim na cruz [C]expirou.

Coro:
[G]Paz de Deus em Jesus [D]encontrei,
[Em]Pois tenho gozo no [C]coração;
[G]Honra e glória [D]tributarei
[Em]Ao que me trouxe a [C]salvação.`,
  h246:`Tom: G

Verso:
[G]Tens descanso encontrado em Jesus [D]Cristo?
[Em]Permaneces pela graça que Ele [C]deu?
[G]Tens tu paz com teu Salvador [D]bendito?
[Em]Plenitude do Espírito de [C]Deus?

Coro:
[G]Tens descanso encontrado em Jesus [D]Cristo?
[Em]Permaneces pela graça que Ele [C]deu?
[G]Plena paz, consolação, acharás na [D]oração:
[Em]Deus aí vitória aos santos [C]concedeu.`,
  h247:`Tom: G

Verso:
[G]Deus nos guarde bem no Seu [D]amor;
[Em]Onde quer que nos [C]achemos,
[G]O Seu nome [D]louvaremos;
[Em]Deus nos guarde bem no Seu [C]amor!

Coro:
[G]Ao voltar Jesus vamos nós [D]estar
[Em]Livres de qualquer [C]separação;
[G]U’a coroa, então vamos, sim, [D]formar,
[Em]Lá no céu, na eternal [C]mansão.`,
  h248:`Tom: G

Verso:
[G]Já perto de Betfagé, o Mestre [D]ordenou:
[Em]“Ó ide à aldeia, que avistando [C]estou,
[G]Trazei-Me um jumentinho, no qual ninguém [D]montou
[Em]Dizei aos que perguntem: "Jesus [C]requisitou".

Coro:
[G]Hosana e glória davam ao Senhor [D]Jesus,
[Em]O Rei que vem trazendo amor, poder e [C]luz;
[G]Também vem concedendo eficaz [D]perdão;
[Em]Por isso O louvam de todo o [C]coração.`,
  h249:`Tom: G

Verso:
[G]Ó vem, Senhor, e habita no meu [D]coração;
[Em]Dá-me a graça bendita por Tua [C]compaixão.

Coro:
[G]Ó meu Deus vem [D]dar-me
[Em]O dom do [C]Consolador;
[G]Vem hoje selar-me,
[Em]Enchendo-me do Teu [C]amor!`,
  h250:`Tom: G

Verso:
[G]A Cristo unida está a [D]minh'alma,
[Em]Pois nEle eu tenho meu vero [C]sustento;
[G]Me enche de gozo do céu, e de [D]calma;
[Em]Também me ensina os seus [C]mandamentos.

Coro:
[G]Ó Noiva de Jesus, apronta-te para [D]ir
[Em]Para o eterno e santo [C]reinado;
[G]Que divinal amor irás lá, então, [D]fruir
[Em]Com Jesus Cristo, o teu [C]amado!`,
  h251:`Tom: Eb

Verso:
[Eb]Ao outro culto; não [Bb]faltar,
[Cm]Ó vinde todos p'ra [Ab]louvar
[Eb]O nome santo do [Bb]Senhor,
[Cm]Que nos dá vida e [Ab]fervor.`,
  h252:`Tom: F

Verso:
[F]Santo, santo és Tu, [C]Senhor,
[Dm]Em Teu louvor eu vou [Bb]cantar
[F]Com esperança, ó Deus de [C]amor;
[Dm]Tu me queres [Bb]consolar;
[F]Eu te peço, ó meu [C]Jesus,
[Dm]Só Tu és meu [Bb]Salvador,
[F]Que me faças andar na [C]luz;
[Dm]Santo és, meu [Bb]Redentor!

Coro:
[F]Ao meu Jesus eu [C]cantarei
[Dm]Entrando na feliz [Bb]Sião;
[F]Oh! Santo, santo, [C]proclamarei
[Dm]Na minha eternal [Bb]mansão,
[F]Com os anjos e [C]serafins,
[Dm]Santo! Sempre vou [Bb]cantar
[F]Com Arcanjos e [C]querubins;
[Dm]A Jesus eu vou [Bb]adorar.`,
  h253:`Tom: G

Verso:
[G]Avante, ó crentes, o mal [D]desfazendo,
[Em]O inimigo com a luz [C]combateremos;
[G]A peleja pois, todos, não [D]temendo,
[Em]A vitória por Jesus [C]receberemos.

Coro:
[G]Com a graça de Jesus nos [D]firmaremos,
[Em]Com a graça de Jesus, [C]combateremos,
[G]Com a graça de Jesus nos [D]venceremos,
[Em]Com a graça de Jesus vitória [C]temos.`,
  h255:`Tom: A

Verso:
[A]Na cruz morrendo meu [E]redentor;
[F#m]Minhas maldades todas [D]levou;
[A]Se O recebes, tens Seu [E]amor,
[F#m]Pois teus pecados, Jesus [D]perdoou.

Coro:
[A]Quando Deus, o Sangue [E]vir,
[F#m]Que Jesus já [D]verteu,
[A]Passará sem te [E]ferir,
[F#m]No Egito assim [D]sucedeu.`,
  h256:`Tom: G

Verso:
[G]Abandona este mar,
[Em]Onde podes [C]naufragar;
[G]Abandona este mundo de [D]horror,
[Em]A maré te levará,
[G]O teu barco [D]quebrará,
[Em]Ó aceita a Jesus, o [C]Salvador!

Coro:
[G]Abandona já duma [D]vez,
[Em]Este proceloso mar.
[G]Hoje sem tardar;
[Em]do castigo eternal,
[G]E de morte tão [D]falta,
[Em]Foge logo pecador com [C]rapidez,`,
  h257:`Tom: G

Verso:
[G]Amoroso Salvador,
[Em]Sem igual é teu [C]perdão;
[G]Só Tu és meu [D]redentor
[Em]E perfeita [C]salvação.`,
  h258:`Tom: D

Verso:
[D]Uma Salvador meigo é Cristo [A]Jesus,
[Bm]Pois ele minh'alma [G]salvou;
[D]Também meus pecados tomou sobre [A]si,
[Bm]Na cruz quando me [G]resgatou.

Coro:
[D]Na rocha eterna firmado estou [A]eu,
[Bm]E tenho a salvação;
[D]Me esconde Jesus Cristo no manto [A]Seus,
[Bm]Velando-me com Sua [G]mão.
[D]Velando-me com sua [A]mão.`,
  h259:`Tom: D

Verso:
[D]Música

Coro:
[D]Creio eu na Bíblia, livro de meu [A]Deus;
[Bm]Para mim a Bíblia é o maná dos [G]céus!
[D]Mostra-me o caminho para o lar [A]celestial;
[Bm]Acho eu na bíblia, graça [G]divinal!`,
  h260:`Tom: G

Verso:
[G]Irmãos avante, avante com nosso [D]Capitão,
[Em]Seremos triunfantes, não lutareis em [C]vão!
[G]Vitória esperamos, vitória Deus [D]dará,
[Em]Se firmes pelejarmos, sim, contra [C]Goliá.

Coro:
[G]Avante, avante, as trevas [D]dissipai
[Em]com o supremo Capitão, avante! Vitória [C]alcançai!`,
  h261:`Tom: D

Verso:
[D]Alma triste, [A]abatida,
[Bm]Que tens medo de [G]morrer;
[D]Por um triz, atua [A]vida,
[Bm]Pode hoje perecer;
[D]Vê nos mares e nas [A]dores,
[Bm]Um farol jorrando [G]luz,
[D]Que te enche de [A]louvores:
[Bm]É Jesus, sim, é [G]Jesus!`,
  h262:`Tom: G

Verso:
[G]Senhor, estás comigo em todo [D]tempo,
[Em]Fazendo-me feliz no [C]sofrimento,
[G]O dá-me cada dia o Teu [D]sustento
[Em]E graça p’ra cumprir Teu [C]mandamento.

Coro:
[G]Sim, estás comigo em todo [D]tempo,
[Em]Tu es o meu maná, meu [C]alimento;
[G]Jesus, estás comigo em todo [D]tempo,
[Em]O dá-me Tua vida; Teu [C]Sustento.`,
  h264:`Tom: G

Verso:
[G]Ó Pai celeste no nome [D]santo
[Em]Do Teu amado Filho [C]Jesus,
[G]Grato Te sela o nosso [D]canto,
[Em]Que reverente Tua grei [C]produz;
[G]Ó Deus, preside Teu povo [D]unido,
[Em]Com Tua graça e com Teu [C]poder,
[G]No Santo Espírito já [D]recebido,
[Em]Nós desejamos aqui [C]viver.`,
  h265:`Tom: G

Verso:
[G]Oh! quão doce é crer em [D]Cristo.
[Em]E entregar-se a [C]Jesus,
[G]Esperar em Suas [D]promessas
[Em]E andar na Sua luz!

Coro:
[G]Jesus Cristo, Jesus [D]Cristo,
[Em]Teu amor me deste a [C]mim!
[G]Jesus Cristo, Jesus [D]Cristo,
[Em]Sempre quero crer em [C]Ti.`,
  h266:`Tom: G

Verso:
[G]Nós resgatados [D]fomos,
[Em]Por quem nos quis [C]salvar;
[G]Em Cristo livres [D]somos,
[Em]Pra nunca mais [C]pecar!
[G]Em Cristo livres [D]somos,
[Em]Pra nunca mais [C]pecar!

Coro:
[G]Resgatados fomos,
[Em]Resgatados fomos,
[G]Resgatados fomos,
[Em]P’ra nunca mais [C]pecar!`,
  h267:`Tom: G

Verso:
[G]Vai chegando mais perto e causando [D]terror,
[Em]A predita enchente de pecados e [C]dor;
[G]Mas eu sei que potente é a mão do [D]Senhor,
[Em]Por isso, tranquilo, não tenho [C]temor.

Coro:
[G]É Jesus minha força, meu amado [D]Senhor,
[Em]Se Ele é o guarda, não tenho [C]temor;
[G]Eu desejo encher-me do Seu grande [D]amor,
[Em]Vivendo na graça do meu [C]Salvador.`,
  h268:`Tom: G

Verso:
[G]Sê tu, em Deus [D]confiante;
[Em]Ora muito a Jesus,
[G]E alegre, [D]triunfante,
[Em]Leva sempre tua [C]cruz.
[G]No Senhor tem [D]esperança;
[Em]Pois te guia Sua [C]mão;
[G]Vem a Ele, sem [D]tardança,
[Em]E terás consolação.

Coro:
[G]Glória, glória. Aleluia, aleluia a [D]Jesus!
[Em]Aleluia! Glória a [C]Jesus!
[G]Glória, glória. Aleluia, aleluia a [D]Jesus!
[Em]Aleluia ao Redentor! [C]Amém.`,
  h269:`Tom: G

Verso:
[G]Louvarei ao meu [D]amado;
[Em]Sobre todos [C]exaltado;
[G]Por Seu sangue fui [D]comprado;
[Em]Todo dEle sou.`,
  h270:`Tom: G

Verso:
[G]Sinto prazer [D]louvando
[Em]Ao nosso Criador,
[G]E gozo celebrando
[Em]Os feitos do [C]Senhor;
[G]Saber que sou [D]lavado
[Em]No sangue de Jesus.
[G]Também que sou [D]guiado,
[Em]Pela divina luz!

Coro:
[G]Alegre irei avante,
[Em]Unido ao Salvador;
[G]Cantando triunfante,
[Em]Ao nosso Criador!`,
  h271:`Tom: G

Verso:
[G]Lá na mansão do [D]Salvador,
[Em]Não há, jamais, [C]tribulação;
[G]Nenhum pesar, nenhuma [D]dor,
[Em]Que me quebrante o [C]coração.

Coro:
[G]Ali não há tristeza e [D]dor,
[Em]Nenhum pesar, nem [C]aflição;
[G]Quando eu estiver morando [D]lá
[Em]Direi: Não há [C]tribulação.`,
  h272:`Tom: D

Verso:
[D]Quando Jesus [A]aparecer,
[Bm]Que festa para nós há de [G]ser,
[D]Ao céu de luz iremos [A]ter,
[Bm]P’ra desfrutar eterno [G]prazer,
[D]Quando ao Seu Pai nos [A]apresentar,
[Bm]Que alegria no céu [G]haverá;
[D]No trono Seu teremos [A]lugar,
[Bm]Em nossa fronte coroa [G]porá.`,
  h273:`Tom: G

Verso:
[G]Quer nas trevas quer na [D]luz,
[Em]Só a Ti recorrerei,
[G]Só ali meu bom [D]Jesus,
[Em]E socorro acharei.

Coro:
[G]Só a Ti, meu [D]Senhor,
[Em]Só a Ti recorrerei;
[G]Só em Ti, Salvador,
[Em]Um refúgio [C]encontrarei!`,
  h274:`Tom: G

Verso:
[G]O mundo perdido em pecado se [D]achou,
[Em]Jesus é a luz do [C]mundo;
[G]Mas nas densas trevas a glória [D]brilhou,
[Em]Jesus é a luz do [C]mundo!

Coro:
[G]Vem para a luz, não queiras [D]perder
[Em]Perfeita paz, dum novo [C]viver:
[G]Eu cego fui, mas Já posso [D]ver,
[Em]Jesus é a luz do [C]mundo!`,
  h275:`Tom: G

Verso:
[G]Ó acorda, desperta [D]dormente,
[Em]Tu que jazes no sono da [C]morte,
[G]E que tens uma tão triste [D]sorte.
[Em]Ó desperta por Cristo, o [C]Senhor!
[G]Pois te chama o fiel [D]Salvador,
[Em]O Seu sangue na cruz já [C]derramou,
[G]Teus pecados ali [D]aniquilou,
[Em]E respondes: "Não quero, [C]Senhor?”`,
  h276:`Tom: G

Verso:
[G]Em Canaã eu entrarei, no meu país [D]ditoso,
[Em]E em Sião habitarei; que paz ali [C]terei
[G]Com meu Jesus! Que gozo! Pois me dará [D]repouso,
[Em]Irei cantar, então, nos céus, um hino ao meu [C]Deus!

Coro:
[G]Oh! Glória a Jesus, a Jesus, a [D]Jesus!
[Em]Oh! Glória a Jesus, ó meu poder e [C]luz!
[G]Os santos reunidos, no reino dos [D]remidos,
[Em]Entoarão, enfim, nos [C]céus,
[G]um hino ao bom [D]Deus!`,
  h277:`Tom: G

Verso:
[G]Tens achado em Cristo plena [D]salvação,
[Em]Pelo sangue vertido na [C]cruz?
[G]Toda mancha lava de teu [D]coração,
[Em]Este sangue eficaz de [C]Jesus.

Coro:
[G]Salvo estás, limpo [D]estás,
[Em]Pelo sangue de Cristo [C]Jesus?
[G]Tens teu coração mais alvo que a [D]luz,
[Em]Foste limpo no sangue [C]eficaz?`,
  h278:`Tom: G

Verso:
[G]Vais levando só, e mui [D]cansado,
[Em]Tua cruz, tua cruz?
[G]Não sabendo que tens ao teu [D]lado
[Em]O auxilio do Senhor [C]Jesus?

Coro:
[G]Se tenho cargas, que só não posso [D]levar
[Em]Eu peço auxílio ao meu bom [C]Salvador!
[G]Se de cansado não posso mais [D]caminhar,
[Em]Eu clamo a meu Jesus, que vem me dar o Seu [C]vigor.`,
  h279:`Tom: G

Verso:
[G]Jesus me falou dum formoso [D]lugar;
[Em]Ali quero ir, e tu?
[G]Aonde os salvos irão [D]desfrutar;
[Em]Ali quero ir; e tu?
[G]Pois Jesus as mansões nos foi [D]preparar;
[Em]Ali quero ir; e tu?
[G]Aonde a morte não pode [D]chegar;
[Em]Ali quero ir; e tu?

Coro:
[G]Ao céu quero Ir
[Em]Ao céu quero Ir,
[G]Ao céu quero ir; e [D]tu?
[Em]Ao céu quero ir;
[G]Não queres tu ir?
[Em]No céu quero ver [C]Jesus!`,
  h280:`Tom: G

Verso:
[G]Ó Jesus, no Teu [D]caminho,
[Em]Te suplico com [C]fervor,
[G]Tem-me mais a Ti [D]vizinho
[Em]P'ra gozar do Teu [C]amor.`,
  h281:`Tom: G

Verso:
[G]Vem a Cristo, sem [D]tardar,
[Em]Não te queiras [C]recusar,
[G]Ó amigo, vem depressa a [D]Jesus!
[Em]Vem das trevas para a [C]luz,
[G]Cristo quer te [D]consolar,
[Em]Vem a Ele, ó perdido, sem [C]tardar!

Coro:
[G]Sem tardar, vem sem [D]tardar;
[Em]Sem tardar, vem sem [C]tardar.
[G]O aceita a [D]salvação,
[Em]No teu pobre [C]coração,
[G]Jesus Cristo te convida: “Sem [D]tardar”.`,
  h282:`Tom: G

Verso:
[G]Que sangue precioso
[Em]Saiu do Salvador!
[G]Oh sangue glorioso,
[Em]Que lava o pecador!

Coro:
[G]Sim, o sangue que [D]Jesus
[Em]Na cruz derramou;
[G]Sim, o sangue de [D]Jesus,
[Em]Meu coração lavou!`,
  h283:`Tom: G

Verso:
[G]Ama o Pastor as [D]ovelhas,
[Em]Com um amor [C]paternal,
[G]Ama o Pastor seu [D]rebanho,
[Em]Com um amor sem [C]igual;
[G]Ama o Pastor inda [D]outras,
[Em]Que desgarradas [C]estão,
[G]E comovido as [D]procura,
[Em]Por onde quer qu’elas [C]vão.

Coro:
[G]Pelos desertos [D]errantes,
[Em]Vêem-se a sofrer penas [C]mil,
[G]Ele ao achá-las, nos [D]ombros
[Em]Leva-as ditoso, ao [C]redil.`,
  h284:`Tom: G

Verso:
[G]Tal como sou, vou [D]decidir,
[Em]Que a outro eu não posso [C]ir;
[G]Pois me convidas para [D]vir,
[Em]Bendito Cristo, eis-me [C]aqui.`,
  h285:`Tom: G

Verso:
[G]Senhor, pela fé me [D]sustento
[Em]Na graça, nos Teus [C]mandamentos,
[G]Que operam a cada [D]momento,
[Em]No meu coração, [C]salvação!

Coro:
[G]Tu és o meu gozo,
[Em]Senhor, o meu manancial de [C]amor;
[G]Irei Te louvar para sempre nos [D]céus,
[Em]Bem perto do trono de [C]Deus!`,
  h286:`Tom: G

Verso:
[G]Ó Jesus, nesta [D]terra,
[Em]Há só tristeza e [C]dor;
[G]Os Ímpios fazem [D]guerra
[Em]Aos santos do [C]Senhor.

Coro:
[G]Cristo volta
[Em]Em fulgurante luz;
[G]O mar já se [D]revolta,
[Em]Não tarda vir [C]Jesus!`,
  h287:`Tom: G

Verso:
[G]Oh, foi o sangue do [D]Senhor
[Em]Que me salvou, sim, me [C]salvou;
[G]Sim, este sangue tem [D]poder,
[Em]De toda a mancha me [C]lavou.

Coro:
[G]Jesus pra todos tem poder e [D]salvação,
[Em]Meu amigo, a Ele vem, aceitando a [C]remissão;
[G]Glória ao Salvador! Glória ao meu [D]Jesus!
[Em]O Seu sangue me [C]salvou!`,
  h288:`Tom: G

Verso:
[G]Da cruz, a palavra é [D]fiel,
[Em]Aleluia! Aleluia!
[G]Chamando aquele que é [D]infiel,
[Em]Aleluia! Aleluia!
[G]Qualquer temporal pode [D]vir,
[Em]A mensagem mui firme [C]‘stá:
[G]Que Jesus veio nos [D]remir,
[Em]Pela morte sobre a [C]cruz.

Coro:
[G]Aleluia! Aleluia! A palavra da cruz é [D]poder.
[Em]Aleluia! Aleluia! Para quem em Cristo [C]crer.
[G]Aleluia! Aleluia! A palavra da cruz é [D]poder.
[Em]Aleluia! Aleluia! Para quem em Cristo [C]crer.`,
  h289:`Tom: G

Verso:
[G]Asperge hoje meu [D]coração,
[Em]Com sangue Teu, á [C]Redentor!
[G]Liberta-me da vil [D]tentação,
[Em]Com sangue Teu, [C]Senhor!

Coro:
[G]Sob o sangue Teu, [D]Senhor,
[Em]Guarda-me da [C]corrupção!
[G]Sob o sangue [D]expiador,
[Em]Eu tenho proteção!`,
  h290:`Tom: G

Verso:
[G]Ó Senhor, nós [D]esperamos
[Em]Que escutes a [C]oração;
[G]Nós, Teus servos, já [D]clamamos,
[Em]Com humilde [C]coração.

Coro:
[G]Teu Espírito, vem, [D]derrama,
[Em]Sobre cada coração!
[G]E no crente, que a Ti [D]clama,
[Em]Vem, confirma a [C]petição.`,
  h291:`Tom: Bb

Verso:
[Bb]Rude cruz se [F]erigiu,
[Gm]Dela o dia fugiu,
[Bb]Como emblema de vergonha e [F]dor;
[Gm]Mas contemplo esta [Eb]cruz.
[Bb]Porque nela Jesus
[Gm]Deu a vida por mim, [Eb]pecador.

Coro:
[Bb]Sim, eu amo a mensagem da [F]cruz
[Gm]Té morrer eu a vou [Eb]proclamar;
[Bb]Levarei eu também minha [F]cruz
[Gm]Té por uma coroa [Eb]trocar.`,
  h292:`Tom: G

Verso:
[G]Qual o preço do [D]perdão?
[Em]Só o sangue de Jesus [C]Cristo.
[G]O que limpa o [D]coração?
[Em]Só o sangue de Jesus [C]Cristo.

Coro:
[G]Qual o poder real
[Em]Que limpa todo o [C]mal,
[G]E dá paz divinal?
[Em]Só o sangue de Jesus [C]Cristo.`,
  h293:`Tom: G

Verso:
[G]Jesus no Calvário, por mim [D]sofreu
[Em]A morte da [C]maldição;
[G]Minh’alma ganhou, com o sangue [D]Seu
[Em]O preço da [C]redenção.
[G]Do alto da cruz, Jesus [D]exclamou:
[Em]“Consumado está”, ao espírito [C]rendeu;
[G]O sangue verteu, a me [D]expiou,
[Em]Unindo-me ao povo [C]Seu.`,
  h294:`Tom: Bm

Verso:
[B]Mui triste em pecado, vagava sem [F#]luz,
[G#m]Mas já vivo alegre, pois a Cristo [E]achei,
[B]Em todos os dias, eu canto a [F#]Jesus,
[G#m]Eu sigo com Cristo, meu Mestre, meu [E]Rei.

Coro:
[B]Eu vou com Jesus; [F#]Aleluia!
[G#m]Eu sigo com Cristo, o [E]Rei;
[B]Não vago Jamais, eu quero [F#]seguir
[G#m]A Cristo Jesus, o meu [E]Rei.`,
  h295:`Tom: G

Verso:
[G]Novo canto de [D]louvor,
[Em]Canta já meu [C]coração;
[G]Hino de paz a de [D]amor,
[Em]Que me traz [C]consolação.

Coro:
[G]Ouve quão doce e o [D]louvor,
[Em]Ao Cordeiro [C]divinal!
[G]Jesus, canto [D]inspirador,
[Em]Harmonia angelical`,
  h297:`Tom: G

Verso:
[G]Desde que Jesus deu-me Sua [D]luz,
[Em]Posso jubilar, [C]cantar;
[G]Ao meu coração trouxe [D]salvação
[Em]Que eu não posso te [C]explicar.

Coro:
[G]Abundantemente Cristo [D]dá,
[Em]Graça, que não há igual, não [C]há;
[G]Aleluia, glória ao nome [D]Seu!
[Em]Que alegria Sinto [C]eu!`,
  h298:`Tom: G

Verso:
[G]Avante, servos de Jesus, por nosso [D]Deus;
[Em]Nas trevas brilhe vossa luz, a luz lá dos [C]céus.

Coro:
[G]Glória a Deus, pois [D]vencerei,
[Em]Glória a Deus, pois [C]vencerei,
[G]Triunfante sigo, levando a [D]cruz!
[Em]Glória a Deus, pois [C]vencerei,
[G]Glória a Deus, pois [D]vencerei,
[Em]Em nome de Jesus!`,
  h299:`Tom: G

Verso:
[G]Há um canto novo no meu [D]ser,
[Em]É a voz de meu [C]Jesus,
[G]Que me chama: ‘Vem em mim [D]obter
[Em]A paz, que eu ganhei na [C]cruz”.

Coro:
[G]Cristo, Cristo, Cristo, nome sem [D]igual;
[Em]Enches o contrito, de prazer [C]celestial.`,
  h300:`Tom: D

Verso:
[D]Jesus, sim, vem do céu, em glória Ele [A]vem!
[Bm]Ecoa a nova pelo mundo [G]além;
[D]Oh esperança que a Sua Igreja [A]tem!
[Bm]Dai glória a Deus, Jesus em breve [G]vem!

Coro:
[D]Nossa esperança é Sua [A]vinda
[Bm]O Rei dos reis vem nos [G]buscar;
[D]Nós aguardamos, Jesus, [A]ainda,
[Bm]Té a luz da manhã [G]raiar.
[D]Nossa esperança é Sua [A]vinda
[Bm]O Rei dos reis vem nos [G]buscar;
[D]Nós aguardamos, Jesus, [A]ainda,
[Bm]Té a luz da manhã [G]raiar.`,
  h301:`Tom: A

Verso:
[A]Cristo já nos [E]preparou
[F#m]Um manjar que nos [D]comprou,
[A]E, agora, nos convida a [E]cear:
[F#m]Com celestial maná
[A]Que de graça Deus te [E]dá,
[F#m]Vem, faminto, tua alma [D]saciar.

Coro:
[A]“Vem cear”, o Mestre chama - “vem [E]cear”.
[F#m]Mesmo hoje tu te podes [D]saciar;
[A]Poucos pães [E]multiplicou,
[F#m]Água em vinho [D]transformou,
[A]Vem, faminto, a Jesus, “vem [E]cear”.`,
  h302:`Tom: G

Verso:
[G]No mundo murmura-se [D]tanto,
[Em]Entre os que cristãos dizem [C]ser;
[G]Em vez de Iouvores há [D]pranto,
[Em]Fraqueza em lugar de [C]poder.
[G]Murmuram - assim no [D]deserto,
[Em]Em Mara, Israel [C]murmurou;
[G]Oh! Não vêem que Deus está [D]perto;
[Em]Jamais Seu auxilio [C]negou.

Coro:
[G]Em vez de murmurares, [D]canta
[Em]Um hino de louvor a [C]Deus;
[G]Jesus quer te dar vida [D]santa,
[Em]Qual noiva levar-te p’ra os [C]céus.`,
  h303:`Tom: G

Verso:
[G]Quando o sol brilhar em qualquer [D]lugar,
[Em]Tu precisas de [C]Jesus;
[G]Quando escurecer, tudo [D]fenecer.
[Em]Tu precisas de [C]Jesus!

Coro:
[G]Eu preciso de [D]Jesus,
[Em]Tu precisas de [C]Jesus;
[G]Pecador, vem para a [D]luz
[Em]Que resplandeceu na [C]cruz;
[G]Tu precisas de [D]Jesus!`,
  h304:`Tom: Ab

Verso:
[Ab]Desprezando toda a dor eu vou a [Eb]cantar,
[Fm]E o Calvário, ao pecador, sempre [Db]apontar;
[Ab]Flechas traspassaram-me, padeci gran [Eb]dor;
[Fm]Mas Jesus, minha luz, fez-me [Db]vencedor.

Coro:
[Ab]A face adorada de Jesus [Eb]verei,
[Fm]Com a grei amada, no céu [Db]estarei,
[Ab]Na mansão dourada, hinos vou [Eb]cantar
[Fm]A Jesus, minha luz, que me quis [Db]salvar!`,
  h305:`Tom: G

Verso:
[G]Soldados somos de [D]Jesus
[Em]E campeões do bem, da [C]luz;
[G]Nos exércitos de [D]Deus,
[Em]Batalhamos pelos [C]céus,
[G]Cantando, vamos [D]combater.
[Em]O vil pecado e seu [C]poder;
[G]A batalha ganha [D]está;
[Em]A vitória Deus nos [C]dá.

Coro:
[G]Breve vamos terminar a batalha [D]aqui,
[Em]E p ‘ra sempre descansar com Jesus [C]ali;
[G]Todos os que são fiéis ao bom [D]Capitão,
[Em]Hão de receber lauréis como [C]galardão.`,
  h306:`Tom: D

Verso:
[D]A Palavra de Deus é para [A]mim
[Bm]Um tesouro sem igual em [G]valor!
[D]Fala do amor de Deus, do amor que não tem [A]fim;
[Bm]Mais precioso do que ouro é este [G]amor!

Coro:
[D]A Palavra de Deus é doce, mais que o [A]mel,
[Bm]O que a toma pela fé há de ser [G]fiel,
[D]Porque Deus nos concedeu o [A]Emanuel,
[Bm]Rocha viva donde mana leite e [G]mel.`,
  h307:`Tom: G

Verso:
[G]Ao Pai, ao Filho, o [D]Redentor,
[Em]Ao divinal [C]Consolador;
[G]Ao trino Deus, sim, [D]adorai,
[Em]Louvor eterno tributai. [C]Amém.`,
  h309:`Tom: G

Verso:
[G]Finda a lida deste dia, ó bendito [D]Salvador;
[Em]Eis-nos todos reunidos a cantar o Teu [C]louvor;
[G]Vem encher-nos do Teu santo e doce [D]amor!`,
  h310:`Tom: G

Verso:
[G]Jesus é o Redentor, que veio nos [D]salvar,
[Em]Do mundo de horror, das ondas deste [C]mar;
[G]A todo o que crer vitória lhe, [D]dará,
[Em]Também real poder, que gozo lhe [C]trará.

Coro:
[G]Avante eu vou, avante eu [D]vou,
[Em]Para entrar no céu, na divinal [C]mansão;
[G]Tenho gozo mui profundo; Jesus no [D]coração,
[Em]Não olhando para o mundo, avante eu [C]vou.`,
  h311:`Tom: G

Verso:
[G]Jesus salvou-me do [D]mundo,
[Em]Ele é tão doce pra [C]mim;
[G]Amor, Lhe tenho, [D]profundo,
[Em]Por Sua graça sem [C]fim;
[G]Quando ia eu no [D]deserto,
[Em]Sem gozo, paz e sem [C]luz,
[G]Ele buscou-me, por [D]certo,
[Em]Té que achou-me - [C]Jesus!

Coro:
[G]Jesus, Jesus, Tu és meu [D]Salvador,
[Em]Jesus, Jesus, só Teu serei, [C]Senhor.
[G]Na senda mui [D]verdadeira,
[Em]Guia-me Tua mão,
[G]E ao findar minha [D]carreira,
[Em]Receberei galardão.`,
  h312:`Tom: D

Verso:
[D]Subiu triunfante p'ra o céu, o [A]Senhor:
[Bm]Assim mesmo há de [G]voltar;
[D]"Eis que venho breve”, diz o [A]Salvador,
[Bm]Quando o alarido [G]ecoar.

Coro:
[D]Com muita prudência eu quero [A]estar
[Bm]Esperando por meu [G]Senhor,
[D]E sempre alerta aqui [A]vigiar.
[Bm]Té que venha o meu [G]Salvador.`,
  h313:`Tom: G

Verso:
[G]Ao Pai Eterno dai [D]louvor,
[Em]Ao Filho Seu [C]também,
[G]E ao celestial [D]Consolador,
[Em]Louvai p’ra sempre. [C]amém!`,
  h314:`Tom: G

Verso:
[G]Um Pai bondoso tenho lá no [D]céu.
[Em]Um Pai bondoso tenho lá no [C]céu,
[G]A Ele breve eu [D]irei,
[Em]E a meu Pai, no céu [C]verei;
[G]Eu irei, eu irei, eu irei ao [D]céu;
[Em]Eu irei, eu irei, eu irei ao [C]céu;
[G]Meu Pai me chama, vou [D]andar
[Em]Pra Sua face [C]contemplar.`,
  h315:`Tom: Am

Verso:
[A]Oh! Amor bendito, Tu possues a [E]mim!
[F#m]Enches o infinito, oh! amor sem [D]fim!
[A]Vivo hoje em Cristo, vivo no [E]Fiel;
[F#m]Por Deus sou benquisto no [D]Emanuel.

Coro:
[A]Oh! Amor bendito: Tu possues a [E]mim!
[F#m]Enches o infinito, oh! amor sem [D]fim!`,
  h316:`Tom: G

Verso:
[G]Saindo do Egito em busca de [D]Sião,
[Em]Meu Salvador guiou-me com Sua forte [C]mão;
[G]Levou-me em vitórias pelo fogo e o [D]mar;
[Em]Agora, canto a Deus, pela salvação sem [C]par.

Coro:
[G]Não busquem mais a Mim na [D]escravidão,
[Em]Ergui a tenda, enfim, na terra de [C]Sião.
[G]Não busquem mais a Mim na [D]escravidão,
[Em]Ergui a tenda, enfim, na terra de [C]Sião.`,
  h317:`Tom: D

Verso:
[D]Como brilha do [A]oriente
[Bm]O relâmpago ao [G]ocidente,
[D]Deste mundo voltará do céu, [A]Jesus;
[Bm]Levará Sua Noiva em [G]gozo
[D]Ao Seu lado mui [A]ditoso,
[Bm]Para o lar eterno de celeste [G]luz.

Coro:
[D]Em breve, do céu, Jesus virá nos [A]buscar;
[Bm]Com gran poder, virá [G]Jesus.
[D]E nós devemos todos preparados [A]estar,
[Bm]Com vestes brancas, e brilhando como a [G]luz.`,
  h318:`Tom: G

Verso:
[G]Quero vos contar a história dum [D]varão,
[Em]Que Jesus outrora [C]relatou.
[G]O qual tinha dois filhos em feliz [D]mansão,
[Em]Té que o mais jovem o [C]deixou.

Coro:
[G]Filho desleal ao lar [D]paternal,
[Em]Queiras hoje [C]regressar!
[G]Pois o Pai está por ti esperando [D]lá;
[Em]Pecador, á volta p’ra teu [C]lar!`,
  h319:`Tom: E

Verso:
[E]Inda há lugar, p’ra ti, ó [B]pecador!
[C#m]Ouve o convite do teu [A]Salvador.
[E]Entra, entra, ‘inda há pra ti [B]lugar.`,
  h320:`Tom: G

Verso:
[G]Queres tu seguir a [D]Cristo,
[Em]E andar na Sua luz?
[G]Pelo mundo sempre [D]visto,
[Em]Por levar a sua [C]cruz?`,
  h321:`Tom: G

Verso:
[G]Só em Jesus fruirás paz e [D]gozo,
[Em]Tu, pecador, que tens sede de [C]amor;
[G]Só em Jesus poderás ser [D]ditoso;
[Em]NEle a graça obténs do [C]Senhor.`,
  h322:`Tom: D

Verso:
[D]São as santas [A]Escrituras
[Bm]Que nos contam de [G]Jesus,
[D]O qual vindo das [A]alturas
[Bm]Fez brilhar nas trevas [G]luz!
[D]Pra nos dar eterna [A]vida,
[Bm]Té a morte se [G]humilhou;
[D]Tendo já vencido a [A]lida,
[Bm]Deus, o Pai, O [G]exaltou.

Coro:
[D]Nunca mais vai ser [A]ouvido
[Bm]Outro conto de [G]amor,
[D]Que converta um [A]perdido,
[Bm]E rebelde pecador,
[D]Como o santo [A]Evangelho,
[Bm]Que nos fala de [G]perdão,
[D]E transforma o homem [A]velho
[Bm]Numa nova criação.`,
  h323:`Tom: G

Verso:
[G]Levantai os vossos olhos para [D]cima,
[Em]Ó remidos do Senhor [C]Jesus!
[G]A figueira mostra que se [D]aproxima
[Em]O verão: Brotos já [C]produz!

Coro:
[G]Levantai, levantai!
[Em]Vossos olhos para o céu donde Jesus [C]virá;
[G]Levantai, levantai!
[Em]A redenção breve se [C]fará.`,
  h324:`Tom: G

Verso:
[G]Meu Jesus é o melhor [D]amigo,
[Em]NEle ponho toda a minha [C]fé;
[G]Minhas chagas quer [D]sarar,
[Em]E minh’alma [C]consolar,
[G]Oh, Jesus é o melhor [D]amigo!

Coro:
[G]Jesus é o melhor [D]amigo,
[Em]Jesus é o melhor [C]amigo,
[G]Sempre prestes a [D]ajudar,
[Em]Ele a todos quer [C]salvar,
[G]Sim, Jesus é o melhor [D]amigo!`,
  h325:`Tom: Bm

Verso:
[B]Noutro tempo, sei como eu [F#]andei,
[G#m]Do pecado sob o [E]véu,
[B]Mas do céu raiou e em mim [F#]entrou
[G#m]A luz do glorioso [E]céu.

Coro:
[B]Em meu coração a luz [F#]raiou
[G#m]Desde a glória, pois Jesus me [E]amou;
[B]E agora vivo sempre [F#]alegre,
[G#m]Depois que luz do céu [E]raiou!`,
  h326:`Tom: G

Verso:
[G]Ó meu Jesus, quando lutas no caminho [D]encontrar,
[Em]A Tua mão divina vem me [C]ajudar;
[G]Não temerei amparado por Ti mesmo, meu [D]Jesus,
[Em]Ó Salvador, a vitória me vem por Tua [C]luz,
[G]Por Ti espero somente, meu [D]Senhor,
[Em]Para andar de valor em [C]valor;
[G]Ó meu Jesus, minhas forças hei de ver mais [D]aumentar;
[Em]Tendo a fé; Tua graça me há de [C]bastar.`,
  h327:`Tom: G

Verso:
[G]Jesus Cristo, o Teu [D]nome
[Em]E tão doce para mim [C]-
[G]Tua doçura [D]incomparável
[Em]Enche-me de amor sem [C]fim.
[G]Tua doçura [D]incomparável
[Em]Enche-me de amor sem [C]fim.`,
  h328:`Tom: D

Verso:
[D]O pão da vida, descido dos [A]céus,
[Bm]Dá paz, saúde e [G]vigor;
[D]O pão celeste, mandado por [A]Deus,
[Bm]É Cristo, o [G]Salvador;
[D]O Redentor, vem sem [A]tardar,
[Bm]Do pecador o mal [G]sanar!
[D]Se algum perdido buscar Tua [A]luz,
[Bm]Depressa vem a paz lhe [G]dar;
[D]Não tardes mais, amoroso [A]Jesus,
[Bm]Ó vem me confortar!`,
  h329:`Tom: G

Verso:
[G]Jesus nos braços me [D]tomou,
[Em]Jesus me deu a paz;
[G]Agora canto a quem me [D]amou,
[Em]Jesus é minha paz!`,
  h330:`Tom: D

Verso:
[D]Pela fé que uma vez foi entregue aos [A]santos,
[Bm]Que nos vem por Jesus, e nos seca o [G]pranto,
[D]Podem os crentes, sem ter nenhum [A]espanto,
[Bm]Prosseguir nas pisadas do [G]Senhor.

Coro:
[D]Nas tristezas, nas lutas, na [A]dor,
[Bm]Recorriam ao caro [G]Jesus;
[D]A vitória lhes dava o [A]Senhor,
[Bm]Pelo sangue vertido na [G]cruz.`,
  h331:`Tom: D

Verso:
[D]O caro Salvador, manancial de [A]amor,
[Bm]Te sinto em mim!
[D]Teu gozo a mim virá, jamais me [A]faltará,
[Bm]O qual me levará ao céu [G]enfim.`,
  h332:`Tom: G

Verso:
[G]Para o céu eu vou, embora, for [D]nublado;
[Em]O caminho, às vezes, espinhoso [C]está,
[G]Por Jesus, meu Mestre, sempre bem [D]guiado,
[Em]Em Seus passos sigo, até que chegue [C]lá.

Coro:
[G]Aleluia! P’ro céu vou [D]caminhando,
[Em]Nada me desanimará!
[G]Para o céu eu me vou [D]aproximando,
[Em]Sempre meu Jesus me [C]guiará!`,
  h333:`Tom: G

Verso:
[G]É o meu lar, o céu, o céu de [D]luz:
[Em]Livre da carne, o véu, verei [C]Jesus;
[G]Oh! Que feliz serei ao fado do [D]Senhor,
[Em]Louvando ao meu Rei, o [C]Salvador!`,
  h334:`Tom: G

Verso:
[G]O fim de todas coisas vem, não tarda, [D]cuidado!
[Em]Não queiras hoje recusar a graça do [C]Salvador:
[G]Procura bem depressa, ficar [D]abrigado,
[Em]No sangue do Cordeiro, no sangue [C]remidor.

Coro:
[G]Que sangue precioso, saiu de meu [D]Jesus!
[Em]Que sangue glorioso, vertido foi, na [C]cruz!`,
  h335:`Tom: D

Verso:
[D]Perto, sim, mui perto [A]está,
[Bm]O dia não tardará;
[D]Iremos nós residir
[Bm]Com Jesus, que há de [G]vir.`,
  h336:`Tom: G

Verso:
[G]Elias no Carmelo [D]orou
[Em]Com insistência a [C]Deus;
[G]Curvado ao pó, com fé [D]clamou
[Em]Por chuva lá dos [C]céus.

Coro:
[G]Chuva, manda [D]Senhor,
[Em]A chuva do Santo [C]Consolador;
[G]Manda chuva forte, [D]Salvador:
[Em]Na Tua lgreja faz [C]descer
[G]A chuva de poder.`,
  h337:`Tom: G

Verso:
[G]Ó bom Jesus, tesouro de [D]poder,
[Em]Quero sentir-Te. sempre no meu [C]ser!
[G]Faz-me andar, oh, sempre nesta [D]luz,
[Em]Pois dentro de mim vives, ó meu bom [C]Jesus!

Coro:
[G]Oh! Em mim, Já enfim, ressuscitou [D]Jesus;
[Em]Das trevas livre estou assim, por Sua [C]luz!`,
  h338:`Tom: G

Verso:
[G]Quero sempre, Jesus, receber Tua [D]luz,
[Em]Revestir-me do [C]Consolador;
[G]E um dia nos céus, junto ao trono de [D]Deus,
[Em]Fruirei abundante [C]amor!

Coro:
[G]Ó Jesus, guarda o meu [D]coração,
[Em]Nele faz Tua eterna [C]habitação,
[G]Quero sempre Teu nome [D]louvar!
[Em]Pois quiseste minh’alma [C]resgatar!`,
  h339:`Tom: D

Verso:
[D]Oh! Jesus [A]ressuscitado,
[Bm]Grande é o Teu [G]poder!
[D]Sê comigo, ó meu [A]amado,
[Bm]Dá-me a graça e o [G]saber.

Coro:
[D]P’ra fazer a Tua [A]vontade,
[Bm]Quero de Ti mais [G]poder;
[D]Dá-me a Tua [A]santidade,
[Bm]Quero só p’ra Ti [G]viver.`,
  h340:`Tom: G

Verso:
[G]Eis que surge um povo [D]forte,
[Em]Revestido de poder;
[G]E não teme nem a [D]morte,
[Em]Quem a ele [C]pertencer;
[G]E terá sublime [D]sorte,
[Em]Pois com Cristo ao céu [C]vai,
[G]Podes tu dizer [D]também.
[Em]“Sou um dos tais”?

Coro:
[G]Um dos tais. Um dos [D]tais.
[Em]Podes tu também dizer: “Sou um dos [C]tais”?
[G]Um dos tais, um dos [D]tais.
[Em]Podes tu também dizer: “Sou um dos [C]tais”?`,
  h341:`Tom: G

Verso:
[G]Minh’alma aspira [D]habitar
[Em]Nos átrios do [C]Senhor,
[G]E para sempre ouvir [D]soar
[Em]A voz do meu [C]Redentor.`,
  h342:`Tom: G

Verso:
[G]Do meu coração vibram as [D]cordas,
[Em]Afinadas pra o Mestre [C]louvar:
[G]O pecado este som não [D]outorga:
[Em]Só o Gólgota as pode [C]afinar.

Coro:
[G]Aleluia! Glória a [D]Deus,
[Em]Que no Gólgota a minh’alma [C]afinou!
[G]Aleluia! Glória a [D]Deus,
[Em]Que no Calvário a minh’alma [C]afinou!`,
  h343:`Tom: G

Verso:
[G]Ó pecador que não tens [D]luz.
[Em]Abre o coração;
[G]Aceita hoje o bom [D]Jesus;
[Em]Abre o coração!

Coro:
[G]Quem sinto bater no meu [D]coração?
[Em]Jesus diz: “Abre sem tardar o teu [C]coração”.`,
  h344:`Tom: Bb

Verso:
[Bb]Entre os lírios, no meio dos [F]vales
[Gm]'Stá um amigo, que é caro pra [Eb]mim;
[Bb]Quero segui-Lo, isento dos [F]males,
[Gm]Vê-Lo no céu, com os anjos [Eb]enfim.

Coro:
[Bb]Meu Salvador Jesus, Ó Filho do bom [F]Deus;
[Gm]Graças por Tua luz, que veio dos [Eb]Céus!
[Bb]Por mim provaste a [F]Cruz,
[Gm]Por mim morreste, [Eb]Jesus!`,
  h346:`Tom: D

Verso:
[D]Que alegria agora, é meu o [A]céu,
[Bm]Pois Jesus rasgou o sagrado [G]véu;
[D]A condenação não mais [A]temerei,
[Bm]E meu Redentor sempre [G]louvarei.

Coro:
[D]Lá no céu eu [A]descansarei
[Bm]Com Jesus, o nosso [G]Rei;
[D]Vem a Deus, ó [A]pecador,
[Bm]Pois no céu te espera com [G]amor.`,
  h347:`Tom: G

Verso:
[G]Vem a Cristo, vem [D]agora,
[Em]Vem assim como [C]estás;
[G]De Deus, sem [D]demora,
[Em]O perdão obterás.`,
  h348:`Tom: C

Verso:
[C]Vagava longe de Jesus, em plena [G]solidão,
[Am]Até que a preciosa luz encheu meu [F]coração,
[C]Assim, os meus pecados vi, qual negra [G]escuridão;
[Am]Ao pé da cruz, então, caí, e recebi [F]perdão.

Coro:
[C]Cristo por mim sofrendo, lá na cruz [G]morrendo,
[Am]Minh’alma salvou e meus grilhôes já [F]quebrou
[C]Aleluia!
[Am]Cristo por mim sofrendo, lá na cruz [F]morrendo
[C]Deu-me paz, perdão, no meu [G]coração.`,
  h349:`Tom: G

Verso:
[G]Os dons do céu [D]prometidos,
[Em]Pai esperamos aqui;
[G]Em santo amor [D]reunidos,
[Em]Nós suplicamos a [C]Ti.

Coro:
[G]Manda, ó Senhor, chuvas dos [D]céus;
[Em]Chuvas do [C]Consolador,
[G]Manda dos céus, ó bom [D]Deus!
[Em]Manda, ó Senhor, chuvas dos [C]céus,
[G]Que nos dão sempre [D]vigor;
[Em]Manda-nos lá, ó bom [C]Deus!`,
  h350:`Tom: E

Verso:
[E]Tens tu lido a história da dura [B]cruz,
[C#m]Na qual Jesus [A]morreu,
[E]Desfazendo as trevas raiou a [B]luz,
[C#m]Manando o sangue [A]Seu?

Coro:
[E]Jesus padeceu na cruz por [B]ti;
[C#m]Jesus padeceu na [A]cruz!
[E]Oh! Grande amor do [B]Salvador
[C#m]Morrendo na cruz por [A]mim!`,
  h351:`Tom: G

Verso:
[G]São felizes os que têm o alegre [D]som
[Em]Da salvação real do nosso [C]Deus.
[G]Pois eles têm ouvido num suave [D]tom,
[Em]A multidão que canta lá no [C]céu.

Coro:
[G]Já os filhos de Deus bem alegres [D]estão,
[Em]Porém no céu prazer melhor [C]terão,
[G]Os gozos do cristão, apenas gotas [D]são
[Em]Do mar de bênçãos, em [C]Sião!`,
  h352:`Tom: D

Verso:
[D]Ó Jesus, nossa [A]esperança,
[Bm]Vide santa - nós os [G]ramos;
[D]Com fervor e [A]confiança,
[Bm]Vera graça Te [G]rogamos,
[D]Ó Salvador.`,
  h353:`Tom: G

Verso:
[G]Ó tu qu’inda vagas no mundo [D]d’horror,
[Em]Nas trevas e na [C]escuridão,
[G]Por que não descansas em Cristo, o [D]Senhor,
[Em]Que trouxe do céu [C]Salvação.

Coro:
[G]Ó vem, ó pródigo, ó vem a [D]Jesus;
[Em]Parti foi erguido no alto da [C]cruz;
[G]Aceita agora de Deus o [D]favor;
[Em]O vem, sem demora a Cristo, o [C]Senhor.`,
  h354:`Tom: G

Verso:
[G]Eu tenho que [D]guardar
[Em]Minh’alma imortal,
[G]E prepará-la para [D]entrar,
[Em]No reino celestial.`,
  h355:`Tom: E

Verso:
[E]Fala do amor de [B]Cristo
[C#m]Ao triste pecador,
[E]Amor por todos [B]visto
[C#m]Na cruz do [A]Redentor;
[E]Com alegria canta
[C#m]A paz que vem do [A]céu;
[E]A tua voz levanta
[C#m]Em glória a Deus.

Coro:
[E]Cristo na cruz [B]ganhou-nos
[C#m]Eterna salvação.
[E]Com sangue Seu [B]lavou-nos
[C#m]O Rei da redenção!
[E]No templo, o véu [B]rasgado;
[C#m]Caminho abriu Jesus
[E]Na cruz, inaugurado
[C#m]P’ro céu de luz!`,
  h356:`Tom: G

Verso:
[G]Ó nosso Pai que estás no [D]céu,
[Em]Do universo o [C]benfeitor;
[G]Santificado seja o nome [D]Teu,
[Em]O glorioso Deus de [C]amor!`,
  h357:`Tom: G

Verso:
[G]Quando esta vida de lutas [D]cessar,
[Em]Vou para o céu meu descanso [C]gozar
[G]Com meu Jesus, lá na glória sem [D]fim;
[Em]Oh! Que ventura será para [C]mim!

Coro:
[G]Oh! Que prazer! Glória a [D]Jesus!
[Em]Eu hei de ver no céu de [C]luz;
[G]Nunca morrer, a Jesus sempre [D]ver,
[Em]Oh! Será gozo eterno, p’ra [C]mim!`,
  h358:`Tom: F

Verso:
[F]Os fiéis oravam [C]unidos
[Dm]Num cenáculo ao [Bb]Senhor,
[F]Quando foi do céu [C]descido
[Dm]O real Consolador!

Coro:
[F]Senhor, manda já o Teu [C]poder.
[Dm]Senhor, manda já o Teu [Bb]poder.
[F]Senhor, manda já o Teu [C]poder,
[Dm]E batiza cada Um!`,
  h359:`Tom: G

Verso:
[G]Eis que clamo, Eu Jesus, o [D]poderoso,
[Em]Vem a Mim, pecador;
[G]Quero dar-te Minha paz, perdão e [D]gozo.
[Em]Vem a Mim, [C]sofredor.

Coro:
[G]Eu te amo, ó pecador [D]perdido,
[Em]Morri p’ra ser teu [C]Salvador,
[G]Por teus crimes e pecados fui [D]ferido;
[Em]Vem a Mim, [C]sofredor.`,
  h360:`Tom: D

Verso:
[D]Vem à fonte [A]sanadora,
[Bm]Que abriu o [G]Salvador,
[D]Cujas águas [A]sedutoras
[Bm]Têm um divinal [G]sabor.

Coro:
[D]Oh! Preciosa fonte [A]sanadora
[Bm]Para todos corre, [G]sim!
[D]Oh! Preciosa fonte [A]sanadora!
[Bm]Glória a Deus, me sara a [G]mim!`,
  h361:`Tom: G

Verso:
[G]Peregrino segue para a [D]glória,
[Em]Pois no céu em breve [C]entrarás!
[G]Ouves já os cantos de [D]vitória?
[Em]Tua voz também lá [C]unirás.

Coro:
[G]Sim, queres entoar
[Em]O cântico dos salvos, lá na [C]glória,
[G]Que nos céus há de sempre [D]soar?
[Em]Sim, queres tu [C]cantar,
[G]Os gloriosos hinos de [D]vitória?
[Em]A Jesus mil louvores [C]entoar?`,
  h362:`Tom: Bb

Verso:
[Bb]O Espírito e a Noiva [F]dizem:
[Gm]"Vem beber da água da [Eb]vida”;
[Bb]Que voz de amor do [F]Salvador,
[Gm]A uma alma perdida!

Coro:
[Bb]O Espírito diz: Vem! A Noiva diz: [F]Vem!
[Gm]E toma de graça da água dá [Eb]vida.
[Bb]O Espírito diz: Vem! A Noiva diz: [F]Vem!
[Gm]E toma de graça da água da [Eb]vida.`,
  h363:`Tom: C

Verso:
[C]Amor e vida dou a [G]Ti.
[Am]Jesus, pois lá na cruz, por [F]mim,
[C]Verteste sangue [G]carmezim;
[Am]Meu Deus e [F]Salvador!

Coro:
[C]Amor e vida dou a [G]Ti,
[Am]Que foste à cruz sofrer por [F]mim,
[C]Amor e vida dou a [G]Ti,
[Am]Jesus, meu [F]Salvador!`,
  h365:`Tom: G

Verso:
[G]Débil, pobre, cego [D]sou,
[Em]Nada pode me valer;
[G]Aos Teus pés, ansioso [D]vou,
[Em]Para graça obter.

Coro:
[G]Só em Ti vou [D]confiar
[Em]Oh! Jesus, meu [C]Salvador,
[G]Nos Teus braços [D]descansar
[Em]E fruir o Teu amor!`,
  h366:`Tom: Ab

Verso:
[Ab]Em Belém nasceu [Eb]Jesus,
[Fm]Nosso grande [Db]Redentor,
[Ab]Sendo a bendita luz
[Fm]Para um mundo [Db]pecador.

Coro:
[Ab]Oh! Aleluia a Cristo [Eb]Jesus,
[Fm]O Enviado, Filho de [Db]Deus!
[Ab]Gozo e luz que vida [Eb]produz,
[Fm]Cristo trouxe lá dos [Db]céus!`,
  h367:`Tom: A

Verso:
[A]Espírito Consolador, divino e [E]eterna!,
[F#m]Preciosa fonte de amor e vida [D]imortal.`,
  h368:`Tom: G

Verso:
[G]Eu estava no pecado, perdido, triste a [D]só,
[Em]Que diferença agora, Jesus de mim tem [C]do.
[G]Eu hoje só confio na graça que me [D]deu;
[Em]O Seu amor conheço e ando para o [C]céu.

Coro:
[G]Jesus, tudo é p’ra mim, de culpa me [D]livrou;
[Em]Amor e paz eterna,
[G]na cruz p’ra mim [D]ganhou;
[Em]Sim, tudo é p’ra [C]mim,
[G]mostrou Seu imenso [D]amor,
[Em]Glória ao santo nome. do amado [C]Salvador!`,
  h370:`Tom: G

Verso:
[G]Ó meu Senhor, dá-me mais [D]gratidão,
[Em]Por tudo que Tu fizeste por [C]mim
[G]Por Tua graça no meu [D]coração,
[Em]Que me encheu de ventura sem [C]fim!

Coro:
[G]Mais grato a Ti, mais grato a [D]Ti.
[Em]Mais consagrado, ó faz-me, [C]Senhor!
[G]Mais humilhado e cheio de [D]amor
[Em]Faz-me mais grato a ti, mais grato a [C]Ti!`,
  h371:`Tom: D

Verso:
[D]Breve vem o grande [A]dia
[Bm]Em que lutas [G]findarão;
[D]Todos males, [A]agonias,
[Bm]Deste mundo [G]cessarão.

Coro:
[D]Cessará no céu o [A]pranto,
[Bm]Pois não haverá mais [G]dor,
[D]E ouvir-se-á o [A]canto,
[Bm]Dos remidos do [G]Senhor!`,
  h372:`Tom: G

Verso:
[G]Quem possui a Cristo, nEle firme [D]está,
[Em]Achará poder para o mal [C]combater;
[G]Porque Suas promessas Ele [D]cumprirá.
[Em]Quem está em Cristo, sempre há de [C]vencer.

Coro:
[G]Vencerá, vencerá, por Seu sangue [D]vencerá;
[Em]Vencerá, vencerá, sempre [C]vencerá;
[G]Pois Jesus que impera, novas forças [D]dá;
[Em]E quem nEle espera sempre [C]vencerá.`,
  h373:`Tom: G

Verso:
[G]Pecador, que segues no mundo [D]errante
[Em]Sem achar [C]consolação;
[G]Hoje, vem a Cristo, vem [D]confiante.
[Em]E terás a salvação!

Coro:
[G]Ó vem ao teu [D]Salvador,
[Em]Que foi morto sobre a [C]cruz,
[G]Pois ali, salvou O vil [D]pecador;
[Em]ó vem ao Senhor [C]Jesus!`,
  h374:`Tom: Bb

Verso:
[Bb]Nós queremos ter vida [F]abundante.
[Gm]De pureza e de [Eb]santidade,
[Bb]Para amarmos a Deus em [F]verdade,
[Gm]Pela graça que Ele nos [Eb]deu.

Coro:
[Bb]Vem nos dar Tua vida [F]abundante,
[Gm]Nosso amado e divino [Eb]Senhor;
[Bb]Tua vida de gozo [F]exultante,
[Gm]Abundante no [Eb]Consolador.`,
  h375:`Tom: G

Verso:
[G]Na rocha firme, [D]triunfal.
[Em]Está a Igreja [C]universal;
[G]Fundada foi por Ti, [D]Jesus,
[Em]Ao expirares lá na [C]cruz.

Coro:
[G]Com Teu poder, enche meu [D]ser;
[Em]Ó Deus de amor, dá-me [C]fervor;
[G]Remido estou, Teu filho [D]sou,
[Em]Com Teu poder, ó vem me [C]encher.`,
  h376:`Tom: D

Verso:
[D]Vamos todos trabalhar para o Senhor [A]Jesus,
[Bm]Nosso guia Ele é, para o campo nos [G]conduz,
[D]Prontos nós devemos 'star, pois Jesus não vai [A]tardar.
[Bm]Subiremos para o céu, onde vamos [G]habitar.`,
  h377:`Tom: E

Verso:
[E]De Deus as sentas [B]promessas,
[C#m]Hoje se cumprirão.
[E]Desde que a Deus sempre [B]peças,
[C#m]Crendo de coração.

Coro:
[E]Terra e céus [B]ardendo,
[C#m]Os montes ‘stão [A]tremendo,
[E]Mas, nas promessas [B]crendo,
[C#m]Deus sempre as vai [A]cumprir!`,
  h378:`Tom: D

Verso:
[D]Quero seguir as pisadas do [A]Mestre.
[Bm]Quero ir após o meu Rei e [G]Senhor,
[D]Para que no Seu poder me [A]adestre,
[Bm]Eu vou orando ao meu [G]Redentor.

Coro:
[D]Quão doce é seguir as pisadas do [A]Mestre
[Bm]Na bendita luz, perto de [G]Jesus!
[D]Quão doce é seguir as pisadas do [A]Mestre,
[Bm]E levar a Cruz!`,
  h379:`Tom: Bb

Verso:
[Bb]Que alegria, Jesus me [F]salvou.
[Gm]Por Sua graça, pois Ele [Eb]levou
[Bb]Os meus pecados, cravando-os na [F]cruz,
[Gm]Fazendo brilhar sobre mim a [Eb]luz.

Coro:
[Bb]Salvo de graça por meu [F]Jesus!
[Gm]Salvo de graça, Já tenho a [Eb]luz!
[Bb]Demos-Lhe glória por grande [F]vitória,
[Gm]Que por mim ganhou o Senhor [Eb]Jesus.`,
  h380:`Tom: D

Verso:
[D]Debaixo dumas mui formosas [A]tamareiras,
[Bm]Estando já Berseba na [G]escuridão.
[D]As aves escutando, entre as [A]roseiras,
[Bm]Se vê andar o patriarca [G]Abraão.
[D]Seu coração perante Deus está [A]aflito,
[Bm]Pois quer que O sirvamos sem [G]murmuração;
[D]E por amor pergunta ao Senhor [A]bendito:
[Bm]"O meu amado filho queres Tu, [G]então?"`,
  h381:`Tom: D

Verso:
[D]Vejo um homem na cruz [A]pendurado
[Bm]A derramar sangue, por meu [G]pecado,
[D]É o Cordeiro de Deus [A]imolado,
[Bm]Que por mim sofre grandíssima [G]dor;
[D]Quanto padece na cruz, no [A]altar,
[Bm]Cristo Jesus, o meu bom [G]Salvador,
[D]Para fazer-me um tesouro [A]herdar.
[Bm]No santo reino do [G]Senhor!`,
  h382:`Tom: G

Verso:
[G]Na cruz do Calvário [D]olhando,
[Em]Avistei o Salvador;
[G]Meu pecado [D]expiando,
[Em]Revelou-se o Seu [C]amor.

Coro:
[G]Lá na fonte desta [D]luz,
[Em]que me trouxe um [C]clarão,
[G]Foi onde eu achei [D]abrigo,
[Em]vida, paz e [C]salvação.`,
  h383:`Tom: G

Verso:
[G]Dá sustento à minha [D]vida,
[Em]A Palavra do [C]Senhor;
[G]A minh’alma [D]abatida,
[Em]Vem poder [C]Consolador:
[G]Livramento glorioso
[Em]Nós achamos em [C]Jesus,
[G]NEle o coração [D]ditoso
[Em]Já desfruta Sua [C]luz.

Coro:
[G]Jesus Cristo deu-me [D]salvação,
[Em]Também vida [C]eternal;
[G]Deu-me gozo no meu [D]coração,
[Em]E poder celestial;
[G]Sua graça é [D]bastante,
[Em]Divina! é Seu amor;
[G]Tenho vida [D]exultante,
[Em]Pelo bom [C]Consolador!`,
  h384:`Tom: G

Verso:
[G]Sinto que vivo no [D]Senhor,
[Em]Que veio me salvar;
[G]E Sua lei, por Seu [D]amor,
[Em]Desejo sempre [C]guardar.

Coro:
[G]Habitarei sempre em [D]Jesus,
[Em]Firmá-Lo-ei no [C]coração;
[G]Deus, pela fé, em mim [D]produz
[Em]Perfeição!`,
  h385:`Tom: G

Verso:
[G]Irmãos, amemos o [D]Senhor,
[Em]Por Seu divinal [C]amor;
[G]Pois a nossa culpa [D]expiou,
[Em]Com sangue que [C]derramou.

Coro:
[G]Irmãos, amemos o [D]Senhor,
[Em]Pois Ele Já nos [C]amou;
[G]E do pecado [D]enganador,
[Em]Com Seu sangue nos [C]lavou.`,
  h386:`Tom: G

Verso:
[G]Ó, não temas tu, Esposa de [D]Jesus,
[Em]Em justiça Deus te [C]edificará!
[G]Tua tenda que dimana viva [D]luz,
[Em]Ele mais aumentará.

Coro:
[G]Toda arma de [D]rancor,
[Em]Contra ti se [C]desfará,
[G]Quando o inimigo
[Em]se erguer com seu [C]furor
[G]Ele não te vencerá!`,
  h387:`Tom: D

Verso:
[D]Derrama sobre nós o Teu [A]Espírito,
[Bm]Como fizeste em [G]Jerusalém;
[D]À Tua grei, Ó manda o mesmo [A]fogo.
[Bm]Indispensável para nós [G]também!
[D]A Tua grei, ó manda o mesmo [A]fogo,
[Bm]Indispensável para nós [G]também!`,
  h388:`Tom: G

Verso:
[G]Canta com vida, ó [D]crente!
[Em]Doce será Cantar!
[G]Anda só para a [D]frente,
[Em]Deixa o teu pesar;
[G]Canta nas noites [D]tristes,
[Em]Canta no sol, na [C]luz;
[G]O mal assim [D]resistes:
[Em]Canta pra Jesus!`,
  h389:`Tom: G

Verso:
[G]Tua justiça eu quero [D]cumprir,
[Em]Alegremente me vou [C]batizar
[G]Por imersão, para Cristo [D]seguir
[Em]E meus pecados, assim [C]sepultar.

Coro:
[G]Lava-me, lava-me, ó Deus de [D]amor,
[Em]No sangue puro de Cristo [C]Jesus;
[G]Torna minh’alma mais alva que a [D]luz,
[Em]No sangue puro de Cristo [C]Jesus.`,
  h390:`Tom: G

Verso:
[G]Um coração, bondoso sim, custa dor, [D]obter;
[Em]Ser manso, amoroso e santo em todo o [C]ser;
[G]Manando nova vida ao coração - dá [D]luz.
[Em]E toda a minha lida será só em [C]Jesus.`,
  h391:`Tom: D

Verso:
[D]Jesus disse aos discípulos, no monte, ao [A]subir:
[Bm]"Detei-vos em Jerusalém, pois há de se [G]cumprir
[D]A vinda gloriosa do [A]Consolador,
[Bm]Pra revestir as testemunhas do [G]Senhor".

Coro:
[D]Descendo o fogo do altar, o vento de [A]amor,
[Bm]Depressa foram proclamar o [G]Salvador.`,
  h392:`Tom: G

Verso:
[G]Peregrinos somos [D]aqui
[Em]Té o labor findar;
[G]Deste mundo queremos [D]ir
[Em]Ao celeste lar.

Coro:
[G]Oh! Pátria mui [D]feliz
[Em]Em ti irei morar;
[G]Eu irei morar
[Em]Eu irei morar
[G]Jerusalém, oh meu [D]país
[Em]E meu querido lar!
[G]Jerusalém, oh meu [D]país
[Em]E meu querido lar!`,
  h393:`Tom: G

Verso:
[G]Há um amigo mui chegado - Cristo [D]Senhor,
[Em]Pois salvou-nos do pecado e do [C]temor;
[G]Este amigo [D]agonizava.
[Em]Quando o mundo [C]resgatava,
[G]E de Deus o amor mostrava; dai-Lhe [D]louvor!`,
  h394:`Tom: G

Verso:
[G]Quem sua mão ao arado já [D]pôs,
[Em]Constante precisa [C]ser;
[G]O sol declina e, logo [D]após,
[Em]Vai escurecer.
[G]Avante, em Cristo [D]pensando,
[Em]Em oração vigiando,
[G]Com gozo e amor [D]trabalhando,
[Em]Pra teu Senhor.`,
  h396:`Tom: G

Verso:
[G]Muito além do nosso [D]entendimento,
[Em]Alto mais que todo o [C]pensamento,
[G]Glorioso em seu sublime [D]intento,
[Em]É o amor de Deus, sem [C]par.

Coro:
[G]Grande amor! Amor de [D]Deus!
[Em]Enche a terra e enche os [C]céus!
[G]Grande amor! Amor que [D]abrange
[Em]A todo o mundo e atinge a [C]mim!`,
  h397:`Tom: G

Verso:
[G]Em pecados e temor o Salvador me [D]achou,
[Em]Tão indigno pecador, sem ter do céu a [C]luz,
[G]No Calvário ao morrer minh’alma [D]resgatou;
[Em]Meu perdão foi consumado lá na [C]cruz.

Coro:
[G]Vem ao Senhor, vem [D]pecador:
[Em]Ele é terno e mui fie!, vem [C]pecador!
[G]Vem ao Senhor, Deus é [D]amor;
[Em]Ouve Sua terna voz “Vem, [C]pecador”!`,
  h398:`Tom: G

Verso:
[G]Desejo estar em um [D]lugar
[Em]Mui perto do meu [C]Redentor;
[G]Ali eu posso [D]descansar,
[Em]Por Seu amparo e Seu [C]amor.

Coro:
[G]Mui perto do meu [D]Redentor,
[Em]Seguro abrigo [C]encontrarei;
[G]Me guardará do [D]tentador,
[Em]Assim eu nada [C]temerei.`,
  h399:`Tom: G

Verso:
[G]Deste mundo, sim, além, há um país de [D]luz;
[Em]Oh! Não queres ir lá? Oh! Não queres ir [C]lá?
[G]Onde as trevas não se [D]vêem,
[Em]pois brilha ali [C]Jesus;
[G]Oh! Não queres ir lá? Oh! Não queres ir [D]lá?

Coro:
[G]Terra de Jesus, terra de [D]amor!
[Em]Oh! Não queres ir lá? Oh! Não queres Ir [C]iá?
[G]Onde brilha a luz do meu [D]Salvador;
[Em]Oh! Não queres Ir lá? Oh! Não queres Ir [C]lá?`,
  h400:`Tom: Eb

Verso:
[Eb]Em Jesus, vivendo cada [Bb]dia,
[Cm]Em Jesus eu tenho [Ab]alegria!
[Eb]Em Jesus, oh, doce [Bb]harmonia!
[Cm]Em Jesus, desfruto a paz de [Ab]Deus!`,
  h401:`Tom: A

Verso:
[A]Tudo nos mostra que Cristo já [E]volta;
[F#m]Breve Jesus [D]voltará!
[A]Já deste mundo o mar se [E]revolta;
[F#m]Breve Jesus [D]voltará.

Coro:
[A]Breve virá, breve [E]virá,
[F#m]Breve Jesus [D]voltará.`,
  h402:`Tom: D

Verso:
[D]Ao Gólgota ascende alma [A]minha,
[Bm]Contempla ali teu [G]Senhor,
[D]Também a agonia que [A]tinha,
[Bm]Sofrendo por ti com [G]amor;
[D]Não vês uma rubra [A]torrente
[Bm]Cobrindo a terra de [G]horror?
[D]E o sangue de Cristo [A]inocente
[Bm]Vertido por mim, [G]pecador.`,
  h403:`Tom: F#m

Verso:
[F#]Oh! Que gozo real sinto no meu [C#]ser,
[D#m]Já tenho de Deus [B]perdão!
[F#]Pois Jesus nos diz: Que qualquer que [C#]crer
[D#m]Recebe salvação.

Coro:
[F#]Se tu crês, ó vem o passo [C#]dar,
[D#m]Vem o passo dar, sim, vem o passo [B]dar!
[F#]Se tu crês, ó vem o passo [C#]dar,
[D#m]Pois Jesus te quer [B]salvar.
[F#]2 Por amor foi Cristo, meu [C#]Redentor,
[D#m]Da glória, aqui [B]desceu;
[F#]E transforma a vida dum [C#]pecador,
[D#m]Na graça que nos [B]deu.`,
  h404:`Tom: D

Verso:
[D]Espera do céu, seu Senhor, o [A]fiel
[Bm]Aguarda orando, pois há de [G]voltar
[D]Na nuvem, em glória o [A]Emanuel,
[Bm]Com grande poder, a fim de o [G]buscar.

Coro:
[D]Em glória virá o Filho de [A]Deus,
[Bm]Sempre orando Jesus [G]esperai;
[D]Se virdes a “estrela da alva” no [A]céu,
[Bm]Alerta estai!`,
  h405:`Tom: G

Verso:
[G]Queres ser salvo, queres [D]perdão,
[Em]Paz e repouso no [C]coração?
[G]O que farás para teres a [D]luz?
[Em]Com toda a força - Crê em [C]Jesus;
[G]Se hoje queres em Cristo [D]crer.
[Em]Inda que morto hás de [C]viver;
[G]Deixa este mundo [D]enganador,
[Em]Crê só em Cristo. teu [C]Salvador.`,
  h406:`Tom: G

Verso:
[G]Preciso sempre [D]encostar-me
[Em]Aos pés do meu bom [C]Redentor;
[G]Presto virá pra [D]levar-me
[Em]Aos céus, minha pátria de [C]amor.

Coro:
[G]Eu preciso sempre [D]lançar-me
[Em]Nos braços do meu [C]Redentor;
[G]Só em Jesus vou também [D]abrigar-me
[Em]No Seu sublime [C]amor.`,
  h407:`Tom: G

Verso:
[G]Ó Criador bendito, ó fonte de [D]esperança,
[Em]A Ti, ó Pai contritos buscamos com [C]confiança;
[G]Nos deste em herança a glória [D]sempiterna;
[Em]O pão da vida eterna, ó manda-nos dos [C]céus!

Coro:
[G]Excelso Criador, supremo [D]benfeitor,
[Em]O Teu amor derrama em nós, qual viva [C]chama
[G]Excelso Criador, supremo [D]benfeitor,
[Em]O Teu amor derrama, por Teu [C]Consolador.`,
  h409:`Tom: G

Verso:
[G]Trabalhadores do [D]Evangelho,
[Em]Em breve ceifareis;
[G]Quer fracos vós sejais, ou [D]velhos,
[Em]Do céu vigor [C]tereis.

Coro:
[G]Os que esperam no [D]Senhor
[Em]Novas forças [C]obterão;
[G]Como águias voarão,
[Em]Subirão para as [C]alturas;
[G]Correrão sem se [D]cansar,
[Em]Sem fatigar hão de [C]andar;
[G]Correrão sem se [D]cansar,
[Em]Sem fatigar hão de [C]andar;
[G]Correrão sem se [D]cansar,
[Em]Até no céu chegar!`,
  h410:`Tom: G

Verso:
[G]Jesus é meu Rei [D]glorioso,
[Em]É grato cantar-Lhe [C]louvor;
[G]É Rei, mas me torna [D]ditoso,
[Em]Enchendo-me do Seu [C]amor;
[G]Deixando Seu trono de [D]glória
[Em]Me veio livrar desta [C]escória.
[G]Já sou mui feliz, já sou mui feliz com [D]Deus!`,
  h411:`Tom: G

Verso:
[G]Filho do eterno Deus, nós somos [D]Teus!
[Em]Compraste-nos, Jesus, por Tua [C]cruz,
[G]Rendemo-nos, Senhor, cheios de fé e [D]amor;
[Em]Nós somos Teus, Filho de [C]Deus!`,
  h412:`Tom: G

Verso:
[G]Glória ao Salvador [D]divino.
[Em]Nosso guia e [C]Redentor,
[G]Glória seja ao Deus [D]trino;
[Em]Aleluia ao Deus de [C]amor!

Coro:
[G]Jesus Cristo, bem [D]amado,
[Em]Poderoso Salvador,
[G]Ele era ontem, é [D]hoje,
[Em]Será sempre o Deus de [C]amor!`,
  h413:`Tom: Gm

Verso:
[G]Meu Pastor é Jesus [D]Cristo
[Em]NEle quero confiar;
[G]Com Jesus, não tenho [D]falta,
[Em]Junto a Ele eu quEro [C]andar;
[G]Me conduz ao bom [D]descanso;
[Em]Para o campo verde em [C]flor,
[G]Refrigera, sim, [D]minh’alma,
[Em]Saciando-me de [C]amor.`,
  h414:`Tom: G

Verso:
[G]Ó Salvador, ó Pai de [D]amor?
[Em]Tem compaixão do [C]pecador;
[G]Sem ser em Ti não [D]achará
[Em]A salvação, que Tu nos [C]dás.

Coro:
[G]Tem compaixão, ó [D]Salvador,
[Em]Tem compaixão do [C]pecador!
[G]Ó vem lavar seu [D]coração,
[Em]Ó vem lhe dar a [C]salvação!`,
  h415:`Tom: Eb

Verso:
[Eb]A terna voz do [Bb]Salvador
[Cm]Te fala comovida;
[Eb]"Ó vem ao médico de [Bb]amor,
[Cm]Que dá aos mortos [Ab]vida"!

Coro:
[Eb]Cristo Jesus te quer [Bb]curar,
[Cm]E tem poder p’ra te [Ab]curar,
[Eb]Dos males todos te [Bb]livrar,
[Cm]Se nEle confiares!`,
  h416:`Tom: G

Verso:
[G]Anjos aos milhares, no céu, [D]verão
[Em]Quando o povo salvo [C]entrar;
[G]Crentes coroados também [D]serão.
[Em]Quando o povo salvo [C]entrar.

Coro:
[G]Quando o povo salvo [D]entrar,
[Em]Quando o povo salvo [C]entrar;
[G]Multo grande alegria no céu [D]haverá,
[Em]Quando o povo salvo [C]entrar.`,
  h417:`Tom: G

Verso:
[G]No meio duma grande [D]dor,
[Em]A cruz de Cristo eu [C]vi,
[G]Qual viva fonte de [D]amor,
[Em]Bastante para mim!

Coro:
[G]Lá da cruz corre sem [D]cessar,
[Em]Insondável como é o [C]mar.
[G]Esta graça, que brota [D]assim,
[Em]Basta para mim!`,
  h418:`Tom: G

Verso:
[G]Sou um soldado de [D]Jesus
[Em]E servo do Senhor;
[G]Não temerei levar a [D]cruz,
[Em]Sofrendo grande [C]dor.

Coro:
[G]Depois da batalha me [D]coroará,
[Em]Deus me coroará;
[G]Deus me coroará;
[Em]Depois da batalha me [C]coroará,
[G]Na celestial [D]mansão;
[Em]Lá verei o meu Rei,
[G]E terei meu [D]galardão,
[Em]Depois de batalha me [C]coroará,
[G]Na cidade de Sião!`,
  h419:`Tom: G

Verso:
[G]Vinde todos [D]pecadores
[Em]A Jesus, o [C]Salvador;
[G]Vinde logo, sem [D]temores,
[Em]Encontrar o [C]Redentor.

Coro:
[G]Sim eu sei; Oh! Eu [D]sei,
[Em]Cristo salva o perdido [C]pecador!
[G]Sim, eu sei; oh! Eu [D]sei,
[Em]Cristo salva o perdido [C]pecador!`,
  h420:`Tom: G

Verso:
[G]O que buscas [D]ansioso
[Em]Ó perdido pecador?
[G]Tudo que tens por [D]precioso,
[Em]Murchará qual linda [C]flor!
[G]Quando teu fim [D]chegar,
[Em]Quando teu fim [C]chegar,
[G]Há de cessar o teu [D]gozo,
[Em]Mas vai o crente [C]entrar,
[G]Mas vai o crente [D]entrar,
[Em]Num lar eterno de [C]repouso!`,
  h421:`Tom: G

Verso:
[G]Quando de Ti careço
[Em]Jesus, meu [C]Salvador!
[G]O Teu amor, O vem [D]m'alegrar,
[Em]Quando de Ti [C]careço.`,
  h422:`Tom: G

Verso:
[G]No céu não entra [D]pecado
[Em]Fadiga, tristeza, nem [C]dor;
[G]Não há coração [D]quebrantado,
[Em]Pois todos são cheios de [C]amor,
[G]As nuvens da vida [D]terrestre
[Em]Não podem a glória [C]ofuscar
[G]Do reino de gozo [D]celeste,
[Em]Que Deus quis pra mim [C]preparar!

Coro:
[G]Irei eu p’ra linda [D]cidade,
[Em]Jesus me dará um [C]lugar,
[G]Co’os crentes de todas [D]Idades,
[Em]A Deus hei de sempre [C]louvar.
[G]Do céu tenho muitas [D]saudades,
[Em]Das glórias que lá hei de [C]ver;
[G]Oh! Que gozo vou [D]ter,
[Em]Quando eu vir meu [C]Senhor,
[G]Rodeado de grande [D]esplendor!`,
  h423:`Tom: Db

Verso:
[Db]Jesus, preciso mais de [Ab]amor,
[Bbm]Reino de Deus, em meu [Gb]coração;
[Db]Da compaixão Tu és o [Ab]Senhor;
[Bbm]De Ti preciso mais.
[Db]De Ti preciso mais,
[Bbm]Do Teu amor veraz;
[Db]Sei que estás pronto pra me [Ab]valer,
[Bbm]De Ti preciso mais!`,
  h424:`Tom: G

Verso:
[G]esus me salvou com Seu precioso [D]sangue;
[Em]Jesus me comprou com Seu precioso [C]sangue,
[G]Com Seu poder já me [D]curou;
[Em]O meu pecado já cravou na [C]cruz!
[G]Jesus pra sempre me [D]salvou!`,
  h425:`Tom: G

Verso:
[G]Perdido neste mundo [D]andei,
[Em]Imerso em sua [C]escuridão;
[G]Em vãs promessas [D]confiei;
[Em]Não tinha Deus, nem [C]salvação.

Coro:
[G]Perdido andei, mas me [D]salvei,
[Em]Sendo guiado pela [C]luz,
[G]Que no Calvário [D]avistei
[Em]E me levou ao Rei [C]Jesus!`,
  h426:`Tom: G

Verso:
[G]Quando aqui nos [D]reunimos,
[Em]Ó irmãos, em santo [C]amor,
[G]Certamente nós [D]fruímos,
[Em]Bênçãos do [C]Consolador!
[G]Sempre pode Sua [D]presença,
[Em]De Jesus [C]testificar;
[G]Com palavras e [D]sentenças
[Em]A quem quer o [C]escutar.`,
  h428:`Tom: D

Verso:
[D]Mostra-Te, estrela da [A]manhã,
[Bm]Ó bondoso Salvador!
[D]Sem Tua luz, a vida é [A]vã,
[Bm]Sem Tua luz não temos [G]vigor!
[D]Sem Tua luz não temos [A]vigor!

Coro:
[D]Ó estrela da alva, estrela que [A]salva
[Bm]A perdida alma que vaga sem ter [G]direção!`,
  h429:`Tom: G

Verso:
[G]O pecador desejoso
[Em]De verdadeiro [C]perdão,
[G]A voz de Cristo, [D]ditoso,
[Em]Escuta com atenção!

Coro:
[G]Escuta o Evangelho
[Em]Do Filho de Deus,
[G]O divinal conselho,
[Em]Que vem dos mais altos [C]céus!`,
  h430:`Tom: G

Verso:
[G]Ouves, como o [D]Evangelho
[Em]Nos dá vera [C]salvação.
[G]E transforma o homem [D]velho
[Em]Numa nova criação?
[G]Bem algum em mim não [D]via,
[Em]Mas somente [C]corrupção,
[G]E cansado da porfia
[Em]Em Jesus achei [C]perdão.`,
  h431:`Tom: G

Verso:
[G]Cristo chama, chama, chama com muito [D]amor,
[Em]“Hoje vem a Mim, [C]pecador!”
[G]A Cristo dá teu [D]coração,
[Em]Manchado já por mal [C]atroz;
[G]Vem, hoje, vem! Bela [D]ocasião!
[Em]Não queres vir a esta [C]voz?

Coro:
[G]Aceitarás ao [D]Salvador?
[Em]É teu Senhor, e [C]benfeitor;
[G]Te chama já, vem sem [D]tardar,
[Em]Aceitarás o [C]Salvador?
[G]Aceitarás o [D]Salvador?`,
  h433:`Tom: G

Verso:
[G]Nossas vozes [D]jubilosas
[Em]Elevamos com [C]fervor,
[G]Pela vinda amistosa
[Em]Dos obreiros do [C]Senhor.

Coro:
[G]Sois bem-vindos,
[Em]Sois bem-vindos,
[G]Campeões de Jeová!
[Em]Parabéns, mas não [C]fingidos,
[G]A congregação vos [D]dá.`,
  h434:`Tom: G

Verso:
[G]A Teus pés, ó Jesus [D]Cristo,
[Em]Tua face buscarei,
[G]Escutando qual [D]Maria,
[Em]As palavras de [C]amor;
[G]A Teus pés, ó Jesus [D]Cristo,
[Em]Meu passado [C]esquecerei,
[G]Pois Tua mão fiel e [D]terna,
[Em]Tem me salvo do [C]temor.`,
  h435:`Tom: G

Verso:
[G]O Salvador, por Seu [D]amor,
[Em]Ao mundo vil por nós [C]baixou,
[G]E dum abismo de [D]horror,
[Em]Minh’alma levantou!

Coro:
[G]Que salvação me deu [D]Jesus,
[Em]A qual na cruz p’ra mim [C]ganhou,
[G]Estando em sombra, à plena [D]luz,
[Em]Com seu poder me [C]levantou!`,
  h436:`Tom: Eb

Verso:
[Eb]Crentes, cantai e entoai [Bb]louvores
[Cm]Ao Senhor, ao nosso [Ab]Deus,
[Eb]Deus de bondade infinita, [Bb]imensa,
[Cm]Criador da terra e [Ab]céus;
[Eb]Que, com poder tão vasto e [Bb]eficaz,
[Cm]Deu-nos salvação e plena [Ab]paz.
[Eb]Glória e louvor ao Deus de [Bb]amor;
[Cm]Com fervor, [Ab]sinceramente,
[Eb]Glória ao Pai [Bb]onipotente!

Coro:
[Eb]Ao nosso Criador,
[Cm]Honra e glória [Ab]tributemos,
[Eb]Ao nosso Salvador,
[Cm]Mil louvores [Ab]entoemos;
[Eb]E ao bom [Bb]Consolador,
[Cm]Honra e louvor demos [Ab]também;
[Eb]Honra a Trindade para sempre, [Bb]amém.`,
  h437:`Tom: G

Verso:
[G]Assim que Deus me [D]batizou,
[Em]A minha alma viu mais [C]luz,
[G]Pois dom celeste o Pai [D]mandou,
[Em]P’ra dar louvor ao meu Rei [C]Jesus,
[G]Sou testemunha do meu [D]Senhor,
[Em]E sempre dEle vou [C]falar;
[G]Também do selo de [D]amor,
[Em]Que o meu cálice faz [C]transbordar.

Coro:
[G]Louvado seja Jesus, o [D]Cristo,
[Em]Que continua a [C]batizar,
[G]Com língua estranha, nós temos [D]visto,
[Em]O dom celeste, o Pai [C]mandar!`,
  h438:`Tom: G

Verso:
[G]Assim a nós falou [D]Jesus:
[Em]“Voltai-vos pare [C]Mim,
[G]A salvação. a paz, a [D]luz,
[Em]Encontrareis enfim”.
[G]Ó esperai o bom [D]Jesus,
[Em]A estrela da manhã.
[G]Pois Ele ao céu a vós [D]conduz;
[Em]Deixai a vida vã!`,
  h439:`Tom: G

Verso:
[G]De Cristo [D]ressurgido,
[Em]Aos seus pés nos [C]prostramos;
[G]Com fé O adoramos,
[Em]Do mundo é o [C]Salvador;
[G]Nós, crentes [D]redimidos,
[Em]Por sangue já [C]lavados,
[G]Na graça bem [D]guardados,
[Em]Temos de Deus [C]favor!`,
  h440:`Tom: G

Verso:
[G]Em viver pra Cristo firme [D]permanecerás
[Em]E a paz após, tu sempre [C]seguirás?
[G]E ao pé da cruz os teus cuidados [D]deixarás?
[Em]Faze já o Seu [C]querer!

Coro:
[G]O Seu poder e Seus dons te [D]dará;
[Em]De gozo, Cristo, sim, te [C]inundará;
[G]Do coração as manchas [D]limpará
[Em]Fazendo tu, p’ra sempre, Seu [C]querer!`,
  h441:`Tom: A

Verso:
[A]Unânimes ao pé da [E]cruz,
[F#m]Pedimos com fervor,
[A]Nos manda hoje, ó [E]Jesus,
[F#m]O bom Consolador!

Coro:
[A]Sim, manda outra [E]chuva,
[F#m]Ó bom salvador!
[A]E com Tua chama
[F#m]Destrói de nós o [D]mal;
[A]O dá-nos a chuva,
[F#m]Do Consolador;
[A]Ao povo Teu inflama
[F#m]Com poder [D]celestial!`,
  h442:`Tom: D

Verso:
[D]Breve no céu, Jesus há de [A]aparecer
[Bm]Em gloriosa luz; todos O hão de [G]ver
[D]Naquele dia, então, eu hei de [A]receber
[Bm]De Cristo galardão; oh! que [G]prazer!

Coro:
[D]Breve verei o bom [A]Jesus,
[Bm]E viverei em plena [G]luz;
[D]No lindo céu eu [A]gozarei...
[Bm]De toda a dor, por Deus, livre [G]serei.`,
  h443:`Tom: G

Verso:
[G]Pecador, um convite te queremos [D]dar.
[Em]Um convite divino e [C]consolador;
[G]Hoje queres à casa paternal [D]voltar,
[Em]Onde Cristo te espera cheio de [C]amor.

Coro:
[G]Larga o mundo já, vem após [D]Jesus;
[Em]O qual pode agora mesmo te [C]salvar!
[G]Tudo pronto está, que divina [D]luz!
[Em]Cristo hoje te convida para vir [C]cear!`,
  h444:`Tom: G

Verso:
[G]Escuta, pobre [D]pecador,
[Em]Em Cristo há [C]perdão;
[G]Aceita agora o [D]Salvador,
[Em]Pois nEle há [C]salvação!

Coro:
[G]Vem a Cristo sem [D]tardança,
[Em]Receber perdão,
[G]E a vida [D]d’esperança
[Em]Fruirás, então!`,
  h445:`Tom: G

Verso:
[G]Com ouro e prata não fui [D]resgatado,
[Em]Tesouro terrestre, jamais me [C]livrou;
[G]O preço foi o sangue de Cristo, [D]manado
[Em]Na cruz do Calvário onde a vida [C]raiou!

Coro:
[G]Por prata e ouro não fui [D]remido,
[Em]Nem por tesouro de mui [C]valor,
[G]Mas pelo sangue que foi [D]vertido
[Em]Por Jesus, meu [C]Salvador!`,
  h446:`Tom: G

Verso:
[G]Vem, ó alma cansada, que sentes [D]dor,
[Em]A teu bom Salvador, a [C]Jesus,
[G]E confia no sangue do [D]Redentor,
[Em]Derramado, que foi lá na [C]cruz.

Coro:
[G]Ó vem Já! Ó vem Já! A Jesus vem como [D]estás;
[Em]Não demores pecador aceitar o teu [C]Salvador.
[G]Ó vem Já! Ó vem Já! A Jesus vem como [D]estás,
[Em]Não demores pecador aceitar o teu [C]Salvador.`,
  h447:`Tom: G

Verso:
[G]Nascestes de novo? Andas já com [D]Deus?
[Em]Pertences ao povo, que vai para os [C]céus?
[G]Tens a lei escrita no teu [D]coração?
[Em]Em ti já habita plena [C]salvação?

Coro:
[G]Se o caminho é estreito, a porta é [D]também,
[Em]Tudo está feito, não demores, [C]vem!
[G]No portal da vida Cristo [D]acharás,
[Em]Ao findar a lida lá no céu tu [C]estarás.`,
  h448:`Tom: G

Verso:
[G]Crentes, avançai,
[Em]Firmes pelejai
[G]Contra o vício, contra o [D]mal!
[Em]Quem quer triunfar,
[G]Cristo agradar,
[Em]Vem à luta divinal,
[G]Nosso guia é Jesus,
[Em]Ele sempre nos [C]conduz;
[G]A vitória nos dará,
[Em]Cristo sempre [C]vencerá.`,
  h449:`Tom: G

Verso:
[G]À beira da estrada [D]estão
[Em]Muitos que esperam a [C]salvação;
[G]Podem tais almas sem Deus [D]perecer,
[Em]Ou estás pronto para as [C]socorrer?

Coro:
[G]Quem hoje dirá: “Eis-me aqui, [D]Senhor,
[Em]Eu quero aos perdidos falar do [C]amor,
[G]A quantos na senda da vida [D]achar,
[Em]De Cristo eu irei [C]falar"`,
  h450:`Tom: D

Verso:
[D]O sol da justiça vamos [A]proclamar
[Bm]Sua luz resplandece em qualquer [G]lugar,
[D]Seu fulgor dourado de amor e [A]paz,
[Bm]Salvação completa aos caídos [G]traz.

Coro:
[D]Resplandece, ó sol [A]verdadeiro!
[Bm]Teus celestes raios vamos [G]espalhar;
[D]Resplandece, ó sol [A]verdadeiro!
[Bm]Tão formosos raios vamos [G]proclamar!`,
  h451:`Tom: D

Verso:
[D]Os testemunhos [A]indicam
[Bm]Que breve Cristo [G]virá;
[D]Já os sinais [A]testificam
[Bm]Que Ele vem, não [G]tardará.
[D]Oh! Dia de grande [A]glória,
[Bm]Para os remidos [G]será!
[D]Dia será de [A]vitória;
[Bm]Jesus em breve [G]virá.

Coro:
[D]Meu Jesus vem, meu Jesus [A]vem;
[Bm]Vou encontrá-Lo no [G]céu!
[D]Os anjos nas harpas [A]tangem,
[Bm]Dando louvores a [G]Deus!`,
  h452:`Tom: G

Verso:
[G]Sempre! Sempre! Seguirei a [D]Cristo!
[Em]Onde quer que Ele for, O [C]seguirei,
[G]Sempre! Sempre! Seguirei a [D]Cristo!
[Em]Onde quer que Ele for, O [C]seguirei!`,
  h453:`Tom: G

Verso:
[G]Oh! Como é bom dos tempos primitivos [D]lembrar
[Em]E dos avivamentos de que ouvimos [C]falar;
[G]Deus quer nos dar mais fervor [D]espiritual.
[Em]Ao Seu povo mandar o poder [C]pentecostal.

Coro:
[G]Nosso Deus é o mesmo hoje como [D]então,
[Em]Ele cura, batiza e nos dá [C]salvação.
[G]Abundante é aqui a vida [D]espiritual
[Em]Para os que recebem poder [C]pentecostal!`,
  h454:`Tom: G

Verso:
[G]Glorioso é o [D]Cordeiro,
[Em]Ele é digno de [C]louvor;
[G]É o resgate [D]verdadeiro
[Em]Do pecado e do [C]horror,
[G]Alegrai-vos, ó [D]remidos;
[Em]Cantai glória ao [C]Redentor!

Coro:
[G]Aleluia! Aleluia! Cantai glória e dai [D]louvor!
[Em]Aleluia! Aleluia! Cantai glória ao [C]Redentor!`,
  h455:`Tom: Cm

Verso:
[C]O povo de Deus, aqui na terra tem um [G]sinal:
[Am]Povo que vive em santa guerra contra o [F]mal;
[C]Povo que espera a Jesus Cristo, que presto [G]vem
[Am]É pois Ele mesmo, quem nos diz isto: "Vigiei mui [F]bem”.`,
  h456:`Tom: G

Verso:
[G]Música 01

Coro:
[G]Ele me abriu a [D]porta,
[Em]E me reconciliou,
[G]Por Seu sangue [D]derramado;
[Em]para Deus me [C]consagrou.`,
  h457:`Tom: G

Verso:
[G]Oh! Que festim de glória para nós há de [D]ser!
[Em]Quando tiver nas nuvens, Cristo de [C]aparecer.

Coro:
[G]Oh! Nesse evento mui [D]feliz
[Em]e de prazer também,
[G]Eu hei de ver meu bom [D]Jesus,
[Em]fonte de todo bem.`,
  h458:`Tom: Bm

Verso:
[B]Guia meus passos, Senhor [F#]Jesus,
[G#m]Senhor de [E]consolação,
[B]Leva-me à estrada da Tua [F#]luz,
[G#m]A fonte do Teu [E]perdão.

Coro:
[B]Lá fora, eis a chorar, sem [F#]Deus.
[G#m]sem luz, sem lar.
[B]O pecador... Ouve, [F#]Senhor,
[G#m]a queixa do [E]pecador.`,
  h459:`Tom: E

Verso:
[E]De Deus mui firmes são as [B]promessas
[C#m]Mais firmes que as montanhas [A]são.
[E]Quando o socorro terrestre [B]cessa,
[C#m]Os de Deus não [A]falharão!

Coro:
[E]De Deus mui firmes são as [B]promessas,
[C#m]Falhando tudo, não [A]falharão;
[E]Se das estrelas o brilho [B]cessa,
[C#m]Mas as promessas [A]brilharão!`,
  h461:`Tom: E

Verso:
[E]Jerusalém por Cristo é [B]contemplada.
[C#m]Com os seus altos que rebrilham [A]lá,
[E]Mas entre as belas torres [B]levantadas;
[C#m]Vê as do templo onde esteve [A]já;
[E]Jesus com Seu olhar mui [B]penetrante,
[C#m]Não vê somente o lindo [A]exterior,
[E]Mas sim as almas tristes, [B]vacilantes.
[C#m]Que rejeitaram Seu divino [A]amor.`,
  h462:`Tom: G

Verso:
[G]Glória! Glória! [D]Aleluia!
[Em]Glória! Glória ao nosso [C]Salvador!
[G]Glória a Jesus! Glória a [D]Jesus!
[Em]Nosso grande [C]Redentor.`,
  h463:`Tom: D

Verso:
[D]Como o povo de [A]Abraão
[Bm]Para a terra de [G]Sião
[D]Entre os povos inimigos [A]viajou;
[Bm]Hoje eu cheio de [G]amor,
[D]E de fé no [A]Salvador,
[Bm]Caminhando para o céu, contente [G]vou.

Coro:
[D]Lá no céu, lá no [A]céu,
[Bm]As tristezas eu jamais [G]conhecerei;
[D]Ruas áureas brilham [A]lá,
[Bm]Na cidade de Jeová;
[D]Sempre alegre, vou marchando para o [A]céu!`,
  h464:`Tom: D

Verso:
[D]Plena graça para me [A]salvar
[Bm]Sangue puro para me [G]lavar,
[D]E poder pra sempre me [A]guardar,
[Bm]Tem meu Senhor.`,
  h465:`Tom: F

Verso:
[F]Eu li que Jesus fora [C]preso;
[Dm]De dor a minh'alma [Bb]vibrou;
[F]Eu antes assim não [C]sentia,
[Dm]Agora isto a mim [Bb]empolgou,
[F]Eu li que Ele foi [C]conduzido
[Dm]À corte de [Bb]Jerusalém;
[F]Ali padeceu grande [C]afronta.
[Dm]Foi c'roado de espinhos [Bb]também.

Coro:
[F]Eu sei que eu era [C]culpado,
[Dm]Mas Ele sofreu já por [Bb]mim;
[F]Eu sei que Ele era [C]inocente,
[Dm]Padecendo tudo [Bb]assim.`,
  h466:`Tom: Fm

Verso:
[F]Amigo, conheces, também [C]enalteces
[Dm]Jesus, o Filho de [Bb]Deus?
[F]Tens nEle já crido, e assim [C]recebido
[Dm]Jesus, o Filho de [Bb]Deus?

Coro:
[F]Que maravilha! Que [C]maravilha!
[Dm]Jesus, o Filho de [Bb]Deus!
[F]Oh! Eu te adoro! Sim, eu te [C]amo!
[Dm]Jesus, o Filho de [Bb]Deus!`,
  h467:`Tom: G

Verso:
[G]Música

Coro:
[G]Solta o cabo da nau
[Em]Toma os remos na [C]mão,
[G]E navega com fé em [D]Jesus;
[Em]E então, tu verás que bonança se [C]faz
[G]Pois com Ele, seguro [D]serás.`,
  h468:`Tom: Em

Verso:
[E]Queres tu seguir a [B]Cristo,
[C#m]E andar na Sua luz?
[E]Queres ser por todos [B]visto
[C#m]Carregando a tua [A]cruz?

Coro:
[E]Jesus Cristo está [B]chamando,
[C#m]Quer da morte te [A]livrar;
[E]Com paciência te [B]esperando,
[C#m]Vem, p’ra Ele te [A]salvar.`,
  h469:`Tom: G

Verso:
[G]Quando a angelical trombeta neste mundo [D]estrugir,
[Em]O meu nome ouvirei Jesus [C]chamar;
[G]Pois eu creio na promessa, e que Deus a vai [D]cumprir
[Em]Quando ouvir Jesus meu nome [C]proclamar!

Coro:
[G]Glória! Glória! [D]Aleluia!
[Em]O meu nome ouvirei Jesus [C]chamar;
[G]Glória! Glória! [D]Aleluia!
[Em]Eu espero ouvir Jesus a me [C]chamar.`,
  h470:`Tom: F

Verso:
[F]Tua graça. é Deus [C]amado,
[Dm]Vem agora conceder,
[F]Aos que vão ser [C]batizados,
[Dm]Dá-lhes o Espírito e [Bb]poder.

Coro:
[F]Com o Teu Espírito [C]Santo,
[Dm]Estas almas vem [Bb]selar;
[F]Dá-lhes vida e novo [C]canto,
[Dm]P’ra Tua glória [Bb]conquistar.`,
  h471:`Tom: F

Verso:
[F]Avançai, fiéis [C]soldados,
[Dm]Contra as hostes [Bb]infernais;
[F]Ouve-se de guerra, [C]brados,
[Dm]Homens de Gideão [Bb]sejais;
[F]Deste mundo, a [C]ilusão,
[Dm]O terror da própria [Bb]morte
[F]Não nos turba o [C]coração;
[Dm]Torna Deus, o fraco - [Bb]forte.

Coro:
[F]Pelo sangue do [C]Cordeiro
[Dm]Nós vamos, sim, [Bb]triunfar,
[F]O Senhor, ao vencedor vai [C]coroar;
[Dm]Hei de vencer
[F]Com Jesus, o [C]verdadeiro,
[Dm]Hei de vencer,
[F]Pelo Seu poder.`,
  h472:`Tom: G

Verso:
[G]Cristo Jesus lá na cruz já [D]sofre
[Em]Em meu lugar, em meu [C]lugar;
[G]Tudo por mim Ele ali [D]padeceu,
[Em]Para a minh'alma [C]salvar.`,
  h473:`Tom: G

Verso:
[G]Que outro bem ansioso [D]buscarei?
[Em]Bem melhor, que Jesus não [C]acharei;
[G]NEle só para sempre, hei de [D]estar,
[Em]E de coração O [C]amar.

Coro:
[G]Outro bem não [D]procurarei,
[Em]Outro bem eu não [C]acharei;
[G]Já em mim, ‘stá [D]Jesus,
[Em]NEle só vou [C]confiar.
[G]Quem aqui pode me [D]saciar,
[Em]Neste mundo [C]enganador?
[G]Só Jesus, Jesus, só Jesus, [D]Jesus,
[Em]Rei meu e fiei [C]Senhor!`,
  h475:`Tom: G

Verso:
[G]Lá em Belém nasceu [D]Jesus,
[Em]Príncipe excelso da [C]paz;
[G]Amor divino e santa [D]luz,
[Em]Para o mundo perdido, Ele [C]traz.

Coro:
[G]Louvemos ao Rei [D]bendito;
[Em]Louvemos ao Rei [C]bendito;
[G]Louvemos ao Rei [D]bendito;
[Em]O Seu poder é [C]infinito.`,
  h476:`Tom: C

Verso:
[C]Enquanto para [G]Jericó
[Am]O bom Jesus [F]passava,
[C]Um cego, filho de [G]Jacó,
[Am]Sem se cansar [F]clamava:

Coro:
[C]“Jesus, ó Filho de [G]Davi,
[Am]Tem compaixão de mim, [F]Senhor!”
[C]“Jesus, ó Filho de [G]Davi,
[Am]Atende ao meu [F]clamor!”`,
  h477:`Tom: F

Verso:
[F]Sede fortes, irmãos na [C]lida,
[Dm]E Cristo quem vos [Bb]conduz;
[F]Garantindo eterna [C]vida,
[Dm]Aos que trilharem na [Bb]luz.

Coro:
[F]Sim, andai na luz de [C]Cristo,
[Dm]Libertos da eterna [Bb]dor;
[F]Buscai, vós que a tendes [C]visto,
[Dm]A glória do [Bb]Redentor!`,
  h478:`Tom: G

Verso:
[G]Eis-me, Jesus, Te [D]louvando,
[Em]Pois Tu padeceste [C]assim;
[G]O sangue Teu [D]derramando,
[Em]Na dura cruz por [C]mim.

Coro:
[G]Glória, aleluia! ó [D]Cordeiro,
[Em]Tua vida deu-me [C]paz!
[G]Dou-Te louvor [D]verdadeiro,
[Em]Por graça tão [C]veraz!`,
  h479:`Tom: G

Verso:
[G]É meia noite, o ano já [D]fenece,
[Em]Nós elevamos os olhos aos [C]céus,
[G]Todos orando para que [D]comece
[Em]O ano novo na graça de [C]Deus.

Coro:
[G]As nossas vozes juntas [D]levantemos,
[Em]Com alegria e suave [C]som;
[G]Em gratidão a Cristo, [D]jubilemos,
[Em]Pelo raiar de mais um ano [C]bom.`,
  h480:`Tom: G

Verso:
[G]Deus eterno, em Tua [D]presença,
[Em]Nossos séculos horas [C]são
[G]E um segundo a [D]existência
[Em]Da humana geração;
[G]Mas o homem que ao Teu [D]lado,
[Em]Pela fé quer já [C]voar,
[G]Neste mundo de [D]pecado,
[Em]Lento o tempo vê [C]passar.`,
  h481:`Tom: D

Verso:
[D]Tu deixaste, [A]Senhor,
[Bm]Tua glória, [G]esplendor,
[D]Quando ao mundo quiseste [A]descer,
[Bm]Não puderam achar
[D]Em Belém um lugar,
[Bm]Num presépio Tu foste [G]nascer.

Coro:
[D]Vem ao meu coração, ó [A]Cristo,
[Bm]Nele tenho p’ra Ti um [G]lugar!
[D]Vem ao meu coração, ó Cristo [A]vem!
[Bm]Nele podes p’ra sempre [G]morar!`,
  h482:`Tom: C

Verso:
[C]Bendito Jesus, nós chamamos por [G]Ti,
[Am]Cercamos Tua mesa, [F]Senhor;
[C]Por Teu Paracleto nos preside [G]aqui;
[Am]Vem encher-nos de santo [F]fervor.`,
  h483:`Tom: Bbm

Verso:
[Bb]Disse Jesus, eis que presto Eu [F]venho,
[Gm]Trago comigo, também [Eb]galardão;
[Bb]Venho do céu com a glória que [F]tenho,
[Gm]O vigiai firmes na [Eb]oração!

Coro:
[Bb]Ora vem Jesus, gloriosa [F]luz,
[Gm]Ainda nós Te esperamos; ora vem [Eb]Jesus!
[Bb]De ver-Te, sedentos bradamos: Oh! Senhor [F]Jesus
[Gm]Por Ti velando estamos; ora vem, [Eb]Jesus!`,
  h484:`Tom: A

Verso:
[A]Música

Coro:
[A]Meus pecados levou na cruz onde [E]morreu
[F#m]O sublime e meigo Jesus: os desprezos [D]sofreu,
[A]A minh ‘alma salvou
[F#m]E mudou minhas trevas em [D]luz.`,
  h485:`Tom: Eb

Verso:
[Eb]'Stou andando para o [Bb]céu
[Cm]Onde os santos já [Ab]estão:
[Eb]'Stou alegre e [Bb]satisfeito!
[Cm]Minha pátria é [Ab]Sião,
[Eb]Morte lá não [Bb]entrará;
[Cm]Que alegria ali [Ab]será!

Coro:
[Eb]Oh! Glória! [Bb]Aleluia!
[Cm]Meu desejo é estar no [Ab]céu;
[Eb]‘Stou alegre é [Bb]satisfeito;
[Cm]Oh! Glória! [Ab]Aleluia!
[Eb]Meu desejo é estar no [Bb]céu;
[Cm]Que alegria ali [Ab]será!`,
  h486:`Tom: G

Verso:
[G]Qual vazio vaso 'stá teu [D]coração,
[Em]Para receber de Deus a [C]salvação?
[G]Só Jesus teu vaso poderá [D]encher,
[Em]De bençãos que dão [C]poder.

Coro:
[G]Deixa encher teu vaso até [D]transbordar;
[Em]Que Jesus tua vida possa [C]governar,
[G]Põe teu sacrifício hoje sobre o [D]altar;
[Em]E verás as bênçãos descer sem [C]cessar.`,
  h487:`Tom: G

Verso:
[G]Glória! Glória! Glória seja ao grande Deus [D]onipotente
[Em]Ao Teu nome damos glória porque és [C]onisciente;
[G]Aleluia! Aleluia a Deus Pai [D]onipresente.`,
  h488:`Tom: G

Verso:
[G]Ao ralar do áureo dia, o bom Jesus vem nos [D]buscar
[Em]Pra com Ele, sempre estarmos lá no [C]céu;
[G]Os milhões purificados pelo sangue de [D]Jesus
[Em]Subirão pra contemplar o amado [C]Seu.

Coro:
[G]Quando os salvos [D]congregados,
[Em]Dentre os povos e [C]nações,
[G]Virem Cristo mui [D]amado,
[Em]Oh! Que gozo encherá seus [C]corações.`,
  h489:`Tom: F

Verso:
[F]Chegai, pastorzinhos, chegai p'ra [C]adorar
[Dm]O Rei do universo, que nasce em [Bb]Belém,
[F]Sim, ricos presentes podemos Lhe [C]dar.
[Dm]A fé o amor, nossa vida [Bb]também.`,
  h490:`Tom: G

Verso:
[G]Vem, fatigado [D]coração,
[Em]Cristo está [C]passando;
[G]A Ele estende tua [D]mão,
[Em]No Seu amor, [C]confiando.

Coro:
[G]Passando está - passando [D]está...
[Em]O amoroso Salvador!
[G]Vem tu a Ele, ó [D]pecador!
[Em]Passa aqui - Chama por [C]ti.`,
  h492:`Tom: G

Verso:
[G]Jesus em breve virá do [D]céu,
[Em]Cumprir o que subindo [C]prometeu,
[G]Tudo revela que virá [D]presto,
[Em]Com Ele iremos pra o reino [C]Seu.

Coro:
[G]Jesus com sangue me tem [D]comprado,
[Em]E pelo Espírito me tem [C]selado;
[G]‘Stou remido, tenho o [D]penhor
[Em]Da minha herança em meu [C]Senhor.`,
  h493:`Tom: G

Verso:
[G]Ao Pai voltai, vós que [D]chorais,
[Em]Voltai ao lar [C]paterno;
[G]Pois lá Jesus, em santa [D]luz,
[Em]Vos dá um gozo [C]eterno!

Coro:
[G]Ao Pai voltai, voltai ao lar [D]eterno;
[Em]A Deus tomai, ao vosso lar [C]paterno.`,
  h494:`Tom: G

Verso:
[G]Jerusalém celestial,
[Em]Mansão de paz tão [C]divinal!
[G]De jaspe tem muro em [D]redor;
[Em]Onde é a luz, o meu [C]Senhor.

Coro:
[G]Jerusalém, mansão de [D]luz,
[Em]Jerusalém de meu [C]Jesus!
[G]Cidade que p’ra nós fez [D]Deus;
[Em]Eterna glória para os filhos [C]seus.`,
  h495:`Tom: G

Verso:
[G]Jesus Cristo á porta [D]está;
[Em]Bate sempre para [C]entrar;
[G]Se ouvires abre já;
[Em]Abre o coração.

Coro:
[G]Abre o coração!
[Em]Abre o coração!
[G]Jesus quer te [D]libertar;
[Em]Abre o coração!`,
  h496:`Tom: Cm

Verso:
[C]Jazia num lago de fama, de [G]horror,
[Am]Não tinha esperança em mim, [F]pecador,
[C]Mas tenho clamado a Jesus [G]Salvador,
[Am]Pra fora do lago me tirou o [F]Senhor.

Coro:
[C]Dum lago horrível Jesus me [G]tirou,
[Am]Sobre a rocha meus pós [F]firmou!
[C]Um novo canto em mim [G]soou,
[Am]Ao Salvador, [F]Aleluia!`,
  h497:`Tom: Em

Verso:
[E]Jesus é precioso, meu bom [B]Salvador,
[C#m]Pra sempre O louvo, pois deu-me a [A]luz;
[E]Se débil me encontro me dá Seu [B]vigor,
[C#m]Pra mim é precioso [A]Jesus!

Coro:
[E]Precioso é Jesus, meu [B]Jesus!
[C#m]Precioso é Jesus, minha [A]luz!
[E]Que glória será o Seu rosto [B]mirar!
[C#m]Pra mim é precioso [A]Jesus!`,
  h498:`Tom: G

Verso:
[G]Guia-me, ó Salvador, pela senda [D]divina!,
[Em]Ao Teu lado, sem temor, tenho gozo [C]perenal!

Coro:
[G]Cristo! Cristo! Não me deixes, ó [D]Senhor;
[Em]Guia-me por Teu amor, e serei um [C]vencedor.`,
  h499:`Tom: E

Verso:
[E]Santa Bíblia, para [B]mim,
[C#m]És o meu tesouro, [A]sim;
[E]Tu conténs a lei de [B]Deus
[C#m]E me mostras lindos [A]céus;
[E]Tu me dizes quem eu [B]sou,
[C#m]Donde vim, pra onde [A]vou!`,
  h500:`Tom: G

Verso:
[G]Quero ver a Jesus Cristo, meu precioso [D]Salvador,
[Em]Ver a face do meu Mestre, que por mim sofreu na [C]cruz;
[G]Quero ir ao céu sublime, ver o trono do [D]Senhor,
[Em]Viverei, sim, nessa pátria de eterno gozo e [C]luz.

Coro:
[G]Quero ver a [D]desejada
[Em]Pátria onde reina eterno [C]amor;
[G]Quero ter feliz [D]morada,
[Em]Com Jesus, meu [C]Salvador.`,
  h501:`Tom: G

Verso:
[G]O que serve a Deus de coração, vence o [D]mal;
[Em]Quem vencer terá um galardão [C]eternal;
[G]Ó não queiras mais desanimar, quando vier a [D]provação;
[Em]Vencerá, quem puro conservar seu [C]coração.

Coro:
[G]Com todo o fervor, contra o [D]tentador,
[Em]Vencerá então, co’o bom [C]Capitão!`,
  h502:`Tom: G

Verso:
[G]Ó Pastor bendito, [D]escuta
[Em]De Teus filhos a [C]oração,
[G]Cordeirinhos que, na [D]luta,
[Em]Dão a Ti seu [C]coração.`,
  h503:`Tom: G

Verso:
[G]Cristo busca corações já [D]puros,
[Em]Que proclamem sempre o perdão da [C]cruz,
[G]Que aos transgressores mostre os bens [D]futuros,
[Em]Pra voltarem do pecado para [C]luz!

Coro:
[G]Ide trabalhar além nos campos do [D]Senhor,
[Em]Que para a sega se apresentam brancos [C]Já;
[G]Depressa ao labor, ordena [D]Jeová,
[Em]Desfrutareis, então, Seu grande [C]amor!`,
  h504:`Tom: Cm

Verso:
[C]É solene o momento;
[Am]Já expirando o ano [F]está;
[C]Presto como o [G]pensamento,
[Am]O que resta [F]passará.`,
  h505:`Tom: D

Verso:
[D]Anelo eu ouvir a voz do meu bom [A]Salvador,
[Bm]Seus ditos um banquete são, banquete de [G]amor
[D]Qual o maná celestial, vigor me dão [A]também,
[Bm]Me trazem sempre instrução do Mestre de [G]Belém.

Coro:
[D]As palavras do [A]Senhor,
[Bm]São palavras de [G]vigor,
[D]Me ensinam, me [A]guiam,
[Bm]Me trazem a luz, as palavras de [G]Jesus.`,
  h506:`Tom: D

Verso:
[D]Bíblia Sagrada, de Deus [A]mandada;
[Bm]Celeste tocha, de vera [G]luz,
[D]Torna minh'alma cheia de [A]calma,
[Bm]Pois nela ouço a voz de [G]Jesus!`,
  h508:`Tom: C

Verso:
[C]Justa, explícita e mui [G]pura
[Am]É a lei do meu [F]Senhor;
[C]Para os tristes dá [G]ventura,
[Am]Libertando-os do [F]temor.`,
  h509:`Tom: D

Verso:
[D]Quando o Jordão passarmos [A]unidos,
[Bm]E entrarmos no céu, veremos [G]lá,
[D]Como areia da praia os [A]remidos,
[Bm]Oh! Que gloriosa vista [G]será!

Coro:
[D]Tantos como a areia da [A]praia!
[Bm]Tantos como a areia do [G]mar!
[D]Que gozo sentirá
[Bm]Todo o salvo pois [G]verá,
[D]Sim, tantos como a areia da [A]praia!`,
  h510:`Tom: G

Verso:
[G]Um dom real Deus [D]despertou
[Em]Nos seus fiéis - Dom de [C]curar!
[G]Toda a doença Deus [D]sarou,
[Em]E sara ainda e vai [C]sarar;
[G]Por Jesus, por [D]Jesus,
[Em]Oh! Não falhou, nem vai [C]falhar!

Coro:
[G]Oh! Que riqueza [D]divinal,
[Em]Eu gozo já por fé e [C]luz,
[G]Por visão triunfal,
[Em]Mais gozarei com meu [C]Jesus!`,
  h511:`Tom: C

Verso:
[C]Glorioso Deus, que está no [G]céu,
[Am]Conselheiro é contra o [F]revés.
[C]Se aqui trevas há, [G]m'iluminará;
[Am]Na tribulação, nEle os crentes firmados [F]estão.

Coro:
[C]Oh! Quão bom é nosso [G]Deus!
[Am]Tudo preparou p’ra os [F]Seus,
[C]Que por Ele, [G]chegarão,
[Am]Satisfeitos à Sua [F]mansão.`,
  h512:`Tom: G

Verso:
[G]O santo amor de Cristo, que não terá [D]igual;
[Em]A Sua vera graça, sublime e [C]eternal,
[G]E a misericórdia imensa como o [D]mar,
[Em]A qual ao céu atinge, com gozo, hei de [C]cantar.

Coro:
[G]Como é inesgotável
[Em]O amor de meu [C]Jesus!
[G]Rico e Inefável; nada é [D]comparável
[Em]Ao amor de meu [C]Jesus!`,
  h513:`Tom: G

Verso:
[G]Vem, ó meu bom Jesus, me [D]consolar;
[Em]Vem, leva-me daqui, pra contigo [C]estar.

Coro:
[G]Minh’alma Te quer, vem ó meu Jesus sem [D]par!
[Em]Vem, leva-me daqui, p’ra contigo [C]estar.`,
  h514:`Tom: D

Verso:
[D]Em glória esplendente, na nuvem [A]luzente,
[Bm]Ao mundo virá, outra vez, o [G]Senhor;
[D]O santo Cordeiro, que lá no [A]madeiro,
[Bm]Verteu o Seu sangue [G]purificador.

Coro:
[D]Se Cristo agora voltar, tu’alma irá [A]jubilar?
[Bm]Tens lâmpada pronta e as vestes [G]também,
[D]P’ra ires com Cristo [A]além?
[Bm]Não mais te demores, mas vem a [G]Jesus.
[D]A fim de acender tua [A]luz.`,
  h515:`Tom: G

Verso:
[G]Se, pelos vales, eu peregrino vou [D]andar
[Em]Ou na luz gloriosa de Cristo [C]habitar,
[G]Irei com meu Senhor pra onde Ele [D]for.
[Em]Confiando na graça de meu [C]Salvador.

Coro:
[G]Se Cristo comigo vai, eu [D]irei
[Em]E não temerei, com gozo irei; comigo [C]vai;
[G]E grato servir a Jesus, levar a [D]cruz;
[Em]Se Cristo comigo vai, eu [C]irei.`,
  h516:`Tom: G

Verso:
[G]Antes eu não conhecia a Jesus o [D]Salvador;
[Em]Pois vivia em pecados e [C]temor;
[G]Mas achei que minhas culpas, sobre Si Jesus [D]levou
[Em]E meu gozo nunca mais aqui [C]cessou.

Coro:
[G]É Jesus Cristo meu vero [D]amigo,
[Em]Que minhas culpas [C]perdoou.
[G]É Jesus Cristo meu vero [D]amigo,
[Em]Pois a minh’alma [C]libertou.`,
  h517:`Tom: G

Verso:
[G]Cristo Jesus hoje vai te [D]curar,
[Em]Se podes crer, se podes [C]crer.
[G]Pois tem virtude e graça sem [D]par,
[Em]Pra curar teu ser!

Coro:
[G]Vem, Vem, para te [D]curar,
[Em]Crê, crê, que hás de [C]ver;
[G]Cura divina se [D]manifestar
[Em]No teu fraco ser!`,
  h518:`Tom: G

Verso:
[G]Por seus pecados, 'stá o [D]pecador
[Em]Qual pobre náufrago sem [C]Salvador;
[G]Que triste sorte, perece no [D]mar,
[Em]Nada, se cansa, e vai [C]afundar.

Coro:
[G]Orando, joga ao que se [D]afoga,
[Em]O salva-vidas sem [C]demorar;
[G]Antes que desça - [D]Desapareça
[Em]Nas profundezas do [C]mar.`,
  h519:`Tom: G

Verso:
[G]Achei Jesus, o meu [D]Salvador,
[Em]De amor fiel, [C]veraz;
[G]Não cessarei de Lhe dar [D]louvor,
[Em]Pois tenho a salvação e [C]paz.

Coro:
[G]Salvo por Cristo [D]sou,
[Em]Salvo por quem me [C]amou!
[G]Perfeita paz, Ele agora me [D]traz,
[Em]Porque salvo estou!`,
  h520:`Tom: G

Verso:
[G]Eu me achei num estado de tristeza e [D]dor,
[Em]Já prevendo da vida o [C]fim;
[G]Hoje, exulto ao lembrar-me da hora [D]feliz,
[Em]Em que Cristo olhou para [C]mim.

Coro:
[G]Era só Sua doce e preciosa [D]voz
[Em]Que eu sempre ouvia [C]soar,
[G]Então, recebia [D]esperança,
[Em]Que Jesus me havia de [C]curar.`,
  h521:`Tom: G

Verso:
[G]Com teu pecado vem já pra [D]Jesus.
[Em]Ele te quer [C]perdoar.
[G]Deixa as trevas, vem já para a [D]luz;
[Em]Vem tua vida [C]salvar.

Coro:
[G]Vem! Vem! Vem o passo [D]dar!
[Em]Vem teu coração [C]entregar;
[G]Vem Já dizer: “Jesus me [D]salvou,
[Em]Do meu pecado limpo [C]estou”.`,
  h522:`Tom: D

Verso:
[D]O Rei da glória, quem [A]será,
[Bm]Senhor onipotente?
[D]Só Deus, o Filho, o pode [A]ser.
[Bm]Que reina [G]eternamente.
[D]As chagas que Ele [A]recebeu,
[Bm]A morte que na cruz [G]sofreu,
[D]O provam [A]cabalmente!`,
  h523:`Tom: G

Verso:
[G]Cristo nos deu uma fonte [D]escondida.
[Em]Que qualquer sede pode [C]estancar.
[G]E cujas águas repletas de [D]vida,
[Em]Sempre de graça nos hão de [C]fartar.

Coro:
[G]Água sairá, viva [D]manará
[Em]Da fonte que abriu o Senhor, água [C]correrá!
[G]Se todos quiserem beber, não se [D]esgotará;
[Em]Milhares de milhares venham; sempre [C]sairá!`,
  h524:`Tom: G

Verso:
[G]Através da [D]tempestade
[Em]Em qualquer [C]calamidade,
[G]Me consola esta [D]verdade:
[Em]Cristo pensa em [C]mim.

Coro:
[G]Pensa em mim, Jesus
[Em]Lá na excelsa luz;
[G]Já provaste a cruz,
[Em]Com amor sem fim;
[G]Satisfeito estou,
[Em]Sem medo vou;
[G]Cristo pensa em [D]mim.
[Em]Cristo pensa em [C]mim.`,
  h525:`Tom: A

Verso:
[A]Já refulge a glória [E]eterna
[F#m]De Jesus, o Rei dos [D]reis!
[A]Breve os reinos deste [E]mundo
[F#m]Seguirão as suas [D]leis!
[A]Os sinais da sua [E]vinda
[F#m]Mais se mostram cada [D]vez:
[A]Vencendo vem Jesus!

Coro:
[A]Glória! glória! [E]Aleluia!
[F#m]Glória! glória! [D]Aleluia!
[A]Glória! glória! [E]Aleluia!
[F#m]Vencendo vem Jesus!`,
  h527:`Tom: G

Verso:
[G]Dominador é Deus sem [D]par,
[Em]Pois, com potente [C]mão,
[G]A tempestade faz [D]cessar,
[Em]E reina paz, então.`,
  h528:`Tom: G

Verso:
[G]Eu te amo, ó Deus, não só [D]porque
[Em]Almejo o Céu fruir,
[G]Nem só porque eu temo [D]aqui
[Em]Na morte sucumbir.`,
  h529:`Tom: G

Verso:
[G]Em sua graça, seu rico [D]amor.
[Em]Veio do Céu a Belém meu [C]Senhor.
[G]Que maravilha! Meu [D]Salvador
[Em]Por mim na cruz [C]morreu!`,
  h530:`Tom: G

Verso:
[G]Vivifica a tua [D]igreja,
[Em]Ó bendito Salvador!
[G]Sem tua graça, ela [D]murcha
[Em]Ficará, e sem [C]vigor.`,
  h531:`Tom: Fm

Verso:
[F]Leva tu contigo o [C]nome
[Dm]De Jesus, o [Bb]Salvador!
[F]Este nome dá [C]conforto
[Dm]Hoje, sempre e onde [Bb]for.

Coro:
[F]Nome bom! - doce à [C]fé
[Dm]- A esperança do [Bb]porvir!
[F]Nome bom! - doce à [C]fé
[Dm]- A esperança do [Bb]porvir!`,
  h532:`Tom: G

Verso:
[G]Este nome santo,
[Em]Nome de Jesus,
[G]Doce melodia
[Em]Em meu coração [C]produz.`,
  h533:`Tom: E

Verso:
[E]Cristo, nosso [B]Salvador,
[C#m]Adoramos-te, Senhor!
[E]Gratos, damos-te [B]louvor,
[C#m]Honras sejam ao [A]Cordeiro!`,
  h534:`Tom: G

Verso:
[G]Cristo é real pra [D]mim,
[Em]Cristo é real pra [C]mim.
[G]Ele vive em meu [D]ser;
[Em]Sua paz posso ter,
[G]Pois Cristo é real pra [D]mim.`,
  h535:`Tom: Eb

Verso:
[Eb]Música:

Coro:
[Eb]Tu és fiel, Senhor! Tu és fiel, [Bb]Senhor!
[Cm]Dia após dia, com bênçãos sem [Ab]fim,
[Eb]Tua mercê me sustenta e me [Bb]guarda.
[Cm]Tu és fiel, Senhor, fiel a [Ab]mim.`,
  h536:`Tom: D

Verso:
[D]Amigo sem igual!
[Bm]Amigo sem igual!
[D]Jesus morreu, em meu [A]lugar,
[Bm]A fim de me salvar.
[D]Amigo sem igual!
[Bm]Amigo sem igual!
[D]Seu grande amor não [A]mudará,
[Bm]E nunca falhará.`,
  h538:`Tom: G

Verso:
[G]Tu, Senhor, és nosso [D]amigo,
[Em]Que vieste nos [C]salvar,
[G]Tu, que nos tens sempre [D]amado,
[Em]Vives para nos [C]guardar.`,
  h539:`Tom: F

Verso:
[F]Ao pensar no sofrer e na dor [C]crucial
[Dm]Que na cruz suportou por amor nosso [Bb]Rei,
[F]Próprio eu, vida, enfim, e prazer [C]mundanal,
[Dm]Coisas vãs aqui nunca mais [Bb]amarei.`,
  h540:`Tom: D

Verso:
[D]Ao ver morrer na rude [A]cruz,
[Bm]Em dor e angústia meu [G]Jesus,
[D]Compreendo ser um [A]pecador,
[Bm]E meu orgulho sem [G]valor.`,
  h541:`Tom: F

Verso:
[F]No Calvário [C]contemplamos
[Dm]Nosso meigo [Bb]Salvador!
[F]- Oh! revelação de amor! [C]-
[Dm]O mistério há tanto [Bb]oculto,
[F]Deus em Cristo [C]revelou!
[Dm]- Oh! revelação de [Bb]amor!

Coro:
[F]Calvário! - [C]Calvário!
[Dm]- Oh! grande dor!
[F]Calvário! - [C]Calvário!
[Dm]- Oh! revelação de [Bb]amor!`,
  h542:`Tom: A

Verso:
[A]Conta-me a história de [E]Cristo,
[F#m]Grava-a no meu [D]coração,
[A]A linda história [E]inaudita,
[F#m]De graça, paz e [D]perdão!
[A]Conta como Ele, [E]encarnando,
[F#m]Veio no mundo [D]morar,
[A]E aos pecadores, [E]indignos,
[F#m]De Deus o amor [D]revelar!`,
  h543:`Tom: G

Verso:
[G]Cristo, meu [D]Redentor!
[Em]Cristo, meu bom [C]Pastor!
[G]Tu, que morreste, e teu sangue [D]verteste,
[Em]És meu Salvador!`,
  h544:`Tom: G

Verso:
[G]Cristo Jesus, o sangue [D]teu,
[Em]Teu grande amor e [C]retidão
[G]São para mim glorioso [D]véu
[Em]A me cobrir com teu [C]perdão.`,
  h546:`Tom: G

Verso:
[G]Quando, enfim, voltar o [D]Salvador,
[Em]No venturoso alvor,
[G]Nunca mais serão a morte atroz e a [D]dor.`,
  h547:`Tom: Ab

Verso:
[Ab]Os fiéis são trasladados; seu trabalho aqui [Eb]findou.
[Fm]A carreira desses santos, nesta vida já [Db]cessou.
[Ab]Do Senhor os bons ceifeiros, terminaram seu [Eb]labor;
[Fm]A colheita completou-se: é a vinda do [Db]Senhor!

Coro:
[Ab]O Rei está voltando! o Rei está [Eb]voltando!
[Fm]A trombeta está soando, para os santos [Db]trasladar.
[Ab]Sim, o Rei está voltando! o Rei está [Eb]voltando!
[Fm]Aleluia! Ele vem nos [Db]buscar!`,
  h548:`Tom: F

Verso:
[F]Breve Jesus há de vir lá do Céu, buscar-nos para o [C]Lar.
[Dm]Devo estar pronto, ao Jesus chegar, e assim vou para o [Bb]Lar.`,
  h549:`Tom: G

Verso:
[G]Senhor, não mais [D]retardes
[Em]A luz do reino Teu,
[G]Pois já a vida aqui
[Em]Toda em dor se [C]converteu.`,
  h550:`Tom: G

Verso:
[G]Breve Ele volta;
[Em]Quando, eu não sei;
[G]Breve Ele volta;
[Em]Jesus virá outra [C]vez.`,
  h551:`Tom: G

Verso:
[G]O Santo Espírito, [D]Consolador,
[Em]Já nos encheu de seu eterno [C]amor,
[G]De sua graça e plena [D]unção,
[Em]Pra anunciarmos a salvação! [C]Amém.`,
  h552:`Tom: G

Verso:
[G]Canta o grande amor de [D]Cristo,
[Em]Sua graça e [C]compaixão:
[G]Num lugar tranqüilo e [D]belo
[Em]Faz-nos eternal [C]mansão.

Coro:
[G]Quando ao Céu nós [D]chegarmos,
[Em]Oh! que dia de júbilo há de [C]ser!
[G]A Jesus daremos
[Em]Hosanas, cheios de [C]prazer.`,
  h553:`Tom: G

Verso:
[G]Oh! Pai, o Santo [D]Espírito,
[Em]Pedimos, vem nos [C]dar,
[G]Pra que Ele venha [D]já
[Em]O seu poder nos [C]outorgar!`,
  h554:`Tom: G

Verso:
[G]O meu Salvador, por seu grande [D]amor,
[Em]Do céu, veio aqui [C]morrer,
[G]Pra, salvo, levar quem nele [D]confiar
[Em]E ir sempre com Ele [C]viver.`,
  h555:`Tom: G

Verso:
[G]Sei que vive o [D]Redentor,
[Em]Sei que há vida em seu [C]favor.
[G]Ele aqui na cruz [D]morreu:
[Em]Reina em glória lá no [C]Céu.`,
  h556:`Tom: D

Verso:
[D]Se desejas conhecer
[Bm]A mensagem do [G]Senhor,
[D]Tua alma enriquecer
[Bm]Na Verdade e no [G]Amor,

Coro:
[D]Lê a Bíblia! - Teu [A]fervor
[Bm]Nela vem alimentar!
[D]Tua vida redimida
[Bm]No Senhor vai [G]exultar.
[D]Lê a Bíblia - Teu [A]fervor
[Bm]Nela vem alimentar!
[D]Tua vida redimida
[Bm]No Senhor vai [G]exultar.`,
  h557:`Tom: G

Verso:
[G]Cristo, oh! celeste [D]vida,
[Em]Manifesta o teu [C]poder!
[G]Vivifica os [D]sem-alento,
[Em]Faze os mortos [C]reviver!
[G]Vida eterna - vida [D]eterna
[Em]Vem a todos [C]conceder!
[G]Vem a todos [D]conceder!`,
  h558:`Tom: D

Verso:
[D]Dai-me a Bíblia, que eu tanto [A]anelo:
[Bm]Por seu caminho quero sempre [G]andar.
[D]Por suas palavras são a grata [A]nova
[Bm]Que Jesus Cristo veio [G]anunciar.

Coro:
[D]Dai-me a Bíblia, livro tão [A]precioso!
[Bm]Doutrina Santa: fonte é de [G]luz.
[D]E seus ensinos, qual farol [A]glorioso,
[Bm]A nós conduzem ao Senhor [G]Jesus.`,
  h559:`Tom: E

Verso:
[E]Bíblia Sagrada,
[C#m]És a Palavra de [A]Deus:
[E]És o mapa da [B]jornada
[C#m]Dos que seguem para o [A]Céu.
[E]És a carta enviada,
[C#m]Que o Atalaia tem na [A]mão:
[E]És as velas da [B]jangada
[C#m]Dos que levam a [A]salvação.

Coro:
[E]Livro de amor,
[C#m]Livro que nos dá [A]prazer
[E]No Salvador,
[C#m]No Espírito e no [A]saber.
[E]Livro bendito!
[C#m]Só em ti pode [A]habitar
[E]A Palavra de amor,
[C#m]Que dos lábios do [A]Senhor
[E]Saiu para em ti [B]falar.`,
  h560:`Tom: D

Verso:
[D]Tenho paz em meu ser, uma perfeita [A]paz,
[Bm]Que o mundo não me pode [G]dar.
[D]E na prova fatal ou na luta [A]mortal
[Bm]Tenho paz para me [G]confortar.

Coro:
[D]Em meu ser habita Cristo, o [A]Senhor.
[Bm]Em meu ser habita profundo [G]amor!
[D]Sim, não me desampara: Ele é [A]fiei:
[Bm]Estará comigo, meu [G]Salvador.`,
  h561:`Tom: G

Verso:
[G]Que bênção: a lua brilhando no [D]espaço!
[Em]Que bênção: as ondas que rolam no [C]mar!
[G]Que bênção: as flores brotando nos [D]campos!
[Em]Mas a maior bênção eu vou te [C]contar:

Coro:
[G]Jesus me salvou, dos pecados [D]meus,
[Em]Que bênção, Jesus! que bênção, meu [C]Deus!
[G]Jesus me salvou, dos pecados [D]meus,
[Em]Que bênção, Jesus! que bênção, meu [C]Deus!`,
  h562:`Tom: F

Verso:
[F]Autor da vida. Cristo, [C]Deus!
[Dm]A vida fluis a teu [Bb]querer.
[F]Perdão por ti nos vem dos [C]céus
[Dm]E tu nos dás real [Bb]prazer,
[F]Fazendo em nosso [C]coração
[Dm]Raiar a luz da [Bb]salvação.`,
  h565:`Tom: G

Verso:
[G]Jesus, eu sei que tu és [D]meu,
[Em]O Dom que Deus, o Pai, me [C]deu.
[G]Teus feitos majestosos [D]são
[Em]O gozo do meu [C]coração.`,
  h566:`Tom: F

Verso:
[F]Paz perfeita, sim, [C]busquei,
[Dm]E jamais a [Bb]encontrei,
[F]Pois o preço não queria eu [C]pagar.
[Dm]Longe de Deus a [Bb]vagar,
[F]Sua promessa a [C]rejeitar.
[Dm]Do pecado não querendo me [Bb]apartar.

Coro:
[F]Mas agora estou vivendo pra [C]Jesus,
[Dm]Esconder-me quero junto à sua [Bb]Cruz.
[F]Inda que sofrendo [C]dor,
[Dm]Quero estar com meu [Bb]Jesus:
[F]Encontrei por fim a vida em meu [C]Senhor.`,
  h568:`Tom: G

Verso:
[G]Manso e suave, é Cristo [D]chamando:
[Em]Chama por ti e por [C]mim.
[G]Eis que Ele às portas espera [D]velando:
[Em]Vela por ti e por [C]mim,

Coro:
[G]Vem já! vem já! alma cansada, vem [D]já!
[Em]Manso e suave, Jesus [C]convidando,
[G]Chama: - “Vem, pecador, [D]vem!”`,
  h569:`Tom: C

Verso:
[C]“Morri na cruz por [G]ti:
[Am]Morri pra te [F]livrar!
[C]Meu sangue, ali, [G]verti,
[Am]E posso te salvar.”

Coro:
[C]“Morri! morri na cruz por [G]ti:
[Am]- Que fazes tu por [F]mim?
[C]Morri! morri na cruz por [G]ti:
[Am]- Que fazes tu por [F]mim?”`,
  h570:`Tom: F

Verso:
[F]Música

Coro:
[F]Meu amigo, hoje tu tens a [C]escolha:
[Dm]- Vida ou morte - qual vais [Bb]aceitar?
[F]Amanhã pode ser muito [C]tarde:
[Dm]Hoje Cristo te quer [Bb]libertar.`,
  h571:`Tom: G

Verso:
[G]Rende o coração agora a [D]Jesus,
[Em]Pois está á tua espera, com [C]amor.
[G]Quem se entrega a Cristo goza paz e [D]luz;
[Em]Oh! Vem ao [C]Salvador!`,
  h572:`Tom: G

Verso:
[G]"A porta sou eu”. diz o [D]Senhor,
[Em]“Alguém entrando por mim, por [C]mim,
[G]Salvo será, salvo será; [D]salvar-se-á”.`,
  h573:`Tom: Ab

Verso:
[Ab]A graça de nosso [Eb]Senhor,
[Fm]E o amor de Deus,
[Ab]E a comunhão do Espírito [Eb]Santo,
[Fm]Sejam conosco. Amém, [Db]Amém.`,
  h574:`Tom: G

Verso:
[G]Ó Pai bondoso, vem nos [D]guiar!
[Em]No novo ano vem nos [C]guardar!`,
  h575:`Tom: Eb

Verso:
[Eb]Eu só espero em ti,
[Cm]Cordeiro, que por [Ab]mim,
[Eb]Foste à cruz.
[Cm]Ouve minha oração.
[Eb]Dá-me a tua mão,
[Cm]Enche meu coração
[Eb]Com santa luz!`,
  h577:`Tom: A

Verso:
[A]Em fervente oração, vem o teu [E]coração
[F#m]Na presença de Deus [D]derramar!
[A]Mas só podes fruir o que estás a [E]pedir,
[F#m]Quando tudo deixares no [D]Altar.

Coro:
[A]Quando tudo perante o Senhor [E]estiver,
[F#m]E todo o teu ser Ele [D]controlar,
[A]Só, então, hás de ver que o Senhor tem [E]poder,
[F#m]Quando tudo deixares no [D]Altar.`,
  h578:`Tom: G

Verso:
[G]— Ó Mestre! O mar se [D]revolta:
[Em]As ondas nos dão [C]pavor:
[G]O céu se reveste de [D]trevas:
[Em]Não temos um [C]Salvador!
[G]Não se te dá que [D]morramos?
[Em]Podes assim dormir.
[G]Se a cada momento nos [D]vemos,
[Em]Sim, prestes a [C]submergir?

Coro:
[G]— “As ondas atendem ao meu [D]mandar:
[Em]Sossegai!
[G]Seja o encapelado [D]mar
[Em]A ira dos homens, o gênio do [C]mal:
[G]Tais águas não podem a nau [D]tragar,
[Em]Que leva o Senhor, Rei do Céu e [C]mar,
[G]Pois todos ouvem o meu [D]mandar:
[Em]Sossegai! — [C]sossegai!
[G]Convosco estou para vos [D]salvar:
[Em]Sim, sossegai!”`,
  h579:`Tom: G

Verso:
[G]Oh! por que te afliges, pobre [D]coração?
[Em]Pois o teu Jesus quer dar [C]consolação.
[G]São demais as cargas? É cruel a [D]dor?
[Em]Olha para o céu e vê teu lar de [C]amor.`,
  h580:`Tom: D

Verso:
[D]Ergo os meus olhos para os altos [A]montes:
[Bm]O meu socorro, de onde me [G]virá?
[D]O meu socorro vem do Deus [A]eterno
[Bm]Que fez a terra, fez o céu e o [G]mar.`,
  h582:`Tom: A

Verso:
[A]Eu tenho de andar neste [E]mundo
[F#m]Qual barca vogando no [D]mar,
[A]Mas sei o segredo [E]profundo
[F#m]De nele jamais [D]naufragar:

Coro:
[A]Cristo é o Piloto para me [E]guiar,
[F#m]Da vida a barca, até no Céu [D]chegar.`,
  h583:`Tom: Cm

Verso:
[C]Sê tu meu Guia, ó Cristo: estou [G]medroso
[Am]De andar sozinho pela [F]solidão!
[C]Sê tu meu Guia, e o ermo [G]pavoroso
[Am]Já não será lugar de [F]escuridão!`,
  h584:`Tom: Gm

Verso:
[G]Guia, Cristo, minha [D]nau
[Em]Sobre o revoltoso [C]mar,
[G]Tão enfurecido e [D]mau,
[Em]Quer fazê-la [C]naufragar.
[G]Vem Jesus, oh! vem [D]guiar,
[Em]Minha nau vem [C]pilotar!`,
  h585:`Tom: A

Verso:
[A]Jesus me satisfaz.
[F#m]E gozo sua paz;
[A]Com Ele vou,
[F#m]Contente estou:
[A]- Jesus me [E]satisfaz.`,
  h586:`Tom: G

Verso:
[G]Gozo e vida tenho no meu [D]coração,
[Em]Desde que Jesus Cristo deu-me seu [C]perdão.`,
  h587:`Tom: C

Verso:
[C]Neste lenho me [G]glorio,
[Am]Manancial de [F]resplendor;
[C]Brilha intenso o [G]suplício
[Am]Do divino Redentor.`,
  h588:`Tom: G

Verso:
[G]Fui pecador, perverso e [D]mau,
[Em]Longe de Ti vaguei!
[G]Mas, mui feliz eu hoje [D]sou,
[Em]Jesus, meu Deus e [C]Rei.`,
  h589:`Tom: Em

Verso:
[E]Amém, Amém, Amém, [B]Amém!`,
  h590:`Tom: G

Verso:
[G]Eu já contente estou: Tenho [D]Jesus!
[Em]Com alegria vou: Tenho [C]Jesus!
[G]Gozo que o mundo traz, bem cedo se [D]desfaz:
[Em]Tenho perfeita paz, paz em [C]Jesus.`,
  h591:`Tom: G

Verso:
[G]Pura, sim, mais pura quero a mente [D]ter!
[Em]Gozo, sim, mais gozo possa eu [C]conhecer!
[G]Oh! Jesus Bendito, ouve esta [D]oração,
[Em]Pois a ti pertence o meu [C]coração.`,
  h592:`Tom: G

Verso:
[G]Eu estou no lugar onde há bênção e [D]paz,
[Em]Onde sinto comigo [C]Jesus.
[G]Aos humildes seu sangue assegura [D]perdão:
[Em]Seu Espírito os enche de [C]luz.

Coro:
[G]Estou no lugar onde há bênção e [D]paz,
[Em]Onde Cristo nos mostra [C]afeição.
[G]Descansai! exulta!! [D]confessai-o!
[Em]- Publicai que nele há [C]salvação.`,
  h593:`Tom: Db

Verso:
[Db]Oh! Jesus, meu [Ab]Salvador,
[Bbm]Estou seguro em teu [Gb]amor,
[Db]E por ti sou [Ab]vencedor,
[Bbm]Pois estás comigo!`,
  h594:`Tom: Ab

Verso:
[Ab]Almejo a fé que forte [Eb]é
[Fm]Diante do terror,
[Ab]Que, calma, não [Eb]recuará
[Fm]Do mundo aterrador.`,
  h595:`Tom: D

Verso:
[D]Quem tenho, ó Deus, no céu [A]aí
[Bm]Senão a ti - somente a [G]ti!
[D]E mais ninguém adoro [A]aqui
[Bm]Além de ti, somente a [G]ti!`,
  h597:`Tom: G

Verso:
[G]Graças dou por esta vida: pelo bem que [D]revelou.
[Em]Graças dou pelo futuro, e por tudo que [C]passou.
[G]Pelas bênçãos derramadas, pela dor, pela [D]aflição,
[Em]Pela graça revelada! - graças dou pelo [C]perdão.`,
  h598:`Tom: G

Verso:
[G]Oh! buscai, não as [D]riquezas
[Em]Deste mundo de [C]incertezas!
[G]As do Céu não têm [D]tristezas:
[Em]Oh! buscai-as, sim, [C]buscai!`,
  h599:`Tom: Bb

Verso:
[Bb]Ó tu, herdeiro do reino [F]celeste,
[Gm]Não, não dormites, o fim vai [Eb]chegar;
[Bb]Oh! cinge as armas e põe-te na [F]luta,
[Gm]Pois a vitória desejas [Eb]ganhar.`,
  h600:`Tom: F

Verso:
[F]Mãos ao trabalho, [C]crentes,
[Dm]Vai já passando o [Bb]alvor.
[F]Vamos, enquanto [C]temos
[Dm]Nossa vida em flor!
[F]Vamos, enquanto é [C]dia,
[Dm]Com força [Bb]trabalhar:
[F]Eia que em vindo a [C]noite,
[Dm]Já não há lidar!`,
  h601:`Tom: E

Verso:
[E]A seara está [B]madura;
[C#m]Há trabalho pra [A]fazer.
[E]Ouve a voz de Deus [B]chamando
[C#m]Para à ceifa te [A]trazer!

Coro:
[E]Do teu labor o fruto [B]aumenta,
[C#m]Quando vives sempre a [A]orar.
[E]Terás Justa [B]recompensa,
[C#m]Se tu fores [A]trabalhar.`,
  h602:`Tom: G

Verso:
[G]Juntos trabalhamos pelo nosso [D]Rei;
[Em]Frutos mostraremos quando aqui [C]voltar.
[G]Homens maus buscamos para a sua [D]grei,
[Em]Pois o nosso Rei também os quer [C]salvar.`,
  h603:`Tom: F

Verso:
[F]É bom falar com [C]alguém
[Dm]De Cristo, de [Bb]Cristo,
[F]É bom falar com [C]alguém
[Dm]De Cristo.`,
  h604:`Tom: G

Verso:
[G]Senhor, os mensageiros [D]teus
[Em]Irão levar por onde [C]for
[G]A luz da graça ao mundo [D]mau,
[Em]E a fé no Salvador.`,
  h605:`Tom: Fm

Verso:
[F]Quero, Jesus, fazer o teu [C]querer;
[Dm]Quero servir-te, [Bb]sim.
[F]Tua palavra sempre [C]obedecer,
[Dm]Pois tens amado a [Bb]mim.

Coro:
[F]Quero Te servir
[Dm]Oh! meu Salvador
[F]Quero Te servir,
[Dm]Pois és o meu [Bb]Pastor.`,
  h607:`Tom: G

Verso:
[G]Luz após trevas, glória após [D]luz,
[Em]Ganho após perda, trono após [C]cruz,
[G]Paz após luta, fruto após [D]flor,
[Em]Riso após pranto, gozo após [C]dor.`,
  h608:`Tom: G

Verso:
[G]Se em teu caminho [D]aqui
[Em]A escuridão e as sombras [C]vêm,
[G]E se nenhum fulgor [D]sorri,
[Em]Trazendo luz do vasto [C]além,
[G]Terás a luz do Céu.`,
  h609:`Tom: G

Verso:
[G]Vitória Deus dará a mim, eu [D]sei,
[Em]Vitória Deus dará a mim, eu [C]sei.
[G]Se eu andar em plena [D]luz,
[Em]Confiar só em [C]Jesus,
[G]Vitória Deus dará a mim, eu [D]sei.`,
  h611:`Tom: Db

Verso:
[Db]Sempre avante! manda o [Ab]General;
[Bbm]Sempre avante! guerra contra o [Gb]mal!
[Db]Firmes, fortes, nunca [Ab]vacilar!
[Bbm]Pois os seus fiéis irão [Gb]ganhar.`,
  h612:`Tom: G

Verso:
[G]Ó Pai eterno que no Céu [D]habitas,
[Em]Nós, os teus filhos, vimos te [C]pedir
[G]Que nos amparem tuas mãos [D]benditas.
[Em]Em nossas lutas hoje e no [C]porvir.`,
  h613:`Tom: G

Verso:
[G]Quando chegar ao fim da [D]jornada,
[Em]Finda a luta e ao Céu eu [C]for;
[G]Doce será. sim, gozar o [D]repouso
[Em]E as boas vindas de Cristo, [C]Senhor.`,
  h614:`Tom: D

Verso:
[D]Eu avisto uma terra [A]feliz,
[Bm]Onde irei para sempre [G]morar:
[D]Há mansões nesse lindo [A]país,
[Bm]Que Jesus foi pra mim [G]preparar.

Coro:
[D]Vou morar! - vou [A]morar
[Bm]Nessa terra celeste [G]porvir!
[D]Vou morar! - vou [A]morar!
[Bm]Nessa terra celeste [G]porvir!`,
  h615:`Tom: Em

Verso:
[E]Vou rumo ao meu lar, meu lar [B]celestial;
[C#m]Vou rumo ao meu lar e a [A]Cristo;
[E]Lá, não mais pesar, tristezas ou [B]dor;
[C#m]Vou rumo ao meu lar e a [A]Cristo.`,
  h616:`Tom: Ab

Verso:
[Ab]Quanto almejo, lar [Eb]celeste,
[Fm]Tua glória ver!
[Ab]Vestes brancas, [Eb]perenais,
[Fm]De Deus receber!`,
  h617:`Tom: D

Verso:
[D]Quanto anelo contemplar a [A]Cristo;
[Bm]Quanto anelo seu divino rosto [G]ver!
[D]'Stou cansado de andar qual peregrino triste [A]aqui;
[Bm]Quanto anelo eu a Cristo [G]ter.`,
  h618:`Tom: G

Verso:
[G]É nosso lar dos céus, no qual não entra o [D]mal,
[Em]Morada, junto ao santo Deus, na glória [C]divinal.`,
  h619:`Tom: Eb

Verso:
[Eb]Feliz Jerusalém, meu [Bb]lar!
[Cm]Em ti almejo estar!
[Eb]Sentir a calma em glória [Bb]ali,
[Cm]E teu prazer gozar.`,
  h620:`Tom: G

Verso:
[G]Na jornada para o [D]Céu,
[Em]Vivo sempre a [C]meditar.
[G]Muito alegre vou [D]cantando
[Em]E seguindo pro meu [C]lar.
[G]Muito alegre vou [D]cantando
[Em]E seguindo pro meu [C]lar.

Coro:
[G]Sei que é certa a [D]vitória,
[Em]Que Jesus me [C]garantiu:
[G]Eu vou chegar à Glória [D](bis)
[Em]Que o mortal inda não [C]viu.`,
  h621:`Tom: F

Verso:
[F]Iremos juntos viver no [C]Céu;
[Dm]Felizes vamos ser.
[F]Felizes lá no Céu,
[Dm]Iremos juntos viver no [Bb]Céu:
[F]Jesus e eu!`,
  h622:`Tom: Bb

Verso:
[Bb]Tão grato me é [F]lembrar
[Gm]Que cada dia estou
[Bb]Mais perto do celeste [F]lar,
[Gm]Em que morar eu [Eb]vou!

Coro:
[Bb]Cada vez mais perto do [F]lar,
[Gm]Perto do meu eterno [Eb]lar,
[Bb]Em que morar eu [F]vou.`,
  h623:`Tom: G

Verso:
[G]Oh, sim, bem sei que o [D]Redentor
[Em]Nos altos céus [C]está;
[G]Que vê-lo-ei ao [D]regressar,
[Em]E a vida me dará.`,
  h624:`Tom: G

Verso:
[G]Anseio a paz, um lugar de [D]amor!
[Em]Saudoso estou deste lar [C]feliz;
[G]Subir em vestes de [D]fulgor
[Em]Ao sempiterno, bom [C]pais.`,
  h625:`Tom: C

Verso:
[C]Tenho lido da bela [G]cidade
[Am]Situada no Reino de [F]Deus,
[C]Amurada de jaspe [G]luzente,
[Am]E juncada com áureos [F]troféus.
[C]Bem no meio da praça eis o [G]rio
[Am]Da vida e vigor [F]eternal;
[C]Mas metade da glória [G]celeste
[Am]Jamais se contou ao [F]mortal.

Coro:
[C]Jamais se contou ao [G]mortal!
[Am]Jamais se contou ao [F]mortal!
[C]Metade da glória [G]celeste
[Am]Jamais se contou ao [F]mortal!`,
  h626:`Tom: G

Verso:
[G]Amém, Amém, Amém!`,
  h627:`Tom: G

Verso:
[G]Lá, eu verei meu [D]Salvador,
[Em]Coros de anjos quero [C]ouvir;
[G]Junto também hei de [D]cantar
[Em]Que meu Jesus me quis [C]remir.`,
  h628:`Tom: G

Verso:
[G]Além do céu azul,
[Em]Foi Jesus preparar
[G]Um lar pra dar a [D]quem
[Em]A vitória alcançar.
[G]Por Ele consegui
[Em]A vida do porvir,
[G]Com fé no meu Senhor [D]Jesus.`,
  h629:`Tom: G

Verso:
[G]Conversaremos ali no [D]Céu,
[Em]Conversaremos: Jesus e [C]eu.
[G]Dirá o porquê do meu [D]sofrer.
[Em]Naquele dia eu [C]entenderei.`,
  h630:`Tom: Bb

Verso:
[Bb]Não há separação na [F]glória;
[Gm]Na alvorada, nas [Eb]alturas.
[Bb]Não há separação na [F]glória,
[Gm]Quando estivermos lá no [Eb]Céu!`,
  h631:`Tom: Gm

Verso:
[G]Eis plantada neste [D]dia,
[Em]Qual semente [C]singular,
[G]Esta pedra - que [D]alegria
[Em]Faz o povo aqui [C]cantar!

Coro:
[G]Ouvi, oh! Terra e toda [D]gente,
[Em]O louvor, a [C]gratidão
[G]A Jesus e ao Pai [D]somente
[Em]Pelas almas que [C]virão!`,
  h632:`Tom: G

Verso:
[G]Hoje, inaugura-se aqui, santo [D]Deus,
[Em]Mais um padrão de teu [C]amor:
[G]Um novo templo, fanal para os [D]céus,
[Em]Causa de mais [C]louvor!

Coro:
[G]Glória a Deus! - glória a [D]Deus
[Em]Cantem os filhos [C]teus!
[G]Glória a Deus! - glória a [D]Deus!
[Em]Glória nos altos [C]céus!`,
  h633:`Tom: Ab

Verso:
[Ab]Meu Brasil, nação gigante e mui [Eb]sublime,
[Fm]Creio ver-te muito breve bem [Db]maior,
[Ab]Combatendo a iniqüidade, o vicio, o [Eb]crime,
[Fm]Redimido aos pés de Cristo, o [Db]Salvador.

Coro:
[Ab]Meu Brasil! - meu [Eb]Brasil!
[Fm]Abre o largo peito e deixa a luz [Db]raiar!
[Ab]Meu Brasil! - meu [Eb]Brasil!
[Fm]O Evangelho de Jesus te quer [Db]salvar!`,
  h634:`Tom: G

Verso:
[G]Minha Pátria para [D]Cristo!
[Em]- Eis a minha [C]petição.
[G]- Minha Pátria tão [D]querida,
[Em]Eu te dei meu [C]coração.
[G]Lar prezado, lar [D]formoso,
[Em]É por ti o meu [C]amor.
[G]Que o meu Deus de excelsa [D]graça
[Em]Te dispense seu [C]favor!

Coro:
[G]Salve Deus a minha [D]Pátria,
[Em]Minha Pátria [C]varonil!
[G]Salve Deus a minha [D]terra,
[Em]Esta terra do [C]Brasil!`,
  h635:`Tom: G

Verso:
[G]Ó nosso Rei e [D]Redentor,
[Em]Vem atender-nos a [C]oração;
[G]Sê o supremo [D]Protetor,
[Em]Eis o Brasil em tua [C]mão.`,
  h636:`Tom: G

Verso:
[G]Por nossa Pátria [D]oramos
[Em]A ti, supremo Deus!
[G]Por nosso lar [D]clamamos
[Em]A ti, ó Rei dos [C]céus!
[G]Bendize a vida [D]pastoril,
[Em]Governa o brio [C]senhoril,
[G]Modera a lida [D]mercantil!
[Em]- Deus salve a [C]Pátria!`,
  h637:`Tom: G

Verso:
[G]Salve lindo pendão da [D]esperança!
[Em]Salve, símbolo augusto da [C]paz!
[G]Tua nobre presença à [D]lembrança
[Em]A grandeza da Pátria nos [C]traz.

Coro:
[G]Recebe o afeto que se [D]encerra
[Em]Em nosso peito [C]juvenil,
[G]Querido símbolo da [D]terra,
[Em]Da amada terra do [C]Brasil!`,
  h639:`Tom: D

Verso:
[D]Já podeis da Pátria [A]filhos
[Bm]Ver contente a mãe [G]gentil,
[D]Já raiou a [A]liberdade
[Bm]No horizonte do [G]Brasil!
[D]Já raiou a [A]liberdade
[Bm]Já raiou a [G]liberdade
[D]No horizonte do [A]Brasil.

Coro:
[D]Brava gente [A]brasileira
[Bm]Longe vá temor [G]servil
[D]Ou ficar a Pátria [A]livre
[Bm]Ou morrer pelo [G]Brasil
[D]Ou ficar a Pátria [A]livre
[Bm]Ou morrer pelo [G]Brasil`,
  h640:`Tom: Em

Verso:
[E]Seja um pálio de luz [B]desdobrado
[C#m]Sob a larga amplidão destes [A]céus
[E]Este canto rebel, que o [B]passado
[C#m]Vem remir dos mais torpes [A]labéus!
[E]Seja um hino de glória que [B]fale
[C#m]De esperanças de um novo [A]porvir!
[E]Com visões de triunfos [B]embale
[C#m]Quem por ele lutando [A]surgir!

Coro:
[E]Liberdade! Liberdade!
[C#m]Abre as asas sobre [A]nós!
[E]Das lutas na [B]tempestade
[C#m]Dá que ouçamos tua [A]voz!`
};