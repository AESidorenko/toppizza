--
-- PostgreSQL database dump
--

-- Dumped from database version 11.9
-- Dumped by pg_dump version 11.9

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: cart; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    customer_id integer,
    uuid character varying(255) NOT NULL,
    updated_at timestamp(0) without time zone NOT NULL
);


ALTER TABLE public.cart OWNER TO main;

--
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: main
--

CREATE SEQUENCE public.cart_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_id_seq OWNER TO main;

--
-- Name: cart_item; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public.cart_item (
    id integer NOT NULL,
    menu_item_id integer NOT NULL,
    cart_id integer NOT NULL,
    count integer NOT NULL
);


ALTER TABLE public.cart_item OWNER TO main;

--
-- Name: cart_item_id_seq; Type: SEQUENCE; Schema: public; Owner: main
--

CREATE SEQUENCE public.cart_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_item_id_seq OWNER TO main;

--
-- Name: doctrine_migration_versions; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public.doctrine_migration_versions (
    version character varying(191) NOT NULL,
    executed_at timestamp(0) without time zone DEFAULT NULL::timestamp without time zone,
    execution_time integer
);


ALTER TABLE public.doctrine_migration_versions OWNER TO main;

--
-- Name: menu_item; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public.menu_item (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) DEFAULT NULL::character varying,
    image_thumbnail character varying(255) NOT NULL,
    image_fullsize character varying(255) NOT NULL,
    price_euro numeric(5,2) NOT NULL,
    is_active boolean NOT NULL
);


ALTER TABLE public.menu_item OWNER TO main;

--
-- Name: menu_item_id_seq; Type: SEQUENCE; Schema: public; Owner: main
--

CREATE SEQUENCE public.menu_item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.menu_item_id_seq OWNER TO main;

--
-- Name: order; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."order" (
    id integer NOT NULL,
    customer_id integer,
    updated_at timestamp(0) without time zone NOT NULL,
    customer_phone character varying(32) NOT NULL,
    customer_address character varying(255) NOT NULL,
    customer_name character varying(255) NOT NULL,
    currency_used character varying(5) NOT NULL,
    price numeric(5,2) NOT NULL,
    delivery_price numeric(5,2) NOT NULL,
    usd_rate numeric(5,2) NOT NULL,
    idempotency_key character varying(20) NOT NULL
);


ALTER TABLE public."order" OWNER TO main;

--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: main
--

CREATE SEQUENCE public.order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_id_seq OWNER TO main;

--
-- Name: order_items; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public.order_items (
    id integer NOT NULL,
    order_data_id integer NOT NULL,
    menu_item_id integer,
    price_euro numeric(5,2) NOT NULL,
    count integer NOT NULL
);


ALTER TABLE public.order_items OWNER TO main;

--
-- Name: order_items_id_seq; Type: SEQUENCE; Schema: public; Owner: main
--

CREATE SEQUENCE public.order_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.order_items_id_seq OWNER TO main;

--
-- Name: user; Type: TABLE; Schema: public; Owner: main
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    username character varying(180) NOT NULL,
    roles json NOT NULL,
    password character varying(255) NOT NULL,
    phone character varying(32) NOT NULL,
    address character varying(255) NOT NULL,
    name character varying(32) NOT NULL
);


ALTER TABLE public."user" OWNER TO main;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: main
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO main;

--
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public.cart (id, customer_id, uuid, updated_at) FROM stdin;
\.


--
-- Data for Name: cart_item; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public.cart_item (id, menu_item_id, cart_id, count) FROM stdin;
\.


--
-- Data for Name: doctrine_migration_versions; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public.doctrine_migration_versions (version, executed_at, execution_time) FROM stdin;
DoctrineMigrations\\Version20200815123208	2020-08-23 23:26:35	45
DoctrineMigrations\\Version20200815125421	2020-08-23 23:26:35	12
DoctrineMigrations\\Version20200815155345	2020-08-23 23:26:35	15
DoctrineMigrations\\Version20200815161208	2020-08-23 23:26:35	16
DoctrineMigrations\\Version20200815162825	2020-08-23 23:26:35	60
DoctrineMigrations\\Version20200815163135	2020-08-23 23:26:36	2
DoctrineMigrations\\Version20200816161951	2020-08-23 23:26:36	1
DoctrineMigrations\\Version20200816163136	2020-08-23 23:26:36	1
DoctrineMigrations\\Version20200816164454	2020-08-23 23:26:36	1
DoctrineMigrations\\Version20200822142428	2020-08-23 23:26:36	1
DoctrineMigrations\\Version20200823201738	2020-08-23 23:26:36	1
\.


--
-- Data for Name: menu_item; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public.menu_item (id, title, description, image_thumbnail, image_fullsize, price_euro, is_active) FROM stdin;
11	Menu item 0	Description for menu item 0	menu_item_0_thumbnail.jpg	menu_item_0_fullsize.jpg	100.00	t
12	Menu item 1	Description for menu item 1	menu_item_1_thumbnail.jpg	menu_item_1_fullsize.jpg	101.00	t
13	Menu item 2	Description for menu item 2	menu_item_2_thumbnail.jpg	menu_item_2_fullsize.jpg	102.00	t
14	Menu item 3	Description for menu item 3	menu_item_3_thumbnail.jpg	menu_item_3_fullsize.jpg	103.00	t
15	Menu item 4	Description for menu item 4	menu_item_4_thumbnail.jpg	menu_item_4_fullsize.jpg	104.00	t
16	Menu item 5	Description for menu item 5	menu_item_5_thumbnail.jpg	menu_item_5_fullsize.jpg	105.00	t
17	Menu item 6	Description for menu item 6	menu_item_6_thumbnail.jpg	menu_item_6_fullsize.jpg	106.00	t
18	Menu item 7	Description for menu item 7	menu_item_7_thumbnail.jpg	menu_item_7_fullsize.jpg	107.00	t
19	Menu item 8	Description for menu item 8	menu_item_8_thumbnail.jpg	menu_item_8_fullsize.jpg	108.00	t
20	Menu item 9	Description for menu item 9	menu_item_9_thumbnail.jpg	menu_item_9_fullsize.jpg	109.00	t
\.


--
-- Data for Name: order; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."order" (id, customer_id, updated_at, customer_phone, customer_address, customer_name, currency_used, price, delivery_price, usd_rate, idempotency_key) FROM stdin;
\.


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public.order_items (id, order_data_id, menu_item_id, price_euro, count) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: main
--

COPY public."user" (id, username, roles, password, phone, address, name) FROM stdin;
2	user1	["ROLE_REGISTERED_CUSTOMER"]	$argon2id$v=19$m=65536,t=4,p=1$IyAp7yGFjzuM1xGXOh272w$W/zyr5Xg7DVpz4Xi/fR3f/VBmTur6zGutlWylBgR3e4	+1 (123) 456 789	Baker st, 221b	
\.


--
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: main
--

SELECT pg_catalog.setval('public.cart_id_seq', 1, false);


--
-- Name: cart_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: main
--

SELECT pg_catalog.setval('public.cart_item_id_seq', 1, false);


--
-- Name: menu_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: main
--

SELECT pg_catalog.setval('public.menu_item_id_seq', 20, true);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: main
--

SELECT pg_catalog.setval('public.order_id_seq', 1, false);


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: main
--

SELECT pg_catalog.setval('public.order_items_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: main
--

SELECT pg_catalog.setval('public.user_id_seq', 2, true);


--
-- Name: cart_item cart_item_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT cart_item_pkey PRIMARY KEY (id);


--
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);


--
-- Name: doctrine_migration_versions doctrine_migration_versions_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.doctrine_migration_versions
    ADD CONSTRAINT doctrine_migration_versions_pkey PRIMARY KEY (version);


--
-- Name: menu_item menu_item_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.menu_item
    ADD CONSTRAINT menu_item_pkey PRIMARY KEY (id);


--
-- Name: order_items order_items_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_pkey PRIMARY KEY (id);


--
-- Name: order order_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: idx_62809db09ab44fe0; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX idx_62809db09ab44fe0 ON public.order_items USING btree (menu_item_id);


--
-- Name: idx_62809db0c18f0877; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX idx_62809db0c18f0877 ON public.order_items USING btree (order_data_id);


--
-- Name: idx_f0fe25271ad5cdbf; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX idx_f0fe25271ad5cdbf ON public.cart_item USING btree (cart_id);


--
-- Name: idx_f0fe25279ab44fe0; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX idx_f0fe25279ab44fe0 ON public.cart_item USING btree (menu_item_id);


--
-- Name: idx_f52993989395c3f3; Type: INDEX; Schema: public; Owner: main
--

CREATE INDEX idx_f52993989395c3f3 ON public."order" USING btree (customer_id);


--
-- Name: uniq_8d93d649f85e0677; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX uniq_8d93d649f85e0677 ON public."user" USING btree (username);


--
-- Name: uniq_ba388b79395c3f3; Type: INDEX; Schema: public; Owner: main
--

CREATE UNIQUE INDEX uniq_ba388b79395c3f3 ON public.cart USING btree (customer_id);


--
-- Name: order_items fk_62809db09ab44fe0; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT fk_62809db09ab44fe0 FOREIGN KEY (menu_item_id) REFERENCES public.menu_item(id);


--
-- Name: order_items fk_62809db0c18f0877; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT fk_62809db0c18f0877 FOREIGN KEY (order_data_id) REFERENCES public."order"(id);


--
-- Name: cart fk_ba388b79395c3f3; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT fk_ba388b79395c3f3 FOREIGN KEY (customer_id) REFERENCES public."user"(id);


--
-- Name: cart_item fk_f0fe25271ad5cdbf; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT fk_f0fe25271ad5cdbf FOREIGN KEY (cart_id) REFERENCES public.cart(id);


--
-- Name: cart_item fk_f0fe25279ab44fe0; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public.cart_item
    ADD CONSTRAINT fk_f0fe25279ab44fe0 FOREIGN KEY (menu_item_id) REFERENCES public.menu_item(id);


--
-- Name: order fk_f52993989395c3f3; Type: FK CONSTRAINT; Schema: public; Owner: main
--

ALTER TABLE ONLY public."order"
    ADD CONSTRAINT fk_f52993989395c3f3 FOREIGN KEY (customer_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

