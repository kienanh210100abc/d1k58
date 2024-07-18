import { Package } from '@/types';

export const getPriceWithOptions = (pack: Package) => {
  if (!pack.options || pack.options.length === 0) return pack.price;
  const packsDefault = pack.options.filter(item => item.isDefault);
  if (!packsDefault.length) return pack.price;
  return packsDefault.reduce(
    (prev, cur) => prev + Number(cur.price),
    pack.price
  );
};
