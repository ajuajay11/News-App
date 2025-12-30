import Style from "./title.module.css"


type TitleProps = {
  text: string;
}
export default function Title({text}:TitleProps) {
  return (
     <>
     <h1 className={`${Style.newsTitle} cursor mb-4 `}>{text}</h1>
     </>
  )
}