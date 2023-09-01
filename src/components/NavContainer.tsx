import Image from "next/image";
import logo from "@/assets/logo.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { NavContainerStyle } from "@/styles/components/NavContainerStyle";

export default function NavContainer() {
  return (
    <NavContainerStyle>
      <div>
        <div className="contatc">
          <p>Siga-nos!</p>
          <Link href={""}>
            <Icon icon="ic:baseline-facebook" width="24" height="24" />
          </Link>
          <Link href={""}>
            <Icon icon="ri:instagram-fill" width="24" height="24" />
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="O que você está procurando?" />
        </div>
      </div>
      <Link href={'/'}>
        <Image src={logo.src} height={210} width={210} quality={100} alt="" />
      </Link>
      <div>
        <div className="assistance">
          <div>
            <Icon icon="tabler:packge-export" width="24" height="24" />
            <p>Meus Pedidos</p>
          </div>
          <div>
            <Icon icon="uil:whatsapp" width="24" height="24" />
            <p>Atendimentos : (xx) xxxx-xxxx</p>
          </div>
        </div>
        <div className="account">
          <div>
            <Icon icon="tabler:star" width="32" height="32" />
            <div>
              <p>LISTA DE</p>
              <strong>DESEJOS</strong>
            </div>
          </div>
          <div>
            <Icon icon="fluent:person-12-regular" width="32" height="32" />
            <div>
              <p>ACESSAR</p>
              <strong>MINHA CONTA</strong>
            </div>
          </div>
          <div>
            <Icon icon="mdi:cart-outline" width="32" height="32" />
            <span>0</span>
          </div>
        </div>
      </div>
    </NavContainerStyle>
  );
}
