import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CategoryContentProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function CategoryContent({
  id,
  title,
  description,
  imageUrl,
}: CategoryContentProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                fill
                className="aspect-video object-contain"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground mb-6">{description}</p>
            <Button
              variant="outline"
              className="mb-4">
              View Related Workouts
            </Button>
          </div>
        </div>

        {id === "strength-training" && <StrengthTrainingContent />}
        {id === "cardio" && <CardioContent />}
        {id === "flexibility" && <FlexibilityContent />}
        {id === "nutrition" && <NutritionContent />}
        {id === "recovery" && <RecoveryContent />}
        {id === "hiit" && <HiitContent />}
        {id === "calisthenics" && <CalisthenicsContent />}
      </div>
    </section>
  );
}

function StrengthTrainingContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          Key Principles of Strength Training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Progressive Overload</h4>
            <p className="text-muted-foreground">
              Gradually increasing the weight, frequency, or number of
              repetitions in your strength training routine. This is the most
              important principle for gaining strength and muscle.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Compound Movements</h4>
            <p className="text-muted-foreground">
              Exercises that work multiple muscle groups simultaneously, such as
              squats, deadlifts, bench press, and pull-ups. These movements
              provide the most bang for your buck.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Proper Form</h4>
            <p className="text-muted-foreground">
              Executing exercises with correct technique to maximize
              effectiveness and prevent injury. Quality always trumps quantity.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Rest and Recovery</h4>
            <p className="text-muted-foreground">
              Allowing adequate time between training sessions for muscles to
              repair and grow. Typically 48-72 hours of rest is recommended
              between training the same muscle group.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Recommended Training Split
          </h3>
          <ul className="space-y-2">
            <li className="pb-2 border-b">
              <span className="font-medium">Monday:</span> Push (Chest,
              Shoulders, Triceps)
            </li>
            <li className="pb-2 border-b">
              <span className="font-medium">Tuesday:</span> Pull (Back, Biceps)
            </li>
            <li className="pb-2 border-b">
              <span className="font-medium">Wednesday:</span> Rest or Light
              Cardio
            </li>
            <li className="pb-2 border-b">
              <span className="font-medium">Thursday:</span> Legs and Core
            </li>
            <li className="pb-2 border-b">
              <span className="font-medium">Friday:</span> Upper Body Focus
            </li>
            <li className="pb-2 border-b">
              <span className="font-medium">Saturday:</span> Active Recovery
            </li>
            <li>
              <span className="font-medium">Sunday:</span> Complete Rest
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Essential Equipment</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">
                1
              </span>
              <div>
                <span className="font-medium">Barbell and Weight Plates</span>
                <p className="text-sm text-muted-foreground">
                  For compound movements like squats, deadlifts, and bench press
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">
                2
              </span>
              <div>
                <span className="font-medium">Dumbbells</span>
                <p className="text-sm text-muted-foreground">
                  For isolation exercises and unilateral training
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">
                3
              </span>
              <div>
                <span className="font-medium">Squat Rack/Power Rack</span>
                <p className="text-sm text-muted-foreground">
                  For safety and versatility in training
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary text-sm mr-3 mt-0.5">
                4
              </span>
              <div>
                <span className="font-medium">Bench</span>
                <p className="text-sm text-muted-foreground">
                  Flat, incline, and decline options for chest exercises
                </p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

function CardioContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          Types of Cardiovascular Training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Steady-State Cardio</h4>
            <p className="text-muted-foreground">
              Continuous, moderate-intensity exercise performed for an extended
              period, such as jogging, cycling, or swimming. Great for building
              endurance and improving heart health.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Interval Training</h4>
            <p className="text-muted-foreground">
              Alternating between high-intensity bursts and recovery periods.
              More time-efficient and effective for improving both aerobic and
              anaerobic fitness.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Fartlek Training</h4>
            <p className="text-muted-foreground">
              A form of unstructured interval training that varies pace and
              intensity throughout the workout. Adds variety and can be more
              enjoyable than structured training.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Zone 2 Training</h4>
            <p className="text-muted-foreground">
              Low-intensity cardio performed at 60-70% of max heart rate.
              Excellent for building aerobic base, improving fat metabolism, and
              enhancing recovery.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Benefits of Cardio</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 text-sm mr-3 mt-0.5 dark:bg-blue-900">
                ♥
              </span>
              <div>
                <span className="font-medium">Improved Heart Health</span>
                <p className="text-sm text-muted-foreground">
                  Strengthens your heart, lowers blood pressure, and improves
                  cholesterol levels
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 text-sm mr-3 mt-0.5 dark:bg-blue-900">
                🔥
              </span>
              <div>
                <span className="font-medium">Weight Management</span>
                <p className="text-sm text-muted-foreground">
                  Burns calories and helps maintain healthy body composition
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 text-sm mr-3 mt-0.5 dark:bg-blue-900">
                🧠
              </span>
              <div>
                <span className="font-medium">Mental Health</span>
                <p className="text-sm text-muted-foreground">
                  Reduces stress, anxiety, and depression while improving mood
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-500 text-sm mr-3 mt-0.5 dark:bg-blue-900">
                💤
              </span>
              <div>
                <span className="font-medium">Better Sleep</span>
                <p className="text-sm text-muted-foreground">
                  Improves sleep quality and helps regulate sleep patterns
                </p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Recommended Weekly Cardio
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">For General Health:</h4>
              <p className="text-muted-foreground">
                150 minutes of moderate-intensity or 75 minutes of
                high-intensity cardio per week, spread across at least 3 days.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">For Weight Loss:</h4>
              <p className="text-muted-foreground">
                300+ minutes of moderate-intensity cardio per week, combined
                with strength training and proper nutrition.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">For Athletic Performance:</h4>
              <p className="text-muted-foreground">
                Combination of Zone 2 training (2-3 sessions/week) and
                high-intensity interval training (1-2 sessions/week).
              </p>
            </div>
            <div className="pt-4 border-t mt-4">
              <p className="text-sm italic">
                Note: Always start with a proper warm-up and end with a
                cool-down. Increase duration and intensity gradually to prevent
                injury.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function FlexibilityContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          Types of Flexibility Training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Static Stretching</h4>
            <p className="text-muted-foreground">
              Holding a stretch position for 15-60 seconds. Best performed after
              workouts or as a separate flexibility session when muscles are
              warm.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Dynamic Stretching</h4>
            <p className="text-muted-foreground">
              Active movements that take joints through their full range of
              motion. Ideal for warm-ups before exercise to prepare the body for
              movement.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">
              PNF (Proprioceptive Neuromuscular Facilitation)
            </h4>
            <p className="text-muted-foreground">
              Advanced technique involving contract-relax patterns. Very
              effective for increasing range of motion but best performed with a
              partner or trainer.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Mobility Training</h4>
            <p className="text-muted-foreground">
              Focuses on active control throughout a joint's range of motion.
              Combines strength and flexibility for functional movement
              patterns.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Key Areas to Focus On</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-500 text-sm mr-3 mt-0.5 dark:bg-purple-900">
                1
              </span>
              <div>
                <span className="font-medium">Hip Flexors & Glutes</span>
                <p className="text-sm text-muted-foreground">
                  Often tight from prolonged sitting, affecting posture and
                  movement
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-500 text-sm mr-3 mt-0.5 dark:bg-purple-900">
                2
              </span>
              <div>
                <span className="font-medium">Shoulders & Thoracic Spine</span>
                <p className="text-sm text-muted-foreground">
                  Critical for overhead movements and preventing shoulder
                  injuries
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-500 text-sm mr-3 mt-0.5 dark:bg-purple-900">
                3
              </span>
              <div>
                <span className="font-medium">Hamstrings & Calves</span>
                <p className="text-sm text-muted-foreground">
                  Important for lower body movements and preventing lower back
                  pain
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-purple-100 text-purple-500 text-sm mr-3 mt-0.5 dark:bg-purple-900">
                4
              </span>
              <div>
                <span className="font-medium">Ankles & Wrists</span>
                <p className="text-sm text-muted-foreground">
                  Often neglected but crucial for functional movement and injury
                  prevention
                </p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Benefits of Regular Flexibility Work
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Injury Prevention</h4>
              <p className="text-muted-foreground">
                Flexible muscles and mobile joints are less susceptible to
                strains, tears, and other injuries during exercise and daily
                activities.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Improved Performance</h4>
              <p className="text-muted-foreground">
                Greater range of motion allows for better technique in
                exercises, more efficient movement patterns, and potentially
                greater strength expression.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Better Posture</h4>
              <p className="text-muted-foreground">
                Balanced flexibility helps maintain proper alignment, reducing
                stress on the body and minimizing pain from poor posture.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Stress Reduction</h4>
              <p className="text-muted-foreground">
                Stretching promotes relaxation, reduces muscle tension, and can
                be a form of mindful movement that reduces stress.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function NutritionContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Macronutrients Explained</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium mb-2">Protein</h4>
            <p className="text-muted-foreground mb-3">
              Essential for muscle repair and growth. Aim for 1.6-2.2g per kg of
              bodyweight for active individuals.
            </p>
            <p className="text-sm font-medium">Key Sources:</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Lean meats (chicken, turkey)</li>
              <li>Fish and seafood</li>
              <li>Eggs and dairy</li>
              <li>Legumes and tofu</li>
              <li>Protein supplements</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Carbohydrates</h4>
            <p className="text-muted-foreground mb-3">
              Primary energy source for high-intensity exercise. Requirements
              vary based on activity level and goals.
            </p>
            <p className="text-sm font-medium">Key Sources:</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Whole grains</li>
              <li>Fruits and vegetables</li>
              <li>Legumes</li>
              <li>Potatoes and sweet potatoes</li>
              <li>Rice and quinoa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Fats</h4>
            <p className="text-muted-foreground mb-3">
              Essential for hormone production and vitamin absorption. Should
              comprise 20-35% of total calories.
            </p>
            <p className="text-sm font-medium">Key Sources:</p>
            <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
              <li>Avocados</li>
              <li>Nuts and seeds</li>
              <li>Olive oil</li>
              <li>Fatty fish (salmon, mackerel)</li>
              <li>Eggs</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Nutrition for Different Goals
          </h3>
          <div className="space-y-4">
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Muscle Building</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Caloric surplus of 250-500 calories above maintenance</li>
                <li>High protein intake (1.8-2.2g per kg of bodyweight)</li>
                <li>Adequate carbohydrates to fuel workouts</li>
                <li>Meal timing: protein-rich meals every 3-4 hours</li>
                <li>Post-workout nutrition: protein + carbs within 2 hours</li>
              </ul>
            </div>
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Fat Loss</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Caloric deficit of 300-500 calories below maintenance</li>
                <li>
                  High protein intake to preserve muscle (1.8-2.2g per kg)
                </li>
                <li>Moderate carbs, prioritized around workouts</li>
                <li>Higher fiber intake for satiety</li>
                <li>Adequate hydration to support metabolism</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1">Performance</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Caloric balance or slight surplus</li>
                <li>Higher carbohydrate intake (5-10g per kg)</li>
                <li>Moderate protein (1.6-1.8g per kg)</li>
                <li>Carb loading before endurance events</li>
                <li>Electrolyte and fluid balance for optimal performance</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Hydration & Supplements
          </h3>
          <div className="space-y-4">
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Hydration Guidelines</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Water needs vary based on body size, activity level, and
                climate:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Minimum: 3-4 liters per day for active individuals</li>
                <li>During exercise: 500-1000ml per hour of activity</li>
                <li>Electrolytes needed for sessions over 60 minutes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1">Evidence-Based Supplements</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">Creatine Monohydrate:</span>{" "}
                  Improves strength, power, and muscle growth
                </li>
                <li>
                  <span className="font-medium">Protein Powder:</span>{" "}
                  Convenient source of high-quality protein
                </li>
                <li>
                  <span className="font-medium">Caffeine:</span> Enhances
                  performance and focus
                </li>
                <li>
                  <span className="font-medium">Vitamin D:</span> Important for
                  bone health and immune function
                </li>
                <li>
                  <span className="font-medium">Omega-3 Fatty Acids:</span>{" "}
                  Support recovery and reduce inflammation
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function RecoveryContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          Components of Effective Recovery
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Sleep</h4>
            <p className="text-muted-foreground">
              The most important recovery tool. Aim for 7-9 hours of quality
              sleep per night. During sleep, growth hormone is released, tissues
              repair, and memory consolidation occurs.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Nutrition</h4>
            <p className="text-muted-foreground">
              Post-workout nutrition should include protein for muscle repair
              and carbohydrates to replenish glycogen stores. Hydration is also
              critical for recovery.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Active Recovery</h4>
            <p className="text-muted-foreground">
              Low-intensity movement that promotes blood flow without creating
              additional stress. Examples include walking, swimming, yoga, and
              light cycling.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Stress Management</h4>
            <p className="text-muted-foreground">
              Mental stress impacts physical recovery. Practices like
              meditation, deep breathing, and time in nature can reduce stress
              hormones and improve recovery.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Recovery Techniques</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-500 text-sm mr-3 mt-0.5 dark:bg-indigo-900">
                1
              </span>
              <div>
                <span className="font-medium">
                  Foam Rolling & Self-Myofascial Release
                </span>
                <p className="text-sm text-muted-foreground">
                  Helps release muscle tension and improve blood flow to tissues
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-500 text-sm mr-3 mt-0.5 dark:bg-indigo-900">
                2
              </span>
              <div>
                <span className="font-medium">Contrast Therapy</span>
                <p className="text-sm text-muted-foreground">
                  Alternating between hot and cold exposure to reduce
                  inflammation and improve circulation
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-500 text-sm mr-3 mt-0.5 dark:bg-indigo-900">
                3
              </span>
              <div>
                <span className="font-medium">Compression Garments</span>
                <p className="text-sm text-muted-foreground">
                  May help reduce muscle soreness and improve recovery between
                  training sessions
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-indigo-100 text-indigo-500 text-sm mr-3 mt-0.5 dark:bg-indigo-900">
                4
              </span>
              <div>
                <span className="font-medium">Massage</span>
                <p className="text-sm text-muted-foreground">
                  Professional massage can help reduce muscle tension and
                  promote relaxation
                </p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Signs of Inadequate Recovery
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Performance Decline</h4>
              <p className="text-muted-foreground">
                Inability to maintain usual training weights, speeds, or
                endurance levels despite consistent training.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Persistent Fatigue</h4>
              <p className="text-muted-foreground">
                Feeling tired even after adequate sleep, or requiring more sleep
                than usual to function.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Elevated Resting Heart Rate</h4>
              <p className="text-muted-foreground">
                An increase of 5+ beats per minute in morning resting heart rate
                can indicate overtraining or inadequate recovery.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Mood Disturbances</h4>
              <p className="text-muted-foreground">
                Increased irritability, decreased motivation, or mood swings
                that aren't typical for you.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function HiitContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">HIIT Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">What is HIIT?</h4>
            <p className="text-muted-foreground">
              High-Intensity Interval Training involves alternating between
              short bursts of intense exercise (80-95% of max heart rate) and
              brief recovery periods. This creates both aerobic and anaerobic
              benefits in a time-efficient format.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Work-to-Rest Ratios</h4>
            <p className="text-muted-foreground">
              Common HIIT protocols include 1:1 (30 seconds work, 30 seconds
              rest), 1:2 (30 seconds work, 60 seconds rest), and Tabata (20
              seconds work, 10 seconds rest). The ratio should match your
              fitness level and goals.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Frequency</h4>
            <p className="text-muted-foreground">
              Due to its intensity, limit HIIT to 2-3 sessions per week with at
              least 48 hours between sessions to allow for proper recovery. More
              is not better with HIIT.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Duration</h4>
            <p className="text-muted-foreground">
              Effective HIIT workouts can be as short as 10-20 minutes
              (excluding warm-up and cool-down). Quality over quantity is
              essential—true high intensity cannot be maintained for long
              periods.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Sample HIIT Workouts</h3>
          <div className="space-y-4">
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Bodyweight HIIT</h4>
              <p className="text-sm text-muted-foreground mb-2">
                30 seconds work, 30 seconds rest, 4 rounds:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Jump Squats</li>
                <li>Mountain Climbers</li>
                <li>Burpees</li>
                <li>High Knees</li>
              </ul>
            </div>
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Tabata Protocol</h4>
              <p className="text-sm text-muted-foreground mb-2">
                20 seconds work, 10 seconds rest, 8 rounds (4 minutes total):
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Sprints (running, cycling, rowing)</li>
                <li>Rest 1 minute, then repeat with a different exercise</li>
                <li>Complete 4-5 different exercises</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1">
                EMOM (Every Minute On the Minute)
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                For 16 minutes, alternating exercises:
              </p>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Minute 1: 10 Kettlebell Swings</li>
                <li>Minute 2: 10 Push-ups</li>
                <li>Minute 3: 15 Box Jumps</li>
                <li>Minute 4: 10 Dumbbell Rows (each side)</li>
                <li>Repeat for 4 rounds</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">
            Benefits & Considerations
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Key Benefits</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>Time efficiency (maximum results in minimum time)</li>
                <li>
                  Increased metabolic rate for hours after exercise (EPOC
                  effect)
                </li>
                <li>Improved insulin sensitivity and glucose metabolism</li>
                <li>Enhanced cardiovascular health and VO2 max</li>
                <li>No equipment necessary (though it can be incorporated)</li>
              </ul>
            </div>
            <div className="pt-4 mt-2 border-t">
              <h4 className="font-medium mb-1">Important Considerations</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>
                  Not suitable for beginners—build a base of fitness first
                </li>
                <li>Proper warm-up is essential to prevent injury</li>
                <li>Form should never be sacrificed for intensity</li>
                <li>Recovery between sessions is critical</li>
                <li>
                  Those with heart conditions should consult a doctor first
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function CalisthenicsContent() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">
          Calisthenics Fundamentals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">What is Calisthenics?</h4>
            <p className="text-muted-foreground">
              Calisthenics is a form of strength training consisting of a
              variety of movements that exercise large muscle groups using your
              body weight as resistance. These exercises are performed with
              minimal or no equipment.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Progression Principles</h4>
            <p className="text-muted-foreground">
              Unlike weight training where you add weight, calisthenics
              progression involves changing leverage, reducing points of
              contact, or increasing range of motion to make exercises more
              challenging.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Movement Patterns</h4>
            <p className="text-muted-foreground">
              Calisthenics focuses on six fundamental movement patterns: push,
              pull, squat, hinge, core, and locomotion. Mastering these patterns
              builds functional strength applicable to daily life.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Skill Component</h4>
            <p className="text-muted-foreground">
              Beyond strength, calisthenics develops body control, coordination,
              and proprioception. Advanced skills like handstands, muscle-ups,
              and levers require practice and patience.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Progression Roadmaps</h3>
          <div className="space-y-4">
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Push Progression</h4>
              <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                <li>Wall Push-ups</li>
                <li>Incline Push-ups</li>
                <li>Standard Push-ups</li>
                <li>Diamond Push-ups</li>
                <li>Pseudo Planche Push-ups</li>
                <li>One-Arm Push-up Progressions</li>
              </ol>
            </div>
            <div className="pb-3 border-b">
              <h4 className="font-medium mb-1">Pull Progression</h4>
              <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                <li>Scapular Pulls</li>
                <li>Negative Pull-ups</li>
                <li>Full Pull-ups</li>
                <li>Chest-to-Bar Pull-ups</li>
                <li>L-Sit Pull-ups</li>
                <li>One-Arm Pull-up Progressions</li>
              </ol>
            </div>
            <div>
              <h4 className="font-medium mb-1">Core Progression</h4>
              <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                <li>Plank Holds</li>
                <li>Hollow Body Holds</li>
                <li>Leg Raises</li>
                <li>L-Sits</li>
                <li>Dragon Flags</li>
                <li>Front Lever Progressions</li>
              </ol>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Benefits & Equipment</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Key Benefits</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>
                  Develops functional strength applicable to daily activities
                </li>
                <li>Improves body awareness and coordination</li>
                <li>Minimal equipment needed—train anywhere</li>
                <li>Lower risk of injury compared to heavy weight training</li>
                <li>Builds impressive strength-to-weight ratio</li>
                <li>Combines strength and mobility in one practice</li>
              </ul>
            </div>
            <div className="pt-4 mt-2 border-t">
              <h4 className="font-medium mb-1">Recommended Equipment</h4>
              <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                <li>
                  <span className="font-medium">Pull-up Bar:</span> Essential
                  for all pulling movements
                </li>
                <li>
                  <span className="font-medium">
                    Parallel Bars/Dip Station:
                  </span>{" "}
                  For dips, L-sits, and support holds
                </li>
                <li>
                  <span className="font-medium">Gymnastics Rings:</span>{" "}
                  Versatile tool that adds instability and range of motion
                </li>
                <li>
                  <span className="font-medium">Resistance Bands:</span> Helpful
                  for assistance in difficult movements
                </li>
                <li>
                  <span className="font-medium">Floor Space:</span> For
                  handstand practice and locomotion patterns
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
