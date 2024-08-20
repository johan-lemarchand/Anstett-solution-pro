import Link from "next/link";
import { ReactElement } from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "../links/NextLink";

// ========================================================
interface BlogCard2Props {
  link: string;
  title: string;
  category: string;
  description: string;
  cardTop: ReactElement;
}
// ========================================================

export default function BlogCard2({ cardTop, title, category, description, link }: BlogCard2Props) {
  return (
    <article className="post">
      <div className="card">
        {cardTop}

        <div className="card-body">
          <div className="post-header">
            <div className="post-category text-line">
              <NextLink title={category} href="#" className="hover" />
            </div>

            <h2 className="post-title mt-1 mb-0">
              <NextLink title={title} className="link-dark" href={link} />
            </h2>
          </div>

          <div className="post-content">
            <p>{description}</p>
          </div>
        </div>

        <div className="card-footer">
          <ul className="post-meta d-flex mb-0">
            <li className="post-date">
              <i className="uil uil-calendar-alt" />
              <span>5 Jul 2022</span>
            </li>

            <li className="post-author">
              <Link href="#">
                <i className="uil uil-user" />
                <span>Anstett Solutions Pro</span>
              </Link>
            </li>

            <li className="post-comments">
              <Link href="#">
                <i className="uil uil-comment" /> 3<span> Commentaires</span>
              </Link>
            </li>

            <li className="post-likes ms-auto">
              <Link href="#">
                <i className="uil uil-heart-alt" /> 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
