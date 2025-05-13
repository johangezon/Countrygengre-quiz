import { useState } from 'react';

const questions = [/* samma innehåll som tidigare (förkortat för översiktlighet) */];

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
