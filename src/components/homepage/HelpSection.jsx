import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4">
      <div
        className={clsx(
          'mx-auto max-w-7xl bg-white p-4 py-10 text-black dark:bg-darkblue dark:text-white lg:p-24 lg:py-20 border border-[#EDF2F9] dark:border-gray-600',
          className
        )}
         style={{
    borderWidth: '1px',
    borderRadius: '8px'
  }}      >
        <h2 className="mb-12 text-center lg:text-5xl">
          Как мы можем помочь?
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-darkerblue">

            <h3 className="my-3">Премиальная поддержка</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
            Сотрудничайте с создателями Recloud, чтобы получать наилучшую поддержку на каждом этапе.
            </p>
            <Link
              href="https://blog.recloud.tech/product-category/gml-pro/"
              className="text-primary-00 dark:text-primary-100"
            >
              Изучайте подписки &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-darkerblue">

            <h3 className="my-3">Услуги по разработке</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
               Мы готовы помочь вам с модернизацией приложений, созданием пользовательских элементов управления или добавлением дополнительных функций.
            </p>
            <Link
              href="https://recloud.tech/cost-calculator"
              className="text-primary-500 dark:text-primary-100"
            >
              Узнать больше &rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-darkerblue">
            <h3 className="my-3">FAQs</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Ознакомьтесь с нашими часто задаваемыми вопросами, чтобы найти ответы на наиболее популярные из них.
            </p>
            <Link href="/docs/gml-launcher/faq/" className="text-primary-500 dark:text-primary-100">
              View FAQs &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
