import Image from "next/image";

export default function Dashboard3() {
  return (
    <div>
      <div className="flex flex-col bg- rounded-lg p-7">
        <Image
          width={800}
          height={500}
          src={"https://miro.medium.com/max/489/1*BuV5lqi-Q6LOeEzGUY9Tcg.png"}
        />
      </div>
      <div className="flex flex-col bg-white rounded-lg mt-6 ml-2 p-8">
        <iframe
          width="450"
          height="315"
          src="https://www.youtube.com/embed/Mr5hvaH5EvM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
