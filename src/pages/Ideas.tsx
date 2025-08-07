// src/pages/ideas.tsx

import { useState } from "react";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const generateIdeas = () => {
  const roomTypes = [
    "Meeting Rooms",
    "Conference Rooms",
    "Quiet Rooms",
    "Green Rooms",
    "Cabins",
    "Reception",
    "Workstations",
  ];

  const interiorStyles = [
    "Minimalistic",
    "Industrial",
    "Scandinavian",
    "Japandi",
    "Modern",
    "Luxury",
    "Classic",
  ];

  let idCounter = 1;
  const ideas: any[] = [];

  for (const room of roomTypes) {
    for (const style of interiorStyles) {
      for (let i = 1; i <= 10; i++) {
        ideas.push({
          id: idCounter++,
          title: `${style} ${room} Idea ${i}`,
          room,
          style,
          image: `https://source.unsplash.com/featured/?${style.replace(/\s/g, '')},${room.replace(/\s/g, '')},interior,${i}`,
          description: `A ${style.toLowerCase()} ${room.toLowerCase()} with thoughtful design and attention to detail.`,
          features: [
            "Ergonomic layout",
            "Natural lighting",
            "High-end finishes",
            "Tech-integrated furnishings",
          ],
          colorPalette: ["#F5F5F5", "#CCCCCC", "#999999", "#333333"],
          inspiration: `This ${style.toLowerCase()} ${room.toLowerCase()} blends beauty and utility.`,
        });
      }
    }
  }

  return ideas;
};

const ideas = generateIdeas();

const Ideas = () => {
  const [roomFilter, setRoomFilter] = useState("All");
  const [styleFilter, setStyleFilter] = useState("All");

  const filteredIdeas = ideas.filter((idea) => {
    return (
      (roomFilter === "All" || idea.room === roomFilter) &&
      (styleFilter === "All" || idea.style === styleFilter)
    );
  });

  const uniqueRooms = ["All", ...new Set(ideas.map((idea) => idea.room))];
  const uniqueStyles = ["All", ...new Set(ideas.map((idea) => idea.style))];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head>
        <title>Interior Design Ideas</title>
      </Head>

      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Design Ideas Library</h1>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <select
            onChange={(e) => setRoomFilter(e.target.value)}
            className="p-2 border rounded bg-background text-foreground"
            defaultValue="All"
          >
            {uniqueRooms.map((room) => (
              <option key={room} value={room}>
                {room}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setStyleFilter(e.target.value)}
            className="p-2 border rounded bg-background text-foreground"
            defaultValue="All"
          >
            {uniqueStyles.map((style) => (
              <option key={style} value={style}>
                {style}
              </option>
            ))}
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIdeas.map((idea) => (
            <Card key={idea.id} className="hover:shadow-xl transition-shadow">
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-64 object-cover rounded-t"
              />
              <CardHeader>
                <CardTitle>{idea.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {idea.room} &middot; {idea.style}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{idea.description}</p>
                <ul className="mb-4 space-y-1">
                  {idea.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  {idea.colorPalette.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ideas;
