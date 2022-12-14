import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1 className="pageTitle">About Us</h1>
        <p>
          BondBank was designed and created to enable the admins to create
          different security.
        </p>
        <p>
          <h4>Motivation: </h4>For unsophisticated crypto investors, there are very limited ways to generate passive income that is safe and predictable. Currently most methods for generating passive income has come from Cefi protocols such as Celcius, Crypto.com, and Blockfi. Recent events has proven that these institutions are not trsutworthy, as they were able to hide their insolvency from the public; It is clear that there is a need for decentralized, on-chain bonds for investors. This project aims to make this process simple by allowing fund managers to offer investors a crypto bonds (ERC1155 token) that provides that exposure to the market. In this project, we will use Aave and integrate their WETH gateway contract to show a working example of how the bonds will work.
        </p>
        <p>
          This project was created by BondBank team to compete at "Chainlink
          Hackathon 2022".
        </p>
        <div className={styles.repoSection}>
          <a
            className={styles.repo}
            href="https://github.com/BondBank/BondBank-Backend.git"
            target="_blank"
            rel="noreferrer"
          >
            {`> Backend Repo <`}
          </a>
          <a
            className={styles.repo}
            href="https://github.com/BondBank/BondBank-Frontend.git"
            target="_blank"
            rel="noreferrer"
          >
            {`> Frontend Repo <`}
          </a>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className="pageTitle">Team Members</h2>
        <ul className={styles.memberList}>
          <li className={styles.member}>
            <a
              href="https://github.com/JJtheAndroid"
              target="_blank"
              rel="noreferrer"
            >
              Joel (Backend Developer)
            </a>
          </li>
          <li className={styles.member}>
            <a
              href="https://github.com/BlockchainDeveloper009"
              target="_blank"
              rel="noreferrer"
            >
              Harish (Full Stack Developer)
            </a>
          </li>
          <li className={styles.member}>
            <a
              href="https://github.com/levblanc"
              target="_blank"
              rel="noreferrer"
            >
              Nikko Luo (Full Stack Developer)
            </a>
          </li>
          <li className={styles.member}>
            <a
              href="https://github.com/AmadiMichael"
              target="_blank"
              rel="noreferrer"
            >
              Michaels (Backend Developer) - [ Initial phase ]
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className="pageTitle">Tech Stack</h2>
        <p className={styles.techStack}>
          <Image
            alt="Chainlink"
            width={120}
            height={28}
            src="https://img.shields.io/badge/chainlink-375bd2?style=for-the-badge&logo=chainlink"
          />
          <Image
            alt="Solidity"
            width={109}
            height={28}
            src="https://img.shields.io/badge/solidity-1E1E3F?style=for-the-badge&logo=solidity"
          />
          <Image
            alt="Hardhat"
            width={108}
            height={28}
            src="https://custom-icon-badges.demolab.com/badge/Hardhat-181A1F?style=for-the-badge&logo=hardhat"
          />
        </p>
        <p className={styles.techStack}>
          <Image
            alt="NextJS"
            width={98}
            height={28}
            src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
          />
          <Image
            alt="React"
            width={86}
            height={28}
            src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          />
          <Image
            alt="Javascript"
            width={127}
            height={28}
            src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          />
          <Image
            alt="Typescript"
            width={127}
            height={28}
            src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
          />
        </p>
        <p className={styles.techStack}>
          <Image
            alt="RainbowKit"
            width={132}
            height={28}
            src="https://custom-icon-badges.demolab.com/badge/Rainbowkit-032463?style=for-the-badge&logo=rainbow"
          />
          <Image
            alt="Wagmi"
            width={92}
            height={28}
            src="https://custom-icon-badges.demolab.com/badge/Wagmi-1C1B1B?style=for-the-badge&logo=wagmi"
          />
          <Image
            alt="MaterialUI"
            width={132}
            height={28}
            src="https://img.shields.io/badge/Material%20UI-0170FE.svg?style=for-the-badge&logo=MUI&logoColor=white"
          />
        </p>
      </div>
    </div>
  );
};

export default About;
