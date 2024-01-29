export default function Hero() {
  return (
    <section className="w-screen min-h-[70vh] bg-gray-100 text-center flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl">¿Porque Nosotros?</h1>
        <p className="w-11/12 lg:w-7/12">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      
      <div className="flex flex-row flex-wrap gap-6 justify-center">
        <div className="cardHero w-3/12">
          <h2>01</h2>
          <h2>Lorem Impsum</h2>
          <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
        </div>
        <div className="cardHero w-3/12">
          <h2>02</h2>
          <h2>Repellat Nihil</h2>
          <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
        </div>
        <div className="cardHero w-3/12">
          <h2>03</h2>
          <h2>Faker</h2>
          <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
        </div>
      </div>
    </section>
  );
}
