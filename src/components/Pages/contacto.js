import { useForm } from "react-hook-form";
import React from "react";
import contactImg from "../../assets/contact.png";

// <- Validacion del formulario con libreria

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section id="contact">
      <div className="caja contact-row">
        <article className="contact-left-col">
          <h3 className="contact-title">
            Sign Up to join our learning community
          </h3>

          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <label>
              <h5 className="contact-text">Name</h5>
            </label>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              className={`form-control ${errors.name && "invalid"}`}
              {...register("name", { required: "Name is Required" })}
              onKeyUp={() => {
                trigger("name");
              }}
            />
            {errors.name && (
              <small className="text-danger">{errors.name.message}</small>
            )}

            <label>
              <h5 className="contact-text">Last Name</h5>
            </label>
            <input
              type="text"
              placeholder="Escribe tu apellido"
              className={`form-control ${errors.last && "invalid"}`}
              {...register("last", { required: "Last Name is Required" })}
              onKeyUp={() => {
                trigger("last");
              }}
            />
            {errors.last && (
              <small className="text-danger">{errors.last.message}</small>
            )}

            <label>
              <h5 className="contact-text">Phone</h5>
            </label>
            <input
              type="text"
              placeholder="Escribe tu teléfono"
              className={`form-control ${errors.phone && "invalid"}`}
              {...register("phone", {
                required: "Phone is Required",
                min: {
                  value: 9,
                  message: "Minimum Required phone is 9",
                },
                max: {
                  value: 13,
                  message: "Maximun allwoed phone is 13",
                },
                pattern: {
                  value:
                    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
              })}
              onKeyUp={() => {
                trigger("phone");
              }}
            />
            {errors.phone && (
              <small className="text-danger">{errors.phone.message}</small>
            )}

            <label>
              <h5 className="contact-text">Email</h5>
            </label>
            <input
              type="email"
              placeholder="Escribe tu Email"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}

            <label>
              <h5 className="contact-text">Asunto</h5>
            </label>
            <input
              type="text"
              placeholder="Escribe tu asunto"
              className={`form-control ${errors.asunto && "invalid"}`}
              {...register("asunto", { required: "Asunto is Required" })}
              onKeyUp={() => {
                trigger("asunto");
              }}
            />
            {errors.asunto && (
              <small className="text-danger">{errors.asunto.message}</small>
            )}

            <label>
              <h5 className="contact-text">Message</h5>
            </label>
            <textarea
              placeholder="Enter Message"
              className={`form-control-area ${errors.message && "invalid"}`}
              {...register("message", {
                required: "Message is Required",
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                },
              })}
              onKeyUp={() => {
                trigger("message");
              }}
            />
            {errors.message && (
              <small className="text-danger">{errors.message.message}</small>
            )}

            <div className="btn-box">
              <input type="submit" className="contact-btn" />
              <input type="submit" className="contact-btn" value="Wspp" />
            </div>
          </form>
        </article>

        <article className="contact-right-col">
          <img src={contactImg} alt="" />
        </article>
      </div>
    </section>
  );
}
