--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2 (Debian 15.2-1.pgdg110+1)
-- Dumped by pg_dump version 15.2

-- Started on 2023-03-14 17:33:12

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

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 24612)
-- Name: team; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.team (
    id character varying(255) NOT NULL,
    name character varying(255),
    team_logo_url character varying(255)
);


ALTER TABLE public.team OWNER TO postgres;

--
-- TOC entry 3321 (class 0 OID 24612)
-- Dependencies: 215
-- Data for Name: team; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.team (id, name, team_logo_url) VALUES ('133772', 'Ajax', 'https://www.thesportsdb.com/images/media/team/badge/31lh1y1662316458.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133767', 'AZ Alkmaar', 'https://www.thesportsdb.com/images/media/team/badge/wtqwvv1473534757.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133757', 'Excelsior', 'https://www.thesportsdb.com/images/media/team/badge/bmbn9v1625172555.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('136191', 'FC Emmen', 'https://www.thesportsdb.com/images/media/team/badge/knwhs41532855745.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133762', 'FC Groningen', 'https://www.thesportsdb.com/images/media/team/badge/f36qnp1666107447.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133774', 'FC Twente', 'https://www.thesportsdb.com/images/media/team/badge/rsrxrt1473534783.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133764', 'FC Utrecht', 'https://www.thesportsdb.com/images/media/team/badge/yuhha71625167104.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133867', 'FC Volendam', 'https://www.thesportsdb.com/images/media/team/badge/rdouic1625167940.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133758', 'Feyenoord', 'https://www.thesportsdb.com/images/media/team/badge/uturtx1473534803.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('134264', 'Fortuna Sittard', 'https://www.thesportsdb.com/images/media/team/badge/6z9a051513777590.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('134304', 'Go Ahead Eagles', 'https://www.thesportsdb.com/images/media/team/badge/vuxxqy1473534811.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133760', 'NEC Nijmegen', 'https://www.thesportsdb.com/images/media/team/badge/qswrts1447595823.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133768', 'PSV Eindhoven', 'https://www.thesportsdb.com/images/media/team/badge/pph0v91594450688.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133765', 'RKC Waalwijk', 'https://www.thesportsdb.com/images/media/team/badge/11v54c1659096848.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('134303', 'SC Cambuur', 'https://www.thesportsdb.com/images/media/team/badge/b3rap31579463652.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133759', 'SC Heerenveen', 'https://www.thesportsdb.com/images/media/team/badge/surtsx1473534841.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133866', 'Sparta', 'https://www.thesportsdb.com/images/media/team/badge/upluv31586362224.png');
INSERT INTO public.team (id, name, team_logo_url) VALUES ('133770', 'Vitesse', 'https://www.thesportsdb.com/images/media/team/badge/wrptxp1473534864.png');
--
-- TOC entry 3178 (class 2606 OID 24618)
-- Name: team team_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.team
    ADD CONSTRAINT team_pkey PRIMARY KEY (id);


-- Completed on 2023-03-14 17:33:12

--
-- PostgreSQL database dump complete
--

