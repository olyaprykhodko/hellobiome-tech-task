import { Microbe } from './microbes';

interface ListProps {
  data: Microbe[];
}

export default function List({ data }: ListProps) {
  return (
    <ul className="mt-10">
      {data.map((item) => (
        <li key={item.id} className="pb-5">
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
