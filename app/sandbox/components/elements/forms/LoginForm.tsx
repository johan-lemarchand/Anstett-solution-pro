"use client";

import { FormEvent, Fragment, useState } from "react";
import NextLink from "@sandbox/components/reuseable/links/NextLink";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email, password);
  };

  return (
    <Fragment>
      <h2 className="mb-3 text-start">Vous revoilà</h2>
      <p className="lead mb-6 text-start">Veuillez indiquer votre email et votre mot de passe pour vous connecter.</p>

      <form onSubmit={handleSubmit} className="text-start mb-3">
        <div className="form-floating mb-4">
          <input
            type="email"
            value={email}
            id="loginEmail"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="loginEmail">Email</label>
        </div>

        <div className="form-floating password-field mb-4">
          <input
            value={password}
            id="loginPassword"
            placeholder="Password"
            className="form-control"
            type={visiblePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="password-toggle" onClick={() => setVisiblePassword(!visiblePassword)}>
            <i className={`uil  ${visiblePassword ? "uil-eye-slash" : "uil-eye"}`} />
          </span>

          <label htmlFor="loginPassword">Mot de passe</label>
        </div>

        <button type="submit" className="btn btn-primary rounded-pill btn-login w-100 mb-2">
          Connexion 
        </button>
      </form>

      <p className="mb-1">
        <NextLink title="Mot de passe oublié?" href="/register" className="hover" />
      </p>

      <p className="mb-0">
        vous n'avez pas encore de compte ? <NextLink title="S'inscrire" href="/register" className="hover" />
      </p>

      <div className="divider-icon my-4">ou</div>

      <nav className="nav social justify-content-center text-center">
        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-google">
          <i className="uil uil-google" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-facebook-f">
          <i className="uil uil-facebook-f" />
        </a>

        <a href="#" target="__blank" className="btn btn-circle btn-sm btn-twitter">
          <i className="uil uil-twitter" />
        </a>
      </nav>
    </Fragment>
  );
}
