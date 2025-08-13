import React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const cardContents = [
  {
    title: "公司使命",
    description:
      "赋能全球品牌创新增长，专注于消费品品牌年轻化为主旨，推动消费品企业实现年轻化转型。",
  },
  {
    title: "核心优势",
    description:
      "作为全球年轻化方法论的发起者，已成功帮助近500个全球品牌实现品牌年轻化战略定位。",
  },
  {
    title: "全球年轻化理论体系开创者",
    description:
      "BY是一家全球领先的品牌战略咨询机构，秉持以年轻化方法论为核心，致力于帮助全球知名消费品企业在不断变化的市场中保持竞争优势，并引领未来趋势。我们开发了一整套独特的品牌年轻化工具和罗盘，为企业提供产品年轻化创新解决方案。",
  },  
  {
    title: "愿景目标",
    description:
      "愿望一切陈旧的商业主体，都能跃上年轻化的飞船，实现品牌的持续创新与增长。",
  },
  {
    title: "15年专业经验",
    description:
      "年轻化——全球最佳商业迭代引擎。凭借15年的行业深耕，为7个全球中心提供专业服务。",
  },
]


const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
  index: number
}> = ({
  className = "",
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}
      className={cn(
        "relative border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
        "flex flex-col justify-between cursor-pointer transition-all duration-300",
        "hover:border-zinc-400 dark:hover:border-zinc-600",
        className
      )}
    >
      <CornerPlusIcons />
      {/* Content */}
      <div className="relative z-10 space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1.5"
    stroke="currentColor"
    className={`dark:text-white text-black size-6 bg-white dark:bg-zinc-950 rounded-full p-1 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function ByBentoCards() {
  return (
    <section className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800">
      <div className="mx-auto container py-16 px-4">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-black dark:text-white mb-4">
            关于我们
          </h2>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4 mb-12">
          <PlusCard {...cardContents[0]} index={0} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} index={1} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} index={2} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} index={3} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} index={4} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Section Footer Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-2xl ml-auto text-right px-4 mt-8 lg:-mt-20"
        >
          <h2 className="text-3xl md:text-5xl font-light text-black dark:text-white mb-4 leading-tight">
            专注年轻化战略。
            <br />
            引领品牌创新增长。
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            BY年轻化创新集团致力于为全球企业提供专业的品牌年轻化解决方案，通过独创的方法论体系，帮助品牌在快速变化的市场中保持活力与竞争力。
          </p>
        </motion.div>
      </div>
    </section>
  )
}