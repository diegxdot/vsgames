import React from "react";
import logoVision from "../assets/img/ojo-abierto.png";

const Questions = () => {
  return (
    <section className="flex flex-wrap justify-center items-center py-20 px-40 mx-20 text-wh">
      <div className="flex-basis-1/2 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-wh sm:text-6xl">
          Preguntas Frecuentes
        </h1>
        <img src={logoVision} alt="logo de visiongames" className="w-30 m-20" />
      </div>
      <div className="flex-basis-1/2 text-left">
        <div className="p-4">
          <h3 className="font-bold text-lg">¿Pregunta 1?</h3>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            animi dicta alias? Corrupti odio quod voluptates ea nam nisi labore
            modi numquam officia quia ab, distinctio quidem ut expedita minima?
          </p>
          <h3 className="font-bold text-lg">¿Pregunta 2?</h3>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium voluptate numquam mollitia inventore veritatis molestiae
            veniam, et ea rerum dignissimos, error facilis maxime eius itaque
            tempora ipsum dolore excepturi sunt.
          </p>
          <h3 className="font-bold text-lg">¿Pregunta 3?</h3>
          <p className="text-base mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            aspernatur ab, molestiae nihil qui consequatur numquam, voluptate
            deleniti perspiciatis sequi quibusdam magni quae exercitationem odio
            ipsum. Perspiciatis commodi perferendis odio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
