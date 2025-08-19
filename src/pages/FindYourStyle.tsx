import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, RotateCcw, Calculator, Palette, Download, Calendar, Share2, Eye, Sparkles, Brain, Users, Heart } from "lucide-react";

type StyleId =
  | 'modern_collab'
  | 'minimal_industrial'
  | 'luxury_corporate'
  | 'biophilic_calm'
  | 'creative_hybrid'
  | 'traditional_private';

const STYLES: Record<StyleId, {
  name: string; slug: string; desc: string; images: string[]; ctas: {label: string; href: string;}[];
}> = {
  modern_collab: {
    name: 'Modern Collaborative',
    slug: 'modern-collab',
    desc: 'Open layouts, glass partitions, flexible hubs and clean lines that boost team energy and cross-functional work.',
    images: ['/Styles/moduler-collab-1.png','/Styles/moduler-collab-2.jpeg','/Styles/moduler-collab-3.jpeg'],
    ctas: [{label:'See projects in this style', href:'/projects?style=modern-collab'},{label:'Book a style consult', href:'/contact'}]
  },
  minimal_industrial: {
    name: 'Minimalist Industrial',
    slug: 'minimal-industrial',
    desc: 'Exposed concrete/brick, steel details, monochrome palette and purposeful minimalism for focused, efficient teams.',
    images: ['/Styles/minimal-Industrial-1.jpeg','/Styles/minimal-industrial-2.jpeg','/Styles/minimal-industrial-3.jpeg'],
    ctas: [{label:'See projects in this style', href:'/projects?style=minimal-industrial'},{label:'Book a style consult', href:'/contact'}]
  },
  luxury_corporate: {
    name: 'Luxury Corporate',
    slug: 'luxury-corporate',
    desc: 'Executive presence with rich woods, brass accents, plush textures, acoustic comfort and concierge-grade meeting suites.',
    images: ['/Styles/luxury-coorporate-1.jpeg','/Styles/luxury-coorporate-2.jpeg','/Styles/luxury-coorporate-3.jpeg'],
    ctas: [{label:'See projects in this style', href:'/projects?style=luxury-corporate'},{label:'Book a style consult', href:'/contact'}]
  },
  biophilic_calm: {
    name: 'Biophilic Calm',
    slug: 'biophilic-calm',
    desc: 'Natural woods, plants, daylight strategy, soft acoustics and wellness nooks for calm, restorative workplaces.',
    images: ['/Styles/biophilic-calm-1.jpeg','/Styles/biophilic-calm-2.jpeg','/Styles/biophilic-calm-3.jpeg'],
    ctas: [{label:'See projects in this style', href:'/projects?style=biophilic-calm'},{label:'Book a style consult', href:'/contact'}]
  },
  creative_hybrid: {
    name: 'Creative Hybrid',
    slug: 'creative-hybrid',
    desc: 'Playful color pops, modular zones, writeable walls and maker spaces to spark ideas and rapid prototyping.',
    images: ['/Styles/creative-hybrid-1.jpeg','/Styles/creative-hybrid-2.jpeg','/Styles/creative-hybrid-3.jpeg'],
    ctas: [{label:'See projects in this style', href:'/projects?style=creative-hybrid'},{label:'Book a style consult', href:'/contact'}]
  },
  traditional_private: {
    name: 'Traditional Private Office',
    slug: 'traditional-private',
    desc: 'Quiet enclosed offices, refined finishes, formal meeting suites and high privacy for leadership-heavy orgs.',
    images: ['/Styles/traditional-private-1.jpeg','/Styles/traditional-private-2.jpeg','/Styles/traditional-private-3.jpeg'],
    ctas: [{label:'See projects in this style', href:'/projects?style=traditional-private'},{label:'Book a style consult', href:'/contact'}]
  }
};

const QUESTIONS: {
  id: string; prompt: string;
  options: { label: string; style: StyleId; img?: string; helper?: string }[];
}[] = [
  {
    id:'layout', prompt:'Which workspace layout fits your team best?',
    options:[
      {label:'Open, buzzing collaboration zones', style:'modern_collab'},
      {label:'Quiet, enclosed private offices', style:'traditional_private'},
      {label:'Flexible mix of zones', style:'creative_hybrid'}
    ]
  },
  {
    id:'aesthetic', prompt:'Pick an aesthetic vibe:',
    options:[
      {label:'Sleek & modern', style:'modern_collab'},
      {label:'Raw & industrial', style:'minimal_industrial'},
      {label:'Premium & executive', style:'luxury_corporate'},
      {label:'Natural & calming', style:'biophilic_calm'}
    ]
  },
  {
    id:'materials', prompt:'Favorite materials & textures?',
    options:[
      {label:'Glass, light woods, clean finishes', style:'modern_collab'},
      {label:'Exposed brick, steel, concrete', style:'minimal_industrial'},
      {label:'Rich wood, brass, plush textiles', style:'luxury_corporate'},
      {label:'Plants, stone, rattan, daylight', style:'biophilic_calm'}
    ]
  },
  {
    id:'brand', prompt:'Your brand personality leans more…',
    options:[
      {label:'Innovative & energetic', style:'creative_hybrid'},
      {label:'Classic & authoritative', style:'luxury_corporate'},
      {label:'Grounded & wellness-oriented', style:'biophilic_calm'},
      {label:'Efficient & minimal', style:'minimal_industrial'}
    ]
  },
  {
    id:'team', prompt:'How does your team mostly work?',
    options:[
      {label:'Cross-functional collab all day', style:'modern_collab'},
      {label:'Heads-down focused most of the time', style:'traditional_private'},
      {label:'It varies by project', style:'creative_hybrid'}
    ]
  },
  {
    id:'color', prompt:'Preferred palette for the office?',
    options:[
      {label:'Neutral base + bold accents', style:'creative_hybrid'},
      {label:'Warm neutrals & wood tones', style:'luxury_corporate'},
      {label:'Greens/earthy & lots of daylight', style:'biophilic_calm'},
      {label:'Monochrome/industrial neutrals', style:'minimal_industrial'}
    ]
  },
  {
    id:'priority', prompt:'Top priority for your new space?',
    options:[
      {label:'Boost collaboration & energy', style:'modern_collab'},
      {label:'Privacy, focus & acoustics', style:'traditional_private'},
      {label:'Brand experience for clients', style:'luxury_corporate'}
    ]
  }
];

// Project Estimator Types and Data
type SpaceType = 'office' | 'retail' | 'hospitality' | 'residential' | 'healthcare' | 'education';
type MaterialGrade = 'standard' | 'premium' | 'luxury';
type RoomType = 'reception' | 'cabins' | 'meeting_rooms' | 'open_area' | 'pantry' | 'director_cabin';

interface EstimatorData {
  spaceType: SpaceType;
  totalArea: number;
  interiorStyle: StyleId | '';
  rooms: { type: RoomType; count: number }[];
  materialGrade: MaterialGrade;
  electricalLighting: boolean;
  furnitureInclusion: boolean;
}

const SPACE_TYPES: { value: SpaceType; label: string }[] = [
  { value: 'office', label: 'Corporate Office' },
  { value: 'retail', label: 'Retail Store' },
  { value: 'hospitality', label: 'Restaurant/Café' },
  { value: 'residential', label: 'Residential' },
  { value: 'healthcare', label: 'Medical/Healthcare' },
  { value: 'education', label: 'Educational Institute' }
];

const ROOM_TYPES: { value: RoomType; label: string; baseMultiplier: number }[] = [
  { value: 'reception', label: 'Reception Area', baseMultiplier: 1.2 },
  { value: 'cabins', label: 'Private Cabins', baseMultiplier: 1.0 },
  { value: 'meeting_rooms', label: 'Meeting Rooms', baseMultiplier: 1.3 },
  { value: 'open_area', label: 'Open Work Area', baseMultiplier: 0.9 },
  { value: 'pantry', label: 'Pantry/Break Room', baseMultiplier: 1.1 },
  { value: 'director_cabin', label: 'Director Cabin', baseMultiplier: 1.5 }
];

const MATERIAL_PRICING: Record<MaterialGrade, { pricePerSqFt: number; label: string; description: string }> = {
  standard: { 
    pricePerSqFt: 1200, 
    label: 'Standard', 
    description: 'Quality materials with essential finishes' 
  },
  premium: { 
    pricePerSqFt: 1800, 
    label: 'Premium', 
    description: 'High-end materials with luxury finishes' 
  },
  luxury: { 
    pricePerSqFt: 2500, 
    label: 'Luxury', 
    description: 'Ultra-premium materials and bespoke elements' 
  }
};

// AI Mood Board Data
interface ColorSwatch {
  name: string;
  hex: string;
  description: string;
}

interface Material {
  name: string;
  category: 'flooring' | 'wall' | 'furniture' | 'accent';
  description: string;
  image?: string;
}

interface MoodBoardData {
  colors: ColorSwatch[];
  materials: Material[];
  inspirationImages: string[];
  keyFeatures: string[];
  aiInsights: string[];
}

const MOOD_BOARD_DATA: Record<StyleId, MoodBoardData> = {
  modern_collab: {
    colors: [
      { name: 'Pure White', hex: '#FFFFFF', description: 'Clean, fresh base for collaboration' },
      { name: 'Cool Gray', hex: '#F5F7FA', description: 'Neutral backdrop for focus' },
      { name: 'Electric Blue', hex: '#007BFF', description: 'Energy and innovation accent' },
      { name: 'Soft Mint', hex: '#E8F5E8', description: 'Calming productivity zones' }
    ],
    materials: [
      { name: 'Glass Partitions', category: 'wall', description: 'Transparent collaboration boundaries' },
      { name: 'Light Oak Veneer', category: 'furniture', description: 'Warm, modern workspace surfaces' },
      { name: 'Polished Concrete', category: 'flooring', description: 'Industrial elegance underfoot' },
      { name: 'Acoustic Panels', category: 'accent', description: 'Sound control with style' }
    ],
    inspirationImages: [
      '/Styles/moduler-collab-1.png',
      '/Styles/moduler-collab-2.jpeg', 
      '/Styles/moduler-collab-3.jpeg'
    ],
    keyFeatures: ['Open floor plans', 'Flexible furniture systems', 'Tech-integrated spaces', 'Natural light optimization'],
    aiInsights: [
      'Glass partitions increase perceived space by 40%',
      'Open layouts boost cross-team collaboration by 25%',
      'Natural light exposure improves productivity by 15%'
    ]
  },
  minimal_industrial: {
    colors: [
      { name: 'Charcoal', hex: '#36454F', description: 'Industrial strength and focus' },
      { name: 'Concrete Gray', hex: '#A8A8A8', description: 'Raw material authenticity' },
      { name: 'Steel Blue', hex: '#4682B4', description: 'Cool precision accent' },
      { name: 'Warm White', hex: '#FAF9F6', description: 'Contrast and balance' }
    ],
    materials: [
      { name: 'Exposed Brick', category: 'wall', description: 'Raw industrial character' },
      { name: 'Steel Beams', category: 'accent', description: 'Structural honesty and strength' },
      { name: 'Polished Concrete', category: 'flooring', description: 'Seamless industrial foundation' },
      { name: 'Reclaimed Wood', category: 'furniture', description: 'Sustainable warmth elements' }
    ],
    inspirationImages: [
      '/Styles/minimal-Industrial-1.jpeg',
      '/Styles/minimal-industrial-2.jpeg',
      '/Styles/minimal-industrial-3.jpeg'
    ],
    keyFeatures: ['Exposed structural elements', 'Monochromatic palette', 'Functional minimalism', 'Raw material textures'],
    aiInsights: [
      'Minimalist environments reduce cognitive load by 30%',
      'Industrial materials lower maintenance costs by 20%',
      'Monochromatic schemes enhance focus and concentration'
    ]
  },
  luxury_corporate: {
    colors: [
      { name: 'Rich Mahogany', hex: '#C04000', description: 'Executive presence and authority' },
      { name: 'Champagne Gold', hex: '#F7E7CE', description: 'Luxury and sophistication' },
      { name: 'Deep Navy', hex: '#2C3E50', description: 'Professional confidence' },
      { name: 'Cream Ivory', hex: '#FDF6E3', description: 'Refined elegance backdrop' }
    ],
    materials: [
      { name: 'Italian Marble', category: 'flooring', description: 'Timeless luxury foundation' },
      { name: 'Rich Walnut Veneer', category: 'furniture', description: 'Executive-grade wood finishes' },
      { name: 'Brass Accents', category: 'accent', description: 'Premium metallic highlights' },
      { name: 'Leather Upholstery', category: 'furniture', description: 'Sophisticated comfort textures' }
    ],
    inspirationImages: [
      '/Styles/luxury-coorporate-1.jpeg',
      '/Styles/luxury-coorporate-2.jpeg',
      '/Styles/luxury-coorporate-3.jpeg'
    ],
    keyFeatures: ['Executive meeting suites', 'Premium material palette', 'Acoustic privacy', 'Concierge-level amenities'],
    aiInsights: [
      'Luxury materials increase client confidence by 35%',
      'Premium spaces enhance employee retention by 22%',
      'Executive environments boost decision-making efficiency'
    ]
  },
  biophilic_calm: {
    colors: [
      { name: 'Forest Green', hex: '#228B22', description: 'Natural growth and vitality' },
      { name: 'Sage Gray', hex: '#9CAF88', description: 'Calming earth tones' },
      { name: 'Warm Beige', hex: '#F5F5DC', description: 'Natural comfort base' },
      { name: 'Sky Blue', hex: '#87CEEB', description: 'Open air tranquility' }
    ],
    materials: [
      { name: 'Live Edge Wood', category: 'furniture', description: 'Natural organic forms' },
      { name: 'Natural Stone', category: 'wall', description: 'Grounding earth elements' },
      { name: 'Rattan Weaving', category: 'accent', description: 'Handcrafted texture details' },
      { name: 'Cork Flooring', category: 'flooring', description: 'Sustainable comfort surface' }
    ],
    inspirationImages: [
      '/Styles/biophilic-calm-1.jpeg',
      '/Styles/biophilic-calm-2.jpeg',
      '/Styles/biophilic-calm-3.jpeg'
    ],
    keyFeatures: ['Living plant walls', 'Natural light maximization', 'Organic material textures', 'Wellness-focused zones'],
    aiInsights: [
      'Biophilic design reduces stress levels by 38%',
      'Natural elements improve air quality by 25%',
      'Green spaces boost creativity and problem-solving'
    ]
  },
  creative_hybrid: {
    colors: [
      { name: 'Vibrant Orange', hex: '#FF6B35', description: 'Creative energy and innovation' },
      { name: 'Electric Purple', hex: '#8A2BE2', description: 'Bold thinking and creativity' },
      { name: 'Sunny Yellow', hex: '#FFD700', description: 'Optimism and inspiration' },
      { name: 'Cool White', hex: '#F8F8FF', description: 'Clean canvas for ideas' }
    ],
    materials: [
      { name: 'Modular Systems', category: 'furniture', description: 'Flexible creative configurations' },
      { name: 'Whiteboard Surfaces', category: 'wall', description: 'Idea capture everywhere' },
      { name: 'Colorful Carpeting', category: 'flooring', description: 'Playful zone definition' },
      { name: 'Magnetic Panels', category: 'accent', description: 'Interactive collaboration tools' }
    ],
    inspirationImages: [
      '/Styles/creative-hybrid-1.jpeg',
      '/Styles/creative-hybrid-2.jpeg',
      '/Styles/creative-hybrid-3.jpeg'
    ],
    keyFeatures: ['Flexible maker spaces', 'Color-coded zones', 'Interactive surfaces', 'Rapid prototyping areas'],
    aiInsights: [
      'Color psychology boosts creativity by 42%',
      'Flexible spaces increase innovation by 28%',
      'Interactive surfaces enhance collaboration efficiency'
    ]
  },
  traditional_private: {
    colors: [
      { name: 'Deep Brown', hex: '#8B4513', description: 'Traditional authority and stability' },
      { name: 'Hunter Green', hex: '#355E3B', description: 'Classic professional presence' },
      { name: 'Burgundy Red', hex: '#800020', description: 'Distinguished accent color' },
      { name: 'Antique White', hex: '#FAEBD7', description: 'Timeless elegance base' }
    ],
    materials: [
      { name: 'Solid Wood Paneling', category: 'wall', description: 'Traditional craftsmanship' },
      { name: 'Persian Carpets', category: 'flooring', description: 'Luxury and heritage comfort' },
      { name: 'Brass Hardware', category: 'accent', description: 'Classic metallic details' },
      { name: 'Leather Bound Books', category: 'accent', description: 'Scholarly sophistication' }
    ],
    inspirationImages: [
      '/Styles/traditional-private-1.jpeg',
      '/Styles/traditional-private-2.jpeg',
      '/Styles/traditional-private-3.jpeg'
    ],
    keyFeatures: ['Private enclosed offices', 'Formal meeting rooms', 'Executive furnishings', 'Acoustic privacy solutions'],
    aiInsights: [
      'Private offices improve deep focus by 45%',
      'Traditional materials convey stability and trust',
      'Enclosed spaces enhance confidential communication'
    ]
  }
};

const FindYourStyle = () => {
  // Style Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<StyleId[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<StyleId | null>(null);

  // Project Estimator State
  const [activeTab, setActiveTab] = useState("style-finder");
  const [estimatorStep, setEstimatorStep] = useState(0);
  const [estimatorData, setEstimatorData] = useState<EstimatorData>({
    spaceType: 'office',
    totalArea: 0,
    interiorStyle: '',
    rooms: [],
    materialGrade: 'standard',
    electricalLighting: false,
    furnitureInclusion: false
  });
  const [showEstimate, setShowEstimate] = useState(false);

  const handleAnswer = (style: StyleId) => {
    setSelectedAnswer(style);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedAnswer(null);
    }
  };

  const calculateResult = (): StyleId => {
    const styleCounts: Record<StyleId, number> = {
      modern_collab: 0,
      minimal_industrial: 0,
      luxury_corporate: 0,
      biophilic_calm: 0,
      creative_hybrid: 0,
      traditional_private: 0
    };

    answers.forEach(style => {
      styleCounts[style]++;
    });

    // Find the style with the most votes (recency as tiebreaker)
    let winner: StyleId = answers[0];
    let maxCount = 0;

    Object.entries(styleCounts).forEach(([style, count]) => {
      if (count > maxCount || (count === maxCount && answers.lastIndexOf(style as StyleId) > answers.lastIndexOf(winner))) {
        winner = style as StyleId;
        maxCount = count;
      }
    });

    return winner;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  // Estimator Functions
  const updateEstimatorData = (updates: Partial<EstimatorData>) => {
    setEstimatorData(prev => ({ ...prev, ...updates }));
  };

  const addRoom = (type: RoomType) => {
    const existing = estimatorData.rooms.find(r => r.type === type);
    if (existing) {
      updateEstimatorData({
        rooms: estimatorData.rooms.map(r => 
          r.type === type ? { ...r, count: r.count + 1 } : r
        )
      });
    } else {
      updateEstimatorData({
        rooms: [...estimatorData.rooms, { type, count: 1 }]
      });
    }
  };

  const removeRoom = (type: RoomType) => {
    updateEstimatorData({
      rooms: estimatorData.rooms
        .map(r => r.type === type ? { ...r, count: Math.max(0, r.count - 1) } : r)
        .filter(r => r.count > 0)
    });
  };

  const calculateEstimate = () => {
    const { totalArea, materialGrade, electricalLighting, furnitureInclusion, rooms } = estimatorData;
    const basePricing = MATERIAL_PRICING[materialGrade];
    
    let totalCost = totalArea * basePricing.pricePerSqFt;
    
    // Room-specific multipliers
    if (rooms.length > 0) {
      const roomMultiplier = rooms.reduce((acc, room) => {
        const roomConfig = ROOM_TYPES.find(r => r.value === room.type);
        return acc + ((roomConfig?.baseMultiplier || 1) * room.count * 0.1);
      }, 1);
      totalCost *= roomMultiplier;
    }
    
    // Add-ons
    if (electricalLighting) totalCost += totalArea * 200; // ₹200/sq.ft for electrical
    if (furnitureInclusion) totalCost += totalArea * 300; // ₹300/sq.ft for furniture
    
    return {
      baseCost: totalArea * basePricing.pricePerSqFt,
      totalCost,
      breakdown: {
        base: totalArea * basePricing.pricePerSqFt,
        electrical: electricalLighting ? totalArea * 200 : 0,
        furniture: furnitureInclusion ? totalArea * 300 : 0,
        roomUpgrades: totalCost - (totalArea * basePricing.pricePerSqFt) - (electricalLighting ? totalArea * 200 : 0) - (furnitureInclusion ? totalArea * 300 : 0)
      }
    };
  };

  const resetEstimator = () => {
    setEstimatorStep(0);
    setEstimatorData({
      spaceType: 'office',
      totalArea: 0,
      interiorStyle: '',
      rooms: [],
      materialGrade: 'standard',
      electricalLighting: false,
      furnitureInclusion: false
    });
    setShowEstimate(false);
  };

  // AI Mood Board State
  const [showMoodBoard, setShowMoodBoard] = useState(false);
  const [isGeneratingMoodBoard, setIsGeneratingMoodBoard] = useState(false);

  if (showResults) {
    const result = calculateResult();
    const style = STYLES[result];
    const moodBoardData = MOOD_BOARD_DATA[result];

    const generateMoodBoard = async () => {
      setIsGeneratingMoodBoard(true);
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsGeneratingMoodBoard(false);
      setShowMoodBoard(true);
    };

    const downloadMoodBoard = () => {
      // Create a simple download functionality
      const element = document.createElement('a');
      const moodBoardText = `
Hagerstone International - AI Generated Mood Board
Style: ${style.name}
${style.desc}

Color Palette:
${moodBoardData.colors.map(color => `${color.name} (${color.hex}): ${color.description}`).join('\n')}

Materials:
${moodBoardData.materials.map(material => `${material.name}: ${material.description}`).join('\n')}

Key Features:
${moodBoardData.keyFeatures.join(', ')}

AI Insights:
${moodBoardData.aiInsights.join('\n')}

Generated by India's First AI-Driven Interior Design Company - Hagerstone International
      `;
      const file = new Blob([moodBoardText], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = `${style.name}_MoodBoard_Hagerstone.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };

    const shareMoodBoard = async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${style.name} Mood Board - Hagerstone International`,
            text: `Check out my personalized mood board created by India's first AI-driven interior design company!`,
            url: window.location.href,
          });
        } catch (error) {
          console.log('Error sharing:', error);
        }
      } else {
        // Fallback: copy to clipboard
        const text = `Check out my ${style.name} mood board created by Hagerstone International - India's first AI-driven interior design company! ${window.location.href}`;
        navigator.clipboard?.writeText(text);
      }
    };

    return (
      <main className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* AI Company Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                India's First AI-Driven Design Company
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Perfect Office Style
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Results */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {style.name}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {style.desc}
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {style.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={`${style.name} example ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                              <span class="text-sm font-medium">${style.name}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Generate Mood Board Button */}
              {!showMoodBoard && (
                <div className="text-center mb-8">
                  <Button
                    onClick={generateMoodBoard}
                    disabled={isGeneratingMoodBoard}
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    {isGeneratingMoodBoard ? (
                      <>
                        <Sparkles className="w-5 h-5 animate-spin" />
                        AI Generating Your Mood Board...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Generate AI Mood Board
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Our AI will create a personalized mood board with colors, materials & insights
                  </p>
                </div>
              )}

              {/* AI Mood Board */}
              {showMoodBoard && (
                <div className="space-y-8 border-t pt-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Brain className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">AI-Generated Mood Board</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Curated by our advanced AI based on your preferences
                    </p>
                  </div>

                  {/* Inspiration Images Grid */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Visual Inspiration
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {moodBoardData.inspirationImages.map((image, index) => (
                        <div key={index} className="aspect-square rounded-lg overflow-hidden bg-muted">
                          <img
                            src={image}
                            alt={`${style.name} inspiration ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      AI-Curated Color Palette
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {moodBoardData.colors.map((color, index) => (
                        <Card key={index} className="overflow-hidden">
                          <div
                            className="h-20 w-full"
                            style={{ backgroundColor: color.hex }}
                          />
                          <CardContent className="p-4">
                            <h5 className="font-semibold text-sm">{color.name}</h5>
                            <p className="text-xs text-muted-foreground mt-1">{color.hex}</p>
                            <p className="text-xs text-muted-foreground mt-2">{color.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Materials & Textures */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Recommended Materials
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {moodBoardData.materials.map((material, index) => (
                        <Card key={index} className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-bold text-primary uppercase">
                                {material.category.slice(0, 2)}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-sm">{material.name}</h5>
                              <p className="text-xs text-muted-foreground capitalize">
                                {material.category}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {material.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Design Features
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {moodBoardData.keyFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 bg-primary/5 border border-primary/20 rounded-lg text-center"
                        >
                          <span className="text-sm font-medium text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <Brain className="w-5 h-5" />
                      AI Performance Insights
                    </h4>
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-6 border border-primary/20">
                      <ul className="space-y-3">
                        {moodBoardData.aiInsights.map((insight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mood Board Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t">
                    <Button onClick={downloadMoodBoard} variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      Download Mood Board
                    </Button>
                    <Button onClick={shareMoodBoard} variant="outline" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share Mood Board
                    </Button>
                    <Button asChild className="gap-2">
                      <a href="/projects">
                        <Eye className="w-4 h-4" />
                        View Related Projects
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                {style.ctas.map((cta, index) => (
                  <Button
                    key={index}
                    asChild
                    variant={index === 0 ? "default" : "outline"}
                    size="lg"
                    className="min-w-[200px]"
                  >
                    <a href={cta.href}>
                      {cta.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Retake Quiz */}
          <div className="text-center">
            <Button
              onClick={resetQuiz}
              variant="ghost"
              className="gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </Button>
          </div>
        </div>
      </main>
    );
  }

  const question = QUESTIONS[currentQuestion];

  const renderEstimatorContent = () => {
    if (showEstimate) {
      const estimate = calculateEstimate();
      const selectedStyle = estimatorData.interiorStyle ? STYLES[estimatorData.interiorStyle as StyleId] : null;
      
      return (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Your Project Estimate
            </h2>
            <p className="text-muted-foreground">
              Based on your requirements for {estimatorData.totalArea} sq.ft of {estimatorData.spaceType} space
            </p>
          </div>

          {/* Estimate Card */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-primary">
                ₹{estimate.totalCost.toLocaleString('en-IN')}
              </CardTitle>
              <p className="text-center text-muted-foreground">
                Estimated Total Project Cost
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cost Breakdown */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Cost Breakdown:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Interior ({MATERIAL_PRICING[estimatorData.materialGrade].label})</span>
                    <span>₹{estimate.breakdown.base.toLocaleString('en-IN')}</span>
                  </div>
                  {estimate.breakdown.electrical > 0 && (
                    <div className="flex justify-between">
                      <span>Electrical & Lighting</span>
                      <span>₹{estimate.breakdown.electrical.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {estimate.breakdown.furniture > 0 && (
                    <div className="flex justify-between">
                      <span>Furniture Package</span>
                      <span>₹{estimate.breakdown.furniture.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {estimate.breakdown.roomUpgrades > 0 && (
                    <div className="flex justify-between">
                      <span>Room Specifications</span>
                      <span>₹{estimate.breakdown.roomUpgrades.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Selected Style */}
              {selectedStyle && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Selected Style:</h4>
                  <div className="flex items-center gap-4">
                    <img 
                      src={selectedStyle.images[0]} 
                      alt={selectedStyle.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-medium">{selectedStyle.name}</p>
                      <p className="text-sm text-muted-foreground">{selectedStyle.desc}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="flex-1 gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Download className="w-4 h-4" />
                  Download Estimate
                </Button>
              </div>

              <Button 
                onClick={resetEstimator} 
                variant="ghost" 
                className="w-full gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                New Estimate
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    const estimatorSteps = [
      {
        title: "Space Details",
        content: (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Type of Space</Label>
              <RadioGroup
                value={estimatorData.spaceType}
                onValueChange={(value) => updateEstimatorData({ spaceType: value as SpaceType })}
              >
                {SPACE_TYPES.map(type => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={type.value} id={type.value} />
                    <Label htmlFor={type.value}>{type.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="area">Total Area (sq.ft)</Label>
              <Input
                id="area"
                type="number"
                placeholder="Enter total area"
                value={estimatorData.totalArea || ''}
                onChange={(e) => updateEstimatorData({ totalArea: Number(e.target.value) })}
              />
            </div>
          </div>
        )
      },
      {
        title: "Interior Style",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Choose your preferred interior style (or take our style quiz first!)
            </p>
            <RadioGroup
              value={estimatorData.interiorStyle}
              onValueChange={(value) => updateEstimatorData({ interiorStyle: value as StyleId })}
            >
              {Object.entries(STYLES).map(([id, style]) => (
                <div key={id} className="flex items-start space-x-3 p-4 border rounded-lg">
                  <RadioGroupItem value={id} id={id} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={id} className="text-base font-medium cursor-pointer">
                      {style.name}
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">{style.desc}</p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      },
      {
        title: "Room Configuration",
        content: (
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Specify the rooms/zones you need
            </p>
            <div className="space-y-4">
              {ROOM_TYPES.map(room => {
                const currentCount = estimatorData.rooms.find(r => r.type === room.value)?.count || 0;
                return (
                  <div key={room.value} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">{room.label}</p>
                      <p className="text-sm text-muted-foreground">
                        +{((room.baseMultiplier - 1) * 100).toFixed(0)}% premium
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeRoom(room.value)}
                        disabled={currentCount === 0}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center">{currentCount}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addRoom(room.value)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )
      },
      {
        title: "Material & Add-ons",
        content: (
          <div className="space-y-6">
            <div className="space-y-3">
              <Label>Material Grade</Label>
              <RadioGroup
                value={estimatorData.materialGrade}
                onValueChange={(value) => updateEstimatorData({ materialGrade: value as MaterialGrade })}
              >
                {Object.entries(MATERIAL_PRICING).map(([grade, config]) => (
                  <div key={grade} className="flex items-start space-x-3 p-4 border rounded-lg">
                    <RadioGroupItem value={grade} id={grade} className="mt-1" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <Label htmlFor={grade} className="text-base font-medium cursor-pointer">
                          {config.label}
                        </Label>
                        <span className="text-primary font-semibold">
                          ₹{config.pricePerSqFt}/sq.ft
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{config.description}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>Additional Services</Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Electrical & Lighting</p>
                    <p className="text-sm text-muted-foreground">+₹200/sq.ft</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={estimatorData.electricalLighting}
                    onChange={(e) => updateEstimatorData({ electricalLighting: e.target.checked })}
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Furniture Package</p>
                    <p className="text-sm text-muted-foreground">+₹300/sq.ft</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={estimatorData.furnitureInclusion}
                    onChange={(e) => updateEstimatorData({ furnitureInclusion: e.target.checked })}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        )
      }
    ];

    const currentEstimatorStep = estimatorSteps[estimatorStep];

    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Project Cost Estimator
          </h2>
          <p className="text-muted-foreground">
            Get an instant estimate for your interior design project
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Step {estimatorStep + 1} of {estimatorSteps.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(((estimatorStep + 1) / estimatorSteps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((estimatorStep + 1) / estimatorSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Current Step */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{currentEstimatorStep.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {currentEstimatorStep.content}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            onClick={() => setEstimatorStep(Math.max(0, estimatorStep - 1))}
            variant="outline"
            disabled={estimatorStep === 0}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>

          <Button
            onClick={() => {
              if (estimatorStep === estimatorSteps.length - 1) {
                setShowEstimate(true);
              } else {
                setEstimatorStep(estimatorStep + 1);
              }
            }}
            disabled={
              (estimatorStep === 0 && (!estimatorData.spaceType || !estimatorData.totalArea)) ||
              (estimatorStep === 1 && !estimatorData.interiorStyle)
            }
            className="gap-2 min-w-[120px]"
          >
            {estimatorStep === estimatorSteps.length - 1 ? (
              <>
                <Calculator className="w-4 h-4" />
                Get Estimate
              </>
            ) : (
              'Next'
            )}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Design Tools
          </h1>
          <p className="text-muted-foreground">
            Discover your style and estimate your project cost
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="style-finder" className="gap-2">
              <Palette className="w-4 h-4" />
              Find Your Style
            </TabsTrigger>
            <TabsTrigger value="cost-estimator" className="gap-2">
              <Calculator className="w-4 h-4" />
              Cost Estimator
            </TabsTrigger>
          </TabsList>

          <TabsContent value="style-finder">
            <div className="max-w-2xl mx-auto">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {QUESTIONS.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    Q{currentQuestion + 1}/7
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                    {question.prompt}
                  </h2>

                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option.style)}
                        className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswer === option.style
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border bg-card hover:border-primary/50 hover:bg-accent'
                        }`}
                        aria-pressed={selectedAnswer === option.style}
                      >
                        <span className="font-medium">{option.label}</span>
                        {option.helper && (
                          <div className="text-sm text-muted-foreground mt-1">
                            {option.helper}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <Button
                  onClick={handleBack}
                  variant="outline"
                  disabled={currentQuestion === 0}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="gap-2 min-w-[120px]"
                >
                  {currentQuestion === QUESTIONS.length - 1 ? 'Get Results' : 'Next'}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cost-estimator">
            {renderEstimatorContent()}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default FindYourStyle;