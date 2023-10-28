import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import backgroundImage from "./booking.avif";

const FAQ = () => {
  const [questions] = useState([
    { question: 'Apa langkah-langkah dasar dalam merias wajah?', answer: 'Langkah-langkah dasar dalam merias wajah meliputi pembersihan kulit, aplikasi primer, foundation, concealer, eyeshadow, eyeliner, maskara, blush, dan lipstik.' },
    { question: 'Bagaimana memilih warna lipstik yang cocok untuk warna kulit saya?', answer: 'Pemilihan warna lipstik dapat berdasarkan pada warna kulit Anda. Orang dengan kulit hangat lebih cocok dengan warna lipstik merah oranye atau coklat, sementara orang dengan kulit sejuk lebih cocok dengan warna merah muda atau merah dengan nuansa biru.' },
    { question: 'Apa yang harus dilakukan jika saya memiliki kulit berminyak?', answer: 'Jika Anda memiliki kulit berminyak, Anda dapat menggunakan foundation dan bedak khusus untuk kulit berminyak. Selain itu, gunakan kertas minyak untuk mengatasi kilap berlebih di wajah.' },
    { question: 'Bagaimana cara menjaga riasan mata agar tahan lama?', answer: 'Anda dapat menggunakan eyeshadow primer sebelum merias mata untuk membuat riasan mata lebih tahan lama. Gunakan juga maskara tahan air dan eyeliner tahan lama untuk menghindari luntur.' },
    { question: 'Kenapa tidak boleh menggunakan krim dokter sebelum merias wajah dengan makeup?', answer: 'Menggunakan krim dokter sebelum merias wajah dengan makeup bisa menjadi masalah karena beberapa krim dokter mungkin mengandung bahan-bahan khusus atau obat-obatan yang tidak seharusnya dicampur dengan makeup.' },
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleAnswer = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const apiKey = import.meta.env.VITE_OPENAI_KEY;
  const modelName = 'text-davinci-003';

  const handleSearchQuestion = async () => {
    if (searchQuery.trim() !== '') {
      setIsLoading(true);
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/' + modelName + '/completions',
          {
            prompt: ` ${searchQuery}`,
            max_tokens: 500, 
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
          }
        );

        const newQuestion = response.data.choices[0].text;
        setSubmittedQuestions([...submittedQuestions, newQuestion]);
        setSearchQuery('');
        setIsLoading(false);
      } catch (error) {
        console.error('Error searching for questions:', error);
        setIsLoading(false);
      }
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "150vh",
  };

  return (
  <div className="mx-auto"style={backgroundStyle}>
    <Navbar/>
    <div className="p-4 mx-auto max-w-screen-md mt-20" >
      <h1 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <ul>
        {questions.map((item, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className={`font-semibold hover:underline cursor-pointer ${expandedIndex === index ? 'text-blue-600' : ''}`}
            >
              {item.question}
            </button>
            {expandedIndex === index && (
              <p className="mt-2 text-white">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Cari Pertanyaan Lain</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari pertanyaan..."
          className="w-full p-7 mt-2 border border-gray-400 rounded"
        />
        <button
          onClick={handleSearchQuestion}
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Cari
        </button>
      </div>
      <ul className="mt-4">
        {submittedQuestions.map((question, index) => (
          <li key={index} className="mb-2">{question}</li>
        ))}
        {submittedQuestions.length === 0 && !isLoading && (
          <p className="text-red-500">Tidak ditemukan pertanyaan yang sesuai.</p>
        )}
      </ul>
    </div>
    </div>
  );
};

export default FAQ;
