export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
          One workspace for the tools developers use every day.
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          An extensible, high-performance desktop workspace designed to unify core developer workflows and eliminate context switching on Windows.
        </p>
      </div>
    </div>
  );
}
