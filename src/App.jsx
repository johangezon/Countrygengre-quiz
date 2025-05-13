import { useState } from 'react';

const questions = [
  {
    text: 'Vad söker du mest i countrymusik?',
    options: [
      { text: 'Äkta känslor och berättelser', scores: { traditionell: 2, neotraditional: 1 } },
      { text: 'Modern sound och beats', scores: { modern: 2, popcountry: 1 } },
      { text: 'Snabbt tempo och instrument', scores: { bluegrass: 2, traditionell: 1 } },
      { text: 'Hitlåtar och glädje', scores: { popcountry: 2, modern: 1 } },
      { text: 'Rebellisk attityd', scores: { outlaw: 2, countryrock: 1 } },
      { text: 'En blandning av genrer', scores: { americana: 2, altcountry: 1 } },
      { text: 'Musik att dansa till på en bar', scores: { honkytonk: 2, traditionell: 1 } },
      { text: 'Rockig energi', scores: { countryrock: 2, outlaw: 1 } },
      { text: 'Experimentell stil och texterna', scores: { altcountry: 2, americana: 1 } },
      { text: 'Återgång till rötterna men med nytt grepp', scores: { neotraditional: 2, traditionell: 1 } }
    ]
  },
  {
    text: 'Vad gör du helst på helgen?',
    options: [
      { text: 'Skriver låtar eller spelar gitarr', scores: { traditionell: 2, americana: 1 } },
      { text: 'Lyssnar på nya spellistor', scores: { modern: 2, popcountry: 1 } },
      { text: 'Jammar med vänner', scores: { bluegrass: 2, altcountry: 1 } },
      { text: 'Går på stora konserter', scores: { popcountry: 2, modern: 1 } },
      { text: 'Cruisar i bilen med country på hög volym', scores: { outlaw: 2, countryrock: 1 } },
      { text: 'Hänger på indieklubb', scores: { altcountry: 2, americana: 1 } },
      { text: 'Dricker öl och dansar i boots', scores: { honkytonk: 2, traditionell: 1 } },
      { text: 'Headbangar till countryrock', scores: { countryrock: 2, outlaw: 1 } },
      { text: 'Upptäcker ny musik', scores: { altcountry: 2, modern: 1 } },
      { text: 'Ser gamla countryikoner live', scores: { neotraditional: 2, traditionell: 1 } }
    ]
  },
  {
    text: 'Välj ett instrument:',
    options: [
      { text: 'Akustisk gitarr', scores: { traditionell: 2, americana: 1 } },
      { text: 'Synth och trummaskin', scores: { modern: 2, popcountry: 1 } },
      { text: 'Banjo', scores: { bluegrass: 2, traditionell: 1 } },
      { text: 'Popig elgitarr', scores: { popcountry: 2, modern: 1 } },
      { text: 'Slidegitarr eller munspel', scores: { outlaw: 2, countryrock: 1 } },
      { text: 'Mandolin eller harmonium', scores: { americana: 2, altcountry: 1 } },
      { text: 'Piano i barstil', scores: { honkytonk: 2, traditionell: 1 } },
      { text: 'Distad elgitarr', scores: { countryrock: 2, outlaw: 1 } },
      { text: 'Lap steel eller cello', scores: { altcountry: 2, americana: 1 } },
      { text: 'Fiddle och ståbas', scores: { neotraditional: 2, bluegrass: 1 } }
    ]
  },
  {
    text: 'Vem inspirerar dig mest?',
    options: [
      { text: 'Dolly Parton / George Jones', scores: { traditionell: 2, honkytonk: 1 } },
      { text: 'Morgan Wallen / Gabby Barrett', scores: { modern: 2, popcountry: 1 } },
      { text: 'Alison Krauss / Ricky Skaggs', scores: { bluegrass: 2, neotraditional: 1 } },
      { text: 'Kelsea Ballerini / Dan + Shay', scores: { popcountry: 2, modern: 1 } },
      { text: 'Johnny Cash / Willie Nelson', scores: { outlaw: 2, americana: 1 } },
      { text: 'Jason Isbell / Brandi Carlile', scores: { americana: 2, altcountry: 1 } },
      { text: 'Dwight Yoakam / Hank Thompson', scores: { honkytonk: 2, traditionell: 1 } },
      { text: 'Keith Urban / Zac Brown Band', scores: { countryrock: 2, modern: 1 } },
      { text: 'Wilco / Drive-By Truckers', scores: { altcountry: 2, americana: 1 } },
      { text: 'Randy Travis / Alan Jackson', scores: { neotraditional: 2, traditionell: 1 } }
    ]
  },
  {
    text: 'Hur klär du dig helst?',
    options: [
      { text: 'Jeans och cowboyhatt', scores: { traditionell: 2, neotraditional: 1 } },
      { text: 'Trendigt men avslappnat', scores: { modern: 2, popcountry: 1 } },
      { text: 'Rutiga skjortor och boots', scores: { bluegrass: 2, outlaw: 1 } },
      { text: 'Modeinspirerat med countrytouch', scores: { popcountry: 2, modern: 1 } },
      { text: 'Skinnjacka och bandana', scores: { outlaw: 2, countryrock: 1 } },
      { text: 'Second hand och vintage', scores: { americana: 2, altcountry: 1 } },
      { text: 'Westernskjorta och hatt', scores: { honkytonk: 2, traditionell: 1 } },
      { text: 'Jeansväst och t-shirt med tryck', scores: { countryrock: 2, outlaw: 1 } },
      { text: 'Indie-looken', scores: { altcountry: 2, americana: 1 } },
      { text: 'Enkla, klassiska countrykläder', scores: { neotraditional: 2, traditionell: 1 } }
    ]
  },
  {
    text: 'Vad skulle du helst skriva en låt om?',
    options: [
      { text: 'Livet, kärleken och hemmet', scores: { traditionell: 2, americana: 1 } },
      { text: 'Att hitta sin väg i livet', scores: { modern: 2, altcountry: 1 } },
      { text: 'Naturen och ursprung', scores: { bluegrass: 2, americana: 1 } },
      { text: 'Kärlek på dansgolvet', scores: { popcountry: 2, honkytonk: 1 } },
      { text: 'Frihet och att stå emot systemet', scores: { outlaw: 2, countryrock: 1 } },
      { text: 'Samhället och identitet', scores: { americana: 2, altcountry: 1 } },
      { text: 'Ensamhet i baren', scores: { honkytonk: 2, traditionell: 1 } },
      { text: 'Livet på vägen', scores: { countryrock: 2, outlaw: 1 } },
      { text: 'Krockar mellan gammalt och nytt', scores: { altcountry: 2, neotraditional: 1 } },
      { text: 'Stolthet i tradition', scores: { neotraditional: 2, traditionell: 1 } }
    ]
  },
  {
    text: 'Vad är viktigast i musik för dig?',
    options: [
      { text: 'Äkthet', scores: { traditionell: 2, americana: 1 } },
      { text: 'Tillgänglighet', scores: { modern: 2, popcountry: 1 } },
      { text: 'Musikalisk skicklighet', scores: { bluegrass: 2, altcountry: 1 } },
      { text: 'Catchy refränger', scores: { popcountry: 2, modern: 1 } },
      { text: 'Attityd', scores: { outlaw: 2, countryrock: 1 } },
      { text: 'Innehåll och variation', scores: { americana: 2, altcountry: 1 } },
      { text: 'Stämning', scores: { honkytonk: 2, neotraditional: 1 } },
      { text: 'Energi', scores: { countryrock: 2, outlaw: 1 } },
      { text: 'Utforskande', scores: { altcountry: 2, americana: 1 } },
      { text: 'Respekt för rötter', scores: { neotraditional: 2, traditionell: 1 } }
    ]
  }
];

const results = {
  traditionell: {
    title: '🎶 Du är Traditionell Country',
    description: 'Rötterna, känslan och berättelserna betyder allt för dig.',
    image: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60'
  },
  modern: {
    title: '📱 Du är Modern Country',
    description: 'Du gillar country med ett fräscht och nutida sound.',
    image: 'https://images.unsplash.com/photo-1612760223282-50b928107d66?auto=format&fit=crop&w=800&q=60'
  },
  bluegrass: {
    title: '🪕 Du är Bluegrass',
    description: 'Snabbt, akustiskt och djupt förankrat i traditioner.',
    image: 'https://images.unsplash.com/photo-1604335399103-30c0a4bb12b1?auto=format&fit=crop&w=800&q=60'
  },
  popcountry: {
    title: '🎧 Du är Pop-Country',
    description: 'Glada låtar, starka hooks och massor av känslor.',
    image: 'https://images.unsplash.com/photo-1548352409-b59d7c5f45f8?auto=format&fit=crop&w=800&q=60'
  },
  outlaw: {
    title: '🤠 Du är Outlaw Country',
    description: 'Rebellisk, rak och går din egen väg.',
    image: 'https://images.unsplash.com/photo-1603727709426-82e23b25f3bb?auto=format&fit=crop&w=800&q=60'
  },
  americana: {
    title: '🌄 Du är Americana',
    description: 'Bred, berättande musik med ett hjärta av country.',
    image: 'https://images.unsplash.com/photo-1605130397970-50f7f1277c58?auto=format&fit=crop&w=800&q=60'
  },
  honkytonk: {
    title: '🍻 Du är Honky Tonk',
    description: 'Barpianon, heartbreak och whiskey-sväng är din melodi.',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=60'
  },
  countryrock: {
    title: '🎸 Du är Country Rock',
    description: 'Fart, gitarrer och energi i varje låt.',
    image: 'https://images.unsplash.com/photo-1598387842061-9c35d83a85d1?auto=format&fit=crop&w=800&q=60'
  },
  altcountry: {
    title: '🌪 Du är Alt-Country',
    description: 'Indie, alternativ stil och oväntade influenser.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=60'
  },
  neotraditional: {
    title: '🔁 Du är Neotraditional Country',
    description: 'Du älskar klassiskt sound i en modern form.',
    image: 'https://images.unsplash.com/photo-1604948501466-d3b9d0387134?auto=format&fit=crop&w=800&q=60'
  }
};

export default function CountryGenreQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState({});

  const handleAnswer = (option) => {
    const newScore = { ...score };
    for (const [genre, value] of Object.entries(option.scores)) {
      newScore[genre] = (newScore[genre] || 0) + value;
    }
    setScore(newScore);
    setAnswers([...answers, option]);
    setCurrent(current + 1);
  };

  const getResult = () => {
    const maxGenre = Object.entries(score).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
    return results[maxGenre] || {
      title: 'Du är en unik blandning!',
      description: 'Du har smak från flera olika countrygenrer.',
      image: 'https://images.unsplash.com/photo-1619654212046-2b5f2e710142?auto=format&fit=crop&w=800&q=60'
    };
  };

  const result = getResult();

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 bg-white shadow-xl rounded-2xl border border-gray-200 mt-6 sm:mt-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Vilken countrygenre är du?</h1>
      {current < questions.length ? (
        <div>
          <p className="mb-4 font-semibold text-base sm:text-lg">{questions[current].text}</p>
          <div className="grid gap-3">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="p-3 bg-yellow-100 hover:bg-yellow-200 text-left rounded-xl border border-yellow-300 shadow text-sm sm:text-base"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 text-center">
          <img src={result.image} alt="Genre" className="mx-auto rounded-xl mb-4 w-full max-w-xs" />
          <h2 className="text-2xl font-bold mb-2">{result.title}</h2>
          <p className="text-base text-gray-700">{result.description}</p>
        </div>
      )}
    </div>
  );
}
