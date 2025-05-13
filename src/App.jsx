import { useState } from 'react';

const questions = [...];  // placeholder for brevity

const results = {
  traditionell: '🎶 Du är Traditionell Country – rötterna, känslan och berättelserna betyder allt för dig.',
  modern: '📱 Du är Modern Country – du gillar country med ett fräscht och nutida sound.',
  bluegrass: '🪕 Du är Bluegrass – snabbt, akustiskt och djupt förankrat i traditioner.',
  popcountry: '🎧 Du är Pop-Country – glada låtar, starka hooks och massor av känslor.',
  outlaw: '🤠 Du är Outlaw Country – rebellisk, rak och går din egen väg.',
  americana: '🌄 Du är Americana – bred, berättande musik med ett hjärta av country.',
  honkytonk: '🍻 Du är Honky Tonk – barpianon, heartbreak och whiskey-sväng är din melodi.',
  countryrock: '🎸 Du är Country Rock – fart, gitarrer och energi i varje låt.',
  altcountry: '🌪 Du är Alt-Country – indie, alternativ stil och oväntade influenser.',
  neotraditional: '🔁 Du är Neotraditional Country – du älskar klassiskt sound i en modern form.',
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
    return results[maxGenre] || 'Du är en unik blandning av flera countrygenrer!';
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-2xl border border-gray-200 mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Vilken countrygenre är du?</h1>
      {current < questions.length ? (
        <div>
          <p className="mb-4 font-semibold text-lg">{questions[current].text}</p>
          <div className="grid gap-3">
            {questions[current].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(option)}
                className="p-3 bg-yellow-100 hover:bg-yellow-200 text-left rounded-xl border border-yellow-300 shadow"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-6 text-xl font-medium text-center">
          <p>{getResult()}</p>
        </div>
      )}
    </div>
  );
}
