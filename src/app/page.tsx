
import { Navigation } from "@/components/shared/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="container pt-32 pb-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div
              className="relative z-10 space-y-6 backdrop-blur-sm rounded-lg p-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
              }}
            >
              <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-orange-500 via-purple-500 to-green-500 bg-clip-text text-transparent">
                Financial infrastructure for Africa&apos;s growth
              </h1>
              <p className="text-xl text-muted-foreground">
                Join millions of businesses across Africa using AfriPay to
                accept payments, send money, and grow their revenue.
              </p>
              <div className="flex gap-4 max-w-md">
                <Input type="email" placeholder="Email address" />
                <Button size="lg">Start now</Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 via-purple-500/30 to-green-500/30 blur-3xl -z-10" />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #FF8C42, #9C27B0, #4CAF50)",
          opacity: 0.1,
        }}
      />
    </main>
  );
}
