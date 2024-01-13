"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


const Testimonials = [
    {
      name: "Swapnil",
      avatar: "A",
      title: "Software Engineer",
      description: "This is the best AI I have used so far!!",
    },
    {
      name: "Michael Johnson",
      avatar: "E",
      title: "Graphic Designer",
      description: "This AI has revolutionized the way I approach graphic design. It's like having a creative companion!",
    },
    {
      name: "Sarah Williams",
      avatar: "F",
      title: "Content Creator",
      description: "Using this AI for content creation has saved me time and boosted the quality of my work. It's a must-have tool!",
    },
    {
      name: "Ryan Anderson",
      avatar: "G",
      title: "AI Enthusiast",
      description: "Impressed by the intuitive nature of this AI. It adapts seamlessly to various tasks. A tech marvel!",
    },
  ];
const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Testimonials.map((item) => (
                <Card key={item.description} className="bg-[#192339] border-none text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">
                                    {item.name}
                                </p>
                                <p className="text-zinc-400 text-sm">
                                    {item.title}
                                </p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent