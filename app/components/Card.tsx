import { TrendingUp } from "lucide-react";

interface CardProps {
      title: string;
      data: string;
      percentage: number;
      color: string;
}

export default function Card({ title, data, percentage, color }: CardProps) {
      return (
            <div className={`flex flex-col gap-2 p-6 bg-${color}-100 rounded-2xl`}>
                  <strong className="text-sm font-semibold">{title}</strong>
                  <div className="flex items-center gap-8">
                        <strong className="text-2xl font-semibold">
                              {data}
                        </strong>
                        <div className="flex items-center gap-1">
                              <span>{percentage}%</span>
                              <TrendingUp size={16}/>
                        </div>
                  </div>
            </div>
      );
}
