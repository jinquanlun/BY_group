import React from 'react'
import { ProcessTestimonialsColumn } from '@/components/ui/process-testimonials-column'
import type { ProcessStep } from '@/components/ui/process-testimonials-column'
import { motion } from "framer-motion";

const processSteps: ProcessStep[] = [
  {
    step: "市场调研分析",
    description: "深入了解目标市场的消费习惯、竞争环境和法规要求，为出海战略提供数据支撑。通过专业的市场研究方法，为企业制定精准的进入策略。"
  },
  {
    step: "品牌本地化策略",
    description: "根据当地文化特色和消费偏好，制定品牌本地化策略和传播方案。确保品牌信息能够有效传达给目标消费群体。"
  },
  {
    step: "渠道建设规划",
    description: "构建适合当地市场的销售渠道体系，包括线上线下全渠道布局。建立高效的分销网络和合作伙伴关系。"
  },
  {
    step: "营销推广执行",
    description: "执行全方位的营销推广活动，快速建立品牌知名度和市场影响力。整合多种营销资源，实现最大化的推广效果。"
  },
  {
    step: "运营优化管理",
    description: "持续监控和优化运营效果，根据市场反馈调整策略和执行方案。通过数据分析不断提升运营效率和市场表现。"
  },
  {
    step: "长期发展支持",
    description: "提供持续的战略指导和运营支持，确保品牌在海外市场的长期成功。建立可持续的发展机制和风险管控体系。"
  }
];

// Split into 2 columns (3 steps each)
const firstColumn = processSteps.slice(0, 3);
const secondColumn = processSteps.slice(3, 6);

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black my-20 relative">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-gray-300 dark:border-gray-700 py-2 px-5 rounded-lg bg-gray-50 dark:bg-zinc-800">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">出海流程</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black dark:text-white mb-6 leading-tight">
            专业出海服务流程
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[500px]">
            通过我们成熟的六步服务流程，为您的品牌出海之路提供全方位的专业支持和战略指导。
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <ProcessTestimonialsColumn 
            processSteps={firstColumn} 
            duration={15} 
            className="flex-shrink-0"
          />
          <ProcessTestimonialsColumn 
            processSteps={secondColumn} 
            className="hidden md:block flex-shrink-0" 
            duration={19} 
          />
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-light text-black dark:text-white mb-4 leading-tight">
            项目周期：6-12个月
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            完整的出海项目通常需要6-12个月时间，我们将根据具体的目标市场和业务需求制定详细的时间规划。
            采用阶段性交付模式，确保每个环节都能达到预期效果。
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection