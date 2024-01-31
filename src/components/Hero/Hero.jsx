export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] bg-gray-100 text-center flex flex-col justify-center items-center gap-6">
      {/* <div className="flex flex-col justify-center items-center"> */}
      <h1 className="text-3xl font-bold text-[#5f5950]">¿Porque elegir <span className="text-[#ffb03b]">Delicious?</span></h1>
      <p className="w-11/12 lg:w-5/12 text-[#5f5950] ">
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
        adipisci expedita at voluptas atque vitae autem.
      </p>
      {/* </div> */}

      <div className="flex flex-row flex-wrap gap-6 justify-center">
        <div className="cardHero w-11/12 md:w-9/12 lg:w-3/12 space-y-5">
          <span className="text-3xl font-semibold text-[#fabf66]">01</span>
          <h2 className="text-2xl font-bold">Lorem Impsum</h2>
          <p>
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
        <div className="cardHero w-11/12 md:w-9/12 lg:w-3/12 space-y-5">
          <span className="text-3xl font-semibold text-[#fabf66]">02</span>
          <h2 className="text-2xl font-bold">Repellat Nihil</h2>
          <p>
            Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt
            debitis quo vel nam quis
          </p>
        </div>
        <div className="cardHero w-11/12 md:w-9/12 lg:w-3/12 space-y-5">
          <span className="text-3xl font-semibold text-[#fabf66]">03</span>
          <h2 className="text-2xl font-bold">Faker</h2>
          <p>
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
      </div>
    </section>
  );
}
