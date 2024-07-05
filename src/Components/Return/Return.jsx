import React from 'react';
import './Return.scss';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Return = () => {
  return (
    <>
      <div className="Return_link conteiner">
        <Link to={`/`}>Главная <AiOutlineRight /></Link>
        <Link to={`/return`}>Возврат</Link>
      </div>

      <div className="garanti conteiner">
        <h3>Возврат</h3>
        <div className="return_txt">
          <h3>Обмен и возврат по желанию покупателя</h3>
          <p>Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:
            Товар имеет первоначальный вид, имеется товарная кондиция;
            Товар имеет полную комплектацию, включая упаковочные материалы;
            Товар не имеет следов подключался и не имеет признаков монтажа;
            Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;
            Есть документ, подтверждающий покупку в нашем интернет-магазине.
            Для возврата товара необходимо привезти его к нам в офис.
            Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании оплачиваются клиентом.
            *В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера
          </p>
          <h3>Обмен и возврат по ошибке продавца</h3>
          <p>Причины обмена или возврата по ошибке продавца:
            Неполная комплектация товара
            Брак или дефект товара
            Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/
            Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно
          </p>
          <h3>Возврат денежных средств</h3>
          <p>Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.
          </p>
        </div>
      </div>
    </>
  );
}

export default Return;
