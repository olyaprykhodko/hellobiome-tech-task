import { Microbe } from './microbes';

interface ListProps {
  data: Microbe[];
}

export default function List({ data }: ListProps) {
  return (
    <ul className="microbes-list mt-6 sm:mt-8 space-y-3 overflow-x-auto">
      {data.map((item) => (
        <li
          key={item.id}
          className="whitespace-nowrap text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed"
        >
          <strong>{item.name} </strong>- {item.type} - {item.abundance}% -{' '}
          {item.role === 'pathogenic' ? (
            <strong className="text-pink-950">{item.role}</strong>
          ) : item.role === 'beneficial' ? (
            <strong className="text-gray-800">{item.role}</strong>
          ) : (
            item.role
          )}
        </li>
      ))}
    </ul>
  );
}
