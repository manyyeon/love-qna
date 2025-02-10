"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const questions = [
  {
    question: "What was your first impression of me?",
    myAnswer: `From the first time I saw you, I thought you were really cute 😃 So, I wanted to be friends with you and I wanted to talk to you. But I was too shy to do it.
      \nSo when you talked to me first, I was happy, too!`,
  },
  {
    question: "When do you think I look cute?",
    myAnswer: `When you speak Korean, you are so cute! 😊`,
  },
  {
    question: "What kind of dates do you like?",
    myAnswer: `hang out on campus, rock climbing, skateboarding, cooking, \n\nNo matter what we do, I love how we always have lots of conversations. I really enjoy having a conversation with you from casual daily chats to deep conversations :)`,
  },
  {
    question: "What’s a moment I did something that really touched you?",
    myAnswer:
      "I was really touched when you practiced speaking Korean for me. You weren’t originally interested in Korea, and you didn’t have any Korean friends before, so the fact that you made the effort to learn it just for me meant so much to me.",
  },
];

export default function LoveQnA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    Array(questions.length).fill("")
  );
  const [showAnswer, setShowAnswer] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleInputChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);
  };

  const revealAnswer = () => {
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <Card>
        <CardContent>
          {currentIndex < questions.length ? (
            <>
              <div>
                <div className="mb-2 font-bold">
                  Question {currentIndex + 1}
                </div>
                <h2 className="text-xl font-semibold">
                  {questions[currentIndex].question}
                </h2>
              </div>
              {!showAnswer ? (
                <textarea
                  className="w-full p-2 mt-2 border rounded-md"
                  placeholder="Your answer..."
                  value={answers[currentIndex]}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
              ) : (
                <div className="mt-4 p-2 rounded-md">
                  <div className="flex align-center justify-center">
                    <Image
                      src={`/images/heart.png`}
                      className="image-float"
                      width={200}
                      height={200}
                      alt="Love QnA"
                    />
                  </div>
                  <div className="mb-2 p-2 bg-purple-100 rounded-md">
                    <div className="mb-2 font-bold">Dayeon</div>
                    <div className="text-wrap whitespace-pre">
                      {questions[currentIndex].myAnswer}
                    </div>
                  </div>
                  <div className="mb-2 p-2 bg-purple-200 rounded-md">
                    <div className="mb-2 font-bold">Jason</div>
                    <div className="text-wrap whitespace-pre">
                      {answers[currentIndex]}
                    </div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex justify-end space-x-2">
                {!showAnswer ? (
                  <Button onClick={revealAnswer}>Submit</Button>
                ) : (
                  currentIndex < questions.length && (
                    <Button onClick={nextQuestion}>Next</Button>
                  )
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="flex content-center justify-center">
                <Image
                  src="/images/heart.png"
                  className="image-float"
                  width={200}
                  height={200}
                  alt="Valentine"
                />
              </div>
              <h2 className="text-2xl font-semibold mt-4">
                Would you be my Valentine?
              </h2>
              <div className="mt-4 flex justify-center">
                <Button onClick={() => setShowHearts(true)}>Yes!</Button>
              </div>
              {showHearts && (
                <div className="absolute inset-0 overflow-hidden">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.img
                      key={i}
                      src="/images/heart.png"
                      className="absolute w-16 h-12"
                      initial={{ y: "300%", opacity: 0 }}
                      animate={{ y: "-200%", opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 3,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
