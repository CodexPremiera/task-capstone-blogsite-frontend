import React, {useEffect, useState} from 'react';
import {useCurrentUser} from "../../../context/Context.jsx";

function PostContent( {post} ) {
  const { currentUser } = useCurrentUser();


  const style = {
    container: `flex flex-row max-w-[1336px] justify-evenly mx-auto`,
    content: `flex-1 max-w-[728px] min-h-[1080px] relative top-[57px] py-12 px-6`,
    article_title: `text-[2.5rem] leading-[3rem] font-bold mb-6 cursor-pointer`,
    article_content: `font-title text-[1rem] leading-[1.5rem]`,
  }

  return (
    <div className={style.container}>
      <section className={style.content}>
        <h1 className={style.article_title}>Reexamining the Stigma: An Objective Lens on Human Genetic Engineering</h1>
        <article className={style.article_content}>
          <p>
            Introduction:
            The mere mention of human genetic engineering ignites visceral reactions across disparate belief spectrums. Branded by skeptics as a Promethean ethical minefield conjuring dystopian visions, the emerging CRISPR technologies enabling precise hereditary enhancements have been heavily stigmatized. Counterbalancing these objections are proponents who view genetic engineering as the next rational frontier of human empowerment — dangling promises of eradicating devastating diseases and expanding biological constraints.

            This impartial analysis weighs the contrasting viewpoints and nuanced realities surrounding this polarizing scientific breakthrough. From unpacking existential risks and bioethical quandaries to assessing pragmatic upsides, a holistic perspective frames the parameters governing this controversial issue beyond fearmongering caricatures. While the stakes are monumental, only through grounded discourse disentangling hype from reality can society construct prudent policies to responsibly navigate humanity’s genetic crossroads.

            Examining Core Ethical Objections and Theoretical Risks
            At the crux of opposition to genetic engineering resides a constellation of objections anchored in existential risk aversion and bioethical philosophies. Critics are sounding…
          </p>
        </article>
      </section>
    </div>
  );
}

export default PostContent;