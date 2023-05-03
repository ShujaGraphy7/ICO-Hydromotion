import React from "react";

function QnA_Left() {
  return (
    <div className="my-10 mx-5 lg:m-auto md:mx-auto">
      <div>
        <p className="text-2xl w-[80%] leading-relaxed">
          <span className="text-lime-600">Warum sollten Sie investieren?</span>
        </p>

        <p className="text-3xl w-[80%] leading-relaxed">
          Weil <span className="text-lime-600">die Welt</span> Ihnen
          <b>
            {" "}
            <span className="text-lime-600">gehört!</span>
          </b>
        </p>
      </div>
      <div className="my-5 w-[80%] text-xl text-justify leading-relaxed">
        <p className="">
          Unter dem Druck der Industrie in der dezentralen Welt verschwinden die
          ökologischen Ziele. Wir von GREENHYDROMOTION wollen, dass die Zukunft
          mit Ihrer Hilfe grün ist. <br />
          <b>Haben Sie Lust, sich an einer Revolution zu beteiligen?</b>
          <br />
          Möchten Sie Ihre eigene Religion und den Glauben zukünftiger
          Generationen in Ihre Hände nehmen? Dann schließen Sie sich uns an und
          beginnen Sie gemeinsam, die Welt zu verändern.
        </p>
      </div>
      <a href="#BuyNow">
        <div className="my-5 mx-5">
          <button className="bg-lime-600 p-3 px-10 rounded-full text-white font-bold">
            Jetzt kaufen
          </button>
        </div>
      </a>
    </div>
  );
}

export default QnA_Left;
